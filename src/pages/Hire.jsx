import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle, Users, Clock, Shield, Zap, Star } from "lucide-react";
import {
  FaAndroid, FaApple, FaReact, FaNodeJs, FaLaravel, FaPhp,
  FaAngular, FaJava, FaCode, FaGlobe, FaRocket, FaLayerGroup, FaDatabase,
} from "react-icons/fa";
import { SiFlutter, SiSolidity } from "react-icons/si";
import { MdSmartphone } from "react-icons/md";
import { BsLightningCharge, BsGear } from "react-icons/bs";

const roles = [
  { Icon: FaCode,       name:"Hire Dedicated Developers",  slug:"dedicated-developers",    desc:"Full-stack engineers dedicated exclusively to your project." },
  { Icon: MdSmartphone, name:"Hire Mobile App Developers",  slug:"mobile-app-developers",   desc:"iOS and Android experts with 200+ published apps." },
  { Icon: FaAndroid,    name:"Hire Android Developers",     slug:"android-developers",       desc:"Kotlin-first Android development for all screen sizes." },
  { Icon: FaApple,      name:"Hire iOS Developers",         slug:"ios-developers",           desc:"Swift experts building App Store-approved iOS apps." },
  { Icon: FaReact,      name:"Hire React Native Developers",slug:"react-native-developers",  desc:"Cross-platform mobile apps with native performance." },
  { Icon: SiFlutter,    name:"Hire Flutter Developers",     slug:"flutter-developers",       desc:"Beautiful cross-platform apps from a single codebase." },
  { Icon: FaCode,       name:"Hire Software Developers",    slug:"software-developers",      desc:"Full-stack engineers for complex software products." },
  { Icon: FaGlobe,      name:"Hire Web Developers",         slug:"web-developers",           desc:"React, Next.js and Node.js experts for any web project." },
  { Icon: FaPhp,        name:"Hire PHP Developers",         slug:"php-developers",           desc:"Laravel and PHP experts for robust web applications." },
  { Icon: FaAngular,    name:"Hire AngularJS Developers",   slug:"angular-developers",       desc:"Enterprise-grade SPA development with Angular." },
  { Icon: FaReact,      name:"Hire ReactJS Developers",     slug:"react-developers",         desc:"High-performance React frontends your users will love." },
  { Icon: FaNodeJs,     name:"Hire NodeJS Developers",      slug:"node-developers",          desc:"Scalable backend APIs and real-time systems." },
  { Icon: FaJava,       name:"Hire Java Developers",        slug:"java-developers",          desc:"Robust enterprise applications with Spring Boot." },
  { Icon: FaLaravel,    name:"Hire Laravel Developers",     slug:"laravel-developers",       desc:"Elegant PHP applications with the Laravel framework." },
  { Icon: FaGlobe,      name:"Hire Remote Developers",      slug:"remote-developers",        desc:"World-class remote engineers in your timezone." },
  { Icon: FaRocket,     name:"Hire Offshore Developers",    slug:"offshore-developers",      desc:"Cost-effective offshore teams without quality compromise." },
  { Icon: SiSolidity,   name:"Hire Blockchain Developers",  slug:"blockchain-developers",    desc:"Smart contracts, DeFi, NFT, and Web3 specialists." },
  { Icon: FaLayerGroup, name:"Hire MEAN Stack Developers",  slug:"mean-stack-developers",    desc:"Full MEAN stack for modern web applications." },
];

const models = [
  { title:"Full-Time",  Icon: Clock,  desc:"8 hrs/day, 5 days/week. Monthly billing. Ideal for ongoing projects.", points:["160 hrs/month","Daily standups","Monthly billing"] },
  { title:"Part-Time",  Icon: Zap,    desc:"4 hrs/day, flexible schedule. Weekly billing. For maintenance & smaller builds.", points:["80 hrs/month","Flexible slots","Weekly billing"], highlight:true },
  { title:"Hourly",     Icon: Star,   desc:"Pay only for hours worked. For urgent tasks, quick fixes, or short support.", points:["As needed","Pay-per-hour","Fast delivery"] },
];

const steps = [
  { Icon: FaCode,      title:"Share Requirements", desc:"Tell us your tech stack, team size, and timeline." },
  { Icon: Users,       title:"Review Profiles",    desc:"We send matched developer profiles within 24 hours." },
  { Icon: Shield,      title:"Interview",          desc:"Conduct interviews and technical assessments." },
  { Icon: CheckCircle, title:"Choose & Onboard",   desc:"Select your developer. Onboard in 48 hours." },
  { Icon: FaRocket,    title:"Start Building",     desc:"Your developer joins Slack, pushes code on day 1." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i=0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i*0.08, ease:[0.22,1,0.36,1] } }),
};
const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

