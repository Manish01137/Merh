import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-gray-700">
          <div>
            <div className="flex items-center gap-3 mb-5"><div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">M</div><span className="text-white font-bold text-lg">MershilTech</span></div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">AI-powered agency delivering world-class web, mobile & software platforms. Trusted by 500+ clients in 70+ countries.</p>
            <div className="flex gap-3">{[FaLinkedinIn,FaTwitter,FaGithub,FaInstagram].map((Icon,i)=><div key={i} className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition cursor-pointer"><Icon size={15}/></div>)}</div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-5">Services</h3>
            <ul className="space-y-2.5">{["Mobile App Development","Website Development","AI & ML Development","Blockchain Development","Cloud & DevOps","Custom Software"].map((s,i)=><li key={i}><Link to="/services" className="text-gray-400 text-sm hover:text-blue-400 transition">{s}</Link></li>)}</ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-5">Hire Developers</h3>
            <ul className="space-y-2.5">{[["React Developers","react-developers"],["Node Developers","node-developers"],["Flutter Developers","flutter-developers"],["Java Developers","java-developers"],["PHP Developers","php-developers"],["Offshore Teams","offshore-developers"]].map(([l,s],i)=><li key={i}><Link to={`/hire/${s}`} className="text-gray-400 text-sm hover:text-blue-400 transition">{l}</Link></li>)}</ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400"><MapPin size={15} className="mt-0.5 text-blue-400 flex-shrink-0"/>Denver, Colorado, USA</li>
              <li className="flex items-center gap-3 text-sm text-gray-400"><Mail size={15} className="text-blue-400"/>info@mershiltech.com</li>
              <li className="flex items-center gap-3 text-sm text-gray-400"><Phone size={15} className="text-blue-400"/>(303) 335-0405</li>
            </ul>
            <Link to="/contact" className="mt-6 inline-block px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition">Get In Touch</Link>
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">
          <p>© 2026 MershilTech. All rights reserved.</p>
          <div className="flex gap-6">{["Privacy Policy","Terms of Service","Cookie Policy"].map((t,i)=><span key={i} className="hover:text-blue-400 cursor-pointer transition">{t}</span>)}</div>
        </div>
      </div>
    </footer>
  );
}
