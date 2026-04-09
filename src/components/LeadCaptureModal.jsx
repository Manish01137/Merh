import { useEffect, useState } from "react";
import { X, Phone } from "lucide-react";

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
        <div className="bg-blue-700 p-6 text-white">
          <button onClick={() => setShow(false)} className="absolute top-4 right-4 text-white/70 hover:text-white"><X size={20}/></button>
          <h2 className="text-xl font-bold mb-1">Let's Build Something Great 🚀</h2>
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
