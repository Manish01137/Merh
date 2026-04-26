import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight, Sunrise, Users, ShieldCheck } from "lucide-react";
import MonogramPattern from "../effects/MonogramPattern";

const sydneyImg =
  "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1400&q=85&auto=format&fit=crop&dpr=2";

const perks = [
  {
    icon: MapPin,
    title: "Sydney HQ",
    desc: "54 Regent Street, Chippendale — meet us in person for workshops and discovery sessions.",
  },
  {
    icon: Sunrise,
    title: "AEDT / AEST Timezone",
    desc: "Real-time collaboration with Australian business hours — not midnight Slack messages from overseas.",
  },
  {
    icon: Users,
    title: "AU Contract & MSA",
    desc: "Australian-registered entity, GST-invoiced, professional indemnity insurance, and NDA on day one.",
  },
  {
    icon: ShieldCheck,
    title: "OAIC & Privacy Act Ready",
    desc: "Data handling aligned with Australian Privacy Principles and the Notifiable Data Breaches scheme.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SydneyLocal() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
      <MonogramPattern opacity={0.04} size={110} />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] sm:w-[700px] aspect-square rounded-full bg-blue-600/10 blur-[90px] sm:blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] aspect-square rounded-full bg-indigo-500/10 blur-[80px] sm:blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left — image card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/50 aspect-[4/5] max-h-[560px]">
              <img
                src={sydneyImg}
                alt="Sydney Opera House and Harbour — MershilTech headquarters city"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Floating location chip */}
              <div className="absolute top-5 left-5 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-xs font-semibold uppercase tracking-widest">
                  Sydney, Australia
                </span>
              </div>

              {/* Bottom address card */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/[0.08] backdrop-blur-xl border border-white/15 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-blue-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-bold text-sm md:text-base leading-snug">
                      54 Regent Street, Chippendale
                    </p>
                    <p className="text-white/60 text-xs md:text-sm">Sydney NSW 2008, Australia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent ribbon */}
            <div className="absolute -bottom-4 -right-4 text-[90px] md:text-[130px] font-black leading-none text-blue-400/15 -z-10 select-none">
              AU
            </div>
          </motion.div>

          {/* Right — copy + perks */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-widest bg-blue-400/10 border border-blue-400/20 px-4 py-2 rounded-full mb-5"
            >
              🇦🇺 Proudly Australian
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5"
            >
              A Sydney-Based Partner. <br />
              <span className="text-blue-400">Global Engineering Muscle.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Our HQ is a short walk from Central Station. Meet our account
              team in person, sign an AU contract with AU terms, and get
              engineering delivery from our Sydney, London, and Jaipur hubs —
              rolled into one seamless experience.
            </motion.p>

            {/* Perks grid */}
            <motion.div
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              className="grid sm:grid-cols-2 gap-4 mb-9"
            >
              {perks.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i}
                    className="flex gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] hover:border-blue-400/30 transition"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-500/15 text-blue-300 flex items-center justify-center">
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-semibold text-sm mb-0.5">
                        {p.title}
                      </h3>
                      <p className="text-white/50 text-xs leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-blue-900/40"
              >
                <Phone size={16} /> Visit Our Sydney Office
              </Link>
              <a
                href="mailto:info@mershiltech.com"
                className="inline-flex items-center gap-2 border border-white/15 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition"
              >
                <Mail size={16} /> info@mershiltech.com <ArrowRight size={15} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
