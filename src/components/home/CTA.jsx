import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import MagneticButton from "../effects/MagneticButton";
import TextReveal from "../effects/TextReveal";
import MonogramPattern from "../effects/MonogramPattern";

export default function CTA() {
  return (
    <section className="py-28 bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Monogram brand pattern background */}
      <MonogramPattern opacity={0.06} size={120} />

      {/* Ambient blobs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Dark vignette overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-950/30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block text-blue-100 text-xs font-bold uppercase tracking-[0.2em] mb-5 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
          Ready to Start?
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.08] tracking-tight">
          <TextReveal>Start Building With The Best Engineers Today</TextReveal>
        </h2>
        <p className="text-blue-100/85 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Don't let your competition outpace you. Partner with MershilTech's world-class engineers and ship your product faster, better, and more reliably than ever before.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <MagneticButton as={Link} to="/contact" strength={0.3}
            className="flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-2xl shadow-blue-900/40 text-base">
            <Phone size={18} /> Schedule Discovery Call
          </MagneticButton>
          <MagneticButton as={Link} to="/hire" strength={0.25}
            className="flex items-center gap-2 border-2 border-white/70 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition text-base backdrop-blur-sm">
            Hire Developers <ArrowRight size={18} />
          </MagneticButton>
        </div>
        <p className="text-blue-200/80 text-sm mt-10">✔ No Obligation &nbsp;&nbsp;✔ Respond in 24H &nbsp;&nbsp;✔ Secure NDA &nbsp;&nbsp;✔ Free Consultation</p>
      </div>
    </section>
  );
}
