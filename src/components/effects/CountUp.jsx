import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Animated number counter that counts up when scrolled into view.
 *
 * Parses values like "1100+", "50M+", "4.9★", "98%", "$500M+", "48hr" etc.
 * and animates only the numeric portion, preserving the prefix/suffix.
 */
export default function CountUp({ value, duration = 1800, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;

    // Extract numeric portion (handles decimals)
    const match = String(value).match(/(-?\d*\.?\d+)/);
    if (!match) return;

    const numeric = parseFloat(match[1]);
    if (!Number.isFinite(numeric)) return;

    const prefix = String(value).slice(0, match.index);
    const suffix = String(value).slice(match.index + match[1].length);
    const isDecimal = match[1].includes(".");
    const decimals = isDecimal ? match[1].split(".")[1].length : 0;

    let start;
    let frame;
    const step = (t) => {
      if (start === undefined) start = t;
      const elapsed = t - start;
      const progress = Math.min(1, elapsed / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numeric * eased;
      const formatted = isDecimal ? current.toFixed(decimals) : Math.round(current).toString();
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
