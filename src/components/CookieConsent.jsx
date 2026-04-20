import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check } from "lucide-react";

const STORAGE_KEY = "mershil-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        // Defer showing until after first paint so it doesn't block LCP
        const schedule = window.requestIdleCallback || ((cb) => setTimeout(cb, 1200));
        schedule(() => setVisible(true), { timeout: 2500 });
      }
    } catch {
      // localStorage blocked — show anyway
      setVisible(true);
    }
  }, []);

  const persist = (choice) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, at: new Date().toISOString() })
      );
    } catch {
      // ignore
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 24 }}
          className="fixed bottom-0 left-0 right-0 z-[9995] px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none"
        >
          <div className="max-w-5xl mx-auto pointer-events-auto">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#0a1628]/95 via-[#0d1b2e]/95 to-[#0a1628]/95 backdrop-blur-xl border border-blue-400/20 shadow-2xl shadow-black/50 p-5 sm:p-6">
              <button
                onClick={() => persist("dismissed")}
                aria-label="Close cookie banner"
                className="absolute top-3 right-3 w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition"
              >
                <X size={16} />
              </button>

              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center pr-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-blue-300" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-1">
                    We use cookies to improve your experience
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    We use essential cookies to make this site work and analytics cookies to
                    understand how you use it.{" "}
                    <button
                      onClick={() => setExpanded((v) => !v)}
                      className="text-blue-300 hover:text-blue-200 underline underline-offset-2 transition"
                    >
                      {expanded ? "Hide details" : "Learn more"}
                    </button>
                  </p>

                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-3 space-y-1.5 text-xs text-white/50">
                          <li>• <span className="text-white/70 font-semibold">Essential</span> — required for the site to function.</li>
                          <li>• <span className="text-white/70 font-semibold">Analytics</span> — anonymous usage metrics so we can improve the product.</li>
                          <li>• <span className="text-white/70 font-semibold">Marketing</span> — lead-capture attribution (only if you fill a form).</li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto flex-shrink-0">
                  <button
                    onClick={() => persist("rejected")}
                    className="order-2 sm:order-1 px-5 py-2.5 rounded-xl text-sm font-semibold text-white/70 hover:text-white border border-white/15 hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.06] transition"
                  >
                    Reject all
                  </button>
                  <button
                    onClick={() => persist("accepted")}
                    className="order-1 sm:order-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/40 flex items-center justify-center gap-2 transition"
                  >
                    <Check size={15} /> Accept all
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
