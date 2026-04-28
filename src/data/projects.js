// Project images — local copies (saved in /assets/projects and /assets/fabpay)
import aquiferCover from "../assets/projects/aquifer.png";
import aquiferStudent from "../assets/projects/aquifer-student.png";
import aquiferFaculty from "../assets/projects/aquifer-faculty.png";

import kleenCover from "../assets/projects/kleen.png";
import kleen1 from "../assets/projects/kleen-1.webp";
import kleen2 from "../assets/projects/kleen-2.webp";
import kleen3 from "../assets/projects/kleen-3.webp";
import kleenPlatform1 from "../assets/projects/kleen-platform-1.png";
import kleenPlatform2 from "../assets/projects/kleen-platform-2.png";

import doctorsCover from "../assets/projects/doctors.png";
import doctorsPatient from "../assets/projects/doctors-patient.png";
import doctorsAdmin from "../assets/projects/doctors-admin.png";

import smartProCover from "../assets/projects/smart-pro.png";
import smartProMember from "../assets/projects/smart-pro-member.png";
import smartProAdmin from "../assets/projects/smart-pro-admin.png";

// FabPay screenshots — drop the 6 phone-screenshots into src/assets/fabpay/
// with these exact filenames; the imports will resolve and they'll appear
// in the card + detail page galleries.
import fabpayLogin from "../assets/fabpay/01-login.png";
import fabpayDashboard from "../assets/fabpay/02-dashboard.png";
import fabpayInstantPayout from "../assets/fabpay/03-instant-payout.png";
import fabpayProfile from "../assets/fabpay/04-profile.png";
import fabpayTrustscore from "../assets/fabpay/05-trustscore.png";
import fabpaySplash from "../assets/fabpay/06-splash.png";

