import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Target, Handshake, Globe, Zap, Shield, Rocket } from "lucide-react";
import { ServiceIcon } from "../utils/serviceIcons";

const stats = [["1100+","Projects Delivered"],["130+","Expert Engineers"],["70+","Countries Served"],["15+","Years of Expertise"],["500+","Happy Clients"],["98%","Client Satisfaction"]];
const values = [
  { icon:"rocket", title:"Excellence", desc:"We set the bar high and consistently deliver solutions that exceed client expectations in quality, performance, and reliability." },
  { icon:"handshake", title:"Integrity", desc:"Honest and transparent in every interaction. We build trust through clear communication and doing what we say, every time." },
  { icon:"world", title:"Global Mindset", desc:"Diverse teams from around the world bring unique perspectives that drive creative problem-solving and inclusive digital solutions." },
  { icon:"lightning", title:"Innovation", desc:"Always exploring new technologies and approaches — from AI to blockchain — to build better, faster, and smarter products." },
  { icon:"lock", title:"Security First", desc:"Every system we build prioritizes data protection, compliance, and enterprise-grade security from day one." },
  { icon:"rocket", title:"Speed & Agility", desc:"Agile by nature, we deliver working software quickly and iterate fast based on real feedback and changing requirements." },
];
const awards = ["Clutch Top Developer 2024","DesignRush Top Agency","Google Cloud Partner","AWS Select Partner","Salesforce Consulting Partner","Microsoft Azure Partner"];

export default function About() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-700/50 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-6">About MershilTech</div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Engineering the <span className="text-blue-300">Future Together</span></h1>
              <p className="text-blue-100/80 text-lg leading-relaxed mb-8 max-w-lg">Founded with a mission to democratize access to world-class software development, MershilTech has grown into a global engineering powerhouse trusted by startups and enterprises across 70+ countries.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg">Get In Touch <ArrowRight size={16}/></Link>
                <Link to="/hire" className="flex items-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-xl font-bold hover:border-white hover:bg-white/10 transition">Hire Our Team</Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700" alt="MershilTech Team" className="w-full h-72 object-cover"/>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center text-white font-bold">M</div>
                <div><p className="text-xl font-bold text-gray-900">130+</p><p className="text-gray-500 text-xs">Expert Engineers</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {stats.map(([n,l],i) => (
              <div key={i}><p className="text-3xl font-bold text-white mb-1">{n}</p><p className="text-blue-200 text-xs">{l}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3 bg-blue-50 px-4 py-1.5 rounded-full">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Built by Engineers, for Engineers</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>MershilTech was founded by engineers who understood the pain of finding reliable, skilled development partners. We started with a single mission: deliver exceptional software on time, every time.</p>
                <p>Today, we operate across 70+ countries with 130+ engineers specializing in mobile apps, web development, AI, blockchain, and cloud infrastructure. Our clients range from Y Combinator-backed startups to Fortune 500 enterprises.</p>
                <p>We're more than a development company — we're your technology partner, invested in your long-term success. Every project is treated with the same care and urgency as our own.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {awards.map((a,i) => <span key={i} className="text-xs bg-blue-50 text-blue-700 font-semibold px-3 py-1.5 rounded-full">{a}</span>)}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400","https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400","https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400","https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400"].map((src,i)=>(
                <img key={i} src={src} className="rounded-2xl h-40 w-full object-cover hover:scale-105 transition duration-500" alt="team"/>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3 bg-blue-100 px-4 py-1.5 rounded-full">Core Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What Drives Us Every Day</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v,i) => (
              <div key={i} className="group bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-4"><ServiceIcon name={v.icon} className="w-6 h-6"/></div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-80 h-80 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">Let's Build Something Extraordinary</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">Partner with MershilTech to create powerful digital experiences that scale globally and drive measurable business growth.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-xl">Get In Touch</Link>
            <Link to="/services" className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition">Explore Services <ArrowRight size={18}/></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
