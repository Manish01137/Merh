import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Zap, BarChart3, Shield, Bot, Sparkles } from "lucide-react";
import CountUp from "../effects/CountUp";
import TextReveal from "../effects/TextReveal";

const capabilities = [
  { icon: Bot, title:"AI Chatbots & Agents", desc:"Context-aware chatbots that resolve 70%+ queries automatically with intelligent escalation." },
  { icon: Brain, title:"LLM & RAG Pipelines", desc:"GPT-4o, Claude, Gemini integrations with custom fine-tuning and enterprise knowledge bases." },
  { icon: BarChart3, title:"Predictive Analytics", desc:"ML models for demand forecasting, churn prediction, fraud detection, and pricing optimization." },
  { icon: Shield, title:"Computer Vision", desc:"Object detection, OCR, visual QA, and video analytics trained on your domain-specific data." },
];

const fadeUp = {
  hidden:{opacity:0,y:24},
  visible:(i=0)=>({opacity:1,y:0,transition:{duration:0.55,delay:i*0.08,ease:[0.22,1,0.36,1]}})
};

export default function AISection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-50 blur-3xl opacity-60"/>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-50 blur-3xl opacity-60"/>
        {/* Animated floating dots */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-10 w-3 h-3 rounded-full bg-blue-400/30 blur-sm"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-2/3 left-12 w-2 h-2 rounded-full bg-indigo-400/40 blur-sm"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Sparkles size={12}/> AI-First Development
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              <TextReveal>Bring AI Into Your</TextReveal>
              <br/>
              <TextReveal delay={0.25} className="text-blue-700">Business the Right Way</TextReveal>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-lg">
              We don't just add AI features — we identify where AI creates genuine ROI, build production systems that stay accurate over time, and deliver measurable business outcomes from the first sprint.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Production AI, not prototypes — we've shipped 80+ AI systems",
                "Full-stack AI: data → model → API → UI, all in-house",
                "GPT-4o, Claude 3, Gemini, Llama 3 — we pick what fits your use case",
                "ROI-first approach: we validate value before we scale investment",
              ].map((t,i)=>(
                <motion.div key={i} initial={{opacity:0,x:-15}} whileInView={{opacity:1,x:0}}
                  viewport={{once:true}} transition={{duration:0.5,delay:i*0.08}}
                  className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap size={10} className="text-blue-700"/>
                  </div>
                  <span className="text-slate-600 text-sm leading-relaxed">{t}</span>
                </motion.div>
              ))}
            </div>
            <Link to="/services/ai" className="inline-flex items-center gap-2 bg-blue-700 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-blue-600 transition shadow-lg shadow-blue-700/25">
              Explore AI Services <ArrowRight size={16}/>
            </Link>
          </motion.div>

          {/* Right — capability cards */}
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}}
            variants={{visible:{transition:{staggerChildren:0.08}}}}
            className="grid grid-cols-2 gap-4">
            {capabilities.map(({icon:Icon,title,desc},i)=>(
              <motion.div key={i} variants={fadeUp} custom={i}
                whileHover={{y:-5,transition:{duration:0.25}}}
                className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-100 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-700 flex items-center justify-center text-blue-700 group-hover:text-white transition-all duration-300 mb-4">
                  <Icon size={18}/>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2 group-hover:text-blue-700 transition">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
            {/* ROI card */}
            <motion.div variants={fadeUp} custom={4}
              className="col-span-2 bg-gradient-to-br from-blue-700 to-indigo-700 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1">Average AI ROI</p>
                  <CountUp value="3x" className="text-4xl font-bold block tabular-nums" />
                  <p className="text-blue-200 text-sm mt-1">return for AI clients in year one</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1">Automation Rate</p>
                  <CountUp value="60%" className="text-4xl font-bold block tabular-nums" />
                  <p className="text-blue-200 text-sm mt-1">average process automation</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
