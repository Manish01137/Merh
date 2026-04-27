import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin,
  Smartphone, Globe, Code2, Brain, Link2, Building2, Lightbulb, ShieldCheck,
  ArrowRight, Sparkles, Users, BookOpen, MessageCircle,
} from "lucide-react";
import { ServiceIcon } from "../../utils/serviceIcons";
import logoWhite from "../../assets/logo.png";

const serviceCategories = [
  { name: "Mobile App Development", icon: Smartphone, slug: "mobile", badge: null,
    featured: {
      title: "Build Your Mobile Product",
      desc: "iOS, Android, React Native & Flutter — ship native-quality apps in 10-12 weeks.",
      img: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=700&q=85&auto=format&fit=crop&dpr=2",
      cta: "Explore Mobile Services",
    },
    sub: [
      { name: "Android App Development", slug: "android-app-development" },
      { name: "iOS App Development", slug: "ios-app-development" },
      { name: "React Native Development", slug: "react-native-app-development" },
      { name: "Flutter App Development", slug: "flutter-app-development" },
      { name: "Wearable App Development", slug: "wearable-app-development" },
      { name: "PWA Development", slug: "pwa-development" },
      { name: "AR/VR App Development", slug: "ar-vr-app-development" },
      { name: "Startup App Development", slug: "startup-app-development" },
      { name: "Mobile App Maintenance", slug: "mobile-app-maintenance" },
    ]},
  { name: "Website Development", icon: Globe, slug: "website", badge: null,
    featured: {
      title: "Web Apps That Convert",
      desc: "Next.js, React, Laravel, Shopify — fast, accessible, SEO-ready from day one.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=85&auto=format&fit=crop&dpr=2",
      cta: "Explore Web Services",
    },
    sub: [
      { name: "Next.js Development", slug: "nextjs-development" },
      { name: "ReactJS Development", slug: "reactjs-development" },
      { name: "Full Stack Development", slug: "full-stack-development" },
      { name: "Laravel Development", slug: "laravel-development" },
      { name: "NodeJS Development", slug: "nodejs-development" },
      { name: "WordPress Development", slug: "wordpress-development" },
      { name: "Shopify Development", slug: "shopify-development" },
      { name: "eCommerce Development", slug: "ecommerce-development" },
      { name: "CMS Development", slug: "cms-development" },
    ]},
  { name: "Software Development", icon: Code2, slug: "software", badge: null,
    featured: {
      title: "Enterprise-Grade Platforms",
      desc: "SaaS, ERP, CRM, LMS built for scale — your unique workflow, not off-the-shelf software.",
      img: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=700&q=85&auto=format&fit=crop&dpr=2",
      cta: "Explore Software",
    },
    sub: [
      { name: "SaaS Platform Development", slug: "saas-platform-development" },
      { name: "ERP Development", slug: "erp-development" },
      { name: "CRM Development", slug: "crm-development" },
      { name: "LMS Development", slug: "lms-development" },
      { name: "Desktop App Development", slug: "desktop-app-development" },
      { name: "Custom Software Development", slug: "custom-software-development" },
    ]},
  { name: "Artificial Intelligence", icon: Brain, slug: "ai", badge: "NEW",
    featured: {
      title: "Production-Grade AI",
      desc: "RAG, fine-tuned LLMs, computer vision and AI agents — shipped, not demo'd.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&q=85&auto=format&fit=crop&dpr=2",
      cta: "Explore AI Services",
    },
    sub: [
      { name: "Generative AI Development", slug: "generative-ai-development" },
      { name: "AI Agent Development", slug: "ai-agent-development" },
      { name: "AI Chatbot Development", slug: "ai-chatbot-development" },
      { name: "Machine Learning Development", slug: "machine-learning-development" },
      { name: "Computer Vision Development", slug: "computer-vision-development" },
      { name: "LLM Development & Fine-Tuning", slug: "llm-development" },
      { name: "NLP Development Services", slug: "nlp-development" },
    ]},
  { name: "Blockchain Development", icon: Link2, slug: "blockchain", badge: null,
    featured: {
      title: "On-Chain Products",
      desc: "Smart contracts, NFTs, DeFi protocols, Web3 dApps — audited and gas-optimised.",
      img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=700&q=85&auto=format&fit=crop&dpr=2",
      cta: "Explore Blockchain",
    },
    sub: [
      { name: "Smart Contract Development", slug: "smart-contract-development" },
      { name: "NFT Marketplace Development", slug: "nft-marketplace-development" },
      { name: "DeFi Protocol Development", slug: "defi-protocol-development" },
      { name: "Metaverse Development", slug: "metaverse-development" },
      { name: "Crypto Payment Gateway", slug: "crypto-payment-gateway" },
    ]},
  { name: "Enterprise Solution", icon: Building2, slug: "enterprise", badge: null,
    featured: {
      title: "Enterprise Consulting",
      desc: "Azure, AWS, Salesforce, and staff augmentation — architecture-first delivery.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=85&auto=format&fit=crop&dpr=2",
      cta: "Explore Enterprise",
    },
    sub: [
      { name: "Microsoft Azure Consulting", slug: "microsoft-azure-consulting" },
      { name: "AWS Development", slug: "aws-development" },
      { name: "Salesforce Consulting", slug: "salesforce-consulting" },
      { name: "IT Staff Augmentation", slug: "it-staff-augmentation" },
    ]},
  { name: "On-Demand Solutions", icon: Lightbulb, slug: "on-demand", badge: null,
    featured: {
      title: "On-Demand Platforms",
      desc: "Food, taxi, grocery, eWallet, dating — white-label ready in 6-8 weeks.",
      img: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=700&q=85&auto=format&fit=crop&dpr=2",
      cta: "Explore On-Demand",
    },
    sub: [
      { name: "Food Delivery App", slug: "food-delivery-app" },
      { name: "Taxi & Ride-Hailing App", slug: "taxi-ride-hailing-app" },
      { name: "Grocery Delivery App", slug: "grocery-delivery-app" },
      { name: "eWallet App", slug: "ewallet-app" },
      { name: "Dating App Development", slug: "dating-app-development" },
    ]},
  { name: "Cybersecurity Services", icon: ShieldCheck, slug: "cybersecurity", badge: "NEW",
    featured: {
      title: "24/7 Security Lifecycle",
      desc: "Pen-testing, SOC, compliance and incident response — Essential Eight ready.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=700&q=85&auto=format&fit=crop&dpr=2",
      cta: "Explore Cybersecurity",
    },
    sub: [
      { name: "Penetration Testing", slug: "penetration-testing" },
      { name: "Security Audit & Compliance", slug: "security-audit-compliance" },
      { name: "Managed SOC Services", slug: "managed-soc-services" },
      { name: "Cloud Security", slug: "cloud-security" },
      { name: "Application Security", slug: "application-security" },
      { name: "Incident Response & Forensics", slug: "incident-response" },
    ]},
];

