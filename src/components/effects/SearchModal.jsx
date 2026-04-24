import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, X, ArrowRight, Briefcase, Users, Rocket, Shield,
  Clock, TrendingUp, CornerDownLeft,
} from "lucide-react";
import { servicesData } from "../../data/servicesData";

// Hire roles — kept in sync with Navbar/Hire page
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

// Curated popular suggestions shown when input is empty
const POPULAR_SUGGESTIONS = [
  { type: "service", title: "AI & Machine Learning", desc: "Production-grade AI systems", path: "/services/ai" },
  { type: "service", title: "Cybersecurity Services", desc: "Pen-testing · SOC · Compliance", path: "/services/cybersecurity" },
  { type: "hire", title: "Hire AI Developers", desc: "GPT-4o · LangChain · MLOps", path: "/hire/ai-developers" },
  { type: "sub-service", title: "Android App Development", desc: "Kotlin · Jetpack Compose", path: "/services/mobile/android-app-development" },
  { type: "hire", title: "Hire Salesforce Developers", desc: "Apex · LWC · Integrations", path: "/hire/salesforce-developers" },
  { type: "page", title: "Startups", desc: "Sydney-based MVP delivery", path: "/startups" },
];

// Build searchable index once
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
  page:           { label: "Page",        order: 3, Icon: Rocket,    color: "text-purple-600 bg-purple-50" },
  service:        { label: "Service",     order: 0, Icon: Briefcase, color: "text-blue-600 bg-blue-50" },
  "sub-service":  { label: "Sub-service", order: 1, Icon: Shield,    color: "text-cyan-600 bg-cyan-50" },
  hire:           { label: "Hire",        order: 2, Icon: Users,     color: "text-green-600 bg-green-50" },
};

// ─── Fuzzy scoring (no external deps) ──────────────────────────────────────
// Exact match > starts-with > substring > all-words > any-word > subsequence
function fuzzyScore(haystack, query) {
  const h = haystack.toLowerCase();
  const q = query.toLowerCase().trim();
  if (!q) return 0;

  if (h === q) return 1000;
  if (h.startsWith(q)) return 800;
  if (h.includes(q)) return 500;

  const words = q.split(/\s+/).filter(Boolean);
  if (words.length > 1) {
    let hits = 0;
    for (const w of words) if (h.includes(w)) hits++;
    if (hits === words.length) return 300;
    if (hits > 0) return Math.round((100 * hits) / words.length);
  }

  // Subsequence match — catches typos like "hre rect dev" → "Hire React Dev"
  let hi = 0, qi = 0;
  while (hi < h.length && qi < q.length) {
    if (h[hi] === q[qi]) qi++;
    hi++;
  }
  if (qi === q.length) return 40;

  return 0;
}

// ─── Recent search persistence ─────────────────────────────────────────────
const RECENT_KEY = "mershil-search-recent";
const MAX_RECENT = 5;

