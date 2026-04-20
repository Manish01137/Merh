import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calculator, Clock, Users, Package, Check, ArrowRight, ShieldCheck,
} from "lucide-react";
import MonogramPattern from "../effects/MonogramPattern";

/**
 * Flexible Hiring Models + Developer Tier section.
 * Modelled on sapphiresolutions.net/hire-android-developers — four engagement
 * cards and a three-tier pricing grid. Restyled in MershilTech dark-blue theme.
 */

const models = [
  {
    icon: Calculator,
    name: "Fixed Price",
    tag: "Best for well-scoped projects with clear deliverables.",
    bullets: [
      "Agreed scope, timeline, and cost upfront",
      "Zero budget surprises — you pay what was quoted",
      "Weekly demos and milestone approvals",
      "Ideal for MVPs, redesigns, migrations",
    ],
    accent: "from-blue-500 to-blue-700",
  },
  {
    icon: Clock,
    name: "Time & Material",
    tag: "Pay hourly for evolving scope — full flexibility, full transparency.",
    bullets: [
      "Monthly billing against hours actually worked",
      "No hidden costs or change-order markups",
      "Weekly burn-rate reports and forecast",
      "Perfect for discovery phases and R&D",
    ],
    accent: "from-cyan-500 to-blue-600",
  },
  {
    icon: Users,
    name: "Dedicated Team",
    tag: "Your own embedded engineers, managed by us, owned by you.",
    bullets: [
      "Full-time engineers — 160 hrs / month guaranteed",
      "Rolling monthly contract, scale any month",
      "Same engineers every sprint — no rotation",
      "100% IP assignment, AU MSA + NDA covered",
    ],
    accent: "from-indigo-500 to-blue-700",
    featured: true,
  },
  {
    icon: Package,
    name: "Bucket Approach",
    tag: "Pre-paid hour blocks for retainers and ongoing maintenance.",
    bullets: [
      "Buy 40 / 80 / 160 hour buckets",
      "Priority response SLA on retainer clients",
      "Roll over unused hours for 90 days",
      "Ideal for maintenance & feature additions",
    ],
    accent: "from-blue-600 to-indigo-800",
  },
];