const hireRoles = [
  { icon: "brain", name: "Hire AI Developers", slug: "ai-developers" },
  { icon: "laptop", name: "Hire Dedicated Developers", slug: "dedicated-developers" },
  { icon: "mobile", name: "Hire Mobile App Developers", slug: "mobile-app-developers" },
  { icon: "android", name: "Hire Android Developers", slug: "android-developers" },
  { icon: "apple", name: "Hire iOS Developers", slug: "ios-developers" },
  { icon: "react", name: "Hire React Native Developers", slug: "react-native-developers" },
  { icon: "flutter", name: "Hire Flutter Developers", slug: "flutter-developers" },
  { icon: "desktop", name: "Hire Software Developers", slug: "software-developers" },
  { icon: "globe", name: "Hire Web Developers", slug: "web-developers" },
  { icon: "php", name: "Hire PHP Developers", slug: "php-developers" },
  { icon: "angular", name: "Hire AngularJS Developers", slug: "angular-developers" },
  { icon: "react", name: "Hire ReactJS Developers", slug: "react-developers" },
  { icon: "nodejs", name: "Hire NodeJS Developers", slug: "node-developers" },
  { icon: "java", name: "Hire Java Developers", slug: "java-developers" },
  { icon: "laravel", name: "Hire Laravel Developers", slug: "laravel-developers" },
  { icon: "world", name: "Hire Remote Developers", slug: "remote-developers" },
  { icon: "rocket", name: "Hire Offshore Developers", slug: "offshore-developers" },
  { icon: "solidity", name: "Hire Blockchain Developers", slug: "blockchain-developers" },
  { icon: "box", name: "Hire MEAN Stack Developers", slug: "mean-stack-developers" },
  { icon: "salesforce", name: "Hire Salesforce Developers", slug: "salesforce-developers" },
  { icon: "lock", name: "Hire Cybersecurity Experts", slug: "cybersecurity-experts" },
];

