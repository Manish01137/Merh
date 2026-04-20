import { Quote } from "lucide-react";
import MonogramPattern from "../effects/MonogramPattern";

const testimonials = [
  {
    name: "James Richardson",
    role: "CEO, FinTech Startup",
    text: "MershilTech built our entire trading platform from scratch in 4 months. The code quality and architecture are exceptional.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Sarah Mitchell",
    role: "Product Lead, HealthTech",
    text: "We hired their React Native team to rebuild our patient app. Downloads went up 3x after launch. Truly a top-notch engineering partner.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Arjun Mehta",
    role: "Founder, EduTech",
    text: "From ideation to App Store launch in 12 weeks. MershilTech's process is tight, communication is excellent, and the product is phenomenal.",
    img: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Emily Chen",
    role: "CTO, eCommerce Scale-up",
    text: "We've worked with 3 agencies before. MershilTech is in a different league — proactive, technically brilliant, and genuinely invested.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "David Okonkwo",
    role: "Director of Technology",
    text: "Their offshore development model is seamless. Daily standups, transparent boards, and a team that feels like it's sitting right next to you.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Priya Sharma",
    role: "VP Engineering",
    text: "MershilTech migrated our monolith to microservices with zero downtime. Incredible technical depth and project management skills.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-blue-950 overflow-hidden relative">
      <MonogramPattern opacity={0.04} size={100} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <style>{`
        @keyframes testi-marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .testi-track{animation:testi-marquee 40s linear infinite;}
        .testi-track:hover{animation-play-state:paused;}
      `}</style>

      <div className="max-w-7xl mx-auto px-6 mb-14 text-center relative">
        <span className="inline-block text-blue-300 text-xs font-bold uppercase tracking-widest mb-4 bg-blue-800/50 border border-blue-700/30 px-4 py-2 rounded-full">Client Stories</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">What Our Clients Say</h2>
        <p className="text-blue-300/80 max-w-xl mx-auto">Real results from real partnerships — verified reviews from founders, CTOs, and product leaders.</p>
      </div>

      <div className="overflow-hidden relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-blue-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-blue-950 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 w-max testi-track">
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="min-w-[360px] max-w-[360px] p-7 rounded-2xl bg-white/[0.06] backdrop-blur-sm border border-white/10 hover:bg-white/[0.1] hover:-translate-y-1 hover:border-blue-400/30 transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <Quote size={32} className="absolute top-5 right-5 text-blue-400/20" />

              {/* Stars */}
              <div className="flex text-yellow-400 mb-4 text-sm gap-0.5">
                {"★★★★★".split("").map((s, j) => <span key={j}>{s}</span>)}
              </div>

              {/* Text */}
              <p className="text-blue-100 mb-6 leading-relaxed text-sm">{item.text}</p>

              {/* Profile */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="relative flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-400/40"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-green-500 border-2 border-blue-950" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm leading-tight">{item.name}</h4>
                  <p className="text-blue-400/80 text-xs mt-0.5">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