const tiers = [
  {
    level: "Junior",
    experience: "1–3 years",
    rate: "$22",
    stack: "Growing specialists under senior review",
    rows: [
      ["Project Manager", true],
      ["Timezone Overlap", true],
      ["Quality Guarantee", true],
      ["Code Review by Senior", true],
      ["Working Hours", "40 hrs / week"],
    ],
  },
  {
    level: "Mid-Level",
    experience: "3–5 years",
    rate: "$32",
    stack: "Independent engineers on production workloads",
    rows: [
      ["Project Manager", true],
      ["Timezone Overlap", true],
      ["Quality Guarantee", true],
      ["Code Review by Senior", true],
      ["Working Hours", "40 hrs / week"],
    ],
    featured: true,
  },
  {
    level: "Senior",
    experience: "5+ years",
    rate: "$45",
    stack: "Architects & tech leads with FAANG-calibre depth",
    rows: [
      ["Project Manager", true],
      ["Timezone Overlap", true],
      ["Quality Guarantee", true],
      ["Architecture & Tech Leadership", true],
      ["Working Hours", "40 hrs / week"],
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function FlexibleHiringModels({ roleName = "Developers" }) {
  // Sanitise the role name so callers can pass either "React Developers" or
  // the pre-prefixed "Hire React Developers" (from hireDeveloperData) without
  // producing "Hire Hire …" headings.
  const role = roleName.replace(/^Hire\s+(?:Dedicated\s+)?/i, "");

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#050d1a] text-white">
      <MonogramPattern opacity={0.05} size={110} />
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] sm:w-[700px] aspect-square rounded-full bg-blue-600/10 blur-[90px] sm:blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] sm:w-[600px] aspect-square rounded-full bg-indigo-600/10 blur-[80px] sm:blur-[100px]" />
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
          <span className="inline-block text-blue-300 text-xs font-bold uppercase tracking-widest bg-blue-400/10 border border-blue-400/20 px-4 py-2 rounded-full mb-5">
            Flexible Engagement
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-5">
            Our Flexible Hiring Models —{" "}
            <span className="text-blue-400">Find the Perfect Fit</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            Hire {role} the way that actually fits your project. Fixed
            delivery, hourly, a full dedicated team, or a pre-paid bucket — all
            with AU MSA, NDA, and 100% IP assignment baked in.
          </p>
        </motion.div>

        {/* Model cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-20"
        >
          {models.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`relative rounded-2xl p-6 border transition group ${
                  m.featured
                    ? "bg-gradient-to-br from-blue-600/20 via-blue-700/10 to-indigo-700/20 border-blue-400/40"
                    : "bg-white/[0.04] border-white/10 hover:bg-white/[0.06] hover:border-blue-400/25"
                }`}
              >
                {m.featured && (
                  <span className="absolute -top-3 left-5 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg shadow-blue-900/50">
                    Most Popular
                  </span>
                )}

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${m.accent} flex items-center justify-center shadow-lg shadow-blue-900/30 mb-5`}
                >
                  <Icon size={22} className="text-white" strokeWidth={2} />
                </div>

                <h3 className="text-white font-bold text-lg mb-2">{m.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5 min-h-[50px]">
                  {m.tag}
                </p>

                <ul className="space-y-2.5">
                  {m.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-white/75"
                    >
                      <Check
                        size={14}
                        className="mt-0.5 flex-shrink-0 text-blue-400"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Developer tier grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
            Hire Dedicated {role} by{" "}
            <span className="text-blue-400">Experience Level</span>
          </h3>
          <p className="text-white/55 text-base">
            Pre-vetted engineers at every tier — with the same quality
            guarantee, project manager coverage, and timezone overlap across
            the board.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-3 gap-5 md:gap-6"
        >
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`relative rounded-2xl overflow-hidden border transition ${
                t.featured
                  ? "bg-gradient-to-br from-blue-600/20 via-blue-700/15 to-indigo-700/20 border-blue-400/40 shadow-2xl shadow-blue-900/30"
                  : "bg-white/[0.04] border-white/10 hover:border-blue-400/25"
              }`}
            >
              {t.featured && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl">
                  Best Value
                </div>
              )}

              <div className="p-6 md:p-7 border-b border-white/10">
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-white font-bold text-2xl md:text-3xl">
                    {t.level}
                  </span>
                </div>
                <p className="text-white/50 text-xs mb-4">{t.experience} experience</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-blue-400 text-4xl md:text-5xl font-extrabold">
                    {t.rate}
                  </span>
                  <span className="text-white/50 text-sm font-medium">/ hr</span>
                </div>
                <p className="text-white/55 text-sm mt-3 leading-relaxed">
                  {t.stack}
                </p>
              </div>

              <div className="p-6 md:p-7 space-y-3">
                {t.rows.map(([label, val], j) => (
                  <div
                    key={j}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-white/60">{label}</span>
                    <span className="text-white font-medium">
                      {typeof val === "boolean" ? (
                        val ? (
                          <Check size={15} className="text-green-400" />
                        ) : (
                          "—"
                        )
                      ) : (
                        val
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust strip + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-14 flex flex-col md:flex-row items-center justify-between gap-5 p-6 md:p-7 rounded-2xl bg-white/[0.04] border border-white/10"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-blue-300" />
            </div>
            <div>
              <p className="text-white font-bold text-base">
                AU contract, NDA, and 100% IP assignment on day one
              </p>
              <p className="text-white/50 text-sm">
                Sydney-registered entity, GST invoicing, PI insurance included
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-blue-900/40 whitespace-nowrap"
          >
            Discuss Your Hiring Plan <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
