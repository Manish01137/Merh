import { motion } from "framer-motion";
import {
  Sparkles, ShieldCheck, Rocket, Target, Cpu, Layers, Code2, Database,
  LineChart, Cloud, Zap, CheckCircle2,
} from "lucide-react";
import MonogramPattern from "../effects/MonogramPattern";

/**
 * "We Are The Experts — We Go Beyond the Basics" section, modelled on the
 * dotsquares.com/web-development pattern but rebuilt in MershilTech's theme.
 *
 * Renders one section per sub-service, populating 4 expertise cards and a
 * tech-stack pill row from the sub-service's own bullets + tech array — so
 * every sub-service gets unique content, no hand-curation required.
 *
 * Props:
 *   title        — sub-service title (e.g. "Android App Development")
 *   description  — sub-service description paragraph
 *   bullets      — 4-6 one-liner capabilities already defined on the sub-service
 *   tech         — tech stack array (shown as pills)
 *   eyebrow      — optional small badge text (default: "We Are The Experts")
 */

// Rotating icon set — keeps each card visually distinct without hardcoding
// an icon per sub-service. Order chosen so the first four feel balanced.
const ICONS = [Rocket, ShieldCheck, Cpu, Target, Layers, Zap];
const ACCENTS = [
  "from-blue-500 to-indigo-600",
  "from-cyan-500 to-blue-600",
  "from-indigo-500 to-blue-700",
  "from-blue-600 to-indigo-700",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Turns a one-liner bullet like "Kotlin & Jetpack Compose UI" into a
// {heading, blurb} pair. If the bullet contains a ':' or '—' we split there;
// otherwise we use the whole bullet as the heading and auto-generate a blurb.
function toCard(bullet, title) {
  if (!bullet) return null;
  const parts = bullet.split(/[:—–]/);
  if (parts.length > 1) {
    return {
      heading: parts[0].trim(),
      blurb: parts.slice(1).join(":").trim(),
    };
  }
  return {
    heading: bullet.trim(),
    blurb: `Deep, production-grade expertise in ${bullet.toLowerCase()} — delivered for ${title.toLowerCase()} projects of every scale.`,
  };
}

export default function OurExpertsSection({
  title,
  description,
  bullets = [],
  tech = [],
  eyebrow = "We Are The Experts",
}) {
  const cards = bullets.slice(0, 4).map((b) => toCard(b, title)).filter(Boolean);
  const extras = bullets.slice(4);

  return (
    <section className="relative overflow-hidden py-20 md:py-24 bg-white">
      <MonogramPattern opacity={0.035} size={110} />
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] aspect-square rounded-full bg-blue-100/70 blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] aspect-square rounded-full bg-indigo-100/60 blur-[70px]" />
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
          <span className="inline-block text-blue-700 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-5">
            <Sparkles size={11} className="inline -mt-0.5 mr-1.5" />
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
            We Go <span className="text-blue-600">Beyond the Basics</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* 4 expertise cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid md:grid-cols-2 gap-5 md:gap-6"
        >
          {cards.map((c, i) => {
            const Icon = ICONS[i % ICONS.length];
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl p-6 md:p-7 bg-white border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40 transition"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center shadow-lg shadow-blue-200/60`}
                  >
                    <Icon size={20} className="text-white" strokeWidth={2.2} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-gray-900 font-bold text-lg md:text-xl mb-2 leading-tight">
                      {c.heading}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
                      {c.blurb}
                    </p>
                  </div>
                </div>

                {/* Hover gradient strip */}
                <div
                  className={`absolute left-0 bottom-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${accent} rounded-b-2xl`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* "...and more" list + tech pills */}
        {(extras.length > 0 || tech.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 md:mt-12 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/60 border border-blue-100 p-6 md:p-8"
          >
            {extras.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3">
                  <CheckCircle2 size={14} /> Plus we handle
                </div>
                <div className="flex flex-wrap gap-2">
                  {extras.map((e, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 bg-white border border-blue-100 text-gray-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-sm"
                    >
                      <CheckCircle2 size={13} className="text-blue-600" /> {e}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {tech.length > 0 && (
              <div>
                <div className="flex items-center gap-2 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3">
                  <Cpu size={14} /> Stack we ship with
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-white border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-lg hover:border-blue-300 hover:text-blue-700 transition cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
