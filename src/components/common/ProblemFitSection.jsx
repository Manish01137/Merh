import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";
import MonogramPattern from "../effects/MonogramPattern";

/**
 * Reusable "Problems → How we fit" section.
 *
 * Shows a left column of pain points and a right column of our solutions,
 * side-by-side. Used on Home, Startups, Cybersecurity, and sub-service pages
 * to tell a tailored "we understand, here's the fix" story per audience.
 *
 * Props:
 *   eyebrow  — uppercase badge text above the heading
 *   heading  — JSX or string (use <span className="text-blue-400"> for accent)
 *   subtitle — short paragraph below the heading
 *   problems — [{ icon, title, desc }] — left column
 *   solutions — [{ icon, title, desc }] — right column
 *   cta      — { label, to, secondary?: { label, to } }
 *   theme    — "dark" (default) | "light"
 *   id       — anchor id (optional)
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

        {/* Two-column: problems / solutions */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Problems */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className={`rounded-3xl p-6 md:p-8 border ${
              dark
                ? "bg-red-950/20 border-red-400/15"
                : "bg-red-50/60 border-red-100"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  dark ? "bg-red-500/15 text-red-300" : "bg-red-100 text-red-600"
                }`}
              >
                <AlertTriangle size={18} />
              </div>
              <h3
                className={`text-lg md:text-xl font-bold ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                The Problem
              </h3>
            </div>

            <div className="space-y-4">
              {problems.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i}
                    className={`flex gap-3 p-4 rounded-xl transition ${
                      dark
                        ? "bg-white/[0.03] border border-white/5 hover:bg-white/[0.06]"
                        : "bg-white border border-gray-100 hover:border-red-200"
                    }`}
                  >
                    {Icon && (
                      <div
                        className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${
                          dark
                            ? "bg-red-500/10 text-red-300"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        <Icon size={16} />
                      </div>
                    )}
                    <div className="min-w-0">
                      <h4
                        className={`font-semibold text-sm md:text-base mb-1 ${
                          dark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {p.title}
                      </h4>
                      <p
                        className={`text-sm leading-relaxed ${
                          dark ? "text-white/55" : "text-gray-600"
                        }`}
                      >
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className={`rounded-3xl p-6 md:p-8 border ${
              dark
                ? "bg-blue-950/30 border-blue-400/20"
                : "bg-blue-50/60 border-blue-100"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  dark
                    ? "bg-blue-500/15 text-blue-300"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                <CheckCircle2 size={18} />
              </div>
              <h3
                className={`text-lg md:text-xl font-bold ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                How MershilTech Fits
              </h3>
            </div>

            <div className="space-y-4">
              {solutions.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i}
                    className={`flex gap-3 p-4 rounded-xl transition ${
                      dark
                        ? "bg-white/[0.04] border border-white/8 hover:bg-white/[0.07] hover:border-blue-400/30"
                        : "bg-white border border-gray-100 hover:border-blue-300"
                    }`}
                  >
                    {Icon && (
                      <div
                        className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${
                          dark
                            ? "bg-blue-500/10 text-blue-300"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        <Icon size={16} />
                      </div>
                    )}
                    <div className="min-w-0">
                      <h4
                        className={`font-semibold text-sm md:text-base mb-1 ${
                          dark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {s.title}
                      </h4>
                      <p
                        className={`text-sm leading-relaxed ${
                          dark ? "text-white/55" : "text-gray-600"
                        }`}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

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