export default function Hire() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-24 pb-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="hg" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern></defs>
            <rect width="100%" height="100%" fill="url(#hg)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-20 text-center relative">
          <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{duration:0.5}}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold px-5 py-2.5 rounded-full mb-7 backdrop-blur-sm">
            <Zap size={14} className="text-blue-400"/> Top 1% Developers — Available in 48 Hours
          </motion.div>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.1,ease:[0.22,1,0.36,1]}}
            className="text-4xl md:text-6xl font-bold leading-[1.08] tracking-tight mb-5">
            Hire Top Developers<br/><span className="text-blue-400">Who Deliver Results</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.2}}
            className="text-blue-200/70 text-lg max-w-2xl mx-auto mb-10">
            Access pre-vetted senior engineers across every technology stack. Only the top 3% pass our rigorous screening. Onboard in 48 hours, risk-free.
          </motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.3}}
            className="flex flex-wrap justify-center gap-4 mb-14">
            <Link to="/contact" className="flex items-center gap-2.5 bg-white text-blue-950 px-7 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-xl text-base">
              <Phone size={18}/> Book Free Consultation
            </Link>
            <Link to="#roles" className="flex items-center gap-2.5 border border-white/20 text-white px-7 py-4 rounded-xl font-bold hover:bg-white/10 transition text-base">
              Browse All Roles <ArrowRight size={18}/>
            </Link>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[["500+","Engineers Available"],["48hrs","Onboarding Time"],["98%","Retention Rate"],["3%","Acceptance Rate"]].map(([n,l],i)=>(
              <motion.div key={i} variants={fadeUp} custom={i}>
                <p className="text-2xl font-bold text-white">{n}</p>
                <p className="text-blue-400/80 text-xs mt-0.5">{l}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ALL ROLES */}
      <section id="roles" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="text-center mb-16">
            <span className="inline-block text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 bg-blue-50 px-4 py-2 rounded-full">Developer Roles</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Find Your Perfect Developer</h2>
            <p className="text-gray-500 max-w-xl mx-auto">18 specialized developer roles, each rigorously vetted and ready to deliver.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {roles.map((r,i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <Link to={`/hire/${r.slug}`}
                  className="group flex items-start gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:shadow-blue-100/40 hover:border-blue-100 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-700 transition-all duration-300">
                    <r.Icon className="w-5 h-5 text-blue-700 group-hover:text-white transition-colors duration-300"/>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-blue-700 transition text-sm">{r.name}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-3">{r.desc}</p>
                    <span className="text-blue-700 font-semibold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details <ArrowRight size={11}/>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HIRING MODELS */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-3">Flexible Hiring Models</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Full-time, part-time, or hourly — you choose the model that fits.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger}
            className="grid md:grid-cols-3 gap-6">
            {models.map((m,i) => (
              <motion.div key={i} variants={fadeUp} custom={i}
                whileHover={{y:-6,transition:{duration:0.25}}}
                className={`rounded-2xl p-8 border transition ${m.highlight?"border-blue-500 bg-slate-800 shadow-2xl shadow-blue-900/30":"border-slate-700 bg-slate-800"}`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${m.highlight?"bg-blue-600":"bg-slate-700"}`}>
                    <m.Icon size={20} className={m.highlight?"text-white":"text-slate-300"}/>
                  </div>
                  <h3 className="text-white font-bold text-xl">{m.title}</h3>
                  {m.highlight && <span className="ml-auto text-xs bg-blue-600 text-white px-2.5 py-1 rounded-full font-semibold">Popular</span>}
                </div>
                <div className="h-px bg-slate-700 mb-5"/>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">{m.desc}</p>
                <ul className="space-y-2.5 mb-7">
                  {m.points.map((p,j) => (
                    <li key={j} className="flex items-center gap-2.5 text-slate-300 text-sm">
                      <CheckCircle size={14} className="text-blue-400 shrink-0"/>{p}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold transition text-sm">
                  Hire Now
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="text-center mb-16">
            <span className="inline-block text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 bg-blue-50 px-4 py-2 rounded-full">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Hire in 5 Simple Steps</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger}
            className="grid md:grid-cols-5 gap-4">
            {steps.map(({Icon,title,desc},i) => (
              <motion.div key={i} variants={fadeUp} custom={i}
                className="text-center group">
                <div className="w-14 h-14 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-all duration-300">
                  <Icon size={22} className="text-blue-700 group-hover:text-white transition-colors duration-300"/>
                </div>
                <div className="w-7 h-7 mx-auto bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xs mb-3">{i+1}</div>
                <h3 className="font-bold text-gray-900 mb-1.5 text-sm group-hover:text-blue-700 transition">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl"/>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl"/>
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Ready to Build Your Dream Team?</h2>
            <p className="text-blue-100/80 mb-8 text-lg max-w-xl mx-auto">Get matched with top 1% developers within 24 hours. Zero risk, flexible contracts, instant scaling.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-xl">
                <Phone size={18}/> Get Free Consultation
              </Link>
              <Link to="/contact" className="flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold hover:border-white hover:bg-white/10 transition">
                Start Hiring <ArrowRight size={18}/>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-blue-200 text-sm">
              {["500+ Engineers","48hr Onboarding","Zero Risk Trial","Flexible Contracts"].map((t,i)=>(
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
