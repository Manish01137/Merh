import { useParams, Link } from "react-router-dom";
import { getSubServiceData } from "../data/subServicesData";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Phone, MessageSquare, ChevronRight, ArrowRight, ArrowUpRight,
  CheckCircle, Shield, Zap, Cloud, FlaskConical, BarChart3, Headphones,
  Search, Star, Clock, Users, Award, TrendingUp
} from "lucide-react";
import {
  FaAndroid, FaApple, FaReact, FaCode, FaRobot, FaBrain,
  FaMobileAlt, FaShoppingCart, FaCloud, FaShieldAlt,
  FaCogs, FaChartBar, FaLaptopCode, FaGlobe, FaLayerGroup,
  FaComments, FaEthereum, FaCubes,
  FaMoneyBillWave, FaUserTie,
  FaGraduationCap,
  FaStore, FaWallet,
  FaServer, FaMicrochip,
  FaHandshake, FaDog, FaCar, FaUtensils, FaHome, FaSpa,
  FaHeartbeat, FaBitcoin, FaChartLine,
  FaDesktop, FaWordpressSimple, FaShopify, FaLaravel,
  FaNodeJs,
} from "react-icons/fa";
import { SiNextdotjs, SiFlutter, SiSolidity, SiTensorflow, SiSalesforce } from "react-icons/si";
import { MdWeb, MdSmartphone } from "react-icons/md";
import { BsGpuCard, BsLightningCharge, BsGear, BsEye } from "react-icons/bs";
import { FaAws } from "react-icons/fa";

// ─── Icon Map ────────────────────────────────────────────────────────────────
const ICON_MAP = {
  "android-app-development": FaAndroid,
  "ios-app-development": FaApple,
  "react-native-app-development": FaReact,
  "flutter-app-development": SiFlutter,
  "wearable-app-development": MdSmartphone,
  "pwa-development": FaGlobe,
  "ar-vr-app-development": BsGpuCard,
  "startup-app-development": BsLightningCharge,
  "mobile-app-maintenance": BsGear,
  "nextjs-development": SiNextdotjs,
  "reactjs-development": FaReact,
  "full-stack-development": FaLayerGroup,
  "laravel-development": FaLaravel,
  "wordpress-development": FaWordpressSimple,
  "shopify-development": FaShopify,
  "ecommerce-development": FaShoppingCart,
  "nodejs-development": FaNodeJs,
  "cms-development": MdWeb,
  "saas-platform-development": FaCloud,
  "erp-development": FaCogs,
  "crm-development": FaHandshake,
  "lms-development": FaGraduationCap,
  "desktop-app-development": FaDesktop,
  "generative-ai-development": FaBrain,
  "ai-agent-development": FaRobot,
  "ai-chatbot-development": FaComments,
  "machine-learning-development": SiTensorflow,
  "computer-vision-development": BsEye,
  "llm-development": FaMicrochip,
  "nlp-development": FaServer,
  "smart-contract-development": SiSolidity,
  "nft-marketplace-development": FaCubes,
  "defi-protocol-development": FaChartLine,
  "metaverse-development": FaGlobe,
  "crypto-payment-gateway": FaBitcoin,
  "microsoft-azure-consulting": FaCloud,
  "aws-development": FaAws,
  "salesforce-consulting": SiSalesforce,
  "it-staff-augmentation": FaUserTie,
  "food-delivery-app": FaUtensils,
  "taxi-ride-hailing-app": FaCar,
  "grocery-delivery-app": FaStore,
  "ewallet-app": FaWallet,
  "dating-app-development": FaHeartbeat,
};

