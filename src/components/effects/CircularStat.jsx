import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Circular progress ring + animated counter.
 * Fills from 0% to `fillPercent` as the stat counts up when scrolled into view.
 *
 * Pass `fillPercent` to control how much the ring fills (0-100).
 * For numeric stats like "1100+" or "50M+" where no natural percentage exists,
 * fillPercent is treated as a visual completeness indicator.
 */
export default function CircularStat({
  value,
  label,
  fillPercent = 100,
  color = "#3b82f6",
  size = 140,
  stroke = 6,
  duration = 1800,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const match = String(value).match(/(-?\d*\.?\d+)/);
    const numeric = match ? parseFloat(match[1]) : null;
    const prefix = match ? String(value).slice(0, match.index) : "";
    const suffix = match ? String(value).slice(match.index + match[1].length) : "";
    const isDecimal = match && match[1].includes(".");
    const decimals = isDecimal ? match[1].split(".")[1].length : 0;

    let start;
    let frame;
    const step = (t) => {
      if (start === undefined) start = t;
      const elapsed = t - start;
      const p = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - p, 3);

      setProgress(eased * (fillPercent / 100));

      if (numeric != null) {
        const current = numeric * eased;
        const formatted = isDecimal ? current.toFixed(decimals) : Math.round(current).toString();
        setDisplay(`${prefix}${formatted}${suffix}`);
      }

      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, fillPercent]);

  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={stroke}
            fill="none"
          />
          {/* Progress ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              transition: "stroke-dashoffset 50ms linear",
              filter: `drop-shadow(0 0 8px ${color}80)`,
            }}
          />
        </svg>
        {/* Inner content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-white font-extrabold text-2xl md:text-3xl tabular-nums leading-none">
            {display}
          </span>
        </div>
      </div>
      <p className="text-white/60 text-xs md:text-sm font-medium mt-3 text-center">{label}</p>
    </div>
  );
}
