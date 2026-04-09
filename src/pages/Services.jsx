import { useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      <Navbar />
      <section className="pt-36 pb-16 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="inline-block text-blue-300 text-sm font-semibold uppercase tracking-wider mb-4 bg-blue-800/60 px-4 py-1.5 rounded-full border border-blue-700/50">What We Build</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-5">Our <span className="text-blue-300">Services</span></h1>
          <p className="text-blue-100/80 text-lg max-w-xl mx-auto">Comprehensive digital solutions across mobile, web, AI, blockchain, and enterprise — built to scale.</p>
        </div>
      </section>
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {servicesData.map((s,i) => (
            <div key={i} onClick={() => navigate(`/services/${s.slug}`)}
              className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-8 hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-700 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition pr-4">{s.title}</h2>
                <ArrowRight size={20} className="text-gray-300 group-hover:text-blue-700 group-hover:translate-x-1 transition flex-shrink-0 mt-1"/>
              </div>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">{s.tagline}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {s.tech.slice(0,5).map((t,j) => <span key={j} className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full font-medium">{t}</span>)}
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-blue-700 font-semibold flex items-center gap-1.5">Explore Service <ArrowRight size={14}/></span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">{s.stats[0].n} {s.stats[0].l}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
