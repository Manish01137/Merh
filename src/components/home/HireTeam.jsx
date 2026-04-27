import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Users, Layers, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "../effects/TextReveal";

const models = [
  {
    icon: Users,
    title: "Staff Augmentation",
    desc: "Instantly plug top-tier developers into your existing team.",
    price: "$3,000",
    priceUnit: "/ developer / month",
    saveLabel: "Save 60% vs in-house",
    points: ["160 hrs/month per developer", "Daily standups + Slack access", "Works your timezone", "Cancel with 30-day notice"],
    highlight: false,
  },
  {
    icon: Layers,
    title: "Dedicated Team",
    desc: "A fully managed offshore team working exclusively on your product.",
    price: "$8,000",
    priceUnit: "/ team of 3 / month",
    saveLabel: "Best value · Tech lead included",
    points: ["Full team ownership", "Sprint-based delivery (2-week)", "Tech lead + PM included", "Scale up/down anytime"],
    highlight: true,
    badge: "MOST POPULAR",
  },
  {
    icon: Building2,
    title: "Offshore Dev Center",
    desc: "Build your own branded engineering hub with our full infrastructure.",
    price: "Custom",
    priceUnit: "starts at $40,000 / mo",
    saveLabel: "For 8+ engineers",
    points: ["Your brand, our operations", "IP fully owned by you", "Dedicated office + infrastructure", "Scale from 5 to 500 engineers"],
    highlight: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HireTeam() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-indigo-100/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 bg-blue-100 px-4 py-2 rounded-full"
          >
            Engagement Models & Pricing
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            <TextReveal>Flexible Ways to Work With Us</TextReveal>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 max-w-xl mx-auto text-lg">
            Transparent, fixed monthly pricing. No recruitment fees, no benefits overhead, no surprises.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-3 gap-6"
        >
          {models.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                  m.highlight
                    ? "border-blue-700 bg-gradient-to-br from-blue-700 to-indigo-700 text-white shadow-2xl shadow-blue-900/30 scale-[1.03]"
                    : "border-gray-200 bg-white hover:shadow-xl hover:border-blue-200"
                }`}
              >
                {m.badge && (
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-4 py-1.5 rounded-full font-semibold"
                  >
                    {m.badge}
                  </motion.span>
                )}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    m.highlight ? "bg-white/20 border border-white/30" : "bg-blue-50 border border-blue-100"
                  }`}
                >
                  <Icon size={22} className={m.highlight ? "text-white" : "text-blue-700"} />
                </motion.div>

                <h3 className={`text-xl font-bold mb-2 ${m.highlight ? "text-white" : "text-gray-900"}`}>
                  {m.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 ${m.highlight ? "text-blue-100" : "text-gray-500"}`}>
                  {m.desc}
                </p>

                {/* Pricing */}
                <div className={`mb-5 pb-5 border-b ${m.highlight ? "border-white/20" : "border-gray-100"}`}>
                  <div className="flex items-baseline gap-1.5">
                    <span className={`text-[10px] font-bold uppercase tracking-[0.15em] ${m.highlight ? "text-blue-200" : "text-gray-400"}`}>
                      from
                    </span>
                    <span className={`text-4xl font-extrabold tracking-tight ${m.highlight ? "text-white" : "text-gray-900"}`}>
                      {m.price}
                    </span>
                  </div>
                  <p className={`text-xs mt-1 ${m.highlight ? "text-blue-200" : "text-gray-500"}`}>
                    {m.priceUnit}
                  </p>
                  <p className={`text-[11px] font-semibold mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${
                    m.highlight ? "bg-white/15 text-blue-100" : "bg-green-50 text-green-700"
                  }`}>
                    ✓ {m.saveLabel}
                  </p>
                </div>

                <ul className="space-y-2.5 mb-7">
                  {m.points.map((p, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + j * 0.08, duration: 0.4 }}
                      className={`flex items-start gap-2 text-sm ${m.highlight ? "text-blue-100" : "text-gray-600"}`}
                    >
                      <CheckCircle2 size={15} className={`mt-0.5 flex-shrink-0 ${m.highlight ? "text-blue-300" : "text-blue-600"}`} />
                      {p}
                    </motion.li>
                  ))}
                </ul>
                <Link
                  to="/hire"
                  className={`flex items-center justify-between w-full px-5 py-3 rounded-xl font-semibold text-sm transition group ${
                    m.highlight ? "bg-white text-blue-700 hover:bg-blue-50" : "bg-blue-700 text-white hover:bg-blue-800"
                  }`}
                >
                  Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Pricing footer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500"
        >
          <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-blue-600" /> 1-week risk-free trial</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-blue-600" /> Free replacement guarantee</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-blue-600" /> No lock-in contracts</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-blue-600" /> NDA before any work</span>
        </motion.div>
      </div>
    </section>
  );
}
