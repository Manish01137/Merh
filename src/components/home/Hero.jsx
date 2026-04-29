import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Play, Star } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "../effects/CountUp";
import MagneticButton from "../effects/MagneticButton";

const stats = [
  { n: "350+", l: "Projects Shipped" },
  { n: "130+", l: "Engineers" },
  { n: "15+",  l: "Years Building" },
  { n: "98%",  l: "Client Satisfaction" },
];

const trustLogos = ["NIKE", "Red Bull", "Whirlpool", "Microsoft", "TruuBlue"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-[#0a0a0a] text-white flex items-center pt-28 overflow-hidden">
      {/* Sydney skyline background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=2000&q=90&auto=format&fit=crop&dpr=2"
          alt="Sydney Opera House and Harbour Bridge at dusk"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        {/* Cinematic dark overlays — neutral, not blue */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_70%,rgba(0,0,0,0.85)_100%)]" />

        {/* Subtle grid texture */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="hg" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hg)" />
        </svg>

        {/* Soft warm light hint near bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-gradient-to-t from-amber-100/[0.04] to-transparent blur-2xl" />
      </div>

      {/* Content — left-aligned with logo (matches Navbar's px-6 sm:px-10) */}
      <div className="relative z-10 w-full px-6 sm:px-10 py-16 sm:py-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-3 mb-7 flex-wrap"
          >
            <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] bg-white/[0.04] backdrop-blur-md border border-white/12 text-stone-200/90 px-3.5 py-2 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300" />
              </span>
              Live in Sydney
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-xs text-stone-400 font-medium tracking-wide">
              <MapPin size={12} className="text-stone-500" />
              54 Regent St, Chippendale
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold leading-[0.98] tracking-tight mb-7 text-stone-50"
            style={{ textShadow: "0 2px 30px rgba(0,0,0,0.45)" }}
          >
            Crafted in{" "}
            <span className="italic font-extralight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-50 to-stone-200">
              Sydney.
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-stone-50 via-stone-100 to-stone-400/80">
              Built for the world.
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-stone-300/85 text-base sm:text-xl leading-relaxed mb-10 max-w-2xl font-light tracking-wide"
          >
            Mobile apps, web platforms, AI products and enterprise software —
            engineered by a senior team from a Chippendale studio.{" "}
            <span className="text-stone-100 font-normal">Currently shipping for
            UK fintech, AU startups, and global brands — 350+ projects delivered.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-14"
          >
            <MagneticButton
              as={Link}
              to="/contact"
              strength={0.3}
              className="group flex items-center justify-center gap-2 bg-stone-50 text-stone-900 px-7 py-4 rounded-full font-bold text-sm sm:text-base hover:bg-white transition shadow-[0_8px_30px_rgba(245,245,244,0.18)] tracking-tight"
            >
              Start Your Project
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <MagneticButton
              as="button"
              type="button"
              onClick={() => {
                document
                  .getElementById("featured-work")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              strength={0.25}
              className="flex items-center justify-center gap-2.5 border border-stone-300/20 backdrop-blur-md bg-stone-50/[0.04] text-stone-100 px-7 py-4 rounded-full font-semibold hover:bg-stone-50/[0.08] hover:border-stone-200/35 transition text-sm sm:text-base tracking-wide"
            >
              <span className="w-7 h-7 rounded-full bg-stone-100/15 flex items-center justify-center">
                <Play size={11} className="text-stone-50 fill-stone-50 ml-0.5" />
              </span>
              Watch Our Work
            </MagneticButton>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 border-t border-stone-100/10 pt-8 max-w-3xl"
          >
            {stats.map((s, i) => (
              <div key={i}>
                <CountUp
                  value={s.n}
                  className="text-3xl sm:text-4xl font-bold text-stone-50 tabular-nums tracking-tight"
                />
                <p className="text-stone-400/80 text-[11px] sm:text-xs mt-1.5 font-medium uppercase tracking-[0.15em]">
                  {s.l}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-14 sm:mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="w-8 h-8 rounded-full border-2 border-black/80 bg-gradient-to-br from-stone-200/35 to-stone-300/10 backdrop-blur-md"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} size={11} className="text-amber-200 fill-amber-200" />
                ))}
                <span className="text-stone-50 text-xs font-bold ml-1.5 tracking-tight">4.9/5</span>
              </div>
              <p className="text-stone-400/70 text-[11px] tracking-wide">From 500+ reviews</p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-10 bg-stone-200/15" />

          <div className="flex-1">
            <p className="text-stone-400/60 text-[10px] font-bold uppercase tracking-[0.25em] mb-2.5">
              Trusted by world-class teams
            </p>
            <div className="flex items-center gap-x-8 gap-y-2 flex-wrap">
              {trustLogos.map((b, i) => (
                <span
                  key={i}
                  className="text-stone-300/65 font-bold text-sm tracking-wider hover:text-stone-100/90 transition cursor-default"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-stone-300/40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-stone-200/45 to-transparent"
        />
      </motion.div>
    </section>
  );
}
