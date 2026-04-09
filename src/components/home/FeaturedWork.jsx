import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "TruuBlue",
    cat: "Dating App · AI-Powered",
    desc: "Progressive dating app using AI matching. Built with React Native, achieving 4.9★ App Store rating and 50K+ downloads in 3 months.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    tags: ["React Native", "AI/ML", "Firebase"],
    stat: "50K+", statLabel: "Downloads",
    accent: "#3b82f6",
  },
  {
    title: "HomesBasket",
    cat: "On-Demand · Multi-Service",
    desc: "On-demand delivery platform serving food, groceries, and medicines across Miami with real-time GPS tracking.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Node.js", "React", "AWS"],
    stat: "1M+", statLabel: "Deliveries",
    accent: "#06b6d4",
  },
  {
    title: "Whirlpool Digital",
    cat: "Enterprise · B2B Platform",
    desc: "Enterprise catalog management with real-time inventory and multi-region dealer portal for a global appliance giant.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    tags: ["React", "Microservices", "Azure"],
    stat: "40%", statLabel: "Cost Reduction",
    accent: "#64748b",
  },
  {
    title: "WFFA Sports",
    cat: "Sports Tech · Real-Time",
    desc: "Live fantasy football platform with real-time scoring, AI recommendations, and 100K+ active users.",
    img: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80",
    tags: ["WebSockets", "Python", "Redis"],
    stat: "100K+", statLabel: "Active Users",
    accent: "#7c3aed",
  },
];

function Card({ project, index, total, scrollProgress }) {
  // Each card occupies 1/total of the scroll range
  const start = index / total;
  const end = (index + 1) / total;

  // How far through THIS card's segment we are (0 → 1)
  const local = Math.max(0, Math.min(1, (scrollProgress - start) / (end - start)));

  // Card slides up and scales down as next card comes in
  // Only animate OUT (not the last card)
  const isLast = index === total - 1;
  const translateY = isLast ? 0 : -(local * 100);     // slide up %
  const scale = isLast ? 1 : 1 - local * 0.06;        // slight scale down
  const opacity = isLast ? 1 : local > 0.85 ? 1 - ((local - 0.85) / 0.15) * 0.4 : 1;

  return (
    <div
      className="absolute inset-0 rounded-3xl overflow-hidden"
      style={{
        zIndex: index + 1,
        transform: `translateY(${translateY}%) scale(${scale})`,
        opacity,
        transformOrigin: "top center",
        willChange: "transform, opacity",
      }}
    >
      {/* Background image */}
      <img
        src={project.img}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/50 to-black/25" />

      {/* Accent color tint at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2"
        style={{ background: `linear-gradient(to top, ${project.accent}55, transparent)` }}
      />

      {/* Content */}
      <div className="relative z-10 h-full p-10 md:p-14 flex flex-col justify-between">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-white/50">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="text-xs font-semibold text-white/70 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full backdrop-blur-sm">
            {project.cat}
          </span>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-4xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-4">
              {project.title}
            </h3>
            <p className="text-white/60 text-base leading-relaxed mb-6 max-w-md">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, j) => (
                <span
                  key={j}
                  className="text-xs font-semibold text-white/80 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — stat + arrow */}
          <div className="flex items-end gap-6 flex-shrink-0">
            <div>
              <div className="text-5xl font-bold text-white leading-none">{project.stat}</div>
              <div className="text-xs text-white/40 font-bold uppercase tracking-widest mt-1">{project.statLabel}</div>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition cursor-pointer">
              <ArrowUpRight size={22} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      setScrollProgress(Math.max(0, Math.min(1, scrolled / scrollable)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const CARD_H = 520; // px — card height

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#080808]"
      style={{ height: `${projects.length * 100 + 50}vh` }}
    >
      {/* Sticky wrapper */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

        {/* Header */}
        <div className="max-w-7xl mx-auto w-full px-8 md:px-14 pt-10 pb-8 flex items-end justify-between flex-shrink-0">
          <div>
            <span className="inline-block text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-400/10 border border-blue-400/20 px-4 py-2 rounded-full mb-3">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Work We're<br />Proud Of
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 border border-white/20 text-white/70 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/8 hover:text-white transition">
            View All <ExternalLink size={14} />
          </button>
        </div>

        {/* Stacking card stage */}
        <div className="max-w-7xl mx-auto w-full px-8 md:px-14 flex-1 flex items-center">
          <div
            className="relative w-full"
            style={{ height: CARD_H }}
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                project={project}
                index={index}
                total={projects.length}
                scrollProgress={scrollProgress}
              />
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 pb-8 pt-4 flex-shrink-0">
          {projects.map((_, i) => {
            const segStart = i / projects.length;
            const segEnd = (i + 1) / projects.length;
            const active = scrollProgress >= segStart && scrollProgress < segEnd;
            const done = scrollProgress >= segEnd;
            return (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: active ? 24 : 6,
                  height: 6,
                  background: active ? "#3b82f6" : done ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
