import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hire from "./pages/Hire";
import HireDeveloper from "./pages/HireDeveloper";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import SubServiceDetails from "./pages/SubServiceDetails";
import LeadCaptureModal from "./components/LeadCaptureModal";

function App() {
  return (
    <BrowserRouter>
      <LeadCaptureModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/hire/:role" element={<HireDeveloper />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/services/:slug/:sub" element={<SubServiceDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
