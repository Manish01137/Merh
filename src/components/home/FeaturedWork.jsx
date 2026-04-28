import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, Pause, Play, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { projects, projectFilters as filters } from "../../data/projects";

function ProjectCard({ project, featured = false }) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="group relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 flex-shrink-0 block"
      style={{
        width: featured ? "min(620px, 85vw)" : "min(460px, 80vw)",
        height: featured ? "clamp(440px, 58vh, 520px)" : "clamp(380px, 52vh, 460px)",
      }}
      aria-label={`View ${project.title} case study`}
    >
      {/* Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950">
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5" />
      <div
        className="absolute bottom-0 left-0 right-0 h-2/5 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `linear-gradient(to top, ${project.color}45, transparent)` }}
      />
      <div
        className="absolute top-0 left-0 w-1 h-full"
        style={{ background: `linear-gradient(to bottom, transparent, ${project.color}, transparent)` }}
      />

      {/* Hover color wash */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
        style={{ background: `radial-gradient(circle at 50% 100%, ${project.color}50, transparent 70%)` }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-white/80 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            {project.cat}
          </span>
          {project.ai && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-2.5 py-1 rounded-full shadow-lg shadow-blue-500/30">
              <Sparkles size={9} /> AI
            </span>
          )}
        </div>

        {/* Bottom content */}
        <div>
          <h3 className={`font-bold text-white leading-[1.08] tracking-tight mb-2.5 ${featured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"}`}>
            {project.title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-4 max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500">
            {project.short || project.desc}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 3).map((t, j) => (
              <span key={j} className="text-[10px] font-semibold text-white/70 bg-white/10 border border-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm">
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-end justify-between pt-3 border-t border-white/15">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white leading-none tabular-nums">{project.stat}</div>
              <div className="text-[9px] text-white/45 font-bold uppercase tracking-[0.15em] mt-1">{project.statLabel}</div>
            </div>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white border border-white/25 backdrop-blur-sm transition-all duration-300 group-hover:rotate-[-15deg] group-hover:scale-110"
              style={{ background: `${project.color}35` }}
            >
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedWork() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const [filter, setFilter] = useState("all");
  const [paused, setPaused] = useState(false);

  const filtered = filter === "all"
    ? projects
    : filter === "ai"
      ? projects.filter((p) => p.ai)
      : projects.filter((p) => p.category === filter);

  // Duplicate list for seamless infinite loop (only when enough cards)
  const displayList = filtered.length >= 3 ? [...filtered, ...filtered] : filtered;

  // Keyboard pause toggle (spacebar)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === " " && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        // Only pause if user is focused on the marquee area — we'll skip this to avoid conflicts
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="featured-work" className="relative bg-[#060b16] py-20 overflow-hidden">
      <style>{`
        @keyframes fw-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .fw-track {
          animation: fw-marquee 45s linear infinite;
        }
        .fw-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="px-6 md:px-10 mb-8">
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="flex items-end justify-between gap-6 flex-wrap"
          >
            <div>
              <motion.span variants={fadeUp} className="inline-block text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-400/10 border border-blue-400/20 px-4 py-2 rounded-full mb-4">
                Portfolio
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                Work We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Proud Of</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/45 text-sm mt-3 max-w-lg">
                Click any card to open the case study · Hover to pause auto-scroll · Filter by domain below
              </motion.p>
            </div>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <button
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Play" : "Pause"}
                className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all"
              >
                {paused ? <Play size={15} /> : <Pause size={15} />}
              </button>
            </motion.div>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 mt-6"
          >
            {filters.map((f) => {
              const count = f.id === "all"
                ? projects.length
                : f.id === "ai"
                  ? projects.filter((p) => p.ai).length
                  : projects.filter((p) => p.category === f.id).length;
              if (count === 0) return null;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    filter === f.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                      : "bg-white/[0.06] text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {f.id === "ai" && <Sparkles size={11} />}
                  {f.label}
                  <span className={`text-[10px] font-bold ${filter === f.id ? "text-blue-100" : "text-white/40"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Auto-scrolling marquee */}
        <div
          className="relative py-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Edge fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#060b16] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#060b16] to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div
              key={filter}
              className={`fw-track flex gap-6 w-max ${paused ? "paused" : ""}`}
            >
              {displayList.map((project, i) => (
                <ProjectCard
                  key={`${project.slug}-${i}`}
                  project={project}
                  featured={i % 3 === 0}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="px-6 md:px-10 mt-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4 text-white/50 text-xs">
              <span className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${paused ? "bg-amber-400" : "bg-green-400 animate-pulse"}`} />
                {paused ? "Paused" : "Auto-scrolling"}
              </span>
              <span className="text-white/25">·</span>
              <span>{filtered.length} {filtered.length === 1 ? "project" : "projects"} in view</span>
              <span className="hidden md:inline text-white/25">·</span>
              <span className="hidden md:inline">Hover to pause</span>
            </div>
            <div className="flex items-center gap-2 text-white/40 text-xs">
              <span className="font-bold text-white">200+</span> total projects delivered globally
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
