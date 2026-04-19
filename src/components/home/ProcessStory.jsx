import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search, Palette, Code2, ShieldCheck, Rocket, LifeBuoy, CheckCircle2 } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Discovery & Strategy",
    desc: "We dive deep into your vision, users, and market. Through workshops and research, we define the product strategy, prioritize features, and create a roadmap aligned with measurable business outcomes.",
    bullets: ["Requirements workshop", "Competitor analysis", "Technical feasibility", "Success metrics defined"],
    accent: "#3b82f6",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=80",
  },
  {
    n: "02",
    icon: Palette,
    title: "Design & Prototype",
    desc: "Our designers turn strategy into pixel-perfect wireframes, interactive Figma prototypes, and a design system that scales. We validate every flow with real users before writing a single line of code.",
    bullets: ["UX wireframes", "Interactive prototypes", "Brand-aligned UI", "Accessibility (WCAG 2.1)"],
    accent: "#06b6d4",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&q=80",
  },
  {
    n: "03",
    icon: Code2,
    title: "Agile Development",
    desc: "Two-week sprints with working demos every Friday. You get full transparency via Jira, daily standups, and a living backlog that adapts as you learn. No surprises, ever.",
    bullets: ["2-week sprints", "Daily standups", "Weekly demos", "Full Jira transparency"],
    accent: "#8b5cf6",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80",
  },
  {
    n: "04",
    icon: ShieldCheck,
    title: "QA & Security",
    desc: "Automated unit, integration, and E2E tests with 80%+ coverage. Performance profiling, OWASP security audits, and load testing ensure enterprise-grade reliability before any release.",
    bullets: ["80%+ test coverage", "OWASP audits", "Performance profiling", "Security reviews on every PR"],
    accent: "#f59e0b",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80",
  },
  {
    n: "05",
    icon: Rocket,
    title: "Deployment",
    desc: "Zero-downtime production deployment on AWS, Azure, or GCP with Kubernetes orchestration, automated rollback, comprehensive monitoring dashboards, and instant alerting on any anomaly.",
    bullets: ["Zero-downtime release", "K8s orchestration", "Auto-rollback capable", "24/7 monitoring"],
    accent: "#10b981",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
  },
  {
    n: "06",
    icon: LifeBuoy,
    title: "Evolve & Support",
    desc: "3 months of free post-launch support, proactive monitoring, performance tuning, and quarterly roadmap reviews. We stay invested long after launch — your success is our success.",
    bullets: ["3 months free support", "Quarterly reviews", "Feature evolution", "SLA-backed response"],
    accent: "#ec4899",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80",
  },
];

const TOTAL = steps.length;

export default function ProcessStory() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      setProgress(Math.max(0, Math.min(1, -rect.top / scrollable)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeIndex = Math.min(TOTAL - 1, Math.floor(progress * TOTAL));
  const active = steps[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#060b16]"
      style={{ height: `${TOTAL * 85}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Ambient accent glow, shifts color per step */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 transition-[background] duration-700"
            style={{ background: `radial-gradient(600px circle at 20% 60%, ${active.accent}18, transparent 70%)` }}
          />
          <div
            className="absolute inset-0 transition-[background] duration-700"
            style={{ background: `radial-gradient(500px circle at 85% 30%, ${active.accent}10, transparent 60%)` }}
          />
        </div>

        {/* Header */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-10 md:pt-14 flex-shrink-0">
          <div className="flex items-end justify-between">
            <div>
              <span className="inline-block text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-400/10 border border-blue-400/20 px-4 py-2 rounded-full mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                From First Call<br />
                <span
                  className="transition-colors duration-700"
                  style={{ color: active.accent }}
                >
                  To Production Launch
                </span>
              </h2>
            </div>
            <div className="hidden md:block text-right">
              <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">Chapter</p>
              <p className="text-white text-3xl font-bold tabular-nums">
                {active.n}<span className="text-white/30 text-xl"> / {String(TOTAL).padStart(2, "0")}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Story stage */}
        <div className="relative z-10 flex-1 px-6 md:px-10 flex items-center">
          <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-[auto_1fr_1fr] gap-8 items-center">
            {/* Left: vertical step rail */}
            <div className="hidden md:flex flex-col gap-2">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="rounded-full transition-all duration-500 flex-shrink-0"
                    style={{
                      width: i === activeIndex ? 10 : 6,
                      height: i === activeIndex ? 40 : 6,
                      background: i === activeIndex ? s.accent : i < activeIndex ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.08)",
                      boxShadow: i === activeIndex ? `0 0 16px ${s.accent}70` : "none",
                    }}
                  />
                  <span
                    className="text-xs font-bold tabular-nums transition-all duration-500 hidden xl:block"
                    style={{
                      color: i === activeIndex ? s.accent : i < activeIndex ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.25)",
                    }}
                  >
                    {s.n}
                  </span>
                </div>
              ))}
            </div>

            {/* Middle: text content */}
            <div className="relative" key={`text-${activeIndex}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-md"
                    style={{ background: `${active.accent}20` }}
                  >
                    <ActiveIcon size={24} style={{ color: active.accent }} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">Step {active.n}</p>
                    <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight">{active.title}</h3>
                  </div>
                </div>
                <p className="text-white/60 text-base md:text-lg leading-relaxed mb-7 max-w-xl">
                  {active.desc}
                </p>
                <div className="grid grid-cols-2 gap-3 max-w-xl">
                  {active.bullets.map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                      className="flex items-center gap-2 text-white/70 text-sm"
                    >
                      <CheckCircle2 size={14} style={{ color: active.accent }} className="flex-shrink-0" />
                      <span>{b}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: image card */}
            <motion.div
              key={`img-${activeIndex}`}
              initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-h-[500px]"
                style={{ boxShadow: `0 25px 60px -15px ${active.accent}40` }}
              >
                <img
                  src={active.img}
                  alt={active.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{ background: `linear-gradient(to top, ${active.accent}40, transparent)` }}
                />
                {/* Floating badge */}
                <div className="absolute top-5 left-5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: active.accent }} />
                  <span className="text-white text-xs font-semibold uppercase tracking-widest">{active.title}</span>
                </div>
              </div>
              {/* Number watermark */}
              <div
                className="absolute -top-4 -right-4 text-[110px] font-black leading-none tabular-nums -z-10 opacity-[0.15]"
                style={{ color: active.accent }}
              >
                {active.n}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom progress */}
        <div className="relative z-10 px-6 md:px-10 pb-6 flex-shrink-0">
          <div className="max-w-7xl mx-auto">
            <div className="h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-200 ease-out"
                style={{
                  width: `${Math.max(2, progress * 100)}%`,
                  background: `linear-gradient(90deg, ${steps[0].accent}, ${active.accent})`,
                  boxShadow: `0 0 10px ${active.accent}60`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
