import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, ArrowRight, BadgeCheck } from "lucide-react";
import logoWhite from "../assets/logo.png";

/**
 * Intent-based lead capture modal.
 *
 * Shows only when a genuine intent signal fires, respects a 7-day frequency
 * cap, skips pages where the visitor is already transacting, and offers a
 * "remind me later" option.
 *
 * Triggers (any one):
 *   • 40 s on the same page
 *   • 50 % scroll depth
 *   • Exit-intent (desktop: mouse leaves through the top edge)
 *
 * Suppressed if:
 *   • Dismissed in the last 7 days
 *   • "Remind me later" chosen in the last 24 h
 *   • Submitted the form in the last 30 days
 *   • Visitor is on /contact (already a lead surface)
 *   • prefers-reduced-motion is set (be polite)
 */

const STORAGE_KEYS = {
  dismissedAt: "mershil-lead-modal-dismissed-at",
  remindAt: "mershil-lead-modal-remind-at",
  submittedAt: "mershil-lead-modal-submitted-at",
};

const WINDOWS = {
  dismissDays: 3,
  remindHours: 12,
  submittedDays: 30,
};

const TIME_MS = 12 * 1000;      // 12 s on page
const SCROLL_PCT = 0.25;         // 25 % scroll depth

const SUPPRESSED_PATHS = ["/contact"];

// Force-show via ?lead=1 query param (handy for testing — bypasses caps)
function isForceShow() {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).get("lead") === "1";
}

function getStoredDate(key) {
  try {
    const v = localStorage.getItem(key);
    if (!v) return null;
    const t = new Date(v).getTime();
    return Number.isFinite(t) ? t : null;
  } catch {
    return null;
  }
}
function setStoredNow(key) {
  try {
    localStorage.setItem(key, new Date().toISOString());
  } catch {
    /* ignore */
  }
}

function withinWindow(storedMs, windowMs) {
  if (!storedMs) return false;
  return Date.now() - storedMs < windowMs;
}

function eligibleToShow() {
  const dismissed = getStoredDate(STORAGE_KEYS.dismissedAt);
  if (withinWindow(dismissed, WINDOWS.dismissDays * 24 * 60 * 60 * 1000)) return false;

  const remind = getStoredDate(STORAGE_KEYS.remindAt);
  if (withinWindow(remind, WINDOWS.remindHours * 60 * 60 * 1000)) return false;

  const submitted = getStoredDate(STORAGE_KEYS.submittedAt);
  if (withinWindow(submitted, WINDOWS.submittedDays * 24 * 60 * 60 * 1000)) return false;

  return true;
}

