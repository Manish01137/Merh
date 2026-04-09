import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, MessageSquare, ShieldCheck, Star, CheckCircle2,
  ArrowRight, ChevronRight, CheckCircle, Zap, Shield, Award,
  Globe, Clock, Users, TrendingUp
} from "lucide-react";
import { ServiceIcon } from "../utils/serviceIcons";

const ratings = [
  { name:"Clutch", score:"5.0" },
  { name:"Google", score:"4.7" },
  { name:"TopDev", score:"5.0" },
  { name:"DesignRush", score:"5.0" },
];

const testimonials = [
  { name:"James Richardson", role:"CEO, FinTech Startup", text:"MershilTech built our entire trading platform from scratch in 4 months. The code quality and architecture are exceptional — beyond what we expected.", avatar:"JR" },
  { name:"Sarah Mitchell", role:"Product Lead, HealthTech", text:"We hired their team to rebuild our patient app. Downloads went up 3x after launch. Truly a top-notch engineering partner.", avatar:"SM" },
  { name:"Arjun Mehta", role:"Founder, EduTech", text:"From ideation to App Store launch in 12 weeks. MershilTech's process is tight, communication is excellent, and the product is phenomenal.", avatar:"AM" },
];

const whyChoose = [
  { icon: Zap, title:"Blazing Fast Delivery", desc:"Agile sprints, CI/CD pipelines, and lean processes — working product in your hands faster than anyone else." },
  { icon: Shield, title:"Enterprise-Grade Security", desc:"OWASP, GDPR, HIPAA-ready. Security reviews on every PR with penetration testing on production builds." },
  { icon: Award, title:"Top 1% Engineers", desc:"Only 3% of applicants pass our 5-stage vetting. Every developer has a proven track record in production systems." },
  { icon: Globe, title:"24/7 Global Support", desc:"Follow-the-sun teams across 3 continents with SLA-backed response times and a dedicated project manager." },
  { icon: Clock, title:"On-Time, Every Time", desc:"98% of our projects are delivered on schedule. Full transparency via Jira, weekly demos, and daily standups." },
  { icon: Users, title:"True Partnership", desc:"We become your extended engineering team — invested in your roadmap, not just the current sprint." },
];

