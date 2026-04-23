import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, AlertTriangle, CheckCircle2, Quote, Star, ArrowDown, Zap,
} from "lucide-react";
import MonogramPattern from "../effects/MonogramPattern";
import CountUp from "../effects/CountUp";

/**
 * Reusable "Problems → How we fit" section.
 *
 * Shows a left column of pain points and a right column of our solutions,
 * side-by-side. Used on Home, Startups, Cybersecurity, and sub-service pages
 * to tell a tailored "we understand, here's the fix" story per audience.
 *
 * Props:
 *   eyebrow      — uppercase badge text above the heading
 *   heading      — JSX or string (use <span className="text-blue-400"> for accent)
 *   subtitle     — short paragraph below the heading
 *   problems     — [{ icon, title, desc }] — left column
 *   solutions    — [{ icon, title, desc }] — right column
 *   cta          — { label, to, secondary?: { label, to } }
 *   theme        — "dark" (default) | "light"
 *   id           — anchor id (optional)
 *   impactStats  — optional [{ n, l }] — animated stats ribbon under header
 *   featuredQuote — optional { text, name, role, company, rating }
 */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ProblemFitSection({
  eyebrow,
  heading,
  subtitle,
  problems = [],
  solutions = [],
  cta,
  theme = "dark",
  id,
  impactStats,
  featuredQuote,
}) {
  const dark = theme === "dark";

  return (
    <section
      id={id}
      className={`relative overflow-hidden py-20 md:py-28 ${
        dark ? "bg-[#050d1a] text-white" : "bg-white text-gray-900"
      }`}
    >
      <MonogramPattern opacity={dark ? 0.05 : 0.04} size={110} />
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-0 -left-10 w-[400px] sm:w-[600px] aspect-square rounded-full blur-[80px] sm:blur-[100px] ${
            dark ? "bg-blue-600/10" : "bg-blue-100/60"
          }`}
        />
        <div
          className={`absolute bottom-0 -right-10 w-[350px] sm:w-[500px] aspect-square rounded-full blur-[70px] sm:blur-[90px] ${
            dark ? "bg-indigo-600/10" : "bg-indigo-100/50"
          }`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
        >
          {eyebrow && (
            <span
              className={`inline-block text-xs font-bold uppercase tracking-widest border px-4 py-2 rounded-full mb-5 ${
                dark
                  ? "text-blue-300 bg-blue-400/10 border-blue-400/20"
                  : "text-blue-700 bg-blue-50 border-blue-100"
              }`}
            >
              {eyebrow}
            </span>
          )}
          <h2
            className={`text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-5 ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            {heading}
          </h2>
          {subtitle && (
            <p
              className={`text-base md:text-lg leading-relaxed ${
                dark ? "text-white/60" : "text-gray-600"
              }`}
            >
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Premium animated impact stats ribbon (optional) */}
        {impactStats && impactStats.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
            className={`relative mb-14 md:mb-16 rounded-3xl overflow-hidden border ${
              dark
                ? "bg-gradient-to-br from-blue-950/60 via-indigo-950/40 to-blue-950/60 border-blue-400/20"
                : "bg-gradient-to-br from-blue-50 via-indigo-50/60 to-blue-50 border-blue-100"
            }`}
          >
            {/* Subtle shimmer line */}
            <div
              className={`absolute top-0 left-0 right-0 h-px ${
                dark
                  ? "bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
                  : "bg-gradient-to-r from-transparent via-blue-300 to-transparent"
              }`}
            />
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 md:divide-x divide-blue-400/10">
              {impactStats.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="p-5 md:p-6 text-center"
                >
                  <CountUp
                    value={s.n}
                    className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tabular-nums block mb-1 tracking-tight ${
                      dark
                        ? "bg-gradient-to-br from-white via-blue-200 to-blue-400 bg-clip-text text-transparent"
                        : "text-blue-700"
                    }`}
                  />
                  <p className={`text-xs md:text-sm font-medium ${dark ? "text-white/55" : "text-gray-600"}`}>
                    {s.l}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Two-column: problems / solutions */}
        {/* Column legend on top — makes the pairing narrative clear */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-4 items-center mb-6 md:mb-8 text-center">
          <div
            className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 font-bold text-sm md:text-base ${
              dark
                ? "bg-red-950/30 text-red-200 border border-red-400/20"
                : "bg-red-50 text-red-700 border border-red-100"
            }`}
          >
            <AlertTriangle size={17} /> The Problem
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <span
              className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${
                dark
                  ? "bg-blue-500/15 text-blue-300 border border-blue-400/20"
                  : "bg-blue-100 text-blue-700 border border-blue-200"
              }`}
            >
              <Zap size={11} /> Transform
            </span>
          </div>
          <div
            className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 font-bold text-sm md:text-base ${
              dark
                ? "bg-blue-950/40 text-blue-200 border border-blue-400/25"
                : "bg-blue-50 text-blue-700 border border-blue-100"
            }`}
          >
            <CheckCircle2 size={17} /> How MershilTech Fits
          </div>
        </div>

        {/* Paired transformation rows — each row is a problem → arrow → solution */}
        <div className="space-y-4 md:space-y-5">
          {problems.map((p, i) => {
            const s = solutions[i];
            if (!s) return null;
            const PIcon = p.icon;
            const SIcon = s.icon;
            const num = String(i + 1).padStart(2, "0");

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Row layout: problem | connector | solution */}
                <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-3 md:gap-4 items-stretch">
                  {/* PROBLEM CARD */}
                  <motion.div
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, delay: i * 0.07 }}
                    className={`relative rounded-2xl p-5 md:p-6 border transition-all ${
                      dark
                        ? "bg-gradient-to-br from-red-950/30 via-red-950/20 to-transparent border-red-400/20 hover:border-red-400/40"
                        : "bg-gradient-to-br from-red-50 via-red-50/40 to-white border-red-100 hover:border-red-200"
                    }`}
                  >
                    {/* Numbered chip — top-left */}
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm shadow-md ${
                          dark
                            ? "bg-red-500/20 text-red-200 border border-red-400/30 shadow-red-950/50"
                            : "bg-red-100 text-red-700 border border-red-200 shadow-red-200/30"
                        }`}
                      >
                        {num}
                      </div>
                      {PIcon && (
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                            dark
                              ? "bg-red-500/10 text-red-300"
                              : "bg-red-50 text-red-600"
                          }`}
                        >
                          <PIcon size={18} />
                        </div>
                      )}
                      <span
                        className={`flex-1 min-w-0 text-[10px] font-bold uppercase tracking-widest pt-3 ${
                          dark ? "text-red-300/70" : "text-red-600/70"
                        }`}
                      >
                        Pain Point
                      </span>
                    </div>
                    <h4
                      className={`font-bold text-base md:text-lg leading-tight mb-2 ${
                        dark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {p.title}
                    </h4>
                    <p
                      className={`text-sm leading-relaxed ${
                        dark ? "text-white/60" : "text-gray-600"
                      }`}
                    >
                      {p.desc}
                    </p>
                  </motion.div>

                  {/* CONNECTOR — animated arrow between */}
                  <div className="relative flex lg:flex-col items-center justify-center py-1 lg:py-0 lg:px-1">
                    {/* Line (desktop horizontal) */}
                    <div
                      className={`hidden lg:block absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 ${
                        dark
                          ? "bg-gradient-to-r from-red-400/40 via-blue-400/60 to-blue-400/40"
                          : "bg-gradient-to-r from-red-300 via-blue-400 to-blue-500"
                      }`}
                    />
                    {/* Vertical line (mobile) */}
                    <div
                      className={`lg:hidden absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 ${
                        dark
                          ? "bg-gradient-to-b from-red-400/40 via-blue-400/60 to-blue-400/40"
                          : "bg-gradient-to-b from-red-300 via-blue-400 to-blue-500"
                      }`}
                    />
                    {/* Arrow pill with pulse */}
                    <motion.div
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.6, delay: i * 0.07 + 0.2 }}
                      className={`relative z-10 flex items-center justify-center w-11 h-11 rounded-full shadow-lg ${
                        dark
                          ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-900/50"
                          : "bg-gradient-to-br from-blue-600 to-indigo-700 shadow-blue-300/50"
                      }`}
                    >
                      <ArrowRight size={16} className="text-white hidden lg:block" />
                      <ArrowDown size={16} className="text-white lg:hidden" />
                      {/* Pulsing ring */}
                      <span
                        className={`absolute inset-0 rounded-full opacity-50 ${
                          dark ? "bg-blue-400" : "bg-blue-500"
                        }`}
                        style={{ animation: "pfs-pulse 2.4s ease-out infinite" }}
                      />
                    </motion.div>
                  </div>

                  {/* SOLUTION CARD */}
                  <motion.div
                    initial={{ x: 20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, delay: i * 0.07 + 0.1 }}
                    className={`relative rounded-2xl p-5 md:p-6 border transition-all ${
                      dark
                        ? "bg-gradient-to-br from-blue-950/50 via-indigo-950/30 to-transparent border-blue-400/25 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-900/30"
                        : "bg-gradient-to-br from-blue-50 via-indigo-50/40 to-white border-blue-100 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/60"
                    }`}
                  >
                    {/* Accent gradient strip on hover */}
                    <div
                      className={`absolute top-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-t-2xl ${
                        dark
                          ? "bg-gradient-to-r from-blue-400 to-indigo-400"
                          : "bg-gradient-to-r from-blue-600 to-indigo-600"
                      }`}
                    />

                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm shadow-md ${
                          dark
                            ? "bg-blue-500/20 text-blue-200 border border-blue-400/30 shadow-blue-900/50"
                            : "bg-blue-100 text-blue-700 border border-blue-200 shadow-blue-200/30"
                        }`}
                      >
                        {num}
                      </div>
                      {SIcon && (
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                            dark
                              ? "bg-blue-500/15 text-blue-300"
                              : "bg-blue-50 text-blue-700"
                          }`}
                        >
                          <SIcon size={18} />
                        </div>
                      )}
                      <span
                        className={`flex-1 min-w-0 text-[10px] font-bold uppercase tracking-widest pt-3 ${
                          dark ? "text-blue-300/80" : "text-blue-700/80"
                        }`}
                      >
                        MershilTech Fit
                      </span>
                    </div>
                    <h4
                      className={`font-bold text-base md:text-lg leading-tight mb-2 ${
                        dark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {s.title}
                    </h4>
                    <p
                      className={`text-sm leading-relaxed ${
                        dark ? "text-white/65" : "text-gray-600"
                      }`}
                    >
                      {s.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}

          {/* Render any extra problems/solutions beyond the paired count */}
          {problems.length > solutions.length && problems.slice(solutions.length).map((p, i) => {
            const PIcon = p.icon;
            return (
              <motion.div
                key={`extra-p-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`rounded-2xl p-5 md:p-6 border ${
                  dark
                    ? "bg-red-950/20 border-red-400/15"
                    : "bg-red-50/60 border-red-100"
                }`}
              >
                <div className="flex gap-3">
                  {PIcon && (
                    <div
                      className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${
                        dark ? "bg-red-500/10 text-red-300" : "bg-red-50 text-red-600"
                      }`}
                    >
                      <PIcon size={16} />
                    </div>
                  )}
                  <div>
                    <h4 className={`font-bold text-base mb-1 ${dark ? "text-white" : "text-gray-900"}`}>
                      {p.title}
                    </h4>
                    <p className={`text-sm leading-relaxed ${dark ? "text-white/60" : "text-gray-600"}`}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
          {solutions.length > problems.length && solutions.slice(problems.length).map((s, i) => {
            const SIcon = s.icon;
            return (
              <motion.div
                key={`extra-s-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`rounded-2xl p-5 md:p-6 border ${
                  dark
                    ? "bg-blue-950/30 border-blue-400/20"
                    : "bg-blue-50/60 border-blue-100"
                }`}
              >
                <div className="flex gap-3">
                  {SIcon && (
                    <div
                      className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${
                        dark ? "bg-blue-500/10 text-blue-300" : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      <SIcon size={16} />
                    </div>
                  )}
                  <div>
                    <h4 className={`font-bold text-base mb-1 ${dark ? "text-white" : "text-gray-900"}`}>
                      {s.title}
                    </h4>
                    <p className={`text-sm leading-relaxed ${dark ? "text-white/65" : "text-gray-600"}`}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <style>{`
          @keyframes pfs-pulse {
            0%, 100% { transform: scale(1); opacity: 0.35; }
            50% { transform: scale(1.5); opacity: 0; }
          }
        `}</style>

        {/* Featured founder testimonial (optional) */}
        {featuredQuote && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 md:mt-14 relative"
          >
            {/* Outer glow ring — animated premium border */}
            <div
              className={`absolute -inset-px rounded-3xl opacity-60 blur-sm pointer-events-none ${
                dark
                  ? "bg-gradient-to-r from-blue-500/40 via-indigo-500/30 to-blue-500/40"
                  : "bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-300"
              }`}
              aria-hidden
            />

            <div
              className={`relative rounded-3xl overflow-hidden p-6 md:p-8 lg:p-10 ${
                dark
                  ? "bg-gradient-to-br from-slate-900/90 via-blue-950/80 to-indigo-950/90 border border-blue-400/20"
                  : "bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/40 border border-blue-100"
              }`}
            >
              {/* Floating big quote mark */}
              <Quote
                className={`absolute top-5 right-5 md:top-8 md:right-10 ${
                  dark ? "text-blue-400/15" : "text-blue-200/80"
                }`}
                size={96}
                strokeWidth={1}
              />

              <div className="relative grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center">
                <div>
                  {/* Rating */}
                  {featuredQuote.rating && (
                    <div className="flex items-center gap-0.5 mb-4">
                      {Array.from({ length: featuredQuote.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          className="text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  )}

                  {/* Quote text */}
                  <p
                    className={`text-lg md:text-xl lg:text-2xl leading-relaxed font-medium mb-5 ${
                      dark ? "text-white/90" : "text-gray-800"
                    }`}
                  >
                    {featuredQuote.text}
                  </p>

                  {/* Attribution */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                        dark
                          ? "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-900/40"
                          : "bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-200"
                      }`}
                    >
                      {featuredQuote.name
                        ?.split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <p
                        className={`font-bold text-sm ${
                          dark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {featuredQuote.name}
                      </p>
                      <p
                        className={`text-xs ${
                          dark ? "text-white/50" : "text-gray-500"
                        }`}
                      >
                        {featuredQuote.role}
                        {featuredQuote.company && (
                          <>
                            {" "}·{" "}
                            <span
                              className={
                                dark ? "text-blue-300" : "text-blue-700"
                              }
                            >
                              {featuredQuote.company}
                            </span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Optional metric badge */}
                {featuredQuote.metric && (
                  <div
                    className={`hidden md:flex flex-col items-center justify-center rounded-2xl p-6 min-w-[160px] ${
                      dark
                        ? "bg-blue-500/10 border border-blue-400/25"
                        : "bg-blue-50 border border-blue-100"
                    }`}
                  >
                    <span
                      className={`text-3xl lg:text-4xl font-extrabold tracking-tight ${
                        dark
                          ? "bg-gradient-to-br from-blue-200 to-blue-400 bg-clip-text text-transparent"
                          : "text-blue-700"
                      }`}
                    >
                      {featuredQuote.metric.value}
                    </span>
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-wider mt-1 text-center ${
                        dark ? "text-white/60" : "text-gray-600"
                      }`}
                    >
                      {featuredQuote.metric.label}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA */}
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            <Link
              to={cta.to}
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold transition shadow-lg ${
                dark
                  ? "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/40"
                  : "bg-blue-700 hover:bg-blue-800 text-white shadow-blue-200/60"
              }`}
            >
              {cta.label} <ArrowRight size={16} />
            </Link>
            {cta.secondary && (
              <Link
                to={cta.secondary.to}
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold border transition ${
                  dark
                    ? "border-white/15 text-white hover:bg-white/10"
                    : "border-gray-200 text-gray-800 hover:bg-gray-50"
                }`}
              >
                {cta.secondary.label} <ArrowRight size={16} />
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
