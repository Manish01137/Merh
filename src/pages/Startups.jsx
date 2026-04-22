import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { motion } from "framer-motion";
import MonogramPattern from "../components/effects/MonogramPattern";
import ProblemFitSection from "../components/common/ProblemFitSection";
import AnimatedProcessTimeline from "../components/common/AnimatedProcessTimeline";
import { startupProblemsFit } from "../data/problemFitContent";

const startupProcess = [
  { title: "Idea Validation Workshop", desc: "A 2-hour founder workshop with our Sydney team — we pressure-test your idea, map the riskiest assumptions, and agree what an MVP actually needs to prove. No fluff, no 40-page decks." },
  { title: "Lean MVP Scope", desc: "We cut features ruthlessly to the 3-4 that validate your core hypothesis. You walk away with a fixed-scope, fixed-budget plan investors understand and engineers can ship in 10-12 weeks." },
  { title: "Design & Interactive Prototype", desc: "Clickable Figma prototype tested with 5-10 real users before we write a single line of code. Pivot cheaply, not after 3 months of engineering." },
  { title: "10-12 Week Agile Build", desc: "Two-week sprints with Friday demos. Jira transparent, GitHub visible, daily standups in your timezone. You see progress every two weeks, not at a single huge reveal." },
  { title: "Launch & Instrument", desc: "Production deploy with analytics (Mixpanel / Amplitude), crash monitoring (Sentry), feature flags, and A/B tests pre-wired. Your growth team can iterate on day one." },
  { title: "Iterate to Product-Market Fit", desc: "3 months of included post-launch support plus weekly growth reviews. We stay invested until you hit the metrics that unlock your next round." },
];
import {
  Rocket, Zap, Target, TrendingUp, Users, DollarSign,
  ArrowRight, Phone, CheckCircle2, Lightbulb, Clock, Award,
} from "lucide-react";

const stats = [
  { n: "120+", l: "Startups Launched" },
  { n: "$500M+", l: "Client Funding Raised" },
  { n: "12 wks", l: "Avg MVP Delivery" },
  { n: "35%", l: "Startup Discount" },
];

const offerings = [
  {
    icon: Rocket,
    title: "MVP in 12 Weeks",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    desc: "Launch a feature-complete MVP in 12 weeks or less. We help you ship fast, measure traction, and iterate on what actually resonates with users.",
    bullets: ["Feature prioritization", "Weekly demos", "Investor-ready product"],
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    desc: "From idea to interactive prototype in 2 weeks. Validate your concept with real users before investing engineering resources.",
    bullets: ["Figma prototypes", "User testing", "Pivot-ready architecture"],
  },
  {
    icon: Target,
    title: "Product-Market Fit",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    desc: "Embedded product strategists help you find PMF — cohort analysis, funnel optimization, and iteration cycles that drive retention.",
    bullets: ["Analytics setup", "A/B testing", "Retention engineering"],
  },
  {
    icon: TrendingUp,
    title: "Scale-Ready Stack",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    desc: "Modern cloud-native architecture that handles 10x growth without a painful rewrite. Built on AWS, React, Node.js.",
    bullets: ["Auto-scaling infra", "Observability from day 1", "CI/CD pipelines"],
  },
  {
    icon: Users,
    title: "Fractional CTO",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    desc: "Senior engineering leadership without a full-time hire. Technology strategy, architecture review, and team building support.",
    bullets: ["10+ years leadership", "Investor diligence support", "Tech hiring advisory"],
  },
  {
    icon: DollarSign,
    title: "Startup-Friendly Pricing",
    img: "https://images.unsplash.com/photo-1579621908742-d81ba772b1d3?w=800&q=80",
    desc: "Up to 35% startup discount, deferred payment options, and equity-for-services arrangements for promising early-stage ventures.",
    bullets: ["35% discount", "Equity partnerships", "Flexible billing"],
  },
];

const stages = [
  {
    phase: "Pre-Seed",
    title: "Idea → Prototype",
    desc: "Validate your concept, build a clickable prototype, and test with target users. We help you craft the pitch that attracts your first check.",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
    items: ["Market research & competitor analysis", "Figma prototype", "User interviews & validation", "Pitch deck technical section"],
  },
  {
    phase: "Seed",
    title: "Prototype → MVP",
    desc: "Ship a feature-complete MVP with real users and revenue. Built on a foundation that scales — no rewrites needed at Series A.",
    icon: Rocket,
    color: "from-blue-600 to-indigo-600",
    items: ["Feature-complete MVP in 12 weeks", "Payment integration", "Analytics & growth loops", "Beta launch with 100+ users"],
  },
  {
    phase: "Series A+",
    title: "Scale → Dominate",
    desc: "Rearchitect for scale, add enterprise features, and build the engineering org that takes you to Series B and beyond.",
    icon: Award,
    color: "from-purple-600 to-pink-600",
    items: ["Microservices architecture", "SOC 2 compliance", "Engineering org hiring", "Enterprise sales features"],
  },
];

