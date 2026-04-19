import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import CountUp from "../effects/CountUp";

const countries = [
  { name: "United Kingdom", city: "London, England", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80", clients: "80+" },
  { name: "India", city: "Mumbai & Bangalore", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80", clients: "200+" },
  { name: "Australia", city: "Sydney, NSW", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80", clients: "60+" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] } }),
};

export default function GlobalReach() {
  return (
    <section className="py-24 bg-[#050d1a] overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/8 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-indigo-600/8 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-16">
          <span className="inline-block text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-400/10 border border-blue-400/20 px-4 py-2 rounded-full mb-5">
            Global Presence
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            We Work in <span className="text-blue-400">70+ Countries</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base">
            From startups in Silicon Valley to enterprises in Europe and the Middle East — MershilTech delivers world-class software globally.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {countries.map((c, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer" style={{ height: 280 }}>
              <img src={c.img} alt={c.name} loading="lazy" decoding="async"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-end p-5">
                <div className="flex items-center gap-1.5 mb-1">
                  <MapPin size={11} className="text-blue-400" />
                  <span className="text-white/50 text-xs">{c.city}</span>
                </div>
                <h3 className="text-white font-bold text-lg leading-tight">{c.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-blue-300 text-xs font-semibold">{c.clients} clients</span>
                  <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <span className="text-white text-xs">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
          {[["70+", "Countries Served"], ["500+", "Global Clients"], ["24/7", "Support Coverage"], ["3", "Continents Active"]].map(([n, l], i) => (
            <motion.div key={i} variants={fadeUp} custom={i}
              className="bg-white/5 border border-white/8 rounded-2xl p-6 text-center">
              <CountUp value={n} className="text-3xl font-bold text-white mb-1 block tabular-nums" />
              <div className="text-white/40 text-sm">{l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