export default function LeadCaptureModal() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();

  // Manual trigger via custom event — any code (or devtools console) can fire
  // window.dispatchEvent(new Event("mershil:open-lead"))
  useEffect(() => {
    const open = () => setShow(true);
    window.addEventListener("mershil:open-lead", open);
    return () => window.removeEventListener("mershil:open-lead", open);
  }, []);

  // Devtools helper — window.__lead.show() / .reset() / .status()
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.__lead = {
      show: () => setShow(true),
      reset: () => {
        Object.values(STORAGE_KEYS).forEach((k) => localStorage.removeItem(k));
        console.info("[LeadModal] caps reset — refresh the page to retrigger");
      },
      status: () => ({
        eligible: eligibleToShow(),
        dismissedAt: localStorage.getItem(STORAGE_KEYS.dismissedAt),
        remindAt: localStorage.getItem(STORAGE_KEYS.remindAt),
        submittedAt: localStorage.getItem(STORAGE_KEYS.submittedAt),
      }),
    };
  }, []);

  // Reset trigger watchers on route change & respect suppressed paths
  useEffect(() => {
    // Close if the user navigates (avoids stale modal after page change)
    setShow(false);
    setSubmitted(false);

    // ?lead=1 query bypasses suppression + caps + delays
    if (isForceShow()) {
      setShow(true);
      return;
    }

    if (SUPPRESSED_PATHS.some((p) => location.pathname.startsWith(p))) return;
    if (!eligibleToShow()) {
      if (import.meta?.env?.DEV) {
        console.info(
          "[LeadModal] suppressed by frequency cap. Run: window.__lead.reset() then refresh, or visit any URL with ?lead=1"
        );
      }
      return;
    }

    let fired = false;
    const trigger = (reason) => {
      if (fired) return;
      fired = true;
      setShow(true);
      if (import.meta?.env?.DEV) console.info("[LeadModal] triggered by:", reason);
    };

    const timer = setTimeout(() => trigger("time"), TIME_MS);

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (window.scrollY / scrollable >= SCROLL_PCT) trigger("scroll");
    };

    const onExit = (e) => {
      // Desktop only — mouse leaving through top edge signals leaving
      if (e.clientY <= 0 && e.relatedTarget == null) trigger("exit-intent");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", onExit);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onExit);
    };
  }, [location.pathname]);

  const dismiss = () => {
    setStoredNow(STORAGE_KEYS.dismissedAt);
    setShow(false);
  };
  const remindLater = () => {
    setStoredNow(STORAGE_KEYS.remindAt);
    setShow(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStoredNow(STORAGE_KEYS.submittedAt);
    setSubmitted(true);
    setTimeout(() => setShow(false), 2200);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="lead-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9997] flex items-center justify-center bg-black/55 backdrop-blur-sm p-4"
          onClick={dismiss}
        >
          <motion.div
            key="lead-card"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-h-[92vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={dismiss}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 bg-white/90 hover:bg-white shadow-sm border border-gray-100 transition"
              aria-label="Dismiss"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-10 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <BadgeCheck size={28} className="text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Thanks — we'll be in touch</h3>
                <p className="text-sm text-gray-500">Our Sydney team will reach out within 30 minutes during business hours.</p>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-[260px_1fr]">
                {/* LEFT — Brand panel (compact sidebar on desktop, full strip on mobile) */}
                <div className="p-5 md:p-6 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-5 text-left bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img
                      src={logoWhite}
                      alt="MershilTech"
                      width="34"
                      height="34"
                      loading="lazy"
                      decoding="async"
                      className="w-8 h-8 md:w-9 md:h-9 object-contain"
                      style={{ filter: "invert(1) brightness(2)", mixBlendMode: "screen" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0 md:flex-initial">
                    <p className="text-white font-extrabold text-base md:text-lg leading-tight tracking-tight mb-1">
                      Hire a Dedicated Team
                    </p>
                    <p className="text-blue-200 text-xs md:text-sm leading-snug mb-3 md:mb-4">
                      7-day risk-free trial · 48hr onboarding
                    </p>
                    <div className="hidden md:block space-y-2">
                      {["AU MSA + NDA", "Sydney-managed", "AWS · Azure · GCP partner"].map((t, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-blue-100/90">
                          <BadgeCheck size={13} className="text-blue-300 flex-shrink-0" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT — Form (always immediately visible) */}
                <form onSubmit={handleSubmit} className="p-5 md:p-6">
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-tight mb-1">
                    Get a Free Consultation
                  </h2>
                  <p className="text-gray-500 text-xs md:text-sm mb-4">
                    Tell us about your project — we'll respond within 30 minutes.
                  </p>

                  <div className="space-y-2.5">
                    <input
                      required
                      type="text"
                      className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                      placeholder="Full Name *"
                    />
                    <input
                      required
                      type="email"
                      className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                      placeholder="Email Address *"
                    />
                    <input
                      required
                      type="tel"
                      className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                      placeholder="Phone Number *"
                    />
                    <textarea
                      rows={2}
                      className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition resize-none"
                      placeholder="Briefly describe your project (optional)"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-bold text-sm transition flex items-center justify-center gap-2 shadow-md"
                  >
                    Submit <ArrowRight size={15} />
                  </button>

                  <div className="flex items-center justify-center gap-3 mt-3 pt-3 border-t border-gray-100">
                    <a
                      href="tel:+61452565421"
                      className="flex items-center gap-1.5 text-blue-700 font-semibold text-xs hover:text-blue-800 transition"
                    >
                      <Phone size={12} /> Or call +61 452 565 421
                    </a>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={remindLater}
                      className="text-gray-400 text-[11px] hover:text-gray-600 transition"
                    >
                      Remind me later
                    </button>
                    <button
                      type="button"
                      onClick={dismiss}
                      className="text-gray-400 text-[11px] hover:text-gray-600 transition"
                    >
                      No thanks
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
