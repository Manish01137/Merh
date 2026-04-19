import logoWhite from "../../assets/02_Logo_Reversed_White_3600x3600.png";

/**
 * Subtle tiled-monogram pattern background for dark sections.
 * Renders the MershilTech M logo as a repeating background pattern
 * with controlled opacity — creates a premium branded texture.
 *
 * Props:
 *   opacity  — 0-1, defaults to 0.05 (very subtle)
 *   size     — tile size in px, defaults to 110
 *   rotate   — optional rotation degrees (gives a dynamic feel)
 *   className — extra classes for positioning
 */
export default function MonogramPattern({
  opacity = 0.05,
  size = 110,
  rotate = 0,
  className = "",
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage: `url(${logoWhite})`,
        backgroundRepeat: "repeat",
        backgroundSize: `${size}px ${size}px`,
        opacity,
        filter: "invert(1) brightness(2)",
        mixBlendMode: "screen",
        transform: rotate ? `rotate(${rotate}deg) scale(1.3)` : undefined,
        transformOrigin: "center",
      }}
    />
  );
}