const getFeatureIcon = (title) => {
  if (title.includes("Fast") || title.includes("Speed")) return <Zap className="w-5 h-5" />;
  if (title.includes("Secure") || title.includes("Compli")) return <Shield className="w-5 h-5" />;
  if (title.includes("Cloud")) return <Cloud className="w-5 h-5" />;
  if (title.includes("Test")) return <FlaskConical className="w-5 h-5" />;
  if (title.includes("Analytics") || title.includes("Data")) return <BarChart3 className="w-5 h-5" />;
  if (title.includes("Support")) return <Headphones className="w-5 h-5" />;
  return <CheckCircle className="w-5 h-5" />;
};

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }
  }),
};

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
function FAQ({ faqs }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <motion.div key={i} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
          <button onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors">
            <span className="font-semibold text-slate-900 pr-4 text-sm md:text-base">{faq.q}</span>
            <motion.div animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25 }}
              className="shrink-0 w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
              <ArrowRight size={13} />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function SubServiceDetails() {
  const { slug, sub } = useParams();
  const s = getSubServiceData(sub);

  if (!s) return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Search className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">This service page is coming soon. Explore our services instead.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to={`/services/${slug}`} className="bg-blue-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-800 transition flex items-center gap-2">
            <ArrowRight size={16} /> View Services
          </Link>
          <Link to="/contact" className="border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition">
            Talk to Our Experts
          </Link>
        </div>
      </div>
    </div>
  );

  const IconComp = ICON_MAP[sub] || FaCode;

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-24 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white overflow-hidden relative">
        {/* Decorative BG */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="hgrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern></defs>
            <rect width="100%" height="100%" fill="url(#hgrid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 pb-0 relative">
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 text-blue-400 text-sm mb-10 flex-wrap">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight size={13} className="text-blue-600" />
            <Link to="/services" className="hover:text-white transition">Services</Link>
            <ChevronRight size={13} className="text-blue-600" />
            <Link to={`/services/${slug}`} className="hover:text-white transition capitalize">{slug?.replace(/-/g, " ")}</Link>
            <ChevronRight size={13} className="text-blue-600" />
            <span className="text-white font-medium">{s.title}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start pb-16">
            {/* Left */}
            <div>
              <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm">
                <IconComp className="w-4 h-4 text-blue-400" />
                {s.category}
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.08] tracking-tight mb-6">
                {s.title}
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-blue-200/70 text-lg leading-relaxed mb-8 max-w-lg">
                {s.desc}
              </motion.p>

              <motion.div initial="hidden" animate="visible" variants={stagger}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
                {s.bullets.map((b, i) => (
                  <motion.div key={i} variants={fadeUp} custom={i}
                    className="flex items-center gap-2.5 text-blue-100/80 text-sm">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                      <CheckCircle size={11} className="text-blue-400" />
                    </div>
                    {b}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-wrap gap-4">
                <Link to="/contact"
                  className="group flex items-center gap-2.5 bg-white text-blue-950 px-7 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg shadow-blue-900/30">
                  <Phone size={16} />
                  Book a Discovery Call
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition -ml-1" />
                </Link>
                <Link to="/contact"
                  className="flex items-center gap-2.5 border border-white/20 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/10 transition backdrop-blur-sm">
                  <MessageSquare size={16} />
                  Talk to Our Experts
                </Link>
              </motion.div>
            </div>

            {/* Right — Form */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 shadow-2xl shadow-black/40">
              <div className="text-center mb-6">
                <h3 className="text-white font-bold text-xl mb-1">Request a Free Consultation</h3>
                <p className="text-blue-300/80 text-sm">We respond within <span className="text-white font-bold">30 minutes</span></p>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input className="bg-white/[0.07] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-blue-300/50 text-sm focus:outline-none focus:border-blue-400/60 transition w-full" placeholder="Your Name *" />
                  <input className="bg-white/[0.07] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-blue-300/50 text-sm focus:outline-none focus:border-blue-400/60 transition w-full" placeholder="Email *" />
                </div>
                <input className="bg-white/[0.07] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-blue-300/50 text-sm focus:outline-none focus:border-blue-400/60 transition w-full" placeholder="Phone Number *" />
                <select className="bg-white/[0.07] border border-white/15 rounded-xl px-4 py-3 text-blue-300/80 text-sm focus:outline-none focus:border-blue-400/60 transition w-full">
                  <option className="text-gray-900 bg-white">Budget Range</option>
                  <option className="text-gray-900 bg-white">$5k – $10k</option>
                  <option className="text-gray-900 bg-white">$10k – $25k</option>
                  <option className="text-gray-900 bg-white">$25k – $50k</option>
                  <option className="text-gray-900 bg-white">$50k+</option>
                </select>
                <textarea rows={3} className="bg-white/[0.07] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-blue-300/50 text-sm focus:outline-none focus:border-blue-400/60 transition w-full resize-none"
                  placeholder={`Tell us about your ${s.title} project...`} />
                <div className="flex items-center gap-2 text-blue-200/70 text-sm">
                  <input type="checkbox" className="w-4 h-4 accent-blue-500 rounded" />
                  <label>Protect Under NDA</label>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-4 font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40">
                  Get Free Consultation <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-white/[0.08] bg-white/[0.04] backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {s.stats.map((st, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{st.n}</div>
                <div className="text-blue-300/70 text-xs mt-0.5">{st.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Everything You Need for<br /><span className="text-blue-700">{s.title}</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">A comprehensive, end-to-end approach covering every aspect from strategy to deployment and beyond.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {s.subFeatures.map((f, i) => (
              <motion.div key={i} variants={scaleIn} custom={i}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/40 group-hover:to-indigo-50/20 transition-all duration-500 rounded-2xl" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 group-hover:bg-blue-700 flex items-center justify-center text-blue-700 group-hover:text-white transition-all duration-300 mb-5 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-700/30">
                    {getFeatureIcon(f.title)}
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-blue-700 transition">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">Technology Stack</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Tools & Technologies We Use</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-wrap justify-center gap-3">
            {s.tech.map((t, i) => (
              <motion.span key={i} variants={scaleIn} custom={i}
                whileHover={{ scale: 1.06, y: -2 }}
                className="bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm px-5 py-2.5 rounded-xl hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition cursor-default shadow-sm">
                {t}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-50 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How We Deliver <span className="text-blue-700">{s.title}</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Proven, transparent process with full visibility at every step.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {s.process.map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="group bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-blue-100/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-blue-700 group-hover:bg-blue-600 text-white font-bold text-base flex items-center justify-center shrink-0 shadow-lg shadow-blue-700/30 group-hover:scale-110 transition duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="h-px flex-1 bg-slate-100 group-hover:bg-blue-100 transition" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2.5 text-lg group-hover:text-blue-700 transition">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-800/30 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-indigo-800/20 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="inline-block bg-blue-800/60 border border-blue-700/40 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">Why MershilTech</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The MershilTech Advantage</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Star className="w-6 h-6" />, n: "98%", label: "Client Satisfaction", desc: "Rated 4.9★ across all review platforms" },
              { icon: <Clock className="w-6 h-6" />, n: "48hrs", label: "Onboarding Time", desc: "From contract to first sprint kickoff" },
              { icon: <Users className="w-6 h-6" />, n: "200+", label: "Projects Delivered", desc: "Across 25+ countries and every industry" },
              { icon: <Award className="w-6 h-6" />, n: "15+", label: "Years Experience", desc: "Deep expertise across every stack" },
            ].map((item, i) => (
              <motion.div key={i} variants={scaleIn} custom={i}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-blue-500/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-2xl bg-blue-800/60 border border-blue-700/40 flex items-center justify-center text-blue-300 mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{item.n}</div>
                <div className="text-blue-300 font-semibold text-sm mb-2">{item.label}</div>
                <div className="text-blue-400/60 text-xs leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </motion.div>
          <FAQ faqs={s.faqs} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="white" />
            </pattern></defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white/90 text-sm font-semibold px-5 py-2.5 rounded-full mb-6">
              <TrendingUp size={15} /> Ready to get started?
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Start Your {s.title} Project Today
            </h2>
            <p className="text-blue-100/80 mb-10 text-lg max-w-2xl mx-auto">
              Join 200+ companies who've trusted MershilTech. Free consultation, no commitment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact"
                className="group bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-2xl shadow-blue-900/30 flex items-center gap-2.5">
                <Phone size={18} /> Get a Free Quote
                <ArrowUpRight size={15} className="opacity-0 group-hover:opacity-100 transition" />
              </Link>
              <Link to={`/services/${slug}`}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:border-white hover:bg-white/10 transition flex items-center gap-2">
                <ArrowRight size={18} /> Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
