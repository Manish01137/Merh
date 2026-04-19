import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Word-by-word reveal animation. Wrap any heading text in <TextReveal>.
 * Preserves React children (including spans for colored accents).
 */
export default function TextReveal({ children, className = "", stagger = 0.06, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Convert children into a flat list of word tokens with their parent styling
  const tokens = [];
  const walk = (node, parentProps = null) => {
    if (typeof node === "string") {
      node.split(/(\s+)/).forEach((part) => {
        if (part) tokens.push({ text: part, parentProps });
      });
    } else if (Array.isArray(node)) {
      node.forEach((child) => walk(child, parentProps));
    } else if (node && node.props) {
      // Element — take its children and propagate className
      walk(node.props.children, { className: node.props.className, style: node.props.style });
    }
  };
  walk(children);

  const variants = {
    hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  let wordIndex = 0;
  return (
    <span ref={ref} className={className} style={{ display: "inline-block" }}>
      {tokens.map((tok, i) => {
        if (/^\s+$/.test(tok.text)) return <span key={i}>{tok.text}</span>;
        const idx = wordIndex++;
        return (
          <motion.span
            key={i}
            custom={idx}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            style={{ display: "inline-block", willChange: "transform, opacity, filter", ...(tok.parentProps?.style || {}) }}
            className={tok.parentProps?.className}
          >
            {tok.text}
          </motion.span>
        );
      })}
    </span>
  );
}