const companyLinks = [
  { label: "About", to: "/about", icon: Users, desc: "Story, team, values" },
  { label: "Blog", to: "/blog", icon: BookOpen, desc: "Insights & engineering notes" },
  { label: "Contact", to: "/contact", icon: MessageCircle, desc: "Get in touch with our team" },
];

const navLinks = [
  { label: "Services", hasDropdown: "services", path: "/services" },
  { label: "Dedicated Developers", hasDropdown: "hire", path: "/hire" },
  { label: "Cybersecurity", path: "/cybersecurity" },
  { label: "Company", hasDropdown: "company", path: "/about" },
  { label: "Startups", path: "/startups" },
];

const megaSpring = { type: "spring", stiffness: 380, damping: 32, mass: 0.6 };

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null); // "services" | "hire" | "company" | null
  const [activeCat, setActiveCat] = useState(0);
  const [mob, setMob] = useState(false);
  const [mobSvcOpen, setMobSvcOpen] = useState(false);
  const [mobHireOpen, setMobHireOpen] = useState(false);
  const [mobCompanyOpen, setMobCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverIdx, setHoverIdx] = useState(null);
  const dropdownTimer = useRef(null);
  const linkRefs = useRef([]);
  const [underlineStyle, setUnderlineStyle] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll state
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile + dropdowns on route change
  useEffect(() => {
    setMob(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Escape key closes menus
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMob(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (mob) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mob]);

  // Magic underline tracker — compute x + width based on hovered/active link
  useEffect(() => {
    // Pick the hovered link, else the currently-active link matching the route
    let idx = hoverIdx;
    if (idx === null) {
      idx = navLinks.findIndex((l) =>
        l.path === "/" ? location.pathname === "/" : location.pathname.startsWith(l.path)
      );
    }
    const el = linkRefs.current[idx];
    if (!el) {
      setUnderlineStyle(null);
      return;
    }
    setUnderlineStyle({ left: el.offsetLeft, width: el.offsetWidth });
  }, [hoverIdx, location.pathname]);

  const openDD = (name) => {
    clearTimeout(dropdownTimer.current);
    setOpenDropdown(name);
  };
  const closeDD = () => {
    dropdownTimer.current = setTimeout(() => setOpenDropdown(null), 160);
  };

  const isLinkActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,1)",
        }}
        transition={{ duration: 0.3 }}
        className={`fixed w-full top-0 z-[999] ${
          scrolled
            ? "backdrop-blur-2xl shadow-[0_8px_32px_-12px_rgba(15,23,42,0.12)]"
            : "border-b border-gray-100"
        }`}
        style={{ WebkitBackdropFilter: scrolled ? "blur(32px)" : undefined }}
      >
        {/* Gradient accent strip on scroll */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(99,102,241,0.4), rgba(59,130,246,0.4), transparent)",
          }}
        />

        {/* Main bar */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 py-3 relative">
          {/* LEFT: Logo (anchored to left corner) */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0 z-10">
            <img
              src={logoWhite}
              alt="MershilTech"
              width="44"
              height="44"
              decoding="async"
              fetchPriority="high"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex items-baseline gap-2">
              <span className="text-gray-900 font-extrabold text-[20px] sm:text-[22px] leading-none tracking-tight">
                Mershil<span className="text-blue-700">Tech</span>
              </span>
              <span className="hidden 2xl:inline-flex items-center gap-1 text-[10px] font-semibold text-blue-700/70 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full tracking-widest uppercase">
                <MapPin size={9} /> Sydney
              </span>
            </div>
          </Link>

          {/* CENTER: Nav links + Search — absolutely centered, doesn't affect flex flow */}
          <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 top-0 bottom-0">
            {/* Magic underline */}
            {underlineStyle && (
              <motion.div
                aria-hidden
                className="absolute bottom-0 h-[2px] rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                initial={false}
                animate={{ left: underlineStyle.left, width: underlineStyle.width }}
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            )}

            {navLinks.map((link, i) => {
              const active = isLinkActive(link.path);
              const hasDD = Boolean(link.hasDropdown);
              const isOpen = openDropdown === link.hasDropdown;

              const inner = (
                <span
                  ref={(el) => (linkRefs.current[i] = el)}
                  className={`relative flex items-center gap-1 px-4 py-6 font-medium text-[14px] cursor-pointer whitespace-nowrap transition-colors ${
                    active || isOpen ? "text-blue-700" : "text-gray-700 hover:text-blue-700"
                  }`}
                  onMouseEnter={() => setHoverIdx(i)}
                  onMouseLeave={() => setHoverIdx(null)}
                >
                  {link.label}
                  {hasDD && (
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </span>
              );

              if (hasDD) {
                return (
                  <div
                    key={i}
                    className="relative"
                    onMouseEnter={() => openDD(link.hasDropdown)}
                    onMouseLeave={closeDD}
                  >
                    <button onClick={() => navigate(link.path)} className="outline-none">
                      {inner}
                    </button>

                    {/* Inline Company dropdown — anchored under the Company link */}
                    {link.hasDropdown === "company" && (
                      <AnimatePresence>
                        {openDropdown === "company" && (
                          <motion.div
                            key="dd-company-inline"
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={megaSpring}
                            className="absolute top-full right-0 pt-2 w-[320px] z-50"
                          >
                            <div className="rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(15,23,42,0.22)] border border-gray-100 overflow-hidden p-3">
                              <p className="px-3 pt-1.5 pb-2 text-[10px] font-bold text-blue-700 uppercase tracking-[0.15em]">
                                Company
                              </p>
                              <div className="space-y-0.5">
                                {companyLinks.map((c, idx) => {
                                  const Icon = c.icon;
                                  return (
                                    <Link
                                      key={idx}
                                      to={c.to}
                                      onClick={() => setOpenDropdown(null)}
                                      className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-50 transition"
                                    >
                                      <div className="w-9 h-9 rounded-lg bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center transition">
                                        <Icon size={16} className="text-blue-700 group-hover:text-white transition" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <p className="text-[13.5px] font-semibold text-gray-900 group-hover:text-blue-700 transition">
                                          {c.label}
                                        </p>
                                        <p className="text-[11px] text-gray-500 truncate">{c.desc}</p>
                                      </div>
                                      <ArrowRight size={13} className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              }

              return (
                <Link key={i} to={link.path} className="outline-none">
                  {inner}
                </Link>
              );
            })}

            {/* Search pill with ⌘K — sits inside the centered nav */}
            <button
              onClick={() => window.dispatchEvent(new Event("mershil:open-search"))}
              aria-label="Search"
              className="group flex items-center gap-2.5 pl-3 pr-2 py-2 ml-3 rounded-xl border border-gray-200 hover:border-blue-300 bg-white/60 hover:bg-blue-50/40 text-gray-500 hover:text-blue-700 text-sm transition"
            >
              <Search size={14} />
              <span className="hidden xl:inline font-medium">Search</span>
              <kbd className="hidden xl:inline-flex items-center gap-0.5 ml-1 text-[10px] font-bold text-gray-400 group-hover:text-blue-700 bg-gray-100 group-hover:bg-blue-100 border border-gray-200 group-hover:border-blue-200 rounded-md px-1.5 py-0.5 transition">
                ⌘K
              </kbd>
            </button>
          </nav>

          {/* RIGHT: Hire Now (anchored to right corner) */}
          <div className="hidden lg:flex items-center z-10">
            <Link
              to="/hire"
              className="relative px-5 py-2.5 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-700 text-white font-bold text-sm shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30 transition-all overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Hire Now <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </span>
              {/* Shimmer on hover */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)",
                  animation: "shimmer 1.2s ease-in-out",
                }}
              />
              <span className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="lg:hidden flex items-center gap-1.5">
            <button
              onClick={() => window.dispatchEvent(new Event("mershil:open-search"))}
              aria-label="Search"
              className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition"
            >
              <Search size={19} />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-700 hover:bg-blue-50 transition relative"
              onClick={() => setMob(!mob)}
              aria-label="Menu"
            >
              <AnimatePresence mode="wait">
                {mob ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* SERVICES mega menu */}
        <AnimatePresence>
          {openDropdown === "services" && (
            <motion.div
              key="mega-svc"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={megaSpring}
              onMouseEnter={() => openDD("services")}
              onMouseLeave={closeDD}
              className="absolute top-full left-0 right-0 px-5 sm:px-6 pb-6"
            >
              <div className="max-w-7xl mx-auto">
                <div className="rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(15,23,42,0.22)] border border-gray-100 overflow-hidden flex">
                  {/* Categories rail */}
                  <div className="w-64 bg-gray-50/60 border-r border-gray-100 p-3 space-y-0.5">
                    {serviceCategories.map((c, i) => {
                      const Icon = c.icon;
                      const active = activeCat === i;
                      return (
                        <div
                          key={i}
                          onMouseEnter={() => setActiveCat(i)}
                          onClick={() => { navigate(`/services/${c.slug}`); setOpenDropdown(null); }}
                          className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer text-[13px] font-medium transition ${
                            active
                              ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                          }`}
                        >
                          <Icon size={15} className="flex-shrink-0" />
                          <span className="flex-1 truncate">{c.name}</span>
                          {c.badge && (
                            <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                              active ? "bg-white text-blue-700" : "bg-blue-100 text-blue-700"
                            }`}>
                              {c.badge}
                            </span>
                          )}
                          <ChevronDown
                            size={11}
                            className={`-rotate-90 flex-shrink-0 ${active ? "opacity-100" : "opacity-0"}`}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Sub-items */}
                  <div className="flex-1 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-[10px] font-bold text-blue-700 uppercase tracking-[0.15em]">
                        {serviceCategories[activeCat].name}
                      </p>
                      <span className="text-[10px] text-gray-400 font-medium">
                        {serviceCategories[activeCat].sub.length} services
                      </span>
                    </div>
                    <motion.div
                      key={activeCat}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25 }}
                      className="grid grid-cols-2 gap-1 mb-5"
                    >
                      {serviceCategories[activeCat].sub.map((s, i) => (
                        <Link
                          key={i}
                          to={`/services/${serviceCategories[activeCat].slug}/${s.slug}`}
                          onClick={() => setOpenDropdown(null)}
                          className="group flex items-center gap-1.5 px-3 py-2 rounded-lg text-[12.5px] text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition"
                        >
                          <span className="flex-1 truncate">{s.name}</span>
                          <ArrowRight
                            size={11}
                            className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                          />
                        </Link>
                      ))}
                    </motion.div>
                    <Link
                      to={`/services/${serviceCategories[activeCat].slug}`}
                      onClick={() => setOpenDropdown(null)}
                      className="inline-flex items-center gap-1.5 text-blue-700 text-xs font-bold uppercase tracking-wider pt-3 border-t border-gray-100 w-full hover:gap-2.5 transition-all"
                    >
                      View All {serviceCategories[activeCat].name}
                      <ArrowRight size={12} />
                    </Link>
                  </div>

                  {/* Featured spotlight */}
                  <motion.div
                    key={`spot-${activeCat}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-72 relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"
                  >
                    <img
                      src={serviceCategories[activeCat].featured.img}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover opacity-35"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-blue-900/50 to-indigo-900/70" />
                    <div className="relative p-6 h-full flex flex-col justify-end min-h-[280px]">
                      <span className="inline-flex items-center gap-1.5 self-start text-[10px] font-bold uppercase tracking-widest text-blue-300 bg-blue-500/20 border border-blue-400/30 px-2.5 py-1 rounded-full mb-3">
                        <Sparkles size={10} /> Spotlight
                      </span>
                      <h4 className="text-white font-bold text-lg leading-tight mb-2">
                        {serviceCategories[activeCat].featured.title}
                      </h4>
                      <p className="text-white/70 text-xs leading-relaxed mb-4">
                        {serviceCategories[activeCat].featured.desc}
                      </p>
                      <Link
                        to={`/services/${serviceCategories[activeCat].slug}`}
                        onClick={() => setOpenDropdown(null)}
                        className="inline-flex items-center gap-1.5 bg-white text-blue-700 px-3.5 py-2 rounded-lg font-semibold text-xs hover:bg-blue-50 transition self-start group"
                      >
                        {serviceCategories[activeCat].featured.cta}
                        <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HIRE mega menu */}
        <AnimatePresence>
          {openDropdown === "hire" && (
            <motion.div
              key="mega-hire"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={megaSpring}
              onMouseEnter={() => openDD("hire")}
              onMouseLeave={closeDD}
              className="absolute top-full left-0 right-0 px-5 sm:px-6 pb-6"
            >
              <div className="max-w-7xl mx-auto">
                <div className="rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(15,23,42,0.22)] border border-gray-100 overflow-hidden flex">
                  {/* Roles grid */}
                  <div className="flex-1 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-[10px] font-bold text-blue-700 uppercase tracking-[0.15em]">
                        Top 1% Vetted Developers
                      </p>
                      <span className="text-[10px] text-gray-400 font-medium">
                        {hireRoles.length} roles · 48hr onboarding
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      {hireRoles.map((r, i) => (
                        <Link
                          key={i}
                          to={`/hire/${r.slug}`}
                          onClick={() => setOpenDropdown(null)}
                          className="group flex items-center gap-2.5 px-2 py-2 rounded-lg text-[12.5px] font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                        >
                          <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center flex-shrink-0 transition">
                            <ServiceIcon name={r.icon} className="w-4 h-4 text-blue-700" />
                          </div>
                          <span className="flex-1 truncate">{r.name}</span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      to="/hire"
                      onClick={() => setOpenDropdown(null)}
                      className="inline-flex items-center gap-1.5 text-blue-700 text-xs font-bold uppercase tracking-wider mt-5 pt-3 border-t border-gray-100 w-full hover:gap-2.5 transition-all"
                    >
                      View All Hiring Roles
                      <ArrowRight size={12} />
                    </Link>
                  </div>

                  {/* Hire spotlight */}
                  <div className="w-72 relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
                    <img
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=85&auto=format&fit=crop&dpr=2"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover opacity-35"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-blue-900/50 to-indigo-900/70" />
                    <div className="relative p-6 h-full flex flex-col justify-end min-h-[280px]">
                      <span className="inline-flex items-center gap-1.5 self-start text-[10px] font-bold uppercase tracking-widest text-blue-300 bg-blue-500/20 border border-blue-400/30 px-2.5 py-1 rounded-full mb-3">
                        <Sparkles size={10} /> Flexible Hiring
                      </span>
                      <h4 className="text-white font-bold text-lg leading-tight mb-2">
                        Scale Your Team in 48 Hours
                      </h4>
                      <p className="text-white/70 text-xs leading-relaxed mb-4">
                        Fixed-price, hourly, dedicated, or bucket hours — AU MSA + NDA on day one.
                      </p>
                      <Link
                        to="/hire"
                        onClick={() => setOpenDropdown(null)}
                        className="inline-flex items-center gap-1.5 bg-white text-blue-700 px-3.5 py-2 rounded-lg font-semibold text-xs hover:bg-blue-50 transition self-start group"
                      >
                        See Hiring Models
                        <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.header>

      {/* MOBILE MENU — full-screen slide from right */}
      <AnimatePresence>
        {mob && (
          <>
            <motion.div
              key="mob-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm"
              onClick={() => setMob(false)}
            />
            <motion.div
              key="mob-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 34 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 z-[999] w-[90%] max-w-sm bg-white shadow-2xl overflow-y-auto"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-lg z-10">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
                    <img
                      src={logoWhite}
                      alt=""
                      width="28" height="28"
                      className="w-7 h-7 object-contain"
                      style={{ filter: "invert(1) brightness(2)", mixBlendMode: "screen" }}
                    />
                  </div>
                  <span className="font-extrabold text-gray-900 text-lg">
                    Mershil<span className="text-blue-700">Tech</span>
                  </span>
                </div>
                <button
                  onClick={() => setMob(false)}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer content */}
              <div className="px-5 py-4 space-y-1">
                {/* Services accordion */}
                <div className="border-b border-gray-100 pb-1.5">
                  <button
                    onClick={() => setMobSvcOpen((v) => !v)}
                    className="w-full flex items-center justify-between py-3 font-bold text-gray-900 text-[15px]"
                  >
                    Services
                    <ChevronDown
                      size={17}
                      className={`text-gray-400 transition-transform ${mobSvcOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobSvcOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-2 space-y-0.5">
                          {serviceCategories.map((c, i) => (
                            <Link
                              key={i}
                              to={`/services/${c.slug}`}
                              onClick={() => setMob(false)}
                              className="flex items-center gap-3 pl-2 pr-3 py-2.5 text-[13.5px] text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition"
                            >
                              <c.icon size={15} className="text-blue-600" />
                              <span className="flex-1">{c.name}</span>
                              {c.badge && (
                                <span className="text-[9px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">
                                  {c.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Hire accordion */}
                <div className="border-b border-gray-100 pb-1.5">
                  <button
                    onClick={() => setMobHireOpen((v) => !v)}
                    className="w-full flex items-center justify-between py-3 font-bold text-gray-900 text-[15px]"
                  >
                    Dedicated Developers
                    <ChevronDown
                      size={17}
                      className={`text-gray-400 transition-transform ${mobHireOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobHireOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-2 space-y-0.5">
                          {hireRoles.slice(0, 10).map((r, i) => (
                            <Link
                              key={i}
                              to={`/hire/${r.slug}`}
                              onClick={() => setMob(false)}
                              className="flex items-center gap-3 pl-2 pr-3 py-2.5 text-[13.5px] text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition"
                            >
                              <div className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center">
                                <ServiceIcon name={r.icon} className="w-3.5 h-3.5 text-blue-700" />
                              </div>
                              <span>{r.name}</span>
                            </Link>
                          ))}
                          <Link
                            to="/hire"
                            onClick={() => setMob(false)}
                            className="flex items-center gap-1.5 pl-2 pr-3 py-2.5 text-[13.5px] font-bold text-blue-700"
                          >
                            View all {hireRoles.length} roles <ArrowRight size={12} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Flat links */}
                <Link to="/cybersecurity" onClick={() => setMob(false)} className="block py-3 font-bold text-gray-900 text-[15px] hover:text-blue-700 border-b border-gray-100 transition">
                  Cybersecurity <span className="text-[9px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded ml-1">NEW</span>
                </Link>
                {/* Company accordion */}
                <div className="border-b border-gray-100 pb-1.5">
                  <button
                    onClick={() => setMobCompanyOpen((v) => !v)}
                    className="w-full flex items-center justify-between py-3 font-bold text-gray-900 text-[15px]"
                  >
                    Company
                    <ChevronDown
                      size={17}
                      className={`text-gray-400 transition-transform ${mobCompanyOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobCompanyOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-2 space-y-0.5">
                          {companyLinks.map((c, i) => {
                            const Icon = c.icon;
                            return (
                              <Link
                                key={i}
                                to={c.to}
                                onClick={() => setMob(false)}
                                className="flex items-center gap-3 pl-2 pr-3 py-2.5 text-[13.5px] text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition"
                              >
                                <div className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center">
                                  <Icon size={14} className="text-blue-700" />
                                </div>
                                <span>{c.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/startups" onClick={() => setMob(false)} className="block py-3 font-bold text-gray-900 text-[15px] hover:text-blue-700 border-b border-gray-100 transition">Startups</Link>

                {/* CTA */}
                <Link
                  to="/hire"
                  onClick={() => setMob(false)}
                  className="flex items-center justify-center gap-2 bg-gradient-to-br from-blue-700 to-indigo-700 text-white py-3.5 rounded-xl font-bold mt-5 shadow-lg shadow-blue-200"
                >
                  Hire Now <ArrowRight size={15} />
                </Link>

                {/* Contact strip */}
                <div className="pt-4 mt-2 border-t border-gray-100 space-y-1.5">
                  <a href="tel:+61452565421" className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-blue-700 transition">
                    <Phone size={15} className="text-blue-600" /> +61 452 565 421
                  </a>
                  <a href="mailto:info@mershiltech.com" className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-blue-700 transition">
                    <Mail size={15} className="text-blue-600" /> info@mershiltech.com
                  </a>
                  <div className="flex items-center gap-3 py-2 text-sm text-gray-600">
                    <MapPin size={15} className="text-blue-600 flex-shrink-0" />
                    <span>54 Regent St, Chippendale, Sydney NSW 2008</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </>
  );
}