export const projects = [
  {
    slug: "fabpay",
    title: "FabPay",
    cat: "FinTech · Unified Payment",
    category: "fintech",
    desc: "A hardware-free payment platform for UK freelancers and small businesses — combining QR-based Open Banking transfers and Tap-to-Pay (SoftPOS) into one app, ~50% cheaper than traditional card processors.",
    short:
      "Unified payment app combining Open Banking QR + Tap-to-Pay (SoftPOS) for UK merchants. No hardware required.",
    img: fabpayDashboard,
    cover: fabpayDashboard,
    gallery: [
      { src: fabpaySplash, caption: "Branded splash & onboarding" },
      { src: fabpayLogin, caption: "Secure login flow" },
      { src: fabpayDashboard, caption: "Merchant dashboard with available balance & transaction history" },
      { src: fabpayInstantPayout, caption: "Instant Payout with transparent fee breakdown" },
      { src: fabpayTrustscore, caption: "TrustScore loyalty system — tiers unlock higher referral bonuses" },
      { src: fabpayProfile, caption: "Profile & FabTax tax-compliance integration" },
    ],
    tags: ["Open Banking", "SoftPOS", "Tap-to-Pay", "iOS", "Android"],
    stat: "~50%",
    statLabel: "Cheaper Than Card Processors",
    color: "#10b981",
    ai: false,
    region: "United Kingdom",
    industry: "FinTech",
    timeline: "Multi-phase rollout",
    overview:
      "FabPay is a fintech payment application designed and developed to simplify how freelancers, sole traders, and small businesses accept payments. The goal of this project was to create a hardware-free, cost-efficient, and seamless payment experience by combining multiple payment technologies into a single mobile application.",
    features: [
      {
        title: "QR Payment Integration (Open Banking)",
        items: [
          "Built QR-based payment flow using Open Banking APIs",
          "Direct bank-to-bank transfers — instant, secure, low-cost",
          "Eliminated dependency on card networks",
        ],
      },
      {
        title: "Tap-to-Pay (SoftPOS) Implementation",
        items: [
          "Contactless payment functionality using smartphones (Android & iOS)",
          "Accepts Debit & Credit Cards, Apple Pay, Google Pay",
          "Removes the need for physical POS hardware",
        ],
      },
      {
        title: "Unified Payment Experience",
        items: [
          "Combined multiple payment rails into a single branded interface",
          "Smooth user flow across payment types",
          "Focused on simplicity, speed, and usability",
        ],
      },
      {
        title: "Merchant Trust & Loyalty",
        items: [
          "TrustScore loyalty rating rewards responsible app usage",
          "Higher tiers unlock higher referral bonuses and faster withdrawals",
          "Auto Payout schedule + opt-in Instant Payout with transparent fee table",
        ],
      },
    ],
    techApproach: [
      "Integrated Open Banking providers for QR payments",
      "Connected with card acquirers for Tap-to-Pay functionality",
      "Scalable architecture supporting cross-platform performance",
      "Secure transaction handling and compliance-ready flows",
    ],
    impact: [
      { metric: "~0.8%", label: "QR Payment Fees" },
      { metric: "~1.6%", label: "Tap-to-Pay Fees" },
      { metric: "~50%", label: "Cheaper Than Traditional Card Processors" },
      { metric: "0", label: "POS Hardware Required" },
    ],
    contribution: [
      "End-to-end involvement in concept development and execution",
      "Designed product structure and user flow",
      "Integrated payment technologies and providers",
      "Aligned technical delivery with business goals",
    ],
  },

  {
    slug: "aquifer-clinical-learning",
    title: "Aquifer Clinical Learning",
    cat: "Healthcare · EdTech Platform",
    category: "healthcare",
    desc: "Virtual patient case-based learning platform for medical education. Trusted by 95%+ of US allopathic medical schools, plus osteopathic, NP, PA, and international programs.",
    short:
      "Virtual-patient learning platform used by 95%+ of US allopathic med schools to teach clinical reasoning.",
    img: aquiferCover,
    cover: aquiferCover,
    gallery: [
      { src: aquiferStudent, caption: "Student panel — case-based clinical reasoning" },
      { src: aquiferFaculty, caption: "Faculty/admin panel — performance analytics" },
    ],
    tags: ["iOS", "Android", "Web", "Cloud"],
    stat: "95%+",
    statLabel: "US Med Schools",
    color: "#06b6d4",
    ai: false,
    region: "United States · International",
    industry: "Healthcare / EdTech",
    timeline: "3-4 months",
    overview:
      "A virtual-patient case-based learning platform for medical education. Students practice clinical reasoning through interactive, realistic scenarios developed by leading medical educators. Adopted by 95%+ of US allopathic medical schools and used across osteopathic, NP, PA, and international programs.",
    features: [
      {
        title: "Learning Engine",
        items: [
          "Interactive virtual patient case simulations",
          "Clinical decision-making engine with real-time feedback",
          "Evidence-based learning modules",
        ],
      },
      {
        title: "Faculty & Admin Tools",
        items: [
          "Student progress tracking and performance analytics",
          "Faculty and admin management dashboards",
          "Curriculum integration tools",
          "Role-based access control",
        ],
      },
      {
        title: "Multi-Platform Reach",
        items: [
          "Web platform",
          "iOS app (Apple App Store)",
          "Android app (Google Play Store)",
        ],
      },
    ],
    techApproach: [
      "Cloud-based scalable infrastructure",
      "iOS + Android native apps",
      "Role-based access architecture for students, faculty, and admins",
      "Analytics layer for cohort performance tracking",
    ],
    impact: [
      { metric: "95%+", label: "US Med Schools Adopted" },
      { metric: "6", label: "Cross-functional Team" },
      { metric: "3-4mo", label: "Build & Test Timeline" },
      { metric: "Multi", label: "iOS · Android · Web" },
    ],
    contribution: [
      "Operations, delivery, QC, and support across the build",
      "Curriculum integration and faculty tooling",
      "Multi-platform delivery (web + native apps)",
    ],
  },

  {
    slug: "kleen-laundry",
    title: "Kleen Laundry",
    cat: "On-Demand · Laundry Tech",
    category: "on-demand",
    desc: "Doorstep pickup and delivery laundry platform with real-time order tracking, multi-service categories, and Razorpay-powered checkout.",
    short:
      "Doorstep-pickup laundry platform with real-time tracking, smart admin panel, and Razorpay checkout.",
    img: kleenCover,
    cover: kleenCover,
    gallery: [
      { src: kleen1, caption: "Service selection screen" },
      { src: kleen2, caption: "Order tracking" },
      { src: kleen3, caption: "Pickup scheduling" },
      { src: kleenPlatform1, caption: "Customer panel" },
      { src: kleenPlatform2, caption: "Admin dashboard" },
    ],
    tags: ["Mobile", "Razorpay", "Real-Time", "Logistics"],
    stat: "3-4mo",
    statLabel: "Time to Launch",
    color: "#3b82f6",
    ai: false,
    region: "India",
    industry: "On-Demand Services",
    timeline: "3-4 months",
    overview:
      "A comprehensive digital platform for a modern laundry and dry-cleaning service, enabling customers to request cleaning services from home with doorstep pickup and delivery. The system handles multiple service types — washing, dry cleaning, steam ironing, and express delivery options.",
    features: [
      {
        title: "Customer Experience",
        items: [
          "Service selection (wash, dry clean, iron options)",
          "Pickup & delivery scheduling",
          "Real-time order tracking through pickup, processing, and delivery",
          "Multiple secure payment options (UPI, cards, wallets, COD)",
          "Order history, invoices, and price estimation",
        ],
      },
      {
        title: "Operations & Admin",
        items: [
          "Smart admin panel for service and pricing management",
          "Delivery staff management system",
          "Logistics integration with delivery partner APIs",
          "Customer notifications and engagement",
        ],
      },
    ],
    techApproach: [
      "Cloud infrastructure for scalability",
      "Razorpay payment gateway integration",
      "Delivery partner APIs for logistics",
      "Mobile-responsive web design",
    ],
    impact: [
      { metric: "12", label: "Cross-functional Team" },
      { metric: "3-4mo", label: "Build & Test" },
      { metric: "Multi", label: "Service Categories" },
      { metric: "Real-Time", label: "Order Tracking" },
    ],
    contribution: [
      "Streamlined service management across multiple cleaning categories",
      "Enhanced customer experience through simplified booking",
      "Scalable infrastructure handling peak order volumes",
      "Real-time logistics optimization",
    ],
  },

  {
    slug: "drs-on-calls",
    title: "Drs. On Calls",
    cat: "Healthcare · Telehealth",
    category: "healthcare",
    desc: "24/7 telehealth consultation platform connecting patients with qualified physicians across all specialties — online consults, emergency home visits, and prescription management.",
    short:
      "24/7 telehealth platform with video consults, emergency home visits, and prescription management.",
    img: doctorsCover,
    cover: doctorsCover,
    gallery: [
      { src: doctorsPatient, caption: "Patient panel — booking & consultations" },
      { src: doctorsAdmin, caption: "Admin panel — doctor & appointment management" },
    ],
    tags: ["Telehealth", "Video Consults", "Mobile", "Payments"],
    stat: "24/7",
    statLabel: "Doctor Availability",
    color: "#8b5cf6",
    ai: false,
    region: "Global",
    industry: "Healthcare",
    timeline: "4-5 months",
    overview:
      "A cutting-edge telehealth consultation platform providing 24/7 access to doctors worldwide. The platform connects patients with qualified physicians across all specialties, enabling online consultations, emergency home visits, and prescription management through a mobile-first interface.",
    features: [
      {
        title: "Patient Panel",
        items: [
          "Doctor search and specialist selection",
          "Instant and scheduled appointment booking",
          "Video/audio online consultations",
          "Emergency home visit requests",
          "Secure online payments",
          "Prescription and medical history access",
          "Appointment tracking with notifications",
        ],
      },
      {
        title: "Admin Panel",
        items: [
          "Dashboard overview and role management",
          "Doctor profile and availability management",
          "Appointment and patient management",
          "Payment monitoring and analytics",
          "Emergency management systems",
        ],
      },
    ],
    techApproach: [
      "Cloud-based infrastructure for scalability",
      "Secure payment gateway (UPI, cards, wallets, Cash on Visit)",
      "Real-time appointment tracking",
      "Location-based smart doctor allocation",
      "Mobile-friendly interface design",
    ],
    impact: [
      { metric: "24/7", label: "Availability" },
      { metric: "12", label: "Cross-functional Team" },
      { metric: "4-5mo", label: "Build Timeline" },
      { metric: "All", label: "Specialties Supported" },
    ],
    contribution: [
      "End-to-end build including patient & admin panels",
      "Real-time consultation and emergency-visit infrastructure",
      "Secure multi-rail payment integration",
    ],
  },

  {
    slug: "smart-professional-connection",
    title: "Smart Professional Connection",
    cat: "B2B · Expert Marketplace",
    category: "marketplace",
    desc: "Cloud-based platform connecting top professionals with enterprises for consultations, expertise sharing, and strategic problem-solving — with AI-driven matching across 1,400+ experts.",
    short:
      "Enterprise expert-network platform with AI matching across 1,400+ vetted professionals.",
    img: smartProCover,
    cover: smartProCover,
    gallery: [
      { src: smartProMember, caption: "Member panel — content, network, messaging" },
      { src: smartProAdmin, caption: "Admin panel — moderation & analytics" },
    ],
    tags: ["AI Matching", "SaaS", "Enterprise", "Real-Time"],
    stat: "1,400+",
    statLabel: "Vetted Experts",
    color: "#f59e0b",
    ai: true,
    region: "Global",
    industry: "Professional Services",
    timeline: "4-6 months",
    overview:
      "A cloud-based platform connecting top professionals with enterprises. The system facilitates consultations, expertise sharing, and strategic problem-solving while maintaining rigorous compliance standards across 1,400+ experts.",
    features: [
      {
        title: "Matching & Discovery",
        items: [
          "AI-driven professional matching engine",
          "Personalized content recommendations",
          "Activity feeds and collaboration tools",
        ],
      },
      {
        title: "Communication & Content",
        items: [
          "Real-time messaging and notifications",
          "Content publishing with moderation tools",
          "Member and admin dashboards",
        ],
      },
      {
        title: "Trust & Compliance",
        items: [
          "Secure role-based access controls",
          "Encrypted communication protocols",
          "Advanced authentication framework",
          "Analytics and engagement tracking",
        ],
      },
    ],
    techApproach: [
      "Cloud-based scalable infrastructure",
      "Encrypted communication protocols",
      "Advanced security framework with authentication",
      "Real-time interaction systems",
      "Analytics dashboard tools",
    ],
    impact: [
      { metric: "1,400+", label: "Experts on Platform" },
      { metric: "8", label: "Cross-functional Team" },
      { metric: "4-6mo", label: "Build Timeline" },
      { metric: "AI", label: "Matching Engine" },
    ],
    contribution: [
      "AI-driven matching and recommendation engine",
      "Compliance-grade access control and encrypted communications",
      "Real-time messaging and analytics dashboards",
    ],
  },
];

export const projectFilters = [
  { id: "all", label: "All Work" },
  { id: "fintech", label: "FinTech" },
  { id: "healthcare", label: "Healthcare" },
  { id: "on-demand", label: "On-Demand" },
  { id: "marketplace", label: "Marketplace" },
  { id: "ai", label: "AI & ML" },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
