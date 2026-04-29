/**
 * MershilTech AI Chatbot Knowledge Base & Intent Matcher
 *
 * Rule-based intent engine that matches user queries against keyword patterns
 * and returns curated responses with optional action buttons / page links.
 *
 * Each intent has:
 *   keywords: regex-tested tokens
 *   priority: higher wins when multiple intents match
 *   answer:   ({ match, raw }) => { text: string, actions?: [{ label, to }] }
 */

// Core company context used across answers
const CONTEXT = {
  name: "MershilTech",
  tagline: "Sydney-based software agency serving UK and global clients",
  hq: "Sydney, Australia",
  address: "54 Regent Street, Chippendale, Sydney NSW 2008",
  offices: ["Australia (Sydney HQ)", "UK clients (London)", "India (Jaipur engineering hub)"],
  phone: "+61 452 565 421",
  email: "info@mershiltech.com",
  linkedin: "https://www.linkedin.com/company/mershil-technologies/",
  instagram: "https://www.instagram.com/mershiltech",
  projects: "350+",
  engineers: "130+",
  satisfaction: "98%",
  clients: "350+",
  experience: "15+",
};

// Helpers
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const has = (text, words) => words.some((w) => new RegExp(`\\b${w}\\b`, "i").test(text));

export const intents = [
  // ─── GREETING ────────────────────────────────────────────────────────────
  {
    id: "greeting",
    priority: 10,
    match: (t) => has(t, ["hi", "hello", "hey", "yo", "hola", "namaste", "greetings", "howdy"]),
    answer: () => ({
      text: pick([
        `Hey there! 👋 I'm the MershilTech AI assistant. I can help you find the right service, get pricing, or connect you with our team. What are you looking for?`,
        `Hi! Welcome to ${CONTEXT.name}. Ask me anything about our services, hiring developers, or pricing.`,
        `Hello! I'm here to help. Try asking about **AI development**, **hiring a developer**, or **our pricing**.`,
      ]),
      actions: [
        { label: "View Services", to: "/services" },
        { label: "Hire Developers", to: "/hire" },
        { label: "Pricing", to: "/hire" },
      ],
    }),
  },

  // ─── ABOUT COMPANY ───────────────────────────────────────────────────────
  {
    id: "about",
    priority: 6,
    match: (t) => has(t, ["about", "who are you", "who are they", "company", "tell me about"]),
    answer: () => ({
      text: `${CONTEXT.name} is a ${CONTEXT.tagline} headquartered in Sydney, Australia with ${CONTEXT.experience} years of experience. We've delivered ${CONTEXT.projects} projects worldwide and currently ship for UK fintech, AU startups, and global enterprises — with a ${CONTEXT.satisfaction} client satisfaction rate. Our team of ${CONTEXT.engineers} engineers operates from ${CONTEXT.offices.join(", ")}.`,
      actions: [
        { label: "About Us", to: "/about" },
        { label: "Our Work", to: "/" },
      ],
    }),
  },

  // ─── SERVICES — GENERAL ──────────────────────────────────────────────────
  {
    id: "services",
    priority: 5,
    match: (t) => has(t, ["services", "what do you do", "what do you offer", "offerings", "capabilities"]),
    answer: () => ({
      text: `We offer 8 core service categories:\n\n• **Mobile App Development** — iOS, Android, React Native, Flutter\n• **Website Development** — Next.js, React, Laravel, Shopify\n• **Custom Software** — SaaS, ERP, CRM, desktop apps\n• **AI & Machine Learning** — LLMs, computer vision, RAG\n• **Blockchain** — smart contracts, DeFi, NFTs, Web3\n• **Enterprise Solutions** — AWS, Azure, Salesforce, SAP\n• **On-Demand Apps** — food delivery, ride-hailing, marketplaces\n• **Cybersecurity** — pen testing, SOC, compliance\n\nWhich one interests you?`,
      actions: [
        { label: "All Services", to: "/services" },
        { label: "AI & ML", to: "/services/ai" },
        { label: "Cybersecurity", to: "/cybersecurity" },
      ],
    }),
  },

  // ─── AI SERVICES ─────────────────────────────────────────────────────────
  {
    id: "ai-service",
    priority: 7,
    match: (t) => has(t, ["ai", "artificial intelligence", "machine learning", "ml", "chatbot", "llm", "gpt", "claude", "openai", "generative", "rag"]),
    answer: () => ({
      text: `We specialize in production AI systems — not demos. Our AI services include:\n\n• **Generative AI & RAG** with GPT-4o, Claude, Gemini, Llama 3\n• **AI chatbots & agents** that resolve 70%+ queries automatically\n• **Computer vision** — object detection, OCR, video analytics\n• **Predictive analytics** — forecasting, churn, fraud detection\n• **LLM fine-tuning** — PEFT/LoRA, RLHF alignment\n• **MLOps** — model registries, drift detection, retraining\n\n80+ AI products in production. Avg 3x ROI in year one.`,
      actions: [
        { label: "Explore AI Services", to: "/services/ai" },
        { label: "Hire AI Developers", to: "/hire/ai-developers" },
      ],
    }),
  },

  // ─── MOBILE ──────────────────────────────────────────────────────────────
  {
    id: "mobile",
    priority: 6,
    match: (t) => has(t, ["mobile", "ios", "android", "app", "flutter", "react native", "swift", "kotlin"]),
    answer: () => ({
      text: `We've shipped 200+ mobile apps averaging **4.9★ App Store rating**. We build:\n\n• **Native iOS** (Swift, SwiftUI)\n• **Native Android** (Kotlin, Jetpack Compose)\n• **React Native** (shared codebase, native performance)\n• **Flutter** (60fps, single Dart codebase)\n• **PWAs, wearable apps, AR/VR experiences**\n\nTypical MVP delivered in 12 weeks.`,
      actions: [
        { label: "Mobile Services", to: "/services/mobile" },
        { label: "Hire Mobile Devs", to: "/hire/mobile-app-developers" },
      ],
    }),
  },

  // ─── WEBSITE/WEB ─────────────────────────────────────────────────────────
  {
    id: "web",
    priority: 6,
    match: (t) => has(t, ["website", "web app", "web development", "nextjs", "next.js", "react", "shopify", "wordpress", "ecommerce", "e-commerce"]),
    answer: () => ({
      text: `We build fast, SEO-optimized websites and web apps that convert:\n\n• **Next.js & React** (SSR, static, blazing fast)\n• **eCommerce** (Shopify, Magento, WooCommerce)\n• **Laravel & NodeJS** (robust backends)\n• **Headless CMS** (Contentful, Sanity, WordPress)\n\n300+ websites delivered · avg 2.1s load time · 40% avg conversion lift · 99.9% uptime SLA.`,
      actions: [
        { label: "Web Services", to: "/services/website" },
        { label: "Hire Web Devs", to: "/hire/web-developers" },
      ],
    }),
  },

  // ─── BLOCKCHAIN ──────────────────────────────────────────────────────────
  {
    id: "blockchain",
    priority: 7,
    match: (t) => has(t, ["blockchain", "crypto", "solidity", "smart contract", "web3", "nft", "defi", "ethereum", "solana"]),
    answer: () => ({
      text: `60+ blockchain projects with $500M+ TVL managed and **0 security breaches**. We work across Ethereum, Solana, Polygon, BNB Chain:\n\n• Smart contracts (100% branch test coverage)\n• DeFi protocols (AMMs, lending, staking)\n• NFT marketplaces with lazy minting\n• Crypto wallets & payment gateways\n• Smart contract security auditing`,
      actions: [
        { label: "Blockchain Services", to: "/services/blockchain" },
        { label: "Hire Blockchain Devs", to: "/hire/blockchain-developers" },
      ],
    }),
  },

  // ─── CYBERSECURITY ───────────────────────────────────────────────────────
  {
    id: "cybersecurity",
    priority: 7,
    match: (t) => has(t, ["security", "cybersec", "cyber", "pen test", "penetration", "soc", "compliance", "iso 27001", "soc 2", "hipaa", "gdpr", "firewall", "vulnerability", "breach"]),
    answer: () => ({
      text: `Certified security engineers (OSCP, CEH, CISSP) with **0 client breaches** on our watch. Services include:\n\n• **Penetration testing** (web, mobile, API, cloud)\n• **SOC 2, ISO 27001, HIPAA, GDPR, PCI-DSS** compliance\n• **24/7 Managed SOC** (Splunk, Microsoft Sentinel)\n• **Cloud security** (AWS, Azure, GCP hardening)\n• **Incident response** with 1-hour retainer SLA\n• **Application security** (SAST, DAST, secure code review)`,
      actions: [
        { label: "Cybersecurity Services", to: "/cybersecurity" },
        { label: "Hire Security Experts", to: "/hire/cybersecurity-experts" },
      ],
    }),
  },

  // ─── SALESFORCE ──────────────────────────────────────────────────────────
  {
    id: "salesforce",
    priority: 8,
    match: (t) => has(t, ["salesforce", "crm", "sales cloud", "service cloud", "marketing cloud", "apex", "lightning", "pardot"]),
    answer: () => ({
      text: `We're a **Salesforce Summit-tier partner** with certified Admins, Platform Developers (PD1, PD2), Application Architects, and System Architects. Services:\n\n• Sales/Service/Marketing Cloud implementation\n• Apex, LWC, Lightning Flow development\n• AppExchange managed package builds\n• Einstein Analytics & Tableau CRM\n• Mulesoft, Informatica, Jitterbit integrations\n• Classic → Lightning migration\n\n**Free discovery consultation** available.`,
      actions: [
        { label: "Hire Salesforce Devs", to: "/hire/salesforce-developers" },
        { label: "Book Free Call", to: "/contact" },
      ],
    }),
  },

  // ─── PRICING / COST ──────────────────────────────────────────────────────
  {
    id: "pricing",
    priority: 9,
    match: (t) => has(t, ["price", "pricing", "cost", "rate", "how much", "budget", "afford", "fee", "charge", "dollar", "\\$"]),
    answer: () => ({
      text: `We offer 3 transparent engagement models:\n\n💼 **Staff Augmentation** — from **$3,000/dev/month** (save 60% vs in-house)\n⭐ **Dedicated Team** — from **$8,000/team-of-3/month** (most popular, includes tech lead + PM)\n🏢 **Offshore Dev Center** — from **$40,000/month** (custom, 8+ engineers, your brand)\n\n✓ No recruitment fees · ✓ 1-week risk-free trial · ✓ Cancel with 30-day notice · ✓ NDA before any work`,
      actions: [
        { label: "View Full Pricing", to: "/hire" },
        { label: "Get a Quote", to: "/contact" },
      ],
    }),
  },

  // ─── HIRE DEVELOPERS ─────────────────────────────────────────────────────
  {
    id: "hire",
    priority: 7,
    match: (t) => has(t, ["hire", "hiring", "developer", "engineer", "staff", "team", "dedicated", "remote", "offshore", "outsource"]),
    answer: () => ({
      text: `We connect you with **top 3% vetted engineers** — onboarded in 48 hours, cancel anytime. Available roles:\n\n• AI Developers · Mobile (iOS/Android/RN/Flutter)\n• Web (React, Next.js, Node, Laravel)\n• Backend (Java, Python, PHP, Node)\n• Blockchain · Salesforce · Cybersecurity\n• Full-stack · MEAN stack · Offshore teams\n\nOnly 3% of applicants pass our 5-stage screening. 1-week risk-free trial on every hire.`,
      actions: [
        { label: "Browse All Roles", to: "/hire" },
        { label: "Hire AI Devs", to: "/hire/ai-developers" },
        { label: "Pricing", to: "/hire" },
      ],
    }),
  },

  // ─── TIMELINE / DURATION ─────────────────────────────────────────────────
  {
    id: "timeline",
    priority: 7,
    match: (t) => has(t, ["how long", "timeline", "duration", "time", "weeks", "months", "when can you", "fast", "quick", "mvp"]),
    answer: () => ({
      text: `Typical timelines:\n\n• **MVP / Startup launch** — 12 weeks\n• **Web app / mobile app** — 8–16 weeks\n• **Enterprise software** — 3–6 months (phased delivery)\n• **Custom hire onboarding** — 48 hours\n• **SOC 2 compliance** — 3–4 months\n• **Penetration test** — 1–3 weeks\n\nWe work in **2-week sprints** with weekly demos — you see working software early and often.`,
      actions: [
        { label: "Start a Project", to: "/contact" },
        { label: "Startup MVP", to: "/startups" },
      ],
    }),
  },

  // ─── STARTUP ─────────────────────────────────────────────────────────────
  {
    id: "startup",
    priority: 7,
    match: (t) => has(t, ["startup", "founder", "mvp", "seed", "series", "bootstrap", "pre-seed", "venture"]),
    answer: () => ({
      text: `We've launched **120+ startups** — $500M+ raised by our clients. Startup-specific perks:\n\n• **MVP in 12 weeks** (feature-complete, investor-ready)\n• **Up to 35% startup discount**\n• **Equity-for-services** for promising early-stage teams\n• **Fractional CTO** without a full-time hire\n• Scale-ready architecture from day one\n\nDifferent stages need different strategies — we grow with you from pre-seed to Series C+.`,
      actions: [
        { label: "Explore Startups Page", to: "/startups" },
        { label: "Free Founder Call", to: "/contact" },
      ],
    }),
  },

  // ─── CONTACT ─────────────────────────────────────────────────────────────
  {
    id: "contact",
    priority: 8,
    match: (t) => has(t, ["contact", "reach", "call", "email", "phone", "get in touch", "talk to", "schedule", "book", "speak to"]),
    answer: () => ({
      text: `Let's talk! You can reach us via:\n\n📞 **Phone:** ${CONTEXT.phone}\n✉️ **Email:** ${CONTEXT.email}\n📍 **HQ:** ${CONTEXT.hq}\n\nWe respond within **30 minutes** during business hours. NDA signed before any discussion.`,
      actions: [
        { label: "Open Contact Page", to: "/contact" },
        { label: "Book a Call", to: "/contact" },
      ],
    }),
  },

  // ─── LOCATION / OFFICES ──────────────────────────────────────────────────
  {
    id: "location",
    priority: 6,
    match: (t) => has(t, ["location", "office", "offices", "where", "based", "country", "city", "timezone", "india", "uk", "australia", "london", "sydney", "jaipur", "global"]),
    answer: () => ({
      text: `Our HQ is in **Sydney, Australia** — 54 Regent Street, Chippendale.\n\n🇦🇺 **Sydney, Australia** — HQ\n🇬🇧 **London, UK** — Active client base (FabPay and other fintechs)\n🇮🇳 **Jaipur, India** — Offshore engineering hub\n\nOur follow-the-sun delivery model provides **round-the-clock engineering coverage** across every timezone.`,
      actions: [
        { label: "About MershilTech", to: "/about" },
      ],
    }),
  },

  // ─── STATS / NUMBERS ─────────────────────────────────────────────────────
  {
    id: "stats",
    priority: 5,
    match: (t) => has(t, ["stats", "numbers", "metrics", "how many", "projects done", "clients", "portfolio"]),
    answer: () => ({
      text: `Here are our numbers at a glance:\n\n• **${CONTEXT.projects}** projects delivered\n• **${CONTEXT.engineers}** expert engineers\n• **${CONTEXT.clients}** happy clients\n• **${CONTEXT.satisfaction}** client satisfaction\n• **${CONTEXT.experience}** years of expertise\n• **4.9★** avg rating on Clutch, Google, DesignRush`,
    }),
  },

  // ─── PROCESS / METHODOLOGY ───────────────────────────────────────────────
  {
    id: "process",
    priority: 5,
    match: (t) => has(t, ["process", "methodology", "how do you work", "approach", "workflow", "agile", "scrum", "sprint"]),
    answer: () => ({
      text: `Our 6-step delivery process:\n\n1️⃣ **Discovery & Planning** — workshops, specs, timeline\n2️⃣ **Architecture Design** — system design, schema, APIs\n3️⃣ **Agile Development** — 2-week sprints, weekly demos\n4️⃣ **QA & Testing** — 80%+ coverage, OWASP audits\n5️⃣ **Deployment** — zero-downtime release, monitoring\n6️⃣ **Ongoing Support** — 3 months free, then retainer\n\nFull Jira transparency at every step.`,
    }),
  },

  // ─── SECURITY / NDA ──────────────────────────────────────────────────────
  {
    id: "nda-security",
    priority: 6,
    match: (t) => has(t, ["nda", "confidential", "secret", "ip", "intellectual property", "privacy", "data protection"]),
    answer: () => ({
      text: `Your IP is 100% yours. Our standard process:\n\n✓ **Mutual NDAs** signed before any project discussion\n✓ **ISO 27001** certified delivery practices\n✓ **Code ownership** fully transferred to you\n✓ **Secure access controls** on all client systems\n✓ **SOC 2 Type II** compliant development environments\n\nWe've passed security reviews from Fortune 500 enterprises and Y Combinator startups alike.`,
      actions: [
        { label: "Security Services", to: "/cybersecurity" },
        { label: "Book Secure Call", to: "/contact" },
      ],
    }),
  },

  // ─── TESTIMONIALS / REVIEWS ──────────────────────────────────────────────
  {
    id: "reviews",
    priority: 4,
    match: (t) => has(t, ["review", "testimonial", "rating", "feedback", "clients say", "referral"]),
    answer: () => ({
      text: `We're rated **5.0★ on Clutch**, **5.0★ on DesignRush**, **4.7★ on Google**, and **5.0★ on TopDev**. A few client quotes:\n\n*"MershilTech built our entire trading platform from scratch in 4 months. The code quality is exceptional."* — James R., FinTech CEO\n\n*"From ideation to App Store launch in 12 weeks. MershilTech's process is tight, communication excellent."* — Arjun M., EduTech Founder`,
    }),
  },

  // ─── THANK / GOODBYE ─────────────────────────────────────────────────────
  {
    id: "thanks",
    priority: 10,
    match: (t) => has(t, ["thanks", "thank you", "thx", "appreciate", "bye", "goodbye", "see you", "ttyl"]),
    answer: () => ({
      text: pick([
        `You're welcome! 🙏 Feel free to come back anytime — I'll be right here. Need anything else?`,
        `Glad I could help! If you're ready to discuss a project, our team responds in under 30 minutes.`,
        `Anytime! Have a great day. 👋 Let me know if you'd like to book a call.`,
      ]),
      actions: [
        { label: "Contact Team", to: "/contact" },
      ],
    }),
  },

  // ─── HELP / OPTIONS ──────────────────────────────────────────────────────
  {
    id: "help",
    priority: 3,
    match: (t) => has(t, ["help", "what can you do", "options", "menu", "assist"]),
    answer: () => ({
      text: `I can help you with:\n\n💡 **Services** — explore our 8 service categories\n👨‍💻 **Hiring** — find the right developer for your project\n💰 **Pricing** — transparent engagement models & rates\n⏱️ **Timelines** — how long projects take\n📞 **Contact** — get in touch with our team\n🌐 **Global Offices** — UK, India, Australia\n🔒 **Security & Compliance** — SOC 2, ISO 27001, NDAs\n\nJust ask naturally — e.g., "How much does an AI developer cost?"`,
    }),
  },
];

/**
 * Intent matcher — returns the best-matching intent's answer.
 */
export function respond(userText) {
  const text = userText.trim().toLowerCase();
  if (!text) return null;

  // Rank all matching intents by priority
  const matched = intents
    .filter((i) => i.match(text))
    .sort((a, b) => b.priority - a.priority);

  if (matched.length > 0) {
    return matched[0].answer({ raw: userText });
  }

  // Fallback
  return {
    text: `I'm not 100% sure about that — but I can definitely help with our **services, hiring developers, pricing, timelines, or getting in touch**. Try rephrasing, or tap a quick action below.`,
    actions: [
      { label: "View Services", to: "/services" },
      { label: "Hire Developers", to: "/hire" },
      { label: "Contact Team", to: "/contact" },
    ],
  };
}

// Quick-action chips shown when the chat opens
export const quickActions = [
  { label: "What services do you offer?", query: "services" },
  { label: "How much does it cost?", query: "pricing" },
  { label: "Hire a developer", query: "hire" },
  { label: "Build AI features", query: "ai" },
  { label: "Cybersecurity services", query: "cybersecurity" },
  { label: "Book a call", query: "contact" },
];