const fadeUp = {
  hidden:{opacity:0,y:24},
  visible:(i=0)=>({opacity:1,y:0,transition:{duration:0.55,delay:i*0.08,ease:[0.22,1,0.36,1]}})
};
const stagger = { visible:{ transition:{ staggerChildren:0.07 } } };

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button onClick={onToggle} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors">
        <span className="font-semibold text-slate-900 pr-4 text-sm md:text-base">{q}</span>
        <motion.div animate={{rotate:isOpen?45:0}} transition={{duration:0.25}}
          className="shrink-0 w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
          <ArrowRight size={13}/>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div key="body" initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}}
            exit={{height:0,opacity:0}} transition={{duration:0.3,ease:"easeInOut"}}>
            <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServiceDetails() {
  const { slug } = useParams();
  const s = servicesData.find(x => x.slug === slug);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q:`How long does a typical ${s?.title?.split(" ")[0]} project take?`, a:"Most projects take 8–16 weeks depending on scope and complexity. We provide a detailed timeline after the discovery phase with milestones and deliverables clearly defined." },
    { q:"What is your development process?", a:"We follow a 6-step process: Discovery → Architecture → Agile Development (2-week sprints) → QA Testing → Deployment → Ongoing Support. You have full visibility at every stage." },
    { q:"Do you sign an NDA before starting?", a:"Yes. We sign NDAs before any project discussions to fully protect your intellectual property and business idea. Confidentiality is a core part of our engagement process." },
    { q:"What are your engagement models?", a:"We offer Fixed Price, Time & Material, and Dedicated Team models. Most clients prefer Time & Material for flexibility, or Dedicated Team for ongoing product development." },
    { q:"Do you provide post-launch support?", a:"Yes. All projects include 3 months of post-launch support. After that, we offer flexible retainer plans for ongoing maintenance, feature additions, and performance monitoring." },
    { q:"How do you handle project communication?", a:"You get a dedicated project manager, daily standup updates, a private Slack channel, weekly demo calls, and full access to Jira for real-time progress tracking." },
  ];

  if (!s) return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <Link to="/services" className="text-blue-700 font-semibold hover:underline">← Back to Services</Link>
      </div>
    </div>
  );

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-24 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl"/>
          <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-3xl"/>
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="hg" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#hg)"/>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-0 relative">
          {/* Breadcrumb */}
          <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{duration:0.5}}
            className="flex items-center gap-1.5 text-blue-400 text-sm mb-10 flex-wrap">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight size={13} className="text-blue-600"/>
            <Link to="/services" className="hover:text-white transition">Services</Link>
            <ChevronRight size={13} className="text-blue-600"/>
            <span className="text-white font-medium">{s.title}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start pb-16">
            <div>
              <motion.div initial={{opacity:0,scale:0.85}} animate={{opacity:1,scale:1}} transition={{duration:0.5,delay:0.1}}
                className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm">
                <TrendingUp size={13} className="text-blue-400"/> MershilTech — Top Rated Agency
              </motion.div>
              <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.15,ease:[0.22,1,0.36,1]}}
                className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.08] tracking-tight mb-6">{s.title}</motion.h1>
              <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.25}}
                className="text-blue-200/70 text-lg leading-relaxed mb-8 max-w-lg">{s.heroDesc}</motion.p>
              <motion.div initial="hidden" animate="visible" variants={stagger}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
                {s.bullets.map((b,i)=>(
                  <motion.div key={i} variants={fadeUp} custom={i} className="flex items-center gap-2.5 text-blue-100/80 text-sm">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                      <CheckCircle size={11} className="text-blue-400"/>
                    </div>
                    {b}
                  </motion.div>
                ))}
              </motion.div>
              <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.45}}
                className="flex flex-wrap gap-4">
                <Link to="/contact" className="group flex items-center gap-2.5 bg-white text-blue-950 px-7 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg shadow-blue-900/30">
                  <Phone size={16}/> Book a Discovery Call
                </Link>
                <Link to="/contact" className="flex items-center gap-2.5 border border-white/20 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/10 transition backdrop-blur-sm">
                  <MessageSquare size={16}/> Talk to Our Experts
                </Link>
              </motion.div>
              {/* Trusted by */}
              <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6,delay:0.65}} className="mt-8">
                <p className="text-blue-400/60 text-xs font-semibold uppercase tracking-widest mb-3">Trusted by</p>
                <div className="flex gap-5 flex-wrap">
                  {["Nike","Red Bull","Whirlpool","WFFA","TruuBlue"].map((b,i)=>(
                    <span key={i} className="text-white/40 font-bold text-sm">{b}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} transition={{duration:0.7,delay:0.3,ease:[0.22,1,0.36,1]}}
              className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 shadow-2xl shadow-black/40">
              <div className="text-center mb-6">
                <h3 className="text-white font-bold text-xl mb-1">Request a Free Consultation</h3>
                <p className="text-blue-300/80 text-sm">We respond within <span className="text-white font-bold">30 minutes</span></p>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input className="bg-white/[0.07] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-blue-300/50 text-sm focus:outline-none focus:border-blue-400/60 transition w-full" placeholder="Your Name *"/>
                  <input className="bg-white/[0.07] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-blue-300/50 text-sm focus:outline-none focus:border-blue-400/60 transition w-full" placeholder="Email *"/>
                </div>
                <input className="bg-white/[0.07] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-blue-300/50 text-sm focus:outline-none focus:border-blue-400/60 transition w-full" placeholder="Phone Number *"/>
                <select className="bg-white/[0.07] border border-white/15 rounded-xl px-4 py-3 text-blue-300/80 text-sm focus:outline-none transition w-full">
                  <option className="text-gray-900 bg-white">Budget Range</option>
                  <option className="text-gray-900 bg-white">$5k – $10k</option>
                  <option className="text-gray-900 bg-white">$10k – $25k</option>
                  <option className="text-gray-900 bg-white">$25k – $50k</option>
                  <option className="text-gray-900 bg-white">$50k+</option>
                </select>
                <textarea rows={3} className="bg-white/[0.07] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-blue-300/50 text-sm focus:outline-none transition w-full resize-none"
                  placeholder={`Tell us about your ${s.title} project...`}/>
                <div className="flex items-center gap-2 text-blue-200/70 text-sm">
                  <input type="checkbox" className="w-4 h-4 accent-blue-500 rounded"/>
                  <label>Protect Under NDA</label>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-4 font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40">
                  Get Free Consultation <ArrowRight size={16}/>
                </button>
              </div>
              {/* Rating chips */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {ratings.map((r,i)=>(
                  <div key={i} className="bg-white/5 rounded-xl p-2 text-center border border-white/8">
                    <p className="text-white/40 text-[10px]">{r.name}</p>
                    <div className="flex items-center gap-0.5 justify-center mt-0.5">
                      <span className="text-white font-bold text-xs">{r.score}</span>
                      <Star size={8} className="text-yellow-400 fill-yellow-400"/>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-white/[0.08] bg-white/[0.04]">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {s.stats.map((st,i)=>(
              <motion.div key={i} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.5+i*0.08}} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{st.n}</div>
                <div className="text-blue-300/70 text-xs mt-0.5">{st.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUB SERVICES ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{s.expertTitle}</h2>
            <p className="text-slate-500 max-w-3xl mx-auto">{s.expertDesc}</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {s.subServices.map((ss,i)=>(
              <motion.div key={i} variants={fadeUp} custom={i}
                whileHover={{y:-6,transition:{duration:0.25}}}
                className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 relative overflow-hidden cursor-pointer"
                onClick={()=>window.location.href=`/services/${slug}/${ss.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/40 group-hover:to-indigo-50/20 transition-all duration-500 rounded-2xl"/>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 group-hover:bg-blue-700 flex items-center justify-center text-blue-700 group-hover:text-white transition-all duration-300 mb-5 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-700/30">
                    <ServiceIcon name={ss.icon} className="w-5 h-5"/>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-700 transition mb-2">{ss.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{ss.desc}</p>
                  <span className="text-blue-700 text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                    Learn More <ArrowRight size={11}/>
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why 500+ Companies Choose MershilTech</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We don't just deliver software — we deliver outcomes. Here's what makes us different from every other agency.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map(({icon:Icon,title,desc},i)=>(
              <motion.div key={i} variants={fadeUp} custom={i}
                whileHover={{y:-5,transition:{duration:0.25}}}
                className="group bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:shadow-xl hover:shadow-blue-100/40 hover:border-blue-100 hover:bg-white transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 group-hover:bg-blue-700 flex items-center justify-center text-blue-700 group-hover:text-white transition-all duration-300 mb-5">
                  <Icon size={20}/>
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Solutions for Every Business Stage</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Whether you're a scrappy startup or a Fortune 500 company, we have the right solution for your stage.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger}
            className="grid md:grid-cols-3 gap-6">
            {s.solutions.map((sol,i)=>(
              <motion.div key={i} variants={fadeUp} custom={i}
                whileHover={{y:-5,transition:{duration:0.25}}}
                className="group bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 group-hover:bg-blue-700 flex items-center justify-center text-blue-700 group-hover:text-white transition-all duration-300 mb-5">
                  <ServiceIcon name={sol.icon} className="w-6 h-6"/>
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-blue-700 transition">{sol.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{sol.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS (animated timeline) ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"/>
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Deliver Excellence</h2>
            <p className="text-slate-500 max-w-xl mx-auto">A proven, transparent process with full visibility at every step — from first conversation to production launch.</p>
          </motion.div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-100 -translate-x-1/2 hidden md:block"/>
            <div className="space-y-12">
              {s.process.map((step,i)=>(
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{once:true,margin:"-60px"}}
                  variants={fadeUp} custom={i}
                  className={`relative flex items-start gap-8 ${i%2===0?"md:flex-row":"md:flex-row-reverse"}`}>
                  <div className={`w-full md:w-[45%] ${i%2===0?"md:pr-10":"md:pl-10"}`}>
                    <motion.div whileHover={{y:-4,transition:{duration:0.25}}}
                      className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/40 hover:border-blue-100 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-11 h-11 rounded-xl bg-blue-700 group-hover:bg-blue-600 text-white font-bold text-base flex items-center justify-center shrink-0 shadow-lg shadow-blue-700/30 group-hover:scale-110 transition duration-300">
                          {String(i+1).padStart(2,"0")}
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-700 transition">{step.title}</h3>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>
                  {/* Center dot */}
                  <div className="absolute left-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-blue-700 bg-white z-10 hidden md:block"/>
                  <div className="hidden md:flex w-[45%] items-center justify-center">
                    <span className="text-6xl font-black text-slate-100">{String(i+1).padStart(2,"0")}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-20 bg-blue-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Industries We Serve</h2>
            <p className="text-blue-300/70">Deep domain expertise across the industries that matter most.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {s.industries.map((ind,i)=>(
              <motion.div key={i} variants={fadeUp} custom={i}
                className="bg-white/5 rounded-2xl p-4 border border-white/8 hover:bg-white/10 hover:border-blue-400/30 transition group cursor-pointer">
                <CheckCircle2 size={16} className="text-blue-400 mb-2"/>
                <p className="text-slate-200 text-sm font-medium group-hover:text-white transition">{ind}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Technologies We Use</h2>
            <p className="text-slate-500 text-sm">Modern, battle-tested stack for every project</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger}
            className="flex flex-wrap justify-center gap-3">
            {s.tech.map((t,i)=>(
              <motion.span key={i} variants={{hidden:{opacity:0,scale:0.85},visible:(i=0)=>({opacity:1,scale:1,transition:{duration:0.4,delay:i*0.05}})}}
                custom={i} whileHover={{scale:1.05,y:-2}}
                className="bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm px-5 py-2.5 rounded-xl hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition cursor-default shadow-sm">
                {t}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">Client Reviews</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">What Our Clients Say</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Real results from real partnerships — verified reviews from Clutch, Google, and DesignRush.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger}
            className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t,i)=>(
              <motion.div key={i} variants={fadeUp} custom={i}
                whileHover={{y:-5,transition:{duration:0.25}}}
                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(n=><Star key={n} size={14} className="text-yellow-400 fill-yellow-400"/>)}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-700 text-white text-xs font-bold flex items-center justify-center shrink-0">{t.avatar}</div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Rating badges */}
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger}
            className="flex flex-wrap justify-center gap-4 mt-10">
            {ratings.map((r,i)=>(
              <motion.div key={i} variants={fadeUp} custom={i}
                className="flex items-center gap-3 bg-white border border-slate-100 rounded-2xl px-5 py-3 shadow-sm">
                <div>
                  <p className="text-slate-400 text-xs font-semibold">{r.name}</p>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-slate-900">{r.score}</span>
                    <Star size={12} className="text-yellow-400 fill-yellow-400"/>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq,i)=>(
              <FAQItem key={i} q={faq.q} a={faq.a} isOpen={openFaq===i} onToggle={()=>setOpenFaq(openFaq===i?null:i)}/>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl"/>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl"/>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{s.cta}</h2>
            <p className="text-blue-100/80 mb-8 text-lg max-w-xl mx-auto">Let's discuss your project and build something extraordinary. Our experts are ready to help you succeed.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-xl">
                <Phone size={18}/> Get Free Consultation
              </Link>
              <Link to="/hire" className="flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:border-white hover:bg-white/10 transition">
                Hire Our Team <ArrowRight size={18}/>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-blue-200 text-sm">
              {["No Obligation","Respond in 24H","Secure NDA","Free Consultation"].map((t,i)=>(
                <span key={i} className="flex items-center gap-1.5"><CheckCircle size={13} className="text-blue-300"/>{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
