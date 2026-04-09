import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Smartphone, Globe, Code2, Brain, Link2, Building2, Lightbulb } from "lucide-react";
import { ServiceIcon } from "../../utils/serviceIcons";

const serviceCategories = [
  { name:"Mobile App Development", icon:Smartphone, slug:"mobile", sub:[
    {name:"Android App Development",slug:"android-app-development"},
    {name:"iOS App Development",slug:"ios-app-development"},
    {name:"React Native Development",slug:"react-native-app-development"},
    {name:"Flutter App Development",slug:"flutter-app-development"},
    {name:"Wearable App Development",slug:"wearable-app-development"},
    {name:"PWA Development",slug:"pwa-development"},
    {name:"AR/VR App Development",slug:"ar-vr-app-development"},
    {name:"Startup App Development",slug:"startup-app-development"},
    {name:"Mobile App Maintenance",slug:"mobile-app-maintenance"},
  ]},
  { name:"Website Development", icon:Globe, slug:"website", sub:[
    {name:"Next.js Development",slug:"nextjs-development"},
    {name:"ReactJS Development",slug:"reactjs-development"},
    {name:"Full Stack Development",slug:"full-stack-development"},
    {name:"Laravel Development",slug:"laravel-development"},
    {name:"NodeJS Development",slug:"nodejs-development"},
    {name:"WordPress Development",slug:"wordpress-development"},
    {name:"Shopify Development",slug:"shopify-development"},
    {name:"eCommerce Development",slug:"ecommerce-development"},
    {name:"CMS Development",slug:"cms-development"},
  ]},
  { name:"Software Development", icon:Code2, slug:"software", sub:[
    {name:"SaaS Platform Development",slug:"saas-platform-development"},
    {name:"ERP Development",slug:"erp-development"},
    {name:"CRM Development",slug:"crm-development"},
    {name:"LMS Development",slug:"lms-development"},
    {name:"Desktop App Development",slug:"desktop-app-development"},
    {name:"Custom Software Development",slug:"custom-software-development"},
  ]},
  { name:"Artificial Intelligence", icon:Brain, slug:"ai", sub:[
    {name:"Generative AI Development",slug:"generative-ai-development"},
    {name:"AI Agent Development",slug:"ai-agent-development"},
    {name:"AI Chatbot Development",slug:"ai-chatbot-development"},
    {name:"Machine Learning Development",slug:"machine-learning-development"},
    {name:"Computer Vision Development",slug:"computer-vision-development"},
    {name:"LLM Development & Fine-Tuning",slug:"llm-development"},
    {name:"NLP Development Services",slug:"nlp-development"},
  ]},
  { name:"Blockchain Development", icon:Link2, slug:"blockchain", sub:[
    {name:"Smart Contract Development",slug:"smart-contract-development"},
    {name:"NFT Marketplace Development",slug:"nft-marketplace-development"},
    {name:"DeFi Protocol Development",slug:"defi-protocol-development"},
    {name:"Metaverse Development",slug:"metaverse-development"},
    {name:"Crypto Payment Gateway",slug:"crypto-payment-gateway"},
  ]},
  { name:"Enterprise Solution", icon:Building2, slug:"enterprise", sub:[
    {name:"Microsoft Azure Consulting",slug:"microsoft-azure-consulting"},
    {name:"AWS Development",slug:"aws-development"},
    {name:"Salesforce Consulting",slug:"salesforce-consulting"},
    {name:"IT Staff Augmentation",slug:"it-staff-augmentation"},
  ]},
  { name:"On-Demand Solutions", icon:Lightbulb, slug:"on-demand", sub:[
    {name:"Food Delivery App",slug:"food-delivery-app"},
    {name:"Taxi & Ride-Hailing App",slug:"taxi-ride-hailing-app"},
    {name:"Grocery Delivery App",slug:"grocery-delivery-app"},
    {name:"eWallet App",slug:"ewallet-app"},
    {name:"Dating App Development",slug:"dating-app-development"},
  ]},
];

