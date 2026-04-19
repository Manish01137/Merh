import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { motion } from "framer-motion";
import {
  Shield, Eye, Cloud, ArrowRight, Phone, Zap, Users, AlertTriangle,
} from "lucide-react";
import { FaUserShield, FaBug, FaLock, FaNetworkWired, FaFileContract } from "react-icons/fa";
import MonogramPattern from "../components/effects/MonogramPattern";

const stats = [
  { n: "500+", l: "Security Audits" },
  { n: "0", l: "Client Breaches" },
  { n: "24/7", l: "SOC Monitoring" },
  { n: "4 min", l: "Avg Response" },
];

const services = [
  {
    icon: FaBug, slug: "penetration-testing",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    title: "Penetration Testing",
    desc: "Simulated real-world attacks on your apps, APIs, and infrastructure. OSCP-certified pen-testers deliver CVSS-scored findings with exploitation proof-of-concept.",
  },
  {
    icon: FaFileContract, slug: "security-audit-compliance",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    title: "Security Audit & Compliance",
    desc: "SOC 2, ISO 27001, HIPAA, GDPR, PCI-DSS — end-to-end compliance programs that get you certified in months with sustainable controls.",
  },
  {
    icon: FaUserShield, slug: "managed-soc-services",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    title: "Managed SOC Services",
    desc: "24/7/365 SIEM monitoring with Splunk, Microsoft Sentinel, and CrowdStrike — 4-minute average alert-to-response time.",
  },
  {
    icon: Cloud, slug: "cloud-security",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    title: "Cloud Security",
    desc: "AWS, Azure, GCP hardening with IAM least-privilege, Kubernetes security, CSPM tooling, and continuous compliance monitoring.",
  },
  {
    icon: FaLock, slug: "application-security",
    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    title: "Application Security",
    desc: "Shift-left AppSec with SAST, DAST, SCA integrated into CI/CD. Threat modeling, code review, and developer training.",
  },
  {
    icon: FaNetworkWired, slug: "incident-response",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    title: "Incident Response & Forensics",
    desc: "Retainer-based DFIR with 1-hour SLA. Ransomware, containment, forensics, regulatory reporting, and post-incident hardening.",
  },
];

const threats = [
  { icon: AlertTriangle, title: "Ransomware Attacks", desc: "Every 11 seconds a business is hit by ransomware. Average ransom demand: $1.5M." },
  { icon: Eye, title: "Data Breaches", desc: "Average breach costs $4.88M in 2025. Takes 277 days to identify and contain." },
  { icon: Zap, title: "Zero-Day Exploits", desc: "Novel vulnerabilities exploited before patches exist. Requires proactive defense." },
  { icon: Users, title: "Insider Threats", desc: "60% of breaches involve insiders — negligent or malicious. Needs behavioral monitoring." },
];

const certifications = [
  "OSCP", "CEH", "CISSP", "CISM", "CCSP", "AWS Security Specialty",
  "ISO 27001 Lead Auditor", "CompTIA Security+", "GPEN", "GCFA",
];

