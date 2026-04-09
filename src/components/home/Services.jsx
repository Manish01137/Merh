import { Link } from "react-router-dom";
import { Smartphone, Globe, Code2, Brain, Link2, Building2, Lightbulb, ArrowRight } from "lucide-react";
const services=[
  {icon:Smartphone,title:"Mobile App Development",desc:"Native iOS & Android apps plus React Native and Flutter cross-platform solutions. High-performance apps used by millions.",slug:"mobile",count:"200+"},
  {icon:Globe,title:"Website Development",desc:"Fast, SEO-optimized websites and web apps built with the latest frameworks tailored to your business.",slug:"website",count:"300+"},
  {icon:Code2,title:"Custom Software Development",desc:"Enterprise software including SaaS platforms, ERPs, CRMs and desktop applications built for scale.",slug:"software",count:"150+"},
  {icon:Brain,title:"AI & ML Development",desc:"Generative AI, LLM integration, computer vision, predictive analytics that transform your business.",slug:"ai",count:"80+"},
  {icon:Link2,title:"Blockchain Development",desc:"Smart contracts, DeFi protocols, NFT marketplaces, and Web3 dApps on leading chains.",slug:"blockchain",count:"60+"},
  {icon:Building2,title:"Enterprise Solutions",desc:"Azure, AWS, Salesforce, SAP and IT staff augmentation that modernize enterprise operations.",slug:"enterprise",count:"100+"},
  {icon:Lightbulb,title:"On-Demand App Development",desc:"Food delivery, taxi, grocery, healthcare and marketplace platforms built to disrupt industries.",slug:"on-demand",count:"120+"},
];
export default function Services(){
  return(
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3 bg-blue-50 px-4 py-1.5 rounded-full">What We Build</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Comprehensive Digital Solutions<br/>for Every Need</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">From concept to launch, we deliver full-stack digital products that drive real business growth — on time, every time.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.slice(0,6).map((s,i)=>{const Icon=s.icon;return(
            <Link key={i} to={`/services/${s.slug}`} className="group p-7 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 block">
              <div className="flex items-start justify-between mb-5"><div className="w-12 h-12 p-2.5 rounded-xl bg-blue-50 group-hover:bg-blue-700 transition-colors duration-300"><Icon size={24} className="text-blue-700 group-hover:text-white transition-colors duration-300"/></div><span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2.5 py-1 rounded-full">{s.count} Projects</span></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
              <span className="text-blue-700 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Explore Service <ArrowRight size={15}/></span>
            </Link>
          );})}
        </div>
        <Link to="/services/on-demand" className="group flex items-center justify-between p-7 rounded-2xl border border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 hover:shadow-xl hover:border-blue-200 transition-all duration-300 block">
          <div className="flex items-center gap-5"><div className="w-12 h-12 p-2.5 rounded-xl bg-blue-100 group-hover:bg-blue-700 transition-colors flex-shrink-0"><Lightbulb size={24} className="text-blue-700 group-hover:text-white transition-colors"/></div><div><h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition">{services[6].title}</h3><p className="text-gray-500 text-sm">{services[6].desc}</p></div></div>
          <div className="flex items-center gap-3 flex-shrink-0 ml-6"><span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2.5 py-1 rounded-full">{services[6].count} Projects</span><ArrowRight size={20} className="text-blue-700 group-hover:translate-x-1 transition"/></div>
        </Link>
      </div>
    </section>
  );
}
