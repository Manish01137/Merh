import { useEffect, useRef } from "react";
import gsap from "gsap";
const testimonials = [
  { name:"James Richardson", role:"CEO, FinTech Startup", text:"MershilTech built our entire trading platform from scratch in 4 months. The code quality and architecture are exceptional.", avatar:"JR" },
  { name:"Sarah Mitchell", role:"Product Lead, HealthTech", text:"We hired their React Native team to rebuild our patient app. Downloads went up 3x after launch. Truly a top-notch engineering partner.", avatar:"SM" },
  { name:"Arjun Mehta", role:"Founder, EduTech", text:"From ideation to App Store launch in 12 weeks. MershilTech's process is tight, communication is excellent, and the product is phenomenal.", avatar:"AM" },
  { name:"Emily Chen", role:"CTO, eCommerce Scale-up", text:"We've worked with 3 agencies before. MershilTech is in a different league — proactive, technically brilliant, and genuinely invested.", avatar:"EC" },
  { name:"David Okonkwo", role:"Director of Technology", text:"Their offshore development model is seamless. Daily standups, transparent boards, and a team that feels like it's sitting right next to you.", avatar:"DO" },
  { name:"Priya Sharma", role:"VP Engineering", text:"MershilTech migrated our monolith to microservices with zero downtime. Incredible technical depth and project management skills.", avatar:"PS" },
];
export default function Testimonials() {
  const trackRef = useRef(null);
  useEffect(() => {
    const el = trackRef.current;
    const anim = gsap.to(el, { xPercent:-50, duration:35, ease:"linear", repeat:-1 });
    el.addEventListener("mouseenter", () => anim.pause());
    el.addEventListener("mouseleave", () => anim.resume());
    return () => anim.kill();
  }, []);
  return (
    <section className="py-24 bg-blue-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <span className="inline-block text-blue-300 text-sm font-semibold uppercase tracking-wider mb-3 bg-blue-800/50 px-4 py-1.5 rounded-full">Client Stories</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">What Our Clients Say</h2>
        <p className="text-blue-300 max-w-xl mx-auto">Real results from real partnerships.</p>
      </div>
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex gap-6 w-max">
          {[...testimonials,...testimonials].map((item,i) => (
            <div key={i} className="min-w-[340px] max-w-[340px] p-7 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
              <div className="flex text-yellow-400 mb-4 text-sm">{"★★★★★"}</div>
              <p className="text-blue-100 mb-6 leading-relaxed text-sm">"{item.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{item.avatar}</div>
                <div><h4 className="text-white font-semibold text-sm">{item.name}</h4><p className="text-blue-400 text-xs">{item.role}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
