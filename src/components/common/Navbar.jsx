import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Menu, X, ChevronDown, Search, Phone, Mail,
  Smartphone, Globe, Code2, Brain, Link2, Building2, Lightbulb, ShieldCheck,
} from "lucide-react";
import { ServiceIcon } from "../../utils/serviceIcons";
import logoWhite from "../../assets/logo.png";

const serviceCategories = [
  { name: "Mobile App Development", icon: Smartphone, slug: "mobile", sub: [
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
  { name: "Website Development", icon: Globe, slug: "website", sub: [
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
  { name: "Software Development", icon: Code2, slug: "software", sub: [
    { name: "SaaS Platform Development", slug: "saas-platform-development" },
    { name: "ERP Development", slug: "erp-development" },
    { name: "CRM Development", slug: "crm-development" },
    { name: "LMS Development", slug: "lms-development" },
    { name: "Desktop App Development", slug: "desktop-app-development" },
    { name: "Custom Software Development", slug: "custom-software-development" },
  ]},
  { name: "Artificial Intelligence", icon: Brain, slug: "ai", sub: [
    { name: "Generative AI Development", slug: "generative-ai-development" },
    { name: "AI Agent Development", slug: "ai-agent-development" },
    { name: "AI Chatbot Development", slug: "ai-chatbot-development" },
    { name: "Machine Learning Development", slug: "machine-learning-development" },
    { name: "Computer Vision Development", slug: "computer-vision-development" },
    { name: "LLM Development & Fine-Tuning", slug: "llm-development" },
    { name: "NLP Development Services", slug: "nlp-development" },
  ]},
  { name: "Blockchain Development", icon: Link2, slug: "blockchain", sub: [
    { name: "Smart Contract Development", slug: "smart-contract-development" },
    { name: "NFT Marketplace Development", slug: "nft-marketplace-development" },
    { name: "DeFi Protocol Development", slug: "defi-protocol-development" },
    { name: "Metaverse Development", slug: "metaverse-development" },
    { name: "Crypto Payment Gateway", slug: "crypto-payment-gateway" },
  ]},
  { name: "Enterprise Solution", icon: Building2, slug: "enterprise", sub: [
    { name: "Microsoft Azure Consulting", slug: "microsoft-azure-consulting" },
    { name: "AWS Development", slug: "aws-development" },
    { name: "Salesforce Consulting", slug: "salesforce-consulting" },
    { name: "IT Staff Augmentation", slug: "it-staff-augmentation" },
  ]},
  { name: "On-Demand Solutions", icon: Lightbulb, slug: "on-demand", sub: [
    { name: "Food Delivery App", slug: "food-delivery-app" },
    { name: "Taxi & Ride-Hailing App", slug: "taxi-ride-hailing-app" },
    { name: "Grocery Delivery App", slug: "grocery-delivery-app" },
    { name: "eWallet App", slug: "ewallet-app" },
    { name: "Dating App Development", slug: "dating-app-development" },
  ]},
  { name: "Cybersecurity Services", icon: ShieldCheck, slug: "cybersecurity", sub: [
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

export default function Navbar() {
  const [showSvc, setShowSvc] = useState(false);
  const [showHire, setShowHire] = useState(false);
  const [activeCat, setActiveCat] = useState(0);
  const [mob, setMob] = useState(false);
  const [mobSvcOpen, setMobSvcOpen] = useState(false);
  const [mobHireOpen, setMobHireOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const svcT = useRef(null), hireT = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMob(false);
  }, [location.pathname]);

  const onSE = () => { clearTimeout(svcT.current); setShowSvc(true); setShowHire(false); };
  const onSL = () => { svcT.current = setTimeout(() => setShowSvc(false), 180); };
  const onHE = () => { clearTimeout(hireT.current); setShowHire(true); setShowSvc(false); };
  const onHL = () => { hireT.current = setTimeout(() => setShowHire(false), 180); };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        .nl{position:relative;color:#374151;font-weight:500;font-size:14px;transition:color .2s;cursor:pointer;display:flex;align-items:center;gap:4px;background:none;border:none;padding:8px 0;white-space:nowrap;}
        .nl:hover{color:#1d4ed8;}
        .nl.active{color:#1d4ed8;}
        .nl::after{content:'';position:absolute;bottom:4px;left:0;width:0;height:2px;background:#1d4ed8;border-radius:2px;transition:width .3s cubic-bezier(0.22,1,0.36,1);}
        .nl:hover::after,.nl.active::after{width:100%;}
        .mega{position:absolute;top:calc(100% + 10px);left:50%;transform:translateX(-50%);background:#fff;border-radius:18px;box-shadow:0 30px 80px rgba(0,0,0,.14);border:1px solid #e5e7eb;z-index:9999;animation:fdwn .2s cubic-bezier(0.22,1,0.36,1);}
        @keyframes fdwn{from{opacity:0;transform:translateX(-50%) translateY(-10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
        .cat-i{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;cursor:pointer;transition:all .2s;color:#374151;font-size:13px;font-weight:500;}
        .cat-i:hover,.cat-i.active{background:#eff6ff;color:#1d4ed8;}
        .sub-i{display:flex;align-items:center;gap:6px;padding:8px 12px;border-radius:8px;color:#4b5563;font-size:12.5px;cursor:pointer;transition:all .18s;text-decoration:none;}
        .sub-i:hover{background:#eff6ff;color:#1d4ed8;}
        .sub-i .arrow{opacity:0;transform:translateX(-4px);transition:all .2s;}
        .sub-i:hover .arrow{opacity:1;transform:translateX(0);}
        .hire-i{display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:10px;cursor:pointer;transition:all .18s;color:#374151;font-size:12.5px;text-decoration:none;font-weight:500;}
        .hire-i:hover{background:#eff6ff;color:#1d4ed8;}
        .h-ic{width:32px;height:32px;background:#f3f4f6;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s;}
        .hire-i:hover .h-ic{background:#dbeafe;}
      `}</style>

      <header className={`fixed w-full top-0 z-[999] transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
          : "bg-white border-b border-gray-100"
      }`}>
        {/* Slim top bar */}
        <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-800 text-white text-[11.5px] hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-1.5">
            <span className="flex items-center gap-2 text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-medium">Trusted by 500+ clients across 70+ countries</span>
            </span>
            <div className="flex items-center gap-5">
              <a href="tel:+13033350405" className="flex items-center gap-1.5 text-white/90 hover:text-white transition">
                <Phone size={11} /> (303) 335-0405
              </a>
              <a href="mailto:info@mershiltech.com" className="hidden lg:flex items-center gap-1.5 text-white/90 hover:text-white transition">
                <Mail size={11} /> info@mershiltech.com
              </a>
            </div>
          </div>
        </div>

        {/* Main bar */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-400/50">
                <img
                  src={logoWhite}
                  alt="MershilTech"
                  width="40"
                  height="40"
                  decoding="async"
                  fetchPriority="high"
                  className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-110"
                  style={{ filter: "invert(1) brightness(2)", mixBlendMode: "screen" }}
                />
              </div>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-500/0 via-blue-400/40 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-lg transition duration-500 pointer-events-none -z-10" />
            </div>
            <span className="text-gray-900 font-extrabold text-[22px] leading-none tracking-tight">
              Mershil<span className="text-blue-700">Tech</span>
            </span>
          </Link>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Services */}
            <div className="relative" onMouseEnter={onSE} onMouseLeave={onSL}>
              <button
                className={`nl ${location.pathname.startsWith("/services") ? "active" : ""}`}
                onClick={() => navigate("/services")}
              >
                Services <ChevronDown size={13} className={`transition-transform ${showSvc ? "rotate-180" : ""}`} />
              </button>
              {showSvc && (
                <div className="mega" style={{ width: "860px" }} onMouseEnter={onSE} onMouseLeave={onSL}>
                  <div className="flex">
                    {/* Left categories */}
                    <div className="w-60 bg-gray-50 rounded-l-2xl p-3 border-r border-gray-100 space-y-0.5">
                      {serviceCategories.map((c, i) => {
                        const Icon = c.icon;
                        return (
                          <div
                            key={i}
                            className={`cat-i ${activeCat === i ? "active" : ""}`}
                            onMouseEnter={() => setActiveCat(i)}
                            onClick={() => { navigate(`/services/${c.slug}`); setShowSvc(false); }}
                          >
                            <Icon size={14} />
                            {c.name}
                          </div>
                        );
                      })}
                    </div>
                    {/* Right sub-items */}
                    <div className="flex-1 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-[10px] font-bold text-blue-700 uppercase tracking-[0.15em]">
                          {serviceCategories[activeCat].name}
                        </p>
                        <span className="text-[10px] text-gray-400 font-medium">
                          {serviceCategories[activeCat].sub.length} services
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-0.5 mb-4">
                        {serviceCategories[activeCat].sub.map((s, i) => (
                          <Link
                            key={i}
                            to={`/services/${serviceCategories[activeCat].slug}/${s.slug}`}
                            className="sub-i"
                            onClick={() => setShowSvc(false)}
                          >
                            <span>{s.name}</span>
                            <span className="arrow ml-auto">→</span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        to={`/services/${serviceCategories[activeCat].slug}`}
                        className="flex items-center gap-1.5 text-blue-700 text-xs font-bold uppercase tracking-wider pt-3 border-t border-gray-100 hover:gap-2.5 transition-all"
                        onClick={() => setShowSvc(false)}
                      >
                        View All {serviceCategories[activeCat].name} →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Hire Developers */}
            <div className="relative" onMouseEnter={onHE} onMouseLeave={onHL}>
              <button
                className={`nl ${location.pathname.startsWith("/hire") ? "active" : ""}`}
                onClick={() => navigate("/hire")}
              >
                Dedicated Developer <ChevronDown size={13} className={`transition-transform ${showHire ? "rotate-180" : ""}`} />
              </button>
              {showHire && (
                <div className="mega" style={{ width: "780px" }} onMouseEnter={onHE} onMouseLeave={onHL}>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-[10px] font-bold text-blue-700 uppercase tracking-[0.15em]">
                        Top 1% Vetted Developers
                      </p>
                      <span className="text-[10px] text-gray-400 font-medium">{hireRoles.length} roles · 48hr onboarding</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      {hireRoles.map((r, i) => (
                        <Link key={i} to={`/hire/${r.slug}`} className="hire-i" onClick={() => setShowHire(false)}>
                          <div className="h-ic">
                            <ServiceIcon name={r.icon} className="w-4 h-4 text-blue-700" />
                          </div>
                          <span>{r.name}</span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      to="/hire"
                      className="flex items-center gap-1.5 text-blue-700 text-xs font-bold uppercase tracking-wider mt-4 pt-3 border-t border-gray-100 hover:gap-2.5 transition-all"
                      onClick={() => setShowHire(false)}
                    >
                      View All Roles →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/cybersecurity" className={`nl ${isActive("/cybersecurity") ? "active" : ""}`}>Cybersecurity</Link>
            <Link to="/startups" className={`nl ${isActive("/startups") ? "active" : ""}`}>Startups</Link>
            <Link to="/about" className={`nl ${isActive("/about") ? "active" : ""}`}>About</Link>
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={() => window.dispatchEvent(new Event("mershil:open-search"))}
              title="Search (⌘K)"
              aria-label="Search"
              className="group w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:text-blue-700 hover:border-blue-300 hover:bg-blue-50/40 transition"
            >
              <Search size={16} />
            </button>
            <Link
              to="/contact"
              className="px-4 py-2.5 rounded-lg text-gray-700 font-semibold text-sm hover:text-blue-700 hover:bg-blue-50/50 transition"
            >
              Contact
            </Link>
            <Link
              to="/hire"
              className="relative px-5 py-2.5 rounded-lg bg-gradient-to-br from-blue-700 to-indigo-700 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-400/30 transition-all overflow-hidden group"
            >
              <span className="relative z-10">Hire Now</span>
              <span className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => window.dispatchEvent(new Event("mershil:open-search"))}
              aria-label="Search"
              className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-700 transition"
            >
              <Search size={20} />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 transition"
              onClick={() => setMob(!mob)}
              aria-label="Menu"
            >
              {mob ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mob && (
          <div className="lg:hidden bg-white border-t border-gray-100 max-h-[calc(100vh-65px)] overflow-y-auto">
            <div className="px-6 py-4 space-y-1">
              {/* Services accordion */}
              <div>
                <button
                  onClick={() => setMobSvcOpen(!mobSvcOpen)}
                  className="w-full flex items-center justify-between py-3 font-semibold text-gray-900"
                >
                  Services
                  <ChevronDown size={16} className={`text-gray-500 transition-transform ${mobSvcOpen ? "rotate-180" : ""}`} />
                </button>
                {mobSvcOpen && (
                  <div className="pb-2 space-y-1">
                    {serviceCategories.map((c, i) => (
                      <Link
                        key={i}
                        to={`/services/${c.slug}`}
                        onClick={() => setMob(false)}
                        className="flex items-center gap-3 pl-3 py-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition"
                      >
                        <c.icon size={14} />{c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Hire accordion */}
              <div>
                <button
                  onClick={() => setMobHireOpen(!mobHireOpen)}
                  className="w-full flex items-center justify-between py-3 font-semibold text-gray-900"
                >
                  Dedicated Developer
                  <ChevronDown size={16} className={`text-gray-500 transition-transform ${mobHireOpen ? "rotate-180" : ""}`} />
                </button>
                {mobHireOpen && (
                  <div className="pb-2 space-y-1">
                    {hireRoles.slice(0, 8).map((r, i) => (
                      <Link
                        key={i}
                        to={`/hire/${r.slug}`}
                        onClick={() => setMob(false)}
                        className="flex items-center gap-3 pl-3 py-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition"
                      >
                        <ServiceIcon name={r.icon} className="w-3.5 h-3.5 text-blue-600" />{r.name}
                      </Link>
                    ))}
                    <Link
                      to="/hire"
                      onClick={() => setMob(false)}
                      className="block pl-3 py-2 text-sm font-semibold text-blue-700"
                    >
                      View all roles →
                    </Link>
                  </div>
                )}
              </div>

              {/* Flat links */}
              <Link to="/cybersecurity" onClick={() => setMob(false)} className="block py-3 font-semibold text-gray-900 hover:text-blue-700 transition">Cybersecurity</Link>
              <Link to="/startups" onClick={() => setMob(false)} className="block py-3 font-semibold text-gray-900 hover:text-blue-700 transition">Startups</Link>
              <Link to="/about" onClick={() => setMob(false)} className="block py-3 font-semibold text-gray-900 hover:text-blue-700 transition">About</Link>
              <Link to="/contact" onClick={() => setMob(false)} className="block py-3 font-semibold text-gray-900 hover:text-blue-700 transition">Contact</Link>

              {/* CTA */}
              <Link
                to="/hire"
                onClick={() => setMob(false)}
                className="block text-center bg-gradient-to-br from-blue-700 to-indigo-700 text-white py-3.5 rounded-xl font-semibold mt-4 shadow-lg shadow-blue-200"
              >
                Hire Now
              </Link>
              <div className="flex items-center justify-between pt-3 px-1 text-xs text-gray-500">
                <a href="tel:+13033350405" className="flex items-center gap-1.5 hover:text-blue-700">
                  <Phone size={12} /> (303) 335-0405
                </a>
                <a href="mailto:info@mershiltech.com" className="flex items-center gap-1.5 hover:text-blue-700">
                  <Mail size={12} /> Email us
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
