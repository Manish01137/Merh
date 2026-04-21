import { motion } from "framer-motion";

/**
 * Zig-zag animated process timeline.
 *
 * Shared across ServiceDetails + SubServiceDetails so every service/sub-service
 * page has the same premium alternating-card layout — each sub-service passes
 * its own `steps` array so content stays unique.
 *
 * Props:
 *   steps       — Array<{ title, desc }> — 4-7 step entries (s.process)
 *   eyebrow     — small badge text (default: "Our Process")
 *   heading     — JSX/string (default: "How We Deliver Excellence")
 *   subtitle    — paragraph under heading
 */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function AnimatedProcessTimeline({
  steps = [],
  eyebrow = "Our Process",
  heading = "How We Deliver Excellence",
  subtitle = "A proven, transparent process with full visibility at every step — from first conversation to production launch.",
}) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-50 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center mb-14 md:mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-slate-500 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line — desktop only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-100 -translate-x-1/2 hidden md:block" />

          <div className="space-y-10 md:space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i}
                className={`relative flex items-start gap-4 md:gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card side */}
                <div
                  className={`w-full md:w-[45%] ${
                    i % 2 === 0 ? "md:pr-10" : "md:pl-10"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.25 } }}
                    className="group bg-white rounded-2xl p-6 md:p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/40 hover:border-blue-100 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-700 group-hover:bg-blue-600 text-white font-bold text-base flex items-center justify-center shrink-0 shadow-lg shadow-blue-700/30 group-hover:scale-110 transition duration-300">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-700 transition leading-snug">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>

                {/* Center dot on the line */}
                <div className="absolute left-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-blue-700 bg-white z-10 hidden md:block" />

                {/* Opposite-side large faded number */}
                <div className="hidden md:flex w-[45%] items-center justify-center">
                  <span className="text-6xl lg:text-7xl font-black text-slate-100 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
