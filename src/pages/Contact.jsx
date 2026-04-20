import { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Linkedin, Instagram, ExternalLink } from "lucide-react";
import MonogramPattern from "../components/effects/MonogramPattern";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const offices = [
    { flag:"AU", city:"Sydney, Australia (HQ)", addr:"54 Regent Street, Chippendale, Sydney NSW 2008" },
    { flag:"GB", city:"London, UK", addr:"45 Old Street, Shoreditch, London EC1V 9HW" },
    { flag:"IN", city:"Mumbai, India", addr:"Offshore Engineering Center" },
  ];

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white text-center relative overflow-hidden">
        <MonogramPattern opacity={0.04} size={110} />
        <div className="max-w-3xl mx-auto px-6 relative">
          <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-700/50 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-6">Contact MershilTech</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Let's Build the <span className="text-blue-300">Future</span> Together</h1>
          <p className="text-blue-100/80 text-lg max-w-xl mx-auto mb-10">Have an idea, project, or challenge? Our expert engineers and consultants are ready to help you turn it into reality.</p>
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[{ icon:Phone, l:"+61 452 565 421", s:"We answer our phones!" },{ icon:Mail, l:"info@mershiltech.com", s:"Reply within 30 minutes" },{ icon:MapPin, l:"Sydney, Australia", s:"Chippendale NSW 2008" }].map((item,i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-left">
                  <Icon size={18} className="text-blue-300 mb-2"/>
                  <p className="font-bold text-white text-sm">{item.l}</p>
                  <p className="text-blue-300 text-xs">{item.s}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="inline-block text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3 bg-blue-50 px-4 py-1.5 rounded-full">Get In Touch</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Tell Us About Your Project</h2>
                <p className="text-gray-500 leading-relaxed mb-6">Tell us what you're building and our team will help you scale with the right engineers, technology, and strategy.</p>
                {["Free initial consultation","Response within 30 minutes","Signed NDA before discussion","No hidden fees"].map((item,i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-600 text-sm mb-2.5">
                    <CheckCircle2 size={15} className="text-blue-600 flex-shrink-0"/>{item}
                  </div>
                ))}
              </div>
              {/* Offices */}
              <div className="space-y-3">
                {offices.map((o,i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 flex items-start gap-3 border border-gray-100">
                    <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded">{o.flag}</span>
                    <div><p className="font-semibold text-gray-900 text-sm">{o.city}</p><p className="text-gray-500 text-xs">{o.addr}</p></div>
                  </div>
                ))}
              </div>
              {/* Social */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { Icon: Linkedin, href: "https://www.linkedin.com/company/mershil-technologies/", label: "LinkedIn" },
                    { Icon: Instagram, href: "https://www.instagram.com/mershiltech", label: "Instagram" },
                  ].map(({ Icon, href, label }, i) => (
                    <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 hover:bg-blue-700 hover:text-white transition">
                      <Icon size={17}/>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-12 text-center">
                  <CheckCircle2 size={56} className="text-blue-600 mx-auto mb-4"/>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500">Thank you for reaching out. Our team will contact you within 30 minutes.</p>
                </div>
              ) : (
                <form onSubmit={(e)=>{e.preventDefault();setSubmitted(true);}} className="bg-gray-50 rounded-2xl border border-gray-100 p-8 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name *</label>
                    <input required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition" placeholder="John Smith"/></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input type="email" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition" placeholder="john@company.com"/></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1.5">Company Name</label>
                    <input className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition" placeholder="Acme Corp"/></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Required</label>
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-blue-500 text-gray-600">
                      <option>Select service</option>
                      <option>Mobile App Development</option>
                      <option>Website Development</option>
                      <option>AI Development</option>
                      <option>Hire Developers</option>
                      <option>Blockchain Development</option>
                    </select></div>
                  </div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-1.5">Project Budget</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-blue-500 text-gray-600">
                    <option>Select budget range</option>
                    <option>Under $5,000</option>
                    <option>$5,000 – $10,000</option>
                    <option>$10,000 – $25,000</option>
                    <option>$25,000 – $50,000</option>
                    <option>$50,000+</option>
                  </select></div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-1.5">Project Details *</label>
                  <textarea required rows={5} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition resize-none" placeholder="Tell us about your project, goals, timeline, and requirements..."/></div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <input type="checkbox" className="w-4 h-4 accent-blue-600"/>
                    <label>Protect Under NDA — your project details stay strictly confidential</label>
                  </div>
                  <button type="submit" className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-100">
                    <Send size={16}/> Submit Inquiry
                  </button>
                  <p className="text-center text-gray-400 text-xs">We typically respond within 30 minutes during business hours</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Sydney Office */}
      <section className="relative overflow-hidden py-20 md:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
        <MonogramPattern opacity={0.04} size={110} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 -left-10 w-[500px] aspect-square rounded-full bg-blue-600/10 blur-[90px]" />
          <div className="absolute bottom-0 -right-10 w-[400px] aspect-square rounded-full bg-indigo-500/10 blur-[80px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-blue-300 text-xs font-bold uppercase tracking-widest bg-blue-400/10 border border-blue-400/20 px-4 py-2 rounded-full mb-5">
              🇦🇺 Visit Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Our <span className="text-blue-400">Sydney Office</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              A short walk from Central Station. Come meet the team for a workshop,
              discovery session, or a coffee.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            {/* Photo */}
            <div className="lg:col-span-3 relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/40 aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1400&q=85&auto=format&fit=crop&dpr=2"
                alt="Sydney — MershilTech HQ city"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute top-5 left-5 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-xs font-semibold uppercase tracking-widest">
                  Chippendale, NSW
                </span>
              </div>
            </div>

            {/* Info card */}
            <div className="lg:col-span-2 rounded-3xl bg-white/[0.05] backdrop-blur-md border border-white/10 p-7 md:p-8 flex flex-col">
              <div className="flex items-start gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-semibold uppercase tracking-wider mb-1">
                    Address
                  </p>
                  <p className="text-white font-bold text-base leading-snug">
                    54 Regent Street, Chippendale
                  </p>
                  <p className="text-white/60 text-sm">Sydney NSW 2008, Australia</p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=54+Regent+Street+Chippendale+Sydney+NSW+2008"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-xl font-semibold transition shadow-lg shadow-blue-900/40 mb-4"
              >
                <span className="flex items-center gap-2">
                  <MapPin size={15} /> Open in Google Maps
                </span>
                <ExternalLink size={14} />
              </a>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-white/75">
                  <Clock size={15} className="text-blue-300 flex-shrink-0" />
                  <span>Mon – Fri, 9:00 AM – 6:00 PM AEST</span>
                </div>
                <div className="flex items-center gap-3 text-white/75">
                  <Phone size={15} className="text-blue-300 flex-shrink-0" />
                  <a href="tel:+61452565421" className="hover:text-white transition">
                    +61 452 565 421
                  </a>
                </div>
                <div className="flex items-center gap-3 text-white/75">
                  <Mail size={15} className="text-blue-300 flex-shrink-0" />
                  <a href="mailto:info@mershiltech.com" className="hover:text-white transition">
                    info@mershiltech.com
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3 text-xs text-white/50">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-blue-300" /> AU contract
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-blue-300" /> GST invoiced
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-blue-300" /> NDA on day 1
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
