import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/home/Hero";
import { StatsSection } from "../components/home/StatsSection";
import Services from "../components/home/Services";
import WhyChoose from "../components/home/WhyChoose";
import Technologies from "../components/home/Technologies";
import FeaturedWork from "../components/home/FeaturedWork";
import Testimonials from "../components/home/Testimonials";
import HireTeam from "../components/home/HireTeam";
import AISection from "../components/home/AISection";
import GlobalReach from "../components/home/GlobalReach";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <Services />
        <AISection />
        <WhyChoose />
        <HireTeam />
        <Technologies />
        <FeaturedWork />
        <GlobalReach />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
