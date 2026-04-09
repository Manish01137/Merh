import { useParams, Link } from "react-router-dom";
import { getHireDeveloperData } from "../data/hireDeveloperData";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Phone, MessageSquare, CheckCircle2, Star, ArrowRight, Users, Clock, Shield } from "lucide-react";
import { ServiceIcon } from "../utils/serviceIcons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ratings = [
  { name:"Clutch", score:"5.0" },
  { name:"Google", score:"4.7" },
  { name:"TopDev", score:"5.0" },
  { name:"DesignRush", score:"5.0" },
];

function HireFAQ({ role }) {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q:`How quickly can I onboard a ${role?.replace("Hire ","")}?`, a:"We match you with pre-vetted developers within 24 hours. Onboarding takes just 48 hours — your developer joins your Slack, attends standups, and pushes code on day one." },
    { q:"What is your vetting process?", a:"Only 3% of applicants pass our 5-stage screening: coding challenge, system design review, code review, communication assessment, and cultural fit evaluation. Every developer has 5+ years of production experience." },
    { q:"Can I try before committing?", a:"Yes. We offer a 1-week risk-free trial. If you're not 100% satisfied after the first week, we replace the developer or give you a full refund — no questions asked." },
    { q:"What if the developer doesn't meet expectations?", a:"We offer free replacement within 48 hours if any developer doesn't meet your standards. We stand behind our vetting process 100%." },
    { q:"Do you offer flexible contracts?", a:"Absolutely. All contracts are month-to-month with no lock-in. You can scale up, scale down, or cancel with just 30 days' notice and zero penalty fees." },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 bg-blue-50 px-4 py-2 rounded-full">FAQ</span>
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq,i)=>(
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
              <button onClick={()=>setOpen(open===i?null:i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors">
                <span className="font-semibold text-slate-900 pr-4 text-sm md:text-base">{faq.q}</span>
                <motion.div animate={{rotate:open===i?45:0}} transition={{duration:0.25}}
                  className="shrink-0 w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                  <ArrowRight size={13}/>
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open===i && (
                  <motion.div key="body" initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}}
                    exit={{height:0,opacity:0}} transition={{duration:0.3,ease:"easeInOut"}}>
                    <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HireDeveloper() {
  const { role } = useParams();
  const d = getHireDeveloperData(role);

  const otherRoles = [
    ["dedicated-developers","laptop","Hire Dedicated Developers"],
    ["react-developers","react","Hire ReactJS Developers"],
    ["node-developers","nodejs","Hire NodeJS Developers"],
    ["flutter-developers","flutter","Hire Flutter Developers"],
    ["mobile-app-developers","mobile","Hire Mobile Developers"],
    ["android-developers","android","Hire Android Developers"],
  ].filter(r => r[0] !== role).slice(0, 4);

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-28 pb-0 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-700/50 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <Star size={12} className="text-yellow-400"/> Top 3% Vetted — Available in 48 Hours
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">{d.title}</h1>
              <p className="text-blue-100/80 text-lg leading-relaxed mb-6 max-w-lg">{d.heroDesc}</p>

              <div className="grid grid-cols-2 gap-2.5 mb-8">
                {d.skills.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 text-blue-100 text-sm">
                    <CheckCircle2 size={14} className="text-blue-400 flex-shrink-0" />{s}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/contact" className="flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg">
                  <Phone size={16} /> Book a Discovery Call
                </Link>
                <Link to="/contact" className="flex items-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-xl font-bold hover:border-white hover:bg-white/10 transition backdrop-blur-sm">
                  <MessageSquare size={16} /> Talk to an Expert
                </Link>
              </div>

              <div className="flex flex-wrap gap-6">
                {[
                  { icon: Users, label: "500+ Engineers", sub: "Available Now" },
                  { icon: Clock, label: "48hr Onboarding", sub: "Ready to Start" },
                  { icon: Shield, label: "Zero Risk Trial", sub: "1-Week Guarantee" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-800/60 rounded-xl flex items-center justify-center border border-blue-700/50">
                        <Icon size={18} className="text-blue-300" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{item.label}</p>
                        <p className="text-blue-400 text-xs">{item.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right – form */}
            <div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-7">
                <h3 className="text-white font-bold text-lg text-center mb-1">Get Matched with Developers</h3>
                <p className="text-blue-200 text-sm text-center mb-5">
                  Share requirements — receive matched profiles within{" "}
                  <span className="text-white font-bold">24 hours</span>
                </p>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200/60 text-sm focus:outline-none focus:border-blue-300 w-full"
                      placeholder="Your Name *"
                    />
                    <input
                      type="email"
                      className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200/60 text-sm focus:outline-none focus:border-blue-300 w-full"
                      placeholder="Email *"
                    />
                  </div>
                  <input
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200/60 text-sm focus:outline-none focus:border-blue-300 w-full"
                    placeholder="Phone Number *"
                  />
                  <select className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-blue-200 text-sm focus:outline-none focus:border-blue-300 w-full">
                    <option className="text-gray-900">Team Size Needed</option>
                    <option className="text-gray-900">1 Developer</option>
                    <option className="text-gray-900">2–3 Developers</option>
                    <option className="text-gray-900">4–6 Developers</option>
                    <option className="text-gray-900">7+ Developers</option>
                  </select>
                  <select className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-blue-200 text-sm focus:outline-none focus:border-blue-300 w-full">
                    <option className="text-gray-900">Engagement Model</option>
                    <option className="text-gray-900">Full-Time (8 hrs/day)</option>
                    <option className="text-gray-900">Part-Time (4 hrs/day)</option>
                    <option className="text-gray-900">Hourly (As needed)</option>
                  </select>
                  <textarea
                    rows={3}
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200/60 text-sm focus:outline-none focus:border-blue-300 w-full resize-none"
                    placeholder="Describe your project and tech stack..."
                  />
                  <button className="w-full bg-blue-500 hover:bg-blue-400 text-white py-3.5 rounded-xl font-bold transition">
                    Get Matched Developers →
                  </button>
                </div>
              </div>

              {/* Ratings bar */}
              <div className="grid grid-cols-4 gap-2 mt-3">
                {ratings.map((r, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-2.5 text-center border border-white/10">
                    <p className="text-white/50 text-xs">{r.name}</p>
                    <div className="flex items-center gap-1 justify-center mt-0.5">
                      <span className="text-white font-bold text-xs">{r.score}</span>
                      <Star size={9} className="text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-10 bg-blue-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              ["500+", "Pre-Vetted Engineers"],
              ["48hrs", "Average Onboarding"],
              ["98%", "Client Retention Rate"],
              ["3%", "Acceptance Rate"],
            ].map(([n, l], i) => (
              <div key={i}>
                <p className="text-3xl font-bold mb-1">{n}</p>
                <p className="text-blue-200 text-sm">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3 bg-blue-50 px-4 py-1.5 rounded-full">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What Our {d.title.replace("Hire ", "")} Can Build For You
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From architecture decisions to final deployment — our developers own the full lifecycle of your product.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.subSkills.map((sk, i) => (
              <div
                key={i}
                className="group p-7 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-700 transition-all duration-300">
                    <ServiceIcon name={sk.icon} className="w-5 h-5 text-blue-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition pt-1">{sk.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{sk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MERSHILTECH ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3 bg-blue-100 px-4 py-1.5 rounded-full">
                Why MershilTech
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Why Hire {d.title.replace("Hire ", "")} From MershilTech?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                MershilTech offers highly skilled and dedicated developers who bring innovation, reliability, and technical excellence to every project. When you hire from us, you get engineers who work as your extended in-house team — transparent, committed, and results-driven from day one.
              </p>
              <div className="space-y-5">
                {d.whyHire.map((w, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{w.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {/* Tech stack card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-3">
                  Empower Your Project With Skilled Developers
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Our {d.title.replace("Hire ", "")} combine technical mastery with strategic insight.
                  They integrate seamlessly into your workflow, adopt your coding standards, and deliver
                  production-ready code from day one.
                </p>
                <div className="flex flex-wrap gap-2">
                  {d.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-blue-50 text-blue-700 font-semibold px-3 py-1.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code quality card */}
              <div className="bg-blue-700 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Star size={20} className="text-yellow-300"/>
                  </div>
                  <div>
                    <p className="font-bold">Code Quality Guaranteed</p>
                    <div className="flex text-yellow-300 text-xs">{"★★★★★"}</div>
                  </div>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed mb-4">
                  Every developer follows strict coding standards, passes code reviews, and delivers
                  comprehensive documentation. Your codebase stays clean, scalable, and maintainable.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-50 transition"
                >
                  Get The Best Talent <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIRING MODELS ── */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Our Flexible Hiring Models</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Choose the engagement model that fits your project scope, timeline, and budget. No lock-in.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {d.models.map((m, i) => (
              <div
                key={i}
                className={`rounded-2xl p-7 border transition hover:-translate-y-1 ${
                  i === 1
                    ? "border-blue-500 bg-gray-800 shadow-xl shadow-blue-900/20"
                    : "border-gray-700 bg-gray-800"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-400 font-bold text-lg">
                    {m.title[0]}
                  </div>
                  <h3 className="text-white font-bold text-xl">{m.title}</h3>
                  {i === 1 && (
                    <span className="ml-auto text-xs bg-blue-600 text-white px-2.5 py-1 rounded-full font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-white">{m.price}</span>
                  <p className="text-blue-400 text-xs mt-0.5 font-medium">{m.savings}</p>
                </div>
                <div className="w-full h-px bg-gray-700 mb-4"></div>
                <div className="space-y-2 mb-6">
                  {[
                    { l: "Hours", v: m.hours },
                    { l: "Schedule", v: m.days },
                    { l: "Billing", v: m.billing },
                  ].map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 size={14} className="text-blue-400 flex-shrink-0" />
                      <span className="text-gray-500">{item.l}:</span> {item.v}
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition text-sm"
                >
                  Hire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3 bg-blue-50 px-4 py-1.5 rounded-full">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Step-by-Step Hiring Guide
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our streamlined process gets you matched with the right developer and onboarded in as little as 48 hours.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {d.process.map((step, i) => (
              <div
                key={i}
                className="group text-center p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-blue-100 transition"
              >
                <div className="w-12 h-12 mx-auto bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 group-hover:scale-110 transition">
                  {i + 1}
                </div>
                <p className="font-bold text-gray-900 group-hover:text-blue-700 transition text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <HireFAQ role={d.title} />

      {/* ── ALSO HIRE ── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Also Hire</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherRoles.map(([slug, icon, name], i) => (
              <Link
                key={i}
                to={`/hire/${slug}`}
                className="group flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 hover:shadow-md hover:border-blue-200 transition"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-700 transition-all duration-300">
                  <ServiceIcon name={icon} className="w-5 h-5 text-blue-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-semibold text-gray-700 text-sm group-hover:text-blue-700 transition leading-tight">
                  {name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-80 h-80 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Ready to Hire?</h2>
          <p className="text-blue-100 mb-8 text-lg max-w-xl mx-auto">
            Tell us your requirements and get matched with top developers within 24 hours.
            Zero risk, flexible contracts, instant scaling.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-xl"
            >
              <Phone size={18} /> Get Free Consultation
            </Link>
            <Link
              to="/hire"
              className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition"
            >
              View All Roles <ArrowRight size={18} />
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-6">✓ 500+ Engineers &nbsp;✓ 48hr Onboarding &nbsp;✓ Zero Risk Trial &nbsp;✓ Flexible Contracts</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
