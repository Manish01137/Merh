import { useEffect, useState } from "react";
import { X, Phone } from "lucide-react";
import logoWhite from "../assets/logo.png";

export default function LeadCaptureModal() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 10000);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-[90%] max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-6 text-white">
          <button onClick={() => setShow(false)} className="absolute top-4 right-4 text-white/70 hover:text-white"><X size={20}/></button>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center backdrop-blur-sm overflow-hidden">
              <img
                src={logoWhite}
                alt="MershilTech"
                width="24"
                height="24"
                loading="lazy"
                decoding="async"
                className="w-6 h-6 object-contain"
                style={{ filter: "invert(1) brightness(2)", mixBlendMode: "screen" }}
              />
            </div>
            <span className="text-white font-extrabold text-sm tracking-tight">
              Mershil<span className="text-blue-300">Tech</span>
            </span>
          </div>
          <h2 className="text-xl font-bold mb-1">Let's Build Something Great</h2>
          <p className="text-blue-100 text-sm">Get a free consultation from our engineering experts.</p>
        </div>
        <div className="p-6 space-y-3">
          <input className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" placeholder="Your Name"/>
          <input className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" placeholder="Email Address"/>
          <input className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" placeholder="Phone Number"/>
          <button className="w-full bg-blue-700 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition flex items-center justify-center gap-2">
            <Phone size={16}/> Get Free Consultation
          </button>
          <button onClick={() => setShow(false)} className="w-full text-gray-400 text-sm hover:text-gray-600 transition">No thanks, I'll explore on my own</button>
        </div>
      </div>
    </div>
  );
}
