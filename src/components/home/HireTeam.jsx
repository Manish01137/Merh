import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
const models = [
  { title:"Staff Augmentation", desc:"Instantly plug top-tier developers into your existing team.", points:["Dedicated to your project","Daily standups","Works your timezone"], highlight:false },
  { title:"Dedicated Team", desc:"A fully managed offshore team working exclusively on your product.", points:["Full team ownership","Sprint-based delivery","Tech lead included"], highlight:true, badge:"MOST POPULAR" },
  { title:"Offshore Dev Center", desc:"Build your own branded engineering hub with our full infrastructure.", points:["Your brand, our ops","IP fully yours","Scale from 5 to 500"], highlight:false },
];
export default function HireTeam() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3 bg-blue-50 px-4 py-1.5 rounded-full">Engagement Models</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Flexible Ways to Work With Us</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">Choose the model that fits your project, budget, and timeline. No lock-in, no hidden costs.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {models.map((m,i) => (
            <div key={i} className={`relative p-8 rounded-2xl border-2 transition-all hover:-translate-y-1 hover:shadow-xl duration-300 ${m.highlight ? "border-blue-700 bg-blue-700 text-white shadow-xl scale-[1.03]" : "border-gray-200 bg-white"}`}>
              {m.badge && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-4 py-1.5 rounded-full font-semibold">{m.badge}</span>}
              <h3 className={`text-xl font-bold mb-3 ${m.highlight?"text-white":"text-gray-900"}`}>{m.title}</h3>
              <p className={`text-sm leading-relaxed mb-6 ${m.highlight?"text-blue-100":"text-gray-500"}`}>{m.desc}</p>
              <ul className="space-y-2 mb-7">
                {m.points.map((p,j) => (
                  <li key={j} className={`flex items-center gap-2 text-sm ${m.highlight?"text-blue-100":"text-gray-600"}`}>
                    <CheckCircle2 size={15} className={m.highlight?"text-blue-300":"text-blue-600"}/>{p}
                  </li>
                ))}
              </ul>
              <Link to="/hire" className={`flex items-center justify-between w-full px-5 py-3 rounded-xl font-semibold text-sm transition ${m.highlight?"bg-white text-blue-700 hover:bg-blue-50":"bg-blue-700 text-white hover:bg-blue-800"}`}>
                Get Started <ArrowRight size={16}/>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
