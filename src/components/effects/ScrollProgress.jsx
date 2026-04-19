import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9998] origin-left pointer-events-none"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #1d4ed8, #3b82f6, #06b6d4)",
        boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
      }}
    />
  );
}