const process = [
  { title: "Discover", desc: "Risk assessment, threat modeling, and attack-surface analysis aligned to your business context." },
  { title: "Design", desc: "Security architecture, control mapping, and implementation blueprints reviewed with your team." },
  { title: "Deploy", desc: "Harden configurations, deploy SIEM, tune detection rules, and develop runbooks." },
  { title: "Defend", desc: "24/7 monitoring, threat hunting, vulnerability management, and monthly executive reports." },
  { title: "Evolve", desc: "Quarterly purple-team exercises and adversary-emulation drills keep your defenses ahead." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

export default function Cybersecurity() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white relative overflow-hidden">
        <MonogramPattern opacity={0.04} size={110} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="cgrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern></defs>
            <rect width="100%" height="100%" fill="url(#cgrid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm">
                <Shield size={14} /> Enterprise Cybersecurity
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold leading-[1.06] tracking-tight mb-5">
                Defend Your Business<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Against Modern Threats
                </span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-blue-200/70 text-lg leading-relaxed mb-8 max-w-lg">
                MershilTech delivers end-to-end cybersecurity services — penetration testing, 24/7 managed SOC, compliance programs, cloud security, and incident response — backed by certified security engineers and zero breaches on our watch.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-8">
                <Link to="/contact" className="flex items-center gap-2 bg-white text-blue-950 px-7 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg">
                  <Phone size={16} /> Book Security Audit
                </Link>
                <Link to="/services/cybersecurity" className="flex items-center gap-2 border border-white/25 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/10 transition backdrop-blur-sm">
                  Explore Services <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div variants={stagger} className="grid grid-cols-4 gap-4 pt-6 border-t border-white/10">
                {stats.map((s, i) => (
                  <motion.div key={i} variants={fadeUp} custom={i}>
                    <p className="text-2xl font-bold text-white">{s.n}</p>
                    <p className="text-blue-300/60 text-xs mt-0.5">{s.l}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/50 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&q=80"
                  alt="Cybersecurity operations"
                  loading="eager"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-bold uppercase tracking-widest">Live SOC Active</span>
                  </div>
                  <p className="text-white font-bold text-lg">Threat detected → contained in 3 minutes</p>
                  <p className="text-blue-200/70 text-sm">CrowdStrike Falcon · Splunk Enterprise · Microsoft Sentinel</p>
                </div>
              </div>
              {/* Floating cert badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center">
                  <Shield size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">ISO 27001</p>
                  <p className="text-gray-500 text-xs">Certified Practices</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THREAT LANDSCAPE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="inline-block text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 bg-blue-100 px-4 py-2 rounded-full">Threat Landscape</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">The Threats You're Up Against</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Modern attackers are sophisticated, automated, and persistent. Your defense needs to be too.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {threats.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div key={i} variants={fadeUp} custom={i} whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{t.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SERVICES WITH IMAGES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="inline-block text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 bg-blue-100 px-4 py-2 rounded-full">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Complete Cybersecurity Coverage</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">From penetration testing to 24/7 SOC monitoring — we harden every layer of your stack with proven frameworks and certified experts.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={i} variants={fadeUp} custom={i} whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-300">
                  <Link to={`/services/cybersecurity/${s.slug}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <img src={s.img} alt={s.title} loading="lazy" decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute top-4 right-4 w-11 h-11 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition">{s.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                      <span className="text-blue-700 font-semibold text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                        Learn More <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <MonogramPattern opacity={0.035} size={100} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="inline-block text-blue-300 text-xs font-bold uppercase tracking-widest mb-4 bg-blue-800/50 border border-blue-700/30 px-4 py-2 rounded-full">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-3">The MershilTech Security Lifecycle</h2>
            <p className="text-blue-300/70 max-w-xl mx-auto">5D framework: Discover, Design, Deploy, Defend, Evolve.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}
                className="relative bg-white/[0.05] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-blue-500/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center mb-4 text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-white mb-2">{p.title}</h3>
                <p className="text-blue-300/60 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <span className="inline-block text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 bg-blue-100 px-4 py-2 rounded-full">Our Team Credentials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Certified Security Professionals</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Every engineer holds at least one globally recognized security certification.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {certifications.map((c, i) => (
              <motion.span key={i} variants={fadeUp} custom={i}
                whileHover={{ scale: 1.06, y: -2 }}
                className="bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm px-5 py-2.5 rounded-xl hover:border-blue-300 hover:bg-blue-100 transition cursor-default shadow-sm">
                {c}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 relative overflow-hidden">
        <MonogramPattern opacity={0.06} size={120} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">Don't Wait for a Breach to Act</h2>
            <p className="text-blue-100/80 mb-8 text-lg max-w-xl mx-auto">
              Get a free security assessment from certified MershilTech experts. Identify gaps, prioritize fixes, and harden your posture within days.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-xl">
                <Phone size={18} /> Book Free Audit
              </Link>
              <Link to="/services/cybersecurity" className="flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold hover:border-white hover:bg-white/10 transition">
                Explore All Services <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
