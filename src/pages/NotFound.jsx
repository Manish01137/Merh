import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Search, ArrowRight, Rocket, Briefcase, ShieldCheck } from "lucide-react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import MonogramPattern from "../components/effects/MonogramPattern";

const popularLinks = [
  { to: "/services", label: "All Services", icon: Briefcase, color: "from-blue-600 to-indigo-700" },
  { to: "/hire", label: "Hire Developers", icon: Rocket, color: "from-cyan-500 to-blue-600" },
  { to: "/cybersecurity", label: "Cybersecurity", icon: ShieldCheck, color: "from-violet-600 to-purple-700" },
  { to: "/contact", label: "Contact Us", icon: Home, color: "from-amber-500 to-orange-600" },
];

export default function NotFound() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
        <MonogramPattern opacity={0.04} size={110} />
        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-3xl" />
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-cyan-400/40 blur-sm"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-blue-400/40 blur-sm"
          />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="ngrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1" />
            </pattern></defs>
            <rect width="100%" height="100%" fill="url(#ngrid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center w-full">
          {/* Giant 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-8"
          >
            <h1 className="text-[140px] md:text-[220px] font-black leading-none tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-cyan-300 to-indigo-400">
                404
              </span>
            </h1>
            {/* Floating glitch effect */}
            <motion.div
              animate={{ x: [-2, 2, -2], opacity: [0, 0.4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 4 }}
              className="absolute inset-0 text-[140px] md:text-[220px] font-black leading-none tracking-tighter text-pink-400 mix-blend-screen pointer-events-none"
              style={{ filter: "blur(1px)" }}
            >
              404
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block text-blue-300 text-xs font-bold uppercase tracking-[0.2em] bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-5">
              Page Not Found
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Looks like this page took a detour
            </h2>
            <p className="text-blue-200/60 text-base md:text-lg max-w-lg mx-auto mb-10">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Link
                to="/"
                className="flex items-center gap-2 bg-white text-blue-950 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition shadow-xl"
              >
                <Home size={16} /> Back to Home
              </Link>
              <button
                onClick={() => window.dispatchEvent(new Event("mershil:open-search"))}
                className="flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition backdrop-blur-sm"
              >
                <Search size={16} /> Search the Site
              </button>
            </div>
          </motion.div>

          {/* Popular links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-blue-300/50 text-xs font-bold uppercase tracking-[0.2em] mb-5">Or Try These</p>
            <div className="grid grid-cols-2 gap-3">
              {popularLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                  >
                    <Link
                      to={link.to}
                      className="group flex items-center justify-between gap-3 p-4 rounded-xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] hover:border-white/20 transition backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon size={15} className="text-white" />
                        </div>
                        <span className="text-white font-semibold text-sm">{link.label}</span>
                      </div>
                      <ArrowRight size={14} className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
