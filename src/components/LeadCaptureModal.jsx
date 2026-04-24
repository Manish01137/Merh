import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, ArrowRight } from "lucide-react";
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
  dismissDays: 7,
  remindHours: 24,
  submittedDays: 30,
};

const TIME_MS = 40 * 1000;      // 40 s on page
const SCROLL_PCT = 0.5;          // 50 % scroll depth

const SUPPRESSED_PATHS = ["/contact"];

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

  // Reset trigger watchers on route change & respect suppressed paths
  useEffect(() => {
    // Close if the user navigates (avoids stale modal after page change)
    setShow(false);
    setSubmitted(false);

    if (SUPPRESSED_PATHS.some((p) => location.pathname.startsWith(p))) return;
    if (!eligibleToShow()) return;

    // Respect reduced motion preference
    if (typeof window !== "undefined" && window.matchMedia) {
      const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (rm.matches) return;
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
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-6 text-white relative">
              <button
                onClick={dismiss}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition"
                aria-label="Dismiss"
              >
                <X size={18} />
              </button>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center backdrop-blur-sm overflow-hidden">
                  <img
                    src={logoWhite}
                    alt=""
                    width="24"
                    height="24"
                    loading="lazy"
                    decoding="async"
                    className="w-6 h-6 object-contain"
                    style={{ filter: "invert(1) brightness(2)", mixBlendMode: "screen" }}
                  />
                </div>
                <span className="text-white font-extrabold text-sm tracking-tight">
                  Mershil<span className="text-blue-300">Tech</span>
                </span>
              </div>
              <h2 className="text-xl font-bold mb-1">Let's Build Something Great</h2>
              <p className="text-blue-100 text-sm">
                A 30-minute Sydney-based consultation. No pressure, no commitment.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-3">
                  <ArrowRight size={24} className="text-blue-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Thanks — we'll be in touch</h3>
                <p className="text-sm text-gray-500">Check your inbox in the next 30 minutes.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-3">
                <input
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                  placeholder="Email Address"
                />
                <input
                  type="tel"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                  placeholder="Phone Number (optional)"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition flex items-center justify-center gap-2"
                >
                  <Phone size={16} /> Get Free Consultation
                </button>
                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={remindLater}
                    className="text-gray-400 text-xs hover:text-gray-600 transition"
                  >
                    Remind me tomorrow
                  </button>
                  <button
                    type="button"
                    onClick={dismiss}
                    className="text-gray-400 text-xs hover:text-gray-600 transition"
                  >
                    No thanks
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
