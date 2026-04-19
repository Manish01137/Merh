import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, Briefcase, Users, Rocket, Shield } from "lucide-react";
import { servicesData } from "../../data/servicesData";

// Hire roles list — kept in sync with Navbar/Hire page
const hireRoles = [
  { name: "Hire AI Developers", slug: "ai-developers" },
  { name: "Hire Dedicated Developers", slug: "dedicated-developers" },
  { name: "Hire Mobile App Developers", slug: "mobile-app-developers" },
  { name: "Hire Android Developers", slug: "android-developers" },
  { name: "Hire iOS Developers", slug: "ios-developers" },
  { name: "Hire React Native Developers", slug: "react-native-developers" },
  { name: "Hire Flutter Developers", slug: "flutter-developers" },
  { name: "Hire Software Developers", slug: "software-developers" },
  { name: "Hire Web Developers", slug: "web-developers" },
  { name: "Hire PHP Developers", slug: "php-developers" },
  { name: "Hire AngularJS Developers", slug: "angular-developers" },
  { name: "Hire ReactJS Developers", slug: "react-developers" },
  { name: "Hire NodeJS Developers", slug: "node-developers" },
  { name: "Hire Java Developers", slug: "java-developers" },
  { name: "Hire Laravel Developers", slug: "laravel-developers" },
  { name: "Hire Remote Developers", slug: "remote-developers" },
  { name: "Hire Offshore Developers", slug: "offshore-developers" },
  { name: "Hire Blockchain Developers", slug: "blockchain-developers" },
  { name: "Hire MEAN Stack Developers", slug: "mean-stack-developers" },
  { name: "Hire Salesforce Developers", slug: "salesforce-developers" },
  { name: "Hire Cybersecurity Experts", slug: "cybersecurity-experts" },
];

const pages = [
  { name: "Home", slug: "/", type: "page" },
  { name: "About Us", slug: "/about", type: "page" },
  { name: "Contact", slug: "/contact", type: "page" },
  { name: "Cybersecurity", slug: "/cybersecurity", type: "page" },
  { name: "Startups", slug: "/startups", type: "page" },
  { name: "Services", slug: "/services", type: "page" },
  { name: "Hire Developers", slug: "/hire", type: "page" },
];

// Build a searchable index from all data sources
function buildIndex() {
  const entries = [];

  pages.forEach((p) =>
    entries.push({ type: "page", title: p.name, path: p.slug, keyword: p.name })
  );

  servicesData.forEach((svc) => {
    entries.push({
      type: "service",
      title: svc.title,
      desc: svc.tagline,
      path: `/services/${svc.slug}`,
      keyword: `${svc.title} ${svc.tagline} ${svc.bullets?.join(" ") || ""} ${svc.tech?.join(" ") || ""}`,
    });
    svc.subServices?.forEach((ss) => {
      const subSlug = ss.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      entries.push({
        type: "sub-service",
        title: ss.title,
        desc: ss.desc,
        path: `/services/${svc.slug}/${subSlug}`,
        keyword: `${ss.title} ${ss.desc}`,
      });
    });
  });

  hireRoles.forEach((r) =>
    entries.push({
      type: "hire",
      title: r.name,
      path: `/hire/${r.slug}`,
      keyword: r.name,
    })
  );

  return entries;
}

const TYPE_META = {
  page: { label: "Page", Icon: Rocket, color: "text-purple-600 bg-purple-50" },
  service: { label: "Service", Icon: Briefcase, color: "text-blue-600 bg-blue-50" },
  "sub-service": { label: "Sub-service", Icon: Shield, color: "text-cyan-600 bg-cyan-50" },
  hire: { label: "Hire", Icon: Users, color: "text-green-600 bg-green-50" },
};

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const index = useMemo(() => buildIndex(), []);

  const results = useMemo(() => {
    if (!query.trim()) {
      // show popular / recent when empty
      return [
        ...pages.slice(0, 3).map((p) => ({ type: "page", title: p.name, path: p.slug })),
        { type: "service", title: "AI & Machine Learning", desc: "Intelligent systems that automate", path: "/services/ai" },
        { type: "service", title: "Cybersecurity Services", desc: "Protection against modern threats", path: "/services/cybersecurity" },
        { type: "hire", title: "Hire AI Developers", path: "/hire/ai-developers" },
        { type: "hire", title: "Hire Salesforce Developers", path: "/hire/salesforce-developers" },
      ];
    }
    const q = query.toLowerCase();
    return index
      .filter((e) => e.keyword.toLowerCase().includes(q))
      .slice(0, 12);
  }, [query, index]);

  // Reset when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setActiveIndex(0);
    } else {
      setQuery("");
    }
  }, [open]);

  // Keep active within bounds
  useEffect(() => {
    if (activeIndex >= results.length) setActiveIndex(0);
  }, [activeIndex, results.length]);

  // Keyboard navigation
  const handleKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(results.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const r = results[activeIndex];
      if (r) {
        navigate(r.path);
        onClose();
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[9997]"
          />
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[92%] max-w-2xl z-[9998]"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
                <Search size={18} className="text-gray-400 flex-shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Search services, sub-services, hire roles..."
                  className="flex-1 bg-transparent border-0 outline-none text-[15px] text-gray-900 placeholder-gray-400"
                />
                <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold text-gray-400 bg-gray-100 border border-gray-200 px-2 py-1 rounded-md">
                  ESC
                </kbd>
                <button onClick={onClose} className="sm:hidden text-gray-400 hover:text-gray-700">
                  <X size={18} />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto py-2">
                {results.length === 0 ? (
                  <div className="px-5 py-12 text-center">
                    <Search size={24} className="text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500 text-sm">No results for "{query}"</p>
                    <p className="text-gray-400 text-xs mt-1">Try a different keyword or browse our services.</p>
                  </div>
                ) : (
                  <>
                    {!query.trim() && (
                      <div className="px-5 py-2">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Popular</p>
                      </div>
                    )}
                    {results.map((r, i) => {
                      const meta = TYPE_META[r.type] || TYPE_META.page;
                      const Icon = meta.Icon;
                      return (
                        <Link
                          key={i}
                          to={r.path}
                          onClick={onClose}
                          onMouseEnter={() => setActiveIndex(i)}
                          className={`flex items-center gap-3 px-5 py-3 transition-colors ${
                            i === activeIndex ? "bg-blue-50" : "hover:bg-gray-50"
                          }`}
                        >
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${meta.color}`}>
                            <Icon size={15} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 truncate">{r.title}</p>
                            {r.desc && <p className="text-xs text-gray-500 truncate">{r.desc}</p>}
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 flex-shrink-0">
                            {meta.label}
                          </span>
                          <ArrowRight size={14} className={`flex-shrink-0 ${i === activeIndex ? "text-blue-600" : "text-gray-300"}`} />
                        </Link>
                      );
                    })}
                  </>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50 text-xs text-gray-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <kbd className="bg-white border border-gray-200 px-1.5 py-0.5 rounded text-[10px] font-semibold">↑</kbd>
                    <kbd className="bg-white border border-gray-200 px-1.5 py-0.5 rounded text-[10px] font-semibold">↓</kbd>
                    <span className="hidden sm:inline ml-1">to navigate</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="bg-white border border-gray-200 px-1.5 py-0.5 rounded text-[10px] font-semibold">↵</kbd>
                    <span className="hidden sm:inline ml-1">to select</span>
                  </span>
                </div>
                <span className="text-gray-400 font-semibold">MershilTech Search</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