const hireRoles = [
  {icon:"brain",name:"Hire AI Developers",slug:"ai-developers"},
  {icon:"laptop",name:"Hire Dedicated Developers",slug:"dedicated-developers"},
  {icon:"mobile",name:"Hire Mobile App Developers",slug:"mobile-app-developers"},
  {icon:"android",name:"Hire Android Developers",slug:"android-developers"},
  {icon:"apple",name:"Hire iOS Developers",slug:"ios-developers"},
  {icon:"react",name:"Hire React Native Developers",slug:"react-native-developers"},
  {icon:"flutter",name:"Hire Flutter Developers",slug:"flutter-developers"},
  {icon:"desktop",name:"Hire Software Developers",slug:"software-developers"},
  {icon:"globe",name:"Hire Web Developers",slug:"web-developers"},
  {icon:"php",name:"Hire PHP Developers",slug:"php-developers"},
  {icon:"angular",name:"Hire AngularJS Developers",slug:"angular-developers"},
  {icon:"react",name:"Hire ReactJS Developers",slug:"react-developers"},
  {icon:"nodejs",name:"Hire NodeJS Developers",slug:"node-developers"},
  {icon:"java",name:"Hire Java Developers",slug:"java-developers"},
  {icon:"laravel",name:"Hire Laravel Developers",slug:"laravel-developers"},
  {icon:"world",name:"Hire Remote Developers",slug:"remote-developers"},
  {icon:"rocket",name:"Hire Offshore Developers",slug:"offshore-developers"},
  {icon:"solidity",name:"Hire Blockchain Developers",slug:"blockchain-developers"},
  {icon:"box",name:"Hire MEAN Stack Developers",slug:"mean-stack-developers"},
];

