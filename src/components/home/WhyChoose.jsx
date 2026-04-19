import { ShieldCheck, Zap, Users, Award, Clock, HeartHandshake, Code2, Globe, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import CountUp from "../effects/CountUp";
import TextReveal from "../effects/TextReveal";

const features = [
  { icon: ShieldCheck, title: "Enterprise-Grade Security", desc: "Bank-level security with encryption, compliance frameworks, and penetration testing on every product we ship.", col: "text-blue-600 bg-blue-50" },
  { icon: Zap, title: "Blazing Fast Delivery", desc: "Agile sprints, CI/CD pipelines, and lean processes mean you get working product faster than anyone else.", col: "text-yellow-600 bg-yellow-50" },
  { icon: Users, title: "Top 1% Developers", desc: "Rigorously vetted engineers with proven track records across startups and Fortune 500 companies.", col: "text-green-600 bg-green-50" },
  { icon: Award, title: "Award-Winning Work", desc: "Recognized by Clutch, TopDevelopers, and DesignRush as a top-rated global software development firm.", col: "text-purple-600 bg-purple-50" },
  { icon: Code2, title: "Full-Stack Expertise", desc: "From UI design to cloud infrastructure — we handle every layer of your tech stack in-house.", col: "text-indigo-600 bg-indigo-50" },
  { icon: HeartHandshake, title: "True Partnership", desc: "We act as your extended engineering team — embedded in your culture, invested in your success.", col: "text-rose-600 bg-rose-50" },
  { icon: Globe, title: "Global Delivery", desc: "Follow-the-sun model with teams across 3 continents ensures round-the-clock development.", col: "text-cyan-600 bg-cyan-50" },
  { icon: Clock, title: "On-Time, Every Time", desc: "98% of projects delivered on schedule with full transparency throughout.", col: "text-orange-600 bg-orange-50" },
];

const stats = [["1100+", "Projects Shipped"], ["98%", "On-Time Delivery"], ["4.9/5", "Client Rating"], ["0", "Hidden Fees"]];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

export default function WhyChoose() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-100/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 bg-blue-100 px-4 py-2 rounded-full"
            >
              Why to Choose Us
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight tracking-tight"
            >
              <TextReveal>The Engineering Partner</TextReveal>
              <br />
              <TextReveal delay={0.3} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">
                You've Been Looking For
              </TextReveal>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg"
            >
              We don't just build software — we build partnerships. MershilTech combines technical excellence with deep business understanding to deliver products that move the needle.
            </motion.p>

            {/* Hero image */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 mb-6 group"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="MershilTech Team"
                loading="lazy"
                decoding="async"
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-900/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div>
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">Our Team</p>
                  <p className="text-white font-bold text-lg">130+ Elite Engineers</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-blue-700 transition">
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
              {stats.map(([n, l], i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition"
                >
                  <CountUp value={n} className="text-2xl font-bold text-blue-700 mb-0.5 block tabular-nums" />
                  <p className="text-gray-500 text-sm">{l}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — features */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={stagger}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className="group bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${f.col}`}
                  >
                    <Icon size={20} />
                  </motion.div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1.5 group-hover:text-blue-700 transition">{f.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-blue-900/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-indigo-400/10 blur-3xl" />
          </div>
          <div className="relative">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-1">Ready to start building with us?</h3>
            <p className="text-blue-100/80 text-sm">Free consultation — response in under 30 minutes.</p>
          </div>
          <Link
            to="/contact"
            className="relative flex items-center gap-2 bg-white text-blue-700 px-7 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition shadow-xl whitespace-nowrap"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