const successStories = [
  { name: "TruuBlue", cat: "Dating", result: "50K+ downloads in 3 months", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" },
  { name: "HomesBasket", cat: "On-Demand", result: "1M+ deliveries in year 1", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
  { name: "WFFA Sports", cat: "SportsTech", result: "$3M Series A raised", img: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&q=80" },
];

const benefits = [
  "No hidden costs or surprise fees",
  "Fixed-price MVP packages available",
  "Up to 35% startup discount",
  "Equity-for-services partnerships",
  "Free 1-week trial with dedicated team",
  "IP fully owned by you from day 1",
  "NDAs signed before any discussion",
  "Dedicated Slack channel + daily standups",
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

export default function Startups() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-950 text-white relative overflow-hidden">
        <MonogramPattern opacity={0.04} size={110} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-3xl" />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-cyan-400/40 blur-sm"
          />
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-2/3 right-20 w-2 h-2 rounded-full bg-blue-400/40 blur-sm"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm">
                <Rocket size={14} /> For Founders & Startups
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold leading-[1.06] tracking-tight mb-5">
                From Idea to IPO —<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  We Build With You
                </span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-blue-200/70 text-lg leading-relaxed mb-8 max-w-lg">
                MershilTech has launched 120+ startups across every stage — from pre-seed prototypes to Series-C scale-ups. We ship MVPs in 12 weeks, raise investor confidence, and build products that users love and VCs fund.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-8">
                <Link to="/contact" className="flex items-center gap-2 bg-white text-blue-950 px-7 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg">
                  <Phone size={16} /> Free Founder Call
                </Link>
                <Link to="/services" className="flex items-center gap-2 border border-white/25 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/10 transition backdrop-blur-sm">
                  View Services <ArrowRight size={16} />
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
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=80"
                  alt="Startup team"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-bold uppercase tracking-widest">Now Launching</span>
                  </div>
                  <p className="text-white font-bold text-lg">3 startups shipped this month</p>
                  <p className="text-blue-200/70 text-sm">Ready to be the next?</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                  <Rocket size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">12 Weeks</p>
                  <p className="text-gray-500 text-xs">Average MVP Delivery</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="inline-block text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 bg-blue-100 px-4 py-2 rounded-full">Startup Solutions</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Everything You Need to Launch & Grow</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">From prototyping to fundraising to scaling — we're your engineering partner at every stage of your startup journey.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o, i) => {
              const Icon = o.icon;
              return (
                <motion.div key={i} variants={fadeUp} custom={i} whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-300">
                  <div className="relative h-44 overflow-hidden">
                    <img src={o.img} alt={o.title} loading="lazy" decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4 w-11 h-11 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition">{o.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{o.desc}</p>
                    <ul className="space-y-1.5 mb-2">
                      {o.bullets.map((b, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle2 size={13} className="text-blue-600 flex-shrink-0" />{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* STAGES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="inline-block text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 bg-blue-100 px-4 py-2 rounded-full">Stage-Specific Support</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">We Grow With You</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Different stages need different strategies. Here's how we help from first commit to IPO.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-3 gap-6">
            {stages.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={i} variants={fadeUp} custom={i} whileHover={{ y: -8 }}
                  className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.color}`} />
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 block">{s.phase}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="inline-block text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 bg-blue-100 px-4 py-2 rounded-full">Success Stories</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">Startups We've Helped Launch</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Real products, real users, real revenue — built with our teams.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-3 gap-6">
            {successStories.map((s, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={s.img} alt={s.name} loading="lazy" decoding="async"
                  className="w-full h-80 object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <span className="self-start text-xs font-semibold text-white/90 bg-white/15 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-md">
                    {s.cat}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{s.name}</h3>
                    <p className="text-white/70 text-sm">{s.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white relative overflow-hidden">
        <MonogramPattern opacity={0.04} size={100} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="inline-block text-blue-300 text-xs font-bold uppercase tracking-widest mb-4 bg-blue-800/50 border border-blue-700/30 px-4 py-2 rounded-full">Why Startups Pick Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Built for Founders, by Founders</h2>
              <p className="text-blue-200/70 text-lg mb-8 leading-relaxed">
                We've been in your shoes. Every engagement comes with founder-friendly terms designed to help you succeed, not to squeeze margins out of you.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-blue-900 px-7 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg">
                <Phone size={16} /> Schedule Founder Call
              </Link>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid grid-cols-2 gap-3">
              {benefits.map((b, i) => (
                <motion.div key={i} variants={fadeUp} custom={i}
                  className="flex items-start gap-2.5 bg-white/[0.05] border border-white/10 rounded-xl p-4 hover:bg-white/[0.08] hover:border-blue-400/30 transition">
                  <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-100/90 text-sm font-medium">{b}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated startup delivery process */}
      <AnimatedProcessTimeline
        steps={startupProcess}
        eyebrow="Our MVP Delivery Process"
        heading={<>From Napkin Sketch to <span className="text-blue-700">Shipped MVP</span></>}
        subtitle="A 10-12 week playbook refined across 350+ projects — purpose-built for Australian founders who need to validate fast, raise confidently, and ship before the runway runs out."
      />

      {/* Problems AU startups face + how MershilTech offshore fits */}
      <ProblemFitSection {...startupProblemsFit} id="startup-fit" />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 relative overflow-hidden">
        <MonogramPattern opacity={0.06} size={120} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">Let's Ship Your Startup</h2>
            <p className="text-blue-100/80 mb-8 text-lg max-w-xl mx-auto">
              Book a free 30-minute founder call. We'll map out your MVP, timeline, and budget — with no strings attached.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-xl">
                <Phone size={18} /> Free Founder Call
              </Link>
              <Link to="/hire" className="flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold hover:border-white hover:bg-white/10 transition">
                Hire a Team <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
