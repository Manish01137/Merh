import { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Linkedin, Twitter, Github } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const offices = [
    { flag:"US", city:"Denver, Colorado", addr:"3033 East First Avenue, Suite 415, Denver, CO 80206" },
    { flag:"AU", city:"Sydney, Australia", addr:"Level 12, 123 Pitt Street, Sydney NSW 2000" },
    { flag:"GB", city:"London, UK", addr:"45 Old Street, Shoreditch, London EC1V 9HW" },
  ];

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-700/50 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-6">Contact MershilTech</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Let's Build the <span className="text-blue-300">Future</span> Together</h1>
          <p className="text-blue-100/80 text-lg max-w-xl mx-auto mb-10">Have an idea, project, or challenge? Our expert engineers and consultants are ready to help you turn it into reality.</p>
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[{ icon:Phone, l:"(303) 335-0405", s:"We answer our phones!" },{ icon:Mail, l:"sales@mershiltech.com", s:"Reply within 30 minutes" },{ icon:MapPin, l:"Denver, Colorado", s:"Headquarters" }].map((item,i) => {
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
                  {[Linkedin,Twitter,Github].map((Icon,i)=>(
                    <div key={i} className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 hover:bg-blue-700 hover:text-white transition cursor-pointer"><Icon size={17}/></div>
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

      <Footer />
    </div>
  );
}
