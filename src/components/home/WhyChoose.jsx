import { ShieldCheck, Zap, Users, Award, Clock, HeartHandshake, Code2, Globe } from "lucide-react";
const features=[
  {icon:ShieldCheck,title:"Enterprise-Grade Security",desc:"Bank-level security with encryption, compliance frameworks, and penetration testing on every product we ship.",col:"text-blue-600 bg-blue-50"},
  {icon:Zap,title:"Blazing Fast Delivery",desc:"Agile sprints, CI/CD pipelines, and lean processes mean you get working product faster than anyone else.",col:"text-yellow-600 bg-yellow-50"},
  {icon:Users,title:"Top 1% Developers",desc:"Rigorously vetted engineers with proven track records across startups and Fortune 500 companies.",col:"text-green-600 bg-green-50"},
  {icon:Award,title:"Award-Winning Work",desc:"Recognized by Clutch, TopDevelopers, and DesignRush as a top-rated global software development firm.",col:"text-purple-600 bg-purple-50"},
  {icon:Code2,title:"Full-Stack Expertise",desc:"From UI design to cloud infrastructure — we handle every layer of your tech stack in-house.",col:"text-indigo-600 bg-indigo-50"},
  {icon:HeartHandshake,title:"True Partnership",desc:"We act as your extended engineering team — embedded in your culture, invested in your success.",col:"text-rose-600 bg-rose-50"},
  {icon:Globe,title:"Global Delivery",desc:"Follow-the-sun model with teams across 3 continents ensures round-the-clock development.",col:"text-cyan-600 bg-cyan-50"},
  {icon:Clock,title:"On-Time, Every Time",desc:"98% of projects delivered on schedule with full transparency throughout.",col:"text-orange-600 bg-orange-50"},
];
export default function WhyChoose(){
  return(
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3 bg-blue-50 px-4 py-1.5 rounded-full">Why MershilTech</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">The Engineering Partner You've Been Looking For</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">We don't just build software — we build partnerships. MershilTech combines technical excellence with deep business understanding to deliver products that move the needle.</p>
            <div className="grid grid-cols-2 gap-4">{[["1100+","Projects Shipped"],["98%","On-Time Delivery"],["4.9/5","Client Rating"],["0","Hidden Fees"]].map(([n,l],i)=><div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"><p className="text-2xl font-bold text-blue-700 mb-0.5">{n}</p><p className="text-gray-500 text-sm">{l}</p></div>)}</div>
          </div>
          <div className="grid grid-cols-2 gap-4">{features.map((f,i)=>{const Icon=f.icon;return(<div key={i} className="group bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"><div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${f.col} group-hover:scale-110 transition`}><Icon size={20}/></div><h3 className="font-bold text-gray-900 text-sm mb-1.5">{f.title}</h3><p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p></div>);})}</div>
        </div>
      </div>
    </section>
  );
}
