import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "TruuBlue",
    cat: "Dating App · AI-Powered",
    desc: "Progressive dating app using AI matching. Built with React Native, achieving 4.9★ App Store rating and 50K+ downloads in 3 months.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    tags: ["React Native", "AI/ML", "Firebase"],
    stat: "50K+",
    statLabel: "Downloads",
    color: "#3b82f6",
  },
  {
    title: "HomesBasket",
    cat: "On-Demand · Multi-Service",
    desc: "On-demand delivery platform serving food, groceries, and medicines across Miami with real-time GPS tracking.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Node.js", "React", "AWS"],
    stat: "1M+",
    statLabel: "Deliveries",
    color: "#06b6d4",
  },
  {
    title: "Whirlpool Digital",
    cat: "Enterprise · B2B Platform",
    desc: "Enterprise catalog management with real-time inventory and multi-region dealer portal for a global appliance giant.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    tags: ["React", "Microservices", "Azure"],
    stat: "40%",
    statLabel: "Cost Reduction",
    color: "#8b5cf6",
  },
  {
    title: "WFFA Sports",
    cat: "Sports Tech · Real-Time",
    desc: "Live fantasy football platform with real-time scoring, AI recommendations, and 100K+ active users.",
    img: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80",
    tags: ["WebSockets", "Python", "Redis"],
    stat: "100K+",
    statLabel: "Active Users",
    color: "#f59e0b",
  },
];

const TOTAL = projects.length;

export default function FeaturedWork() {
  const headerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  // Track which card is most visible in the scroll container
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const onScroll = () => {
      const scrollLeft = scroller.scrollLeft;
      const cardWidth = scroller.clientWidth;
      const idx = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(TOTAL - 1, Math.max(0, idx)));
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (i) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollTo({ left: i * scroller.clientWidth, behavior: "smooth" });
  };

  const next = () => scrollTo(Math.min(TOTAL - 1, activeIndex + 1));
  const prev = () => scrollTo(Math.max(0, activeIndex - 1));

  const currentProject = projects[activeIndex];

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative bg-[#060b16] py-20 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at 20% 50%, ${currentProject.color}14, transparent 70%)`,
          transition: "background 0.7s ease",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="px-6 md:px-10 mb-10">
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
                Work We're Proud Of
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <button
                onClick={prev}
                disabled={activeIndex === 0}
                className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={next}
                disabled={activeIndex === TOTAL - 1}
                className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowRight size={16} />
              </button>
              <button className="hidden md:flex items-center gap-2 border border-white/15 text-white/50 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/[0.06] hover:text-white transition-all ml-1">
                View All <ExternalLink size={13} />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Horizontal scroller */}
        <div
          ref={scrollerRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 md:px-10 gap-6 scroll-smooth"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`.no-scrollbar::-webkit-scrollbar{display:none;}`}</style>
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex-shrink-0 snap-center"
              style={{ width: "calc(100% - 0rem)", maxWidth: "100%" }}
            >
              <div
                className="rounded-3xl overflow-hidden relative shadow-2xl shadow-black/50"
                style={{ height: "clamp(420px, 60vh, 560px)" }}
              >
                <img src={project.img} alt={project.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5" style={{ background: `linear-gradient(to top, ${project.color}40, transparent)` }} />
                <div className="absolute top-0 left-0 w-1 h-full" style={{ background: `linear-gradient(to bottom, transparent, ${project.color}, transparent)` }} />

                <div className="relative z-10 h-full flex flex-col justify-between p-7 md:p-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/40 tabular-nums">
                      {String(i + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-semibold text-white/80 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full backdrop-blur-md">
                      {project.cat}
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-lg">
                      <h3 className="text-3xl md:text-5xl font-bold text-white leading-[1.06] tracking-tight mb-3">
                        {project.title}
                      </h3>
                      <p className="text-white/55 text-sm md:text-base leading-relaxed mb-5 max-w-md">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((t, j) => (
                          <span key={j} className="text-[11px] font-semibold text-white/75 bg-white/[0.08] border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-end gap-5 flex-shrink-0">
                      <div className="text-right">
                        <div className="text-4xl md:text-5xl font-bold text-white leading-none tabular-nums">{project.stat}</div>
                        <div className="text-[10px] text-white/35 font-bold uppercase tracking-widest mt-1.5">{project.statLabel}</div>
                      </div>
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white border border-white/20 hover:scale-110 transition-transform cursor-pointer backdrop-blur-sm"
                        style={{ background: `${project.color}30` }}
                      >
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom controls: dots + progress */}
        <div className="px-6 md:px-10 mt-8">
          <div className="flex items-center justify-between gap-6">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {projects.map((p, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className="rounded-full"
                  style={{
                    width: i === activeIndex ? 32 : 8,
                    height: 8,
                    background: i === activeIndex ? p.color : "rgba(255,255,255,0.12)",
                    boxShadow: i === activeIndex ? `0 0 10px ${p.color}50` : "none",
                    transition: "all 0.4s ease",
                  }}
                  aria-label={`Go to ${p.title}`}
                />
              ))}
            </div>

            {/* Active project name */}
            <div className="hidden md:block text-right">
              <p className="text-xs text-white/40 font-semibold uppercase tracking-widest mb-0.5">
                {String(activeIndex + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
              </p>
              <p
                className="text-sm font-bold"
                style={{ color: currentProject.color, transition: "color 0.4s ease" }}
              >
                {currentProject.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
