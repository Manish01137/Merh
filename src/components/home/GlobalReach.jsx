import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const countries = [
  { name: "Australia", city: "Sydney, NSW (HQ)", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80", clients: "Headquarters" },
  { name: "United Kingdom", city: "London, England", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80", clients: "European hub" },
  { name: "India", city: "Jaipur, Rajasthan", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80", clients: "Offshore engineering" },
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
        {/* Small eyebrow badge only — full heading moves below the photos */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-10">
          <span className="inline-block text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-400/10 border border-blue-400/20 px-4 py-2 rounded-full">
            Our Global Presence
          </span>
        </motion.div>

        {/* Photos first */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {countries.map((c, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer" style={{ height: 300 }}>
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
                <span className="text-blue-300 text-xs font-semibold mt-2">{c.clients}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Text below the photos */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mt-14 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Engineering Excellence, <span className="text-blue-400">Delivered Worldwide</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            Headquartered in Sydney with offshore engineering hubs in London and Jaipur, MershilTech
            delivers world-class software around the clock. Our follow-the-sun model means your
            product is being built, tested, and shipped 24 hours a day.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
