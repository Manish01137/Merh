import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
export default function CTA() {
  return (
    <section className="py-24 bg-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block text-blue-200 text-sm font-semibold uppercase tracking-wider mb-4 bg-blue-600/50 px-4 py-1.5 rounded-full">Ready to Start?</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">Start Building With The Best Engineers Today</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Don't let your competition outpace you. Partner with MershilTech's world-class engineers and ship your product faster, better, and more reliably than ever before.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-xl text-base"><Phone size={18}/> Schedule Discovery Call</Link>
          <Link to="/hire" className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition text-base">Hire Developers <ArrowRight size={18}/></Link>
        </div>
        <p className="text-blue-200 text-sm mt-8">✔ No Obligation &nbsp;✔ Respond in 24H &nbsp;✔ Secure NDA &nbsp;✔ Free Consultation</p>
      </div>
    </section>
  );
}