function getRecent() {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) || "[]").filter(Boolean);
  } catch {
    return [];
  }
}
function pushRecent(q) {
  try {
    const clean = q.trim();
    if (!clean || clean.length < 2) return;
    const next = [clean, ...getRecent().filter((x) => x !== clean)].slice(0, MAX_RECENT);
    localStorage.setItem(RECENT_KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
}
function clearRecent() {
  try { localStorage.removeItem(RECENT_KEY); } catch { /* ignore */ }
}

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [recent, setRecent] = useState([]);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();
  const index = useMemo(() => buildIndex(), []);

  // Compute results — empty query shows popular + recent, otherwise fuzzy-ranked
  const results = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return POPULAR_SUGGESTIONS;

    const scored = [];
    for (const e of index) {
      const titleScore = fuzzyScore(e.title, trimmed);
      const keywordScore = titleScore === 0 ? fuzzyScore(e.keyword, trimmed) * 0.5 : 0;
      const total = titleScore + keywordScore;
      if (total > 0) scored.push({ ...e, _score: total });
    }
    scored.sort((a, b) => b._score - a._score);
    return scored.slice(0, 20);
  }, [query, index]);

  // Group results by type for categorised counts
  const grouped = useMemo(() => {
    const g = { service: [], "sub-service": [], hire: [], page: [] };
    results.forEach((r) => {
      if (g[r.type]) g[r.type].push(r);
    });
    return g;
  }, [results]);

  // Flat list ordered by type priority — used for keyboard navigation
  const flat = useMemo(() => {
    const order = ["service", "sub-service", "hire", "page"];
    return order.flatMap((t) => grouped[t] || []);
  }, [grouped]);

  // Reset when opened / refresh recents
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setActiveIndex(0);
      setRecent(getRecent());
    } else {
      setQuery("");
    }
  }, [open]);

  // Keep active index within range
  useEffect(() => {
    if (activeIndex >= flat.length) setActiveIndex(0);
  }, [activeIndex, flat.length]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const el = listRef.current.querySelector(`[data-idx="${activeIndex}"]`);
    if (el) el.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  // Keyboard navigation
  const handleKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(flat.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const r = flat[activeIndex];
      if (r) {
        pushRecent(query);
        navigate(r.path);
        onClose();
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  const onItemClick = () => {
    if (query.trim()) pushRecent(query);
    onClose();
  };

  const categoryHeader = (label, count) => (
    <div className="flex items-center justify-between px-5 pt-4 pb-1">
      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
        {label}
      </p>
      <span className="text-[10px] text-gray-400 font-medium">{count}</span>
    </div>
  );

  const renderGroup = (typeKey, heading) => {
    const items = grouped[typeKey];
    if (!items || items.length === 0) return null;
    return (
      <div key={typeKey}>
        {query.trim() && categoryHeader(heading, items.length)}
        {items.map((r) => {
          const flatIdx = flat.indexOf(r);
          const meta = TYPE_META[r.type] || TYPE_META.page;
          const Icon = meta.Icon;
          return (
            <Link
              key={r.path}
              to={r.path}
              data-idx={flatIdx}
              onClick={onItemClick}
              onMouseEnter={() => setActiveIndex(flatIdx)}
              className={`flex items-center gap-3 px-5 py-3 transition-colors ${
                flatIdx === activeIndex ? "bg-blue-50" : "hover:bg-gray-50"
              }`}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${meta.color}`}>
                <Icon size={15} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{r.title}</p>
                {r.desc && <p className="text-xs text-gray-500 truncate">{r.desc}</p>}
              </div>
              <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-widest text-gray-400 flex-shrink-0">
                {meta.label}
              </span>
              {flatIdx === activeIndex ? (
                <CornerDownLeft size={14} className="text-blue-600 flex-shrink-0" />
              ) : (
                <ArrowRight size={14} className="text-gray-300 flex-shrink-0" />
              )}
            </Link>
          );
        })}
      </div>
    );
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
                  placeholder="Search services, sub-services, hire roles…"
                  className="flex-1 bg-transparent border-0 outline-none text-[15px] text-gray-900 placeholder-gray-400"
                />
                {query && (
                  <button
                    onClick={() => {
                      setQuery("");
                      inputRef.current?.focus();
                    }}
                    aria-label="Clear query"
                    className="text-gray-400 hover:text-gray-700 transition"
                  >
                    <X size={16} />
                  </button>
                )}
                <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold text-gray-400 bg-gray-100 border border-gray-200 px-2 py-1 rounded-md">
                  ESC
                </kbd>
                <button onClick={onClose} className="sm:hidden text-gray-400 hover:text-gray-700">
                  <X size={18} />
                </button>
              </div>

              {/* Results */}
              <div ref={listRef} className="max-h-[60vh] overflow-y-auto py-1">
                {!query.trim() && recent.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between px-5 pt-4 pb-1">
                      <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        <Clock size={11} /> Recent
                      </p>
                      <button
                        onClick={() => {
                          clearRecent();
                          setRecent([]);
                        }}
                        className="text-[10px] text-gray-400 hover:text-blue-700 transition font-medium"
                      >
                        Clear
                      </button>
                    </div>
                    <div className="px-3 pb-2 flex flex-wrap gap-1.5">
                      {recent.map((r) => (
                        <button
                          key={r}
                          onClick={() => {
                            setQuery(r);
                            inputRef.current?.focus();
                          }}
                          className="inline-flex items-center gap-1 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 border border-gray-100 hover:border-blue-200 text-xs text-gray-700 px-2.5 py-1 rounded-lg transition"
                        >
                          <Search size={10} className="text-gray-400" />
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {!query.trim() && (
                  <div className="flex items-center gap-1.5 px-5 pt-3 pb-1">
                    <TrendingUp size={11} className="text-gray-400" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Popular
                    </p>
                  </div>
                )}

                {flat.length === 0 ? (
                  <div className="px-5 py-12 text-center">
                    <Search size={24} className="text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500 text-sm">No results for "{query}"</p>
                    <p className="text-gray-400 text-xs mt-1">
                      Try a different keyword or browse our services.
                    </p>
                  </div>
                ) : query.trim() ? (
                  <>
                    {renderGroup("service", "Services")}
                    {renderGroup("sub-service", "Sub-services")}
                    {renderGroup("hire", "Hire")}
                    {renderGroup("page", "Pages")}
                  </>
                ) : (
                  // Popular suggestions — flat list, no category headers
                  <div>
                    {flat.map((r) => {
                      const flatIdx = flat.indexOf(r);
                      const meta = TYPE_META[r.type] || TYPE_META.page;
                      const Icon = meta.Icon;
                      return (
                        <Link
                          key={r.path}
                          to={r.path}
                          data-idx={flatIdx}
                          onClick={onItemClick}
                          onMouseEnter={() => setActiveIndex(flatIdx)}
                          className={`flex items-center gap-3 px-5 py-3 transition-colors ${
                            flatIdx === activeIndex ? "bg-blue-50" : "hover:bg-gray-50"
                          }`}
                        >
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${meta.color}`}>
                            <Icon size={15} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 truncate">{r.title}</p>
                            {r.desc && <p className="text-xs text-gray-500 truncate">{r.desc}</p>}
                          </div>
                          <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-widest text-gray-400 flex-shrink-0">
                            {meta.label}
                          </span>
                          {flatIdx === activeIndex ? (
                            <CornerDownLeft size={14} className="text-blue-600 flex-shrink-0" />
                          ) : (
                            <ArrowRight size={14} className="text-gray-300 flex-shrink-0" />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50 text-xs text-gray-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <kbd className="bg-white border border-gray-200 px-1.5 py-0.5 rounded text-[10px] font-semibold">↑</kbd>
                    <kbd className="bg-white border border-gray-200 px-1.5 py-0.5 rounded text-[10px] font-semibold">↓</kbd>
                    <span className="hidden sm:inline ml-1">navigate</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="bg-white border border-gray-200 px-1.5 py-0.5 rounded text-[10px] font-semibold">↵</kbd>
                    <span className="hidden sm:inline ml-1">select</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="bg-white border border-gray-200 px-1.5 py-0.5 rounded text-[10px] font-semibold">esc</kbd>
                    <span className="hidden sm:inline ml-1">close</span>
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
