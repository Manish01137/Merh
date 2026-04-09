import { Link } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle, Star, Zap, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";

const badges = ["AI-Powered Solutions","15+ Years Experience","500+ Happy Clients","70+ Countries Served"];
const stats = [{n:"1100+",l:"Projects"},{n:"130+",l:"Engineers"},{n:"70+",l:"Countries"},{n:"98%",l:"Satisfaction"}];
const fadeUp = { hidden:{opacity:0,y:24}, visible:(i=0)=>({opacity:1,y:0,transition:{duration:0.6,delay:i*0.1,ease:[0.22,1,0.36,1]}}) };

export default function Hero(){
  return(
    <section className="relative min-h-screen bg-[#050d1a] text-white flex items-center pt-24 overflow-hidden">
      {/* Animated bg blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[120px]"/>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[100px]"/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[80px]"/>
        {/* Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="hg" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#hg)"/>
        </svg>
        {/* Floating orbs */}
        <motion.div animate={{y:[0,-20,0]}} transition={{duration:6,repeat:Infinity,ease:"easeInOut"}}
          className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-blue-400/40 blur-sm"/>
        <motion.div animate={{y:[0,15,0]}} transition={{duration:8,repeat:Infinity,ease:"easeInOut",delay:2}}
          className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-cyan-400/30 blur-sm"/>
        <motion.div animate={{y:[0,-12,0]}} transition={{duration:7,repeat:Infinity,ease:"easeInOut",delay:1}}
          className="absolute top-1/2 right-1/6 w-2 h-2 rounded-full bg-indigo-400/40 blur-sm"/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div initial="hidden" animate="visible" variants={{visible:{transition:{staggerChildren:0.08}}}}
              className="flex flex-wrap gap-2 mb-6">
              {badges.map((b,i)=>(
                <motion.span key={i} variants={fadeUp} custom={i}
                  className="flex items-center gap-1.5 text-xs font-semibold bg-white/5 border border-white/10 text-blue-300 px-3 py-1.5 rounded-full">
                  <CheckCircle size={10} className="text-blue-400"/>{b}
                </motion.span>
              ))}
            </motion.div>

            <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.2,ease:[0.22,1,0.36,1]}}
              className="text-4xl md:text-6xl font-bold leading-[1.06] tracking-tight mb-6">
              Build The Next<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300">
                Big Digital Product
              </span><br/>
              With Elite Engineers
            </motion.h1>

            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.35}}
              className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
              MershilTech is an AI-powered software agency delivering world-class mobile apps, web platforms, and enterprise software. 500+ companies in 70+ countries trust us to scale faster.
            </motion.p>

            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.45}}
              className="flex flex-wrap gap-4 mb-10">
              <Link to="/contact" className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-4 rounded-xl font-bold transition shadow-xl shadow-blue-900/40 text-base">
                <Phone size={18}/> Book Free Consultation
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform"/>
              </Link>
              <Link to="/services" className="flex items-center gap-2 border border-white/15 text-white px-7 py-4 rounded-xl font-bold hover:bg-white/8 transition text-base">
                Explore Services <ArrowRight size={18}/>
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6,delay:0.6}}
              className="flex items-center gap-5 mb-10">
              {[{Icon:Shield,label:"NDA Protected"},{Icon:Zap,label:"48hr Onboarding"},{Icon:Globe,label:"70+ Countries"}].map(({Icon,label},i)=>(
                <div key={i} className="flex items-center gap-2">
                  <Icon size={14} className="text-blue-400"/>
                  <span className="text-xs text-white/50 font-medium">{label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.7}}
              className="grid grid-cols-4 gap-4 border-t border-white/8 pt-8">
              {stats.map((s,i)=>(
                <div key={i}>
                  <p className="text-2xl font-bold text-white">{s.n}</p>
                  <p className="text-white/40 text-xs mt-0.5">{s.l}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} transition={{duration:0.8,delay:0.3,ease:[0.22,1,0.36,1]}}
            className="hidden lg:block">
            <div className="bg-white/[0.06] backdrop-blur-2xl rounded-3xl border border-white/10 p-8 shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-bold text-lg">Get A Free Quote</h3>
                <span className="flex items-center gap-1.5 text-xs bg-green-500/80 text-white px-3 py-1 rounded-full font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"/>Live
                </span>
              </div>
              <div className="space-y-3 mb-5">
                {[{p:"Your Name",t:"text"},{p:"Email Address",t:"email"},{p:"Phone Number",t:"tel"}].map((f,i)=>(
                  <input key={i} type={f.t} placeholder={f.p}
                    className="w-full bg-white/[0.07] border border-white/12 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-400/50 transition"/>
                ))}
                <select className="w-full bg-white/[0.07] border border-white/12 rounded-xl px-4 py-3 text-white/50 text-sm focus:outline-none transition">
                  <option className="text-gray-900">Select Service</option>
                  <option className="text-gray-900">Mobile App Development</option>
                  <option className="text-gray-900">Website Development</option>
                  <option className="text-gray-900">AI Development</option>
                  <option className="text-gray-900">Hire Developers</option>
                </select>
                <textarea rows={3} placeholder="Describe your project..."
                  className="w-full bg-white/[0.07] border border-white/12 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none resize-none"/>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40">
                Get Free Consultation <ArrowRight size={15}/>
              </button>
            </div>
            <div className="flex gap-3 mt-3">
              <div className="flex-1 bg-white/[0.06] rounded-2xl border border-white/10 p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500/15 rounded-xl flex items-center justify-center">
                  <Star size={16} className="text-yellow-400 fill-yellow-400"/>
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">{[1,2,3,4,5].map(n=><Star key={n} size={9} className="text-yellow-400 fill-yellow-400"/>)}</div>
                  <p className="text-white font-semibold text-xs">4.9/5 Average Rating</p>
                  <p className="text-white/40 text-xs">500+ Client Reviews</p>
                </div>
              </div>
              <div className="bg-white/[0.06] rounded-2xl border border-white/10 p-4 flex flex-col justify-center">
                <p className="text-[10px] text-white/30 font-semibold uppercase mb-1">Official Partner</p>
                <div className="flex gap-2">
                  <span className="text-xs font-bold text-white/70">AWS</span>
                  <span className="text-white/20">|</span>
                  <span className="text-xs font-bold text-blue-400">Azure</span>
                  <span className="text-white/20">|</span>
                  <span className="text-xs font-bold text-green-400">GCP</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trusted by */}
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.9}}
          className="mt-16 pt-10 border-t border-white/8">
          <p className="text-white/30 text-xs text-center mb-5 font-semibold uppercase tracking-widest">Trusted by world-class companies</p>
          <div className="flex items-center justify-center gap-10 flex-wrap">
            {["NIKE","Red Bull","Whirlpool","WFFA","TruuBlue","Microsoft"].map((b,i)=>(
              <span key={i} className="text-white/40 font-bold text-sm tracking-wide hover:text-white/70 transition cursor-default">{b}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
