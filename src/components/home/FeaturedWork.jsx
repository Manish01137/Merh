import { useState, useRef } from "react";
import { ArrowUpRight, ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const projects = [
  {
    title: "TruuBlue",
    cat: "Dating App",
    industry: "AI-Powered",
    desc: "Progressive dating app using AI matching. Built with React Native, achieving 4.9★ App Store rating and 50K+ downloads in 3 months.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    tags: ["React Native", "AI/ML", "Firebase"],
    stat: "50K+",
    statLabel: "Downloads",
    color: "#3b82f6",
  },
  {
    title: "HomesBasket",
    cat: "On-Demand",
    industry: "Multi-Service",
    desc: "On-demand delivery platform serving food, groceries, and medicines across Miami with real-time GPS tracking.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Node.js", "React", "AWS"],
    stat: "1M+",
    statLabel: "Deliveries",
    color: "#06b6d4",
  },
  {
    title: "Whirlpool Digital",
    cat: "Enterprise",
    industry: "B2B Platform",
    desc: "Enterprise catalog management with real-time inventory and multi-region dealer portal for a global appliance giant.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    tags: ["React", "Microservices", "Azure"],
    stat: "40%",
    statLabel: "Cost Reduction",
    color: "#8b5cf6",
  },
  {
    title: "WFFA Sports",
    cat: "Sports Tech",
    industry: "Real-Time",
    desc: "Live fantasy football platform with real-time scoring, AI recommendations, and 100K+ active users.",
    img: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80",
    tags: ["WebSockets", "Python", "Redis"],
    stat: "100K+",
    statLabel: "Active Users",
    color: "#f59e0b",
  },
];

export default function FeaturedWork() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const go = (i) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };
  const next = () => go((active + 1) % projects.length);
  const prev = () => go((active - 1 + projects.length) % projects.length);

  const p = projects[active];

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.92 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.92 }),
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section ref={sectionRef} className="py-24 bg-[#060b16] overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ background: `radial-gradient(600px circle at 30% 50%, ${p.color}12, transparent 70%)` }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/[0.04] blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-600/[0.04] blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div>
            <motion.span
              variants={fadeUp}
              className="inline-block text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-400/10 border border-blue-400/20 px-4 py-2 rounded-full mb-4"
            >
              Portfolio
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Work We're Proud Of
            </motion.h2>
          </div>
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all duration-200"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all duration-200"
            >
              <ArrowRight size={16} />
            </button>
            <button className="hidden md:flex items-center gap-2 border border-white/15 text-white/60 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/[0.06] hover:text-white transition-all duration-200 ml-1">
              View All <ExternalLink size={13} />
            </button>
          </motion.div>
        </motion.div>

        {/* Main showcase */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-6 items-stretch">
          {/* Image panel */}
          <div className="relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/[0.06]" style={{ minHeight: 460 }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{ background: `linear-gradient(to top, ${p.color}30, transparent)` }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Floating content over image */}
            <div className="absolute inset-0 z-10 p-8 md:p-10 flex flex-col justify-between">
              {/* Top badges */}
              <div className="flex items-center justify-between">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`cat-${active}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs font-semibold text-white/80 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full backdrop-blur-md"
                  >
                    {p.cat} · {p.industry}
                  </motion.span>
                </AnimatePresence>
                <span className="text-xs font-bold text-white/30 tabular-nums">
                  {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
              </div>

              {/* Bottom info */}
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`info-${active}`}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h3 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-3">
                      {p.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed max-w-md mb-5">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t, j) => (
                        <span key={j} className="text-[11px] font-semibold text-white/70 bg-white/[0.08] border border-white/10 px-3 py-1.5 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="flex flex-col gap-4">
            {/* Stat card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`stat-${active}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl p-7 border border-white/[0.08] relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${p.color}15, ${p.color}05)` }}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30"
                  style={{ background: p.color }}
                />
                <div className="relative">
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Key Result</p>
                  <div className="text-5xl font-bold text-white leading-none mb-1">{p.stat}</div>
                  <p className="text-white/50 text-sm font-medium">{p.statLabel}</p>
                </div>
                <div className="mt-5">
                  <button className="flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition group">
                    View Case Study
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Project selector thumbnails */}
            <div className="flex-1 flex flex-col gap-2">
              {projects.map((proj, i) => (
                <motion.button
                  key={i}
                  onClick={() => go(i)}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className={`group flex items-center gap-4 rounded-xl p-3.5 border text-left transition-all duration-300 ${
                    i === active
                      ? "bg-white/[0.08] border-white/15"
                      : "bg-transparent border-transparent hover:bg-white/[0.04] hover:border-white/[0.06]"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 relative">
                    <img src={proj.img} alt={proj.title} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 transition-all duration-300 ${i === active ? "bg-transparent" : "bg-black/30"}`} />
                    {i === active && (
                      <motion.div
                        layoutId="thumb-ring"
                        className="absolute inset-0 rounded-xl border-2"
                        style={{ borderColor: proj.color }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className={`font-bold text-sm leading-tight transition-colors ${i === active ? "text-white" : "text-white/50 group-hover:text-white/70"}`}>
                      {proj.title}
                    </p>
                    <p className={`text-xs mt-0.5 transition-colors ${i === active ? "text-white/50" : "text-white/25 group-hover:text-white/40"}`}>
                      {proj.cat} · {proj.industry}
                    </p>
                  </div>
                  {/* Stat */}
                  <div className="text-right flex-shrink-0">
                    <p className={`text-sm font-bold tabular-nums transition-colors ${i === active ? "text-white" : "text-white/30"}`}>
                      {proj.stat}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Progress bar */}
            <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: p.color }}
                initial={false}
                animate={{ width: `${((active + 1) / projects.length) * 100}%` }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
