import { useMemo, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Layers,
  Sparkles,
  Tag,
  Calendar,
  ExternalLink,
} from "lucide-react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import MonogramPattern from "../components/effects/MonogramPattern";
import { projects, getProjectBySlug } from "../data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
};

function GalleryViewer({ gallery, color }) {
  const [active, setActive] = useState(0);
  if (!gallery?.length) return null;
  const current = gallery[active];

  return (
    <div className="space-y-4">
      <div
        className="relative rounded-3xl overflow-hidden border border-gray-100 bg-gradient-to-br from-gray-50 to-gray-100 aspect-[16/10] flex items-center justify-center"
        style={{ boxShadow: `0 30px 80px -30px ${color}30` }}
      >
        <img
          src={current.src}
          alt={current.caption || "Project screenshot"}
          loading="lazy"
          decoding="async"
          className="max-w-full max-h-full object-contain p-6"
        />
        {gallery.length > 1 && (
          <>
            <button
              onClick={() => setActive((i) => (i - 1 + gallery.length) % gallery.length)}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-700 flex items-center justify-center shadow-lg transition"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => setActive((i) => (i + 1) % gallery.length)}
              aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-700 flex items-center justify-center shadow-lg transition"
            >
              <ArrowRight size={16} />
            </button>
          </>
        )}
      </div>

      {current.caption && (
        <p className="text-sm text-gray-500 italic text-center px-4">{current.caption}</p>
      )}

      {gallery.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition ${
                i === active
                  ? "border-blue-600 shadow-md"
                  : "border-transparent opacity-60 hover:opacity-100"
              } bg-gray-100`}
            >
              <img
                src={g.src}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = useMemo(() => getProjectBySlug(slug), [slug]);

  if (!project) return <Navigate to="/" replace />;

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-24 text-white relative overflow-hidden bg-[#060b16]">
        {/* Animated drifting blobs */}
        <motion.div
          aria-hidden
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${project.color}55, transparent 70%)`, filter: "blur(60px)" }}
          animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${project.color}40, transparent 70%)`, filter: "blur(80px)" }}
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, #3b82f640, transparent 70%)`, filter: "blur(70px)" }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Subtle dotted grid */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        <MonogramPattern opacity={0.035} size={110} />

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-[1]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Link
              to="/#featured-work"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold mb-10 transition group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition" /> All projects
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* LEFT — text */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 mb-7"
              >
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border backdrop-blur-md"
                  style={{
                    color: project.color,
                    borderColor: `${project.color}55`,
                    background: `${project.color}18`,
                    boxShadow: `0 0 30px -10px ${project.color}80`,
                  }}
                >
                  <Tag size={11} /> {project.cat}
                </span>
                {project.ai && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-2.5 py-1.5 rounded-full shadow-lg shadow-blue-500/30">
                    <Sparkles size={9} /> AI Powered
                  </span>
                )}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl font-black leading-[1] mb-6 tracking-tight"
              >
                <span
                  className="bg-clip-text text-transparent inline-block"
                  style={{
                    backgroundImage: `linear-gradient(135deg, #ffffff 0%, ${project.color} 50%, #ffffff 100%)`,
                  }}
                >
                  {project.title}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
              >
                {project.desc}
              </motion.p>

              {/* Headline stat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-end gap-4 mb-9"
              >
                <div
                  className="text-6xl md:text-8xl font-black tabular-nums leading-none bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(180deg, ${project.color} 0%, ${project.color}99 100%)`,
                    filter: `drop-shadow(0 0 30px ${project.color}50)`,
                  }}
                >
                  {project.stat}
                </div>
                <div className="pb-2 max-w-[200px]">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-1">
                    Headline Result
                  </div>
                  <div className="text-sm text-white/90 font-bold leading-tight">
                    {project.statLabel}
                  </div>
                </div>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap items-center gap-2 mb-8"
              >
                {project.tags.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold text-white/85 bg-white/[0.07] border border-white/15 px-3 py-1.5 rounded-full backdrop-blur-sm hover:bg-white/15 hover:border-white/25 transition"
                  >
                    {t}
                  </span>
                ))}
              </motion.div>

              {/* Metadata cards */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-3 gap-3 max-w-xl"
              >
                {[
                  { label: "Industry", value: project.industry, Icon: Layers },
                  { label: "Region", value: project.region, Icon: Globe2 },
                  { label: "Timeline", value: project.timeline, Icon: Calendar },
                ].map(({ label, value, Icon }, i) => (
                  <div
                    key={i}
                    className="relative bg-white/[0.05] border border-white/10 rounded-xl p-4 backdrop-blur-md overflow-hidden group hover:border-white/25 transition"
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5 opacity-70 group-hover:opacity-100 transition"
                      style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
                    />
                    <div className="text-[10px] uppercase tracking-widest text-white/45 font-bold mb-1.5 flex items-center gap-1.5">
                      <Icon size={10} style={{ color: project.color }} /> {label}
                    </div>
                    <div className="text-sm font-bold text-white leading-tight">{value}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — visual stack */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              {/* Pulse ring */}
              <motion.div
                aria-hidden
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  border: `2px solid ${project.color}30`,
                  boxShadow: `0 0 60px ${project.color}30, inset 0 0 40px ${project.color}20`,
                }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.2, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Outer glow */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${project.color}30 0%, transparent 65%)`,
                  filter: "blur(40px)",
                  transform: "scale(1.2)",
                }}
              />

              {/* Floating sparkle accents */}
              {[
                { top: "-8%", left: "5%", delay: 0 },
                { top: "20%", right: "-6%", delay: 0.7 },
                { bottom: "10%", left: "-4%", delay: 1.4 },
                { bottom: "-2%", right: "12%", delay: 2.1 },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  aria-hidden
                  className="absolute w-2 h-2 rounded-full pointer-events-none"
                  style={{
                    ...pos,
                    background: project.color,
                    boxShadow: `0 0 12px ${project.color}, 0 0 24px ${project.color}80`,
                  }}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: pos.delay }}
                />
              ))}

              {/* Back card (rotated, behind) */}
              {project.gallery?.[1] && (
                <motion.div
                  initial={{ opacity: 0, rotate: 0, x: 0 }}
                  animate={{ opacity: 0.65, rotate: -7, x: -30 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-6 left-0 right-0 mx-auto rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] max-w-[88%] bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-sm flex items-center justify-center"
                  style={{ transformOrigin: "center" }}
                >
                  <img
                    src={project.gallery[1].src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    aria-hidden
                    className="max-w-full max-h-full object-contain p-6"
                  />
                </motion.div>
              )}

              {/* Front card (main cover) */}
              <motion.div
                whileHover={{ y: -6, rotate: 0.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative rounded-3xl overflow-hidden border aspect-[4/5] flex items-center justify-center bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm"
                style={{
                  borderColor: `${project.color}40`,
                  boxShadow: `0 30px 80px -20px ${project.color}80, 0 0 0 1px ${project.color}20`,
                }}
              >
                <img
                  src={project.cover}
                  alt={project.title}
                  loading="eager"
                  decoding="async"
                  className="max-w-full max-h-full object-contain p-6 relative z-10"
                />
                {/* Color wash from bottom */}
                <div
                  className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-40"
                  style={{
                    background: `radial-gradient(circle at 50% 100%, ${project.color}80, transparent 70%)`,
                  }}
                />
                {/* Top shine */}
                <div
                  className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.08), transparent)",
                  }}
                />
                {/* Project badge corner */}
                <div
                  className="absolute top-4 right-4 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-lg backdrop-blur-md border border-white/20"
                  style={{
                    background: `${project.color}80`,
                    boxShadow: `0 8px 24px -4px ${project.color}80`,
                  }}
                >
                  {project.title.charAt(0)}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: project.color }}
            >
              Project Overview
            </span>
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
              {project.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery?.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Inside the Product
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                Real screens from the live build. Click thumbs to navigate.
              </p>
            </motion.div>
            <GalleryViewer gallery={project.gallery} color={project.color} />
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: project.color }}
            >
              <Layers size={12} className="inline -mt-0.5 mr-1" /> Key Features Delivered
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              What we built
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {project.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 p-7 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: project.color }}
                  >
                    {i + 1}
                  </span>
                  {f.title}
                </h3>
                <ul className="space-y-2.5">
                  {f.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-gray-700 text-[15px] leading-relaxed">
                      <CheckCircle2
                        size={16}
                        className="mt-1 flex-shrink-0"
                        style={{ color: project.color }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Approach */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/40">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-10"
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: project.color }}
            >
              Technical Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              How we built it
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-3">
            {project.techApproach.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-3 hover:shadow-md transition-all"
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${project.color}20`, color: project.color }}
                >
                  <CheckCircle2 size={15} />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-[#060b16] text-white relative overflow-hidden">
        <MonogramPattern opacity={0.04} size={100} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 20% 50%, ${project.color}25, transparent 50%)`,
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: project.color }}
            >
              Business Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Outcomes that matter
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {project.impact.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/25 transition"
              >
                <div
                  className="text-3xl md:text-4xl font-bold mb-2 tabular-nums"
                  style={{ color: project.color }}
                >
                  {m.metric}
                </div>
                <div className="text-xs text-white/60 font-semibold uppercase tracking-wider leading-tight">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>

          {project.contribution?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm max-w-3xl mx-auto"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-5">
                Our Contribution
              </h3>
              <ul className="space-y-3">
                {project.contribution.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/85 leading-relaxed">
                    <CheckCircle2
                      size={18}
                      className="mt-1 flex-shrink-0"
                      style={{ color: project.color }}
                    />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </section>

      {/* Other projects */}
      {others.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
                  Explore More
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                  Other projects we've shipped
                </h3>
              </div>
              <Link
                to="/#featured-work"
                className="hidden sm:inline-flex items-center gap-2 text-blue-700 font-semibold text-sm hover:gap-3 transition-all"
              >
                All work <ExternalLink size={14} />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={`/portfolio/${p.slug}`}
                  className="group relative rounded-2xl overflow-hidden bg-gray-900 aspect-[4/5] block"
                >
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-2/5 opacity-70"
                    style={{ background: `linear-gradient(to top, ${p.color}50, transparent)` }}
                  />
                  <div className="relative h-full flex flex-col justify-end p-6 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-1.5">
                      {p.cat}
                    </span>
                    <h4 className="text-xl font-bold leading-tight mb-2 group-hover:translate-x-0.5 transition">
                      {p.title}
                    </h4>
                    <p className="text-white/65 text-sm line-clamp-2 mb-4">{p.short}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white/90 group-hover:gap-2 transition-all">
                      View case study <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
