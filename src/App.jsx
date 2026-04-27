import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import LeadCaptureModal from "./components/LeadCaptureModal";
import ScrollProgress from "./components/effects/ScrollProgress";
import PageTransition from "./components/effects/PageTransition";
import SearchModal from "./components/effects/SearchModal";
import PageSkeleton from "./components/effects/PageSkeleton";

const ChatBot = lazy(() => import("./components/chatbot/ChatBot"));
const CookieConsent = lazy(() => import("./components/CookieConsent"));

// Lazy-load secondary routes
const Hire = lazy(() => import("./pages/Hire"));
const HireDeveloper = lazy(() => import("./pages/HireDeveloper"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetails = lazy(() => import("./pages/ServiceDetails"));
const SubServiceDetails = lazy(() => import("./pages/SubServiceDetails"));
const Cybersecurity = lazy(() => import("./pages/Cybersecurity"));
const Startups = lazy(() => import("./pages/Startups"));
const Blog = lazy(() => import("./pages/Blog"));
const NotFound = lazy(() => import("./pages/NotFound"));

function AnimatedRoutes() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/hire" element={<PageTransition><Hire /></PageTransition>} />
        <Route path="/hire/:role" element={<PageTransition><HireDeveloper /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/services/:slug" element={<PageTransition><ServiceDetails /></PageTransition>} />
        <Route path="/services/:slug/:sub" element={<PageTransition><SubServiceDetails /></PageTransition>} />
        <Route path="/cybersecurity" element={<PageTransition><Cybersecurity /></PageTransition>} />
        <Route path="/startups" element={<PageTransition><Startups /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />

        {/* Legacy / alias redirects — preserve SEO + avoid 404s from old links */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/index" element={<Navigate to="/" replace />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/main" element={<Navigate to="/" replace />} />
        <Route path="/landing" element={<Navigate to="/" replace />} />
        <Route path="/hire-developers" element={<Navigate to="/hire" replace />} />
        <Route path="/hire-developer" element={<Navigate to="/hire" replace />} />
        <Route path="/our-services" element={<Navigate to="/services" replace />} />
        <Route path="/about-us" element={<Navigate to="/about" replace />} />
        <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
        <Route path="/cyber-security" element={<Navigate to="/cybersecurity" replace />} />
        <Route path="/security" element={<Navigate to="/cybersecurity" replace />} />
        <Route path="/startup" element={<Navigate to="/startups" replace />} />
        <Route path="/blog/*" element={<Navigate to="/blog" replace />} />
        <Route path="/latest" element={<Navigate to="/blog" replace />} />
        <Route path="/posts" element={<Navigate to="/blog" replace />} />

        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function AppShell() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [chatReady, setChatReady] = useState(false);

  // Cmd+K / Ctrl+K to open search
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    // Also listen for custom event so Navbar button can trigger it
    const onOpen = () => setSearchOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("mershil:open-search", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mershil:open-search", onOpen);
    };
  }, []);

  // Defer ChatBot mount until browser is idle — keeps it off the critical path
  useEffect(() => {
    const schedule = window.requestIdleCallback || ((cb) => setTimeout(cb, 1500));
    const cancel = window.cancelIdleCallback || clearTimeout;
    const id = schedule(() => setChatReady(true), { timeout: 3000 });
    return () => cancel(id);
  }, []);

  return (
    <>
      <ScrollProgress />
      <LeadCaptureModal />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      {chatReady && (
        <Suspense fallback={null}>
          <ChatBot />
          <CookieConsent />
        </Suspense>
      )}
      <Suspense fallback={<PageSkeleton />}>
        <AnimatedRoutes />
      </Suspense>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
export default App;
