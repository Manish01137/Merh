import { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Magnetic button that subtly follows the cursor on hover.
 * Accepts `as` prop to render as any element (e.g. Link, a, button).
 * Passes through all other props.
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

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setOffset({ x: (e.clientX - cx) * strength, y: (e.clientY - cy) * strength });
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  const MotionComp = motion(Component);

  return (
    <MotionComp
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 250, damping: 18, mass: 0.4 }}
      className={className}
      {...rest}
    >
      <motion.span
        animate={{ x: offset.x * 0.35, y: offset.y * 0.35 }}
        transition={{ type: "spring", stiffness: 250, damping: 18, mass: 0.4 }}
        style={{ display: "inline-flex", alignItems: "center", gap: "inherit" }}
      >
        {children}
      </motion.span>
    </MotionComp>
  );
}