export default function Navbar() {
  const [showSvc,setShowSvc]=useState(false);
  const [showHire,setShowHire]=useState(false);
  const [activeCat,setActiveCat]=useState(0);
  const [mob,setMob]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const svcT=useRef(null),hireT=useRef(null);
  const navigate=useNavigate();
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>10);window.addEventListener("scroll",fn);return()=>window.removeEventListener("scroll",fn);},[]);
  const onSE=()=>{clearTimeout(svcT.current);setShowSvc(true);setShowHire(false);};
  const onSL=()=>{svcT.current=setTimeout(()=>setShowSvc(false),180);};
  const onHE=()=>{clearTimeout(hireT.current);setShowHire(true);setShowSvc(false);};
  const onHL=()=>{hireT.current=setTimeout(()=>setShowHire(false),180);};
  return (
    <>
      <style>{`.nl{position:relative;color:#374151;font-weight:500;font-size:14.5px;transition:color .2s;cursor:pointer;display:flex;align-items:center;gap:3px;background:none;border:none;padding:0;}.nl:hover{color:#1d4ed8;}.nl::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:2px;background:#1d4ed8;transition:width .3s;}.nl:hover::after{width:100%;}.mega{position:absolute;top:calc(100% + 14px);left:50%;transform:translateX(-50%);background:#fff;border-radius:16px;box-shadow:0 24px 64px rgba(0,0,0,.12);border:1px solid #e5e7eb;z-index:9999;animation:fdwn .18s ease;}@keyframes fdwn{from{opacity:0;transform:translateX(-50%) translateY(-8px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}.cat-i{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:10px;cursor:pointer;transition:all .18s;color:#374151;font-size:13.5px;font-weight:500;}.cat-i:hover,.cat-i.active{background:#eff6ff;color:#1d4ed8;}.sub-i{display:block;padding:7px 12px;border-radius:8px;color:#4b5563;font-size:13px;cursor:pointer;transition:all .18s;text-decoration:none;}.sub-i:hover{background:#eff6ff;color:#1d4ed8;padding-left:18px;}.hire-i{display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;cursor:pointer;transition:all .18s;color:#374151;font-size:13px;text-decoration:none;}.hire-i:hover{background:#eff6ff;color:#1d4ed8;}.h-ic{width:34px;height:34px;background:#f3f4f6;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0;}`}</style>
      <header className={`fixed w-full top-0 z-[999] bg-white transition-shadow duration-300 ${scrolled?"shadow-md":"border-b border-gray-100"}`}>
        <div className="bg-blue-700 text-white text-xs py-1.5 text-center hidden md:block">🚀 Innovating Today, Shaping Tomorrow — Trusted by 500+ global clients | Denver, Colorado | (303) 335-0405</div>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white font-bold text-lg group-hover:bg-blue-800 transition">M</div>
            <div><h1 className="text-gray-900 font-bold text-lg leading-tight">MershilTech</h1><p className="text-gray-400 text-[10px] -mt-0.5">Innovating Today, Shaping Tomorrow</p></div>
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            <div className="relative" onMouseEnter={onSE} onMouseLeave={onSL}>
              <button className="nl" onClick={()=>navigate("/services")}>Services <ChevronDown size={13} className={`transition-transform ${showSvc?"rotate-180":""}`}/></button>
              {showSvc&&(<div className="mega" style={{width:"820px"}} onMouseEnter={onSE} onMouseLeave={onSL}><div className="flex"><div className="w-56 bg-gray-50 rounded-l-2xl p-3 border-r border-gray-100 space-y-0.5">{serviceCategories.map((c,i)=>{const Icon=c.icon;return <div key={i} className={`cat-i ${activeCat===i?"active":""}`} onMouseEnter={()=>setActiveCat(i)}><Icon size={15}/>{c.name}</div>;})}</div><div className="flex-1 p-5"><p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{serviceCategories[activeCat].name}</p><div className="grid grid-cols-2 gap-0.5">{serviceCategories[activeCat].sub.map((s,i)=><Link key={i} to={`/services/${serviceCategories[activeCat].slug}/${s.slug}`} className="sub-i" onClick={()=>setShowSvc(false)}>→ {s.name}</Link>)}</div><div className="mt-4 pt-4 border-t border-gray-100"><Link to={`/services/${serviceCategories[activeCat].slug}`} className="text-blue-700 text-sm font-semibold hover:underline flex items-center gap-1" onClick={()=>setShowSvc(false)}>View All {serviceCategories[activeCat].name} →</Link></div></div></div></div>)}
            </div>
            <div className="relative" onMouseEnter={onHE} onMouseLeave={onHL}>
              <button className="nl" onClick={()=>navigate("/hire")}>Hire Developers <ChevronDown size={13} className={`transition-transform ${showHire?"rotate-180":""}`}/></button>
              {showHire&&(<div className="mega" style={{width:"760px"}} onMouseEnter={onHE} onMouseLeave={onHL}><div className="p-5"><p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Hire Top 1% Developers</p><div className="grid grid-cols-3 gap-1">{hireRoles.map((r,i)=><Link key={i} to={`/hire/${r.slug}`} className="hire-i"><div className="h-ic"><ServiceIcon name={r.icon} className="w-4 h-4 text-blue-700"/></div><span>{r.name}</span></Link>)}</div></div></div>)}
            </div>
            <Link to="/about" className="nl">About</Link>
            <Link to="/contact" className="nl">Contact</Link>
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="px-5 py-2.5 rounded-lg border border-blue-700 text-blue-700 font-medium text-sm hover:bg-blue-50 transition">Talk to Expert</Link>
            <Link to="/hire" className="px-5 py-2.5 rounded-lg bg-blue-700 text-white font-medium text-sm hover:bg-blue-800 transition shadow-lg shadow-blue-100">Hire Now</Link>
          </div>
          <button className="lg:hidden text-gray-700" onClick={()=>setMob(!mob)}>{mob?<X size={26}/>:<Menu size={26}/>}</button>
        </div>
        {mob&&(<div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-3 max-h-[80vh] overflow-y-auto">
          <Link to="/services" onClick={()=>setMob(false)} className="block font-semibold text-gray-900">Services</Link>
          {serviceCategories.map((c,i)=><Link key={i} to={`/services/${c.slug}`} onClick={()=>setMob(false)} className="block text-sm text-gray-500 pl-4 hover:text-blue-700">{c.name}</Link>)}
          <Link to="/hire" onClick={()=>setMob(false)} className="block font-semibold text-gray-900 pt-1">Hire Developers</Link>
          {hireRoles.slice(0,6).map((r,i)=><Link key={i} to={`/hire/${r.slug}`} onClick={()=>setMob(false)} className="block text-sm text-gray-500 pl-4 hover:text-blue-700">{r.name}</Link>)}
          <Link to="/about" onClick={()=>setMob(false)} className="block font-semibold text-gray-900">About</Link>
          <Link to="/contact" onClick={()=>setMob(false)} className="block font-semibold text-gray-900">Contact</Link>
          <Link to="/hire" onClick={()=>setMob(false)} className="block text-center bg-blue-700 text-white py-3 rounded-lg font-semibold mt-2">Hire Now</Link>
        </div>)}
      </header>
    </>
  );
}
