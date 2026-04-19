import { useMemo, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Magnetic button that subtly follows the cursor on hover.
 * Accepts `as` prop to render as any element (e.g. Link, a, button).
 * Passes through all other props.
 *
 * Fixes:
 *  - Memoizes `motion.create(Component)` so it isn't rebuilt each render (prevented clicks landing cleanly).
 *  - Suspends magnetism on press so the button can't slide out from under the cursor mid-click.
 *  - Disables magnetism on touch / coarse pointers (no hover → no benefit, only jitter).
 */
export default function MagneticButton({
  as: Component = "button",
  strength = 0.25,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(true);
  const pressingRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const apply = () => setEnabled(!mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  const MotionComp = useMemo(() => motion.create(Component), [Component]);

  const reset = () => setOffset({ x: 0, y: 0 });

  const handleMove = (e) => {
    if (!enabled || pressingRef.current) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setOffset({ x: (e.clientX - cx) * strength, y: (e.clientY - cy) * strength });
  };

  const handlePressStart = () => {
    pressingRef.current = true;
    reset();
  };

  const handlePressEnd = () => {
    pressingRef.current = false;
  };

  return (
    <MotionComp
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onPointerDown={handlePressStart}
      onPointerUp={handlePressEnd}
      onPointerCancel={handlePressEnd}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 250, damping: 22, mass: 0.5 }}
      className={className}
      {...rest}
    >
      {children}
    </MotionComp>
  );
}
