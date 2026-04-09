const base = (title, category, desc, features, tech, faqs) => ({
  title, category, desc,
  bullets: features,
  stats: [
    { n: "200+", l: "Projects Delivered" },
    { n: "98%", l: "Client Satisfaction" },
    { n: "48hrs", l: "Onboarding Time" },
    { n: "15+", l: "Years Experience" },
  ],
  subFeatures: [
    { icon: "⚡", title: "Fast Delivery", desc: "Agile sprints with weekly demos. Working software shipped every 2 weeks." },
    { icon: "🔒", title: "Secure & Compliant", desc: "OWASP, GDPR, HIPAA-ready architecture. Security reviews on every PR." },
    { icon: "☁️", title: "Cloud-Native", desc: "AWS, Azure, or GCP deployments with auto-scaling and 99.9% uptime SLA." },
    { icon: "🧪", title: "Fully Tested", desc: "Unit, integration, and E2E tests with 80%+ coverage on every project." },
    { icon: "📊", title: "Analytics Ready", desc: "Built-in analytics, error monitoring, and performance dashboards from day one." },
    { icon: "🤝", title: "Dedicated Support", desc: "Dedicated project manager, daily standups, and 24/7 support post-launch." },
  ],
  tech,
  process: [
    { title: "Discovery & Planning", desc: "Requirements workshop, competitor analysis, and detailed technical specification." },
    { title: "Architecture Design", desc: "System design, database schema, API contracts reviewed before development starts." },
    { title: "Agile Development", desc: "Two-week sprints with working demos. Full transparency via Jira and GitHub." },
    { title: "QA & Testing", desc: "Automated testing, performance profiling, and security audits on every build." },
    { title: "Deployment", desc: "Zero-downtime production deployment with monitoring and rollback capability." },
    { title: "Ongoing Support", desc: "Maintenance, feature additions, and quarterly health reviews post-launch." },
  ],
  faqs: faqs || [
    { q: `How long does ${title} take?`, a: "Typical projects take 8–16 weeks depending on scope. We provide a detailed timeline after the discovery phase." },
    { q: "What's included in the price?", a: "Design, development, testing, deployment, and 3 months of post-launch support. No hidden fees." },
    { q: "Do you sign an NDA?", a: "Yes. We sign NDAs before any project discussions to protect your intellectual property." },
    { q: "Can I scale the team up?", a: "Yes. You can add developers, designers, or QA engineers at any time with 48 hours notice." },
  ],
});

export const subServicesData = {
  // ─── MOBILE ────────────────────────────────────────────────────────────────
  "android-app-development": base(
    "Android App Development",
    "Mobile App Development",
    "We build high-performance, Kotlin-first Android applications that cover every device in the Android ecosystem. From consumer apps to enterprise mobility solutions, our Android engineers deliver Material Design 3 UIs, Jetpack Compose layouts, and production-hardened architectures.",
    ["Kotlin & Jetpack Compose UI", "MVVM & Clean Architecture", "Room, Retrofit & Hilt DI", "Google Play Publishing & ASO", "Material Design 3 Compliance", "BLE, NFC & Hardware Integration"],
    ["Kotlin", "Jetpack Compose", "Hilt", "Room", "Retrofit", "Coroutines", "Firebase", "WorkManager", "Espresso", "Gradle"]
  ),
  "ios-app-development": base(
    "iOS App Development",
    "Mobile App Development",
    "Our iOS developers build Swift-first, SwiftUI-powered apps for iPhone, iPad, Apple Watch, and Mac. Every app we ship follows Apple Human Interface Guidelines, passes App Store review on first submission, and integrates deeply with the Apple ecosystem.",
    ["Swift & SwiftUI Development", "UIKit & Auto Layout", "Core Data & CloudKit Sync", "ARKit & RealityKit Integration", "HealthKit & WatchKit Apps", "App Store Connect & TestFlight"],
    ["Swift", "SwiftUI", "UIKit", "Core Data", "CloudKit", "ARKit", "HealthKit", "Combine", "Alamofire", "XCTest"]
  ),
  "react-native-app-development": base(
    "React Native App Development",
    "Mobile App Development",
    "Ship to iOS and Android simultaneously with a single TypeScript codebase. Our React Native engineers deliver genuinely native performance using Reanimated 3, Hermes engine optimization, and custom native modules — 40% faster to market than two separate apps.",
    ["TypeScript & Expo SDK", "React Navigation & Deep Links", "Reanimated 3 Animations", "Native Module Bridging", "EAS Build & OTA Updates", "Jest & Detox E2E Testing"],
    ["React Native", "TypeScript", "Expo", "Redux Toolkit", "Reanimated 3", "MMKV", "Detox", "Fastlane", "Firebase", "Stripe"]
  ),
  "flutter-app-development": base(
    "Flutter App Development",
    "Mobile App Development",
    "Google's Flutter toolkit lets us build beautiful, 60fps apps for iOS, Android, Web, and Desktop from a single Dart codebase. Our Flutter developers use BLoC/Riverpod architecture, custom widgets, and Rive animations to deliver apps that consistently rate 4.9★.",
    ["Flutter & Dart Development", "BLoC & Riverpod State Management", "Custom Widget & Animation", "Firebase Full Stack Integration", "Flutter Web & Desktop", "60fps Performance Guarantee"],
    ["Flutter", "Dart", "BLoC", "Riverpod", "Firebase", "Drift", "Dio", "Rive", "Mockito", "Patrol"]
  ),
  "wearable-app-development": base(
    "Wearable App Development",
    "Mobile App Development",
    "We develop apps for Apple Watch, Wear OS, and connected IoT wearables. From health monitoring and fitness tracking to enterprise field tools and smart home controls — wearable apps that sync in real time with your mobile companion app.",
    ["Apple Watch (WatchKit & WidgetKit)", "Wear OS & Android companion apps", "Health & fitness data sync", "Real-time sensor data processing", "Haptic feedback & complications", "BLE device pairing & streaming"],
    ["Swift", "WatchKit", "Kotlin", "Wear OS SDK", "BLE", "CoreMotion", "HealthKit", "Firebase", "WebSockets"]
  ),
  "pwa-development": base(
    "Progressive Web App Development",
    "Mobile App Development",
    "Progressive Web Apps deliver native-like mobile experiences through the browser — offline support, push notifications, home screen installation, and near-native performance — without the friction of an app store. Ideal for reaching users on any device instantly.",
    ["Service Worker & Offline Mode", "Web Push Notifications", "Home Screen Installation (A2HS)", "Responsive Mobile-First UI", "Web App Manifest & PWA Audit", "Near-Native Performance (Lighthouse 90+)"],
    ["React", "Next.js", "Workbox", "IndexedDB", "Web Push API", "TypeScript", "Tailwind CSS", "Vite", "Lighthouse"]
  ),
  "ar-vr-app-development": base(
    "AR/VR App Development",
    "Mobile App Development",
    "We build immersive augmented and virtual reality experiences using ARKit, ARCore, Unity, and Apple Vision Pro. From retail product try-ons and real estate virtual tours to enterprise training simulations and gamified experiences.",
    ["ARKit & RealityKit (iOS)", "ARCore & Sceneform (Android)", "Apple Vision Pro (visionOS)", "Unity & Unreal Engine XR", "3D Model Integration & USDZ", "Spatial Computing & Hand Tracking"],
    ["ARKit", "RealityKit", "ARCore", "Unity", "Unreal Engine", "visionOS", "WebXR", "Three.js", "Blender (3D assets)"]
  ),
  "startup-app-development": base(
    "Startup App Development",
    "Mobile App Development",
    "Launch your MVP in 10–12 weeks with a production-ready app that attracts real users and investor attention. We help startups validate ideas fast, iterate on feedback, and scale when traction hits — all at a startup-friendly budget.",
    ["MVP scoping & lean product roadmap", "10–12 week launch timeline", "iOS + Android from one codebase", "Analytics & A/B testing built in", "Investor-ready technical architecture", "Post-launch growth iteration support"],
    ["React Native", "Expo", "Firebase", "Stripe", "Mixpanel", "Amplitude", "Fastlane", "GitHub Actions", "AWS"]
  ),
  "mobile-app-maintenance": base(
    "Mobile App Maintenance Services",
    "Mobile App Development",
    "Keep your mobile app secure, fast, and competitive with proactive maintenance. OS version upgrades, dependency updates, performance optimization, crash fixes, and feature additions — all under a predictable monthly retainer with SLA-backed response times.",
    ["iOS & Android OS version upgrades", "Security patches & dependency updates", "Crash monitoring & resolution (< 24h SLA)", "App Store compliance & policy updates", "Performance profiling & optimization", "Feature additions & UI refresh"],
    ["Firebase Crashlytics", "Sentry", "Fastlane", "GitHub Actions", "New Relic", "Datadog", "AppFollow"]
  ),
  // ─── WEBSITE ───────────────────────────────────────────────────────────────
  "nextjs-development": base(
    "Next.js Development",
    "Website Development",
    "We build blazing-fast Next.js applications with App Router, React Server Components, ISR, and built-in SEO optimization. From marketing sites scoring 98+ on Lighthouse to complex SaaS dashboards with real-time data — Next.js is our go-to for production web apps.",
    ["Next.js App Router & Server Components", "ISR, SSR & SSG strategies", "API Routes & Edge Functions", "Built-in SEO & Core Web Vitals", "Vercel, Netlify & AWS deployment", "TypeScript & Tailwind CSS"],
    ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "tRPC", "Vercel", "Contentful", "Stripe", "NextAuth"]
  ),
  "reactjs-development": base(
    "ReactJS Development",
    "Website Development",
    "Our React engineers build high-performance SPAs and UI-rich web applications. TypeScript by default, Redux Toolkit or React Query for state, and Storybook-documented component libraries — front-ends that are fast, accessible, and a joy to maintain.",
    ["React 18 & TypeScript (strict)", "Redux Toolkit & React Query", "Component library with Storybook", "WCAG 2.1 AA Accessibility", "Core Web Vitals optimization", "Jest & Cypress test coverage 80%+"],
    ["React", "TypeScript", "Redux Toolkit", "React Query", "Vite", "Storybook", "Jest", "Cypress", "Tailwind CSS", "Framer Motion"]
  ),
  "full-stack-development": base(
    "Full Stack Development",
    "Website Development",
    "End-to-end web development from PostgreSQL schema to React UI. Our full-stack teams own the entire product — database, API, frontend, DevOps — eliminating the communication gaps between siloed specialists and shipping features faster.",
    ["React/Next.js frontend + Node/Python backend", "PostgreSQL & MongoDB database design", "REST & GraphQL API development", "AWS or GCP cloud deployment", "Docker & Kubernetes containerization", "CI/CD with GitHub Actions"],
    ["React", "Next.js", "Node.js", "PostgreSQL", "Docker", "Kubernetes", "TypeScript", "GraphQL", "Redis", "Terraform"]
  ),
  "laravel-development": base(
    "Laravel Development",
    "Website Development",
    "Elegant, scalable Laravel applications built with PHP 8.3 best practices. From SaaS platforms with Filament admin panels to enterprise REST APIs with Sanctum authentication — artisan-crafted Laravel code that is clean, tested, and built to last.",
    ["Laravel 11 & PHP 8.3", "Eloquent ORM & database optimization", "Livewire & Inertia.js full-stack", "Filament admin panel development", "REST API with Sanctum/Passport", "PHPUnit & Pest testing"],
    ["Laravel", "PHP 8.3", "Livewire", "Filament", "Inertia.js", "MySQL", "Redis", "Horizon", "PHPUnit", "Pest"]
  ),
  "wordpress-development": base(
    "WordPress Development",
    "Website Development",
    "Custom WordPress themes, Gutenberg block plugins, WooCommerce stores, and headless WordPress setups. We build WordPress sites that are fast (90+ Lighthouse), secure, and give marketing teams full editorial control without developer dependency.",
    ["Custom theme & Gutenberg blocks", "WooCommerce store development", "Headless WordPress + Next.js frontend", "Plugin development & customization", "Performance optimization (90+ Lighthouse)", "Multisite & multilingual setup"],
    ["WordPress", "PHP", "WooCommerce", "Gutenberg", "React", "ACF Pro", "WP GraphQL", "Cloudflare", "Nginx"]
  ),
  "shopify-development": base(
    "Shopify Development",
    "Website Development",
    "Custom Shopify themes, Shopify Plus implementations, private apps, and headless Hydrogen storefronts. We build Shopify stores that convert — with optimized checkout flows, metafield-driven product pages, and third-party integrations.",
    ["Custom Shopify theme (Liquid)", "Shopify Plus & B2B Commerce", "Headless Shopify with Hydrogen", "Private app & API integration", "Checkout UI extensions", "ERP & inventory sync"],
    ["Shopify Liquid", "Hydrogen", "Remix", "Shopify CLI", "Metafields", "Shopify Functions", "GraphQL Admin API"]
  ),
  "ecommerce-development": base(
    "eCommerce Development",
    "Website Development",
    "From Shopify and Magento to custom-built commerce platforms, we build online stores engineered for conversion. Multi-currency, multi-language, subscription billing, loyalty programs, and ERP integration for high-volume retail.",
    ["Custom eCommerce platform development", "Shopify, Magento & WooCommerce", "Multi-currency & multi-language", "Subscription billing & loyalty", "Payment gateway integration", "Inventory & order management"],
    ["Shopify", "Magento 2", "WooCommerce", "Stripe", "PayPal", "Klaviyo", "Algolia", "Elastic", "Redis"]
  ),
  "nodejs-development": base(
    "NodeJS Development",
    "Website Development",
    "Scalable, high-throughput Node.js backends handling millions of requests per day. REST APIs, GraphQL, real-time WebSocket systems, and event-driven microservices — our Node.js engineers build backends that frontend teams love.",
    ["Express & NestJS REST APIs", "GraphQL with Apollo Server", "Real-time systems with Socket.io", "Microservices & Kafka/RabbitMQ", "PostgreSQL, MongoDB & Redis", "JWT, OAuth2 & RBAC security"],
    ["Node.js", "TypeScript", "NestJS", "Fastify", "PostgreSQL", "MongoDB", "Redis", "Socket.io", "Kafka", "Prisma"]
  ),
  "cms-development": base(
    "CMS Development",
    "Website Development",
    "Headless and traditional CMS implementations that give marketing teams content control without developer dependency. Contentful, Sanity, Strapi, and WordPress — with live previews, structured content, and CDN-accelerated delivery.",
    ["Contentful & Sanity headless CMS", "Strapi & Directus self-hosted", "WordPress & Drupal traditional CMS", "Custom field types & workflows", "Live preview & visual editing", "Multi-locale content management"],
    ["Contentful", "Sanity", "Strapi", "WordPress", "Next.js", "GraphQL", "Cloudflare CDN", "Vercel"]
  ),
  // ─── SOFTWARE ──────────────────────────────────────────────────────────────
  "saas-platform-development": base(
    "SaaS Platform Development",
    "Software Development",
    "Multi-tenant SaaS platforms with usage-based billing, self-service onboarding, role-based access, and horizontally scalable infrastructure. We've built SaaS products from zero to 50,000+ paying customers — investor-ready architecture from day one.",
    ["Multi-tenancy (subdomain / row-level)", "Stripe subscription billing & metering", "Self-service onboarding & trial flows", "Role-based access control (RBAC)", "Usage analytics & feature flags", "SOC2-ready security controls"],
    ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis", "Kubernetes", "LaunchDarkly", "Datadog"]
  ),
  "erp-development": base(
    "ERP Development",
    "Software Development",
    "Custom ERP systems that replace rigid off-the-shelf software with flexible solutions matching your exact workflows. Manufacturing, distribution, healthcare, and retail ERPs covering inventory, procurement, finance, HR, and reporting in one unified platform.",
    ["Custom module development (not off-shelf)", "Inventory, procurement & supply chain", "Finance, invoicing & compliance modules", "HR & payroll management", "Real-time reporting & BI dashboards", "Third-party integration (Xero, QuickBooks)"],
    ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "WebSockets", "Elasticsearch", "Power BI"]
  ),
  "crm-development": base(
    "CRM Development",
    "Software Development",
    "Bespoke CRM platforms with custom pipelines, automation workflows, email sequences, reporting, and deep integrations with your marketing and support tools. Replace Salesforce limitations with software that fits exactly how your sales team works.",
    ["Custom sales pipeline & kanban boards", "Automation workflows & triggers", "Email sequence & drip campaigns", "Integration with marketing tools", "Custom reporting & analytics", "Mobile CRM companion app"],
    ["React", "Node.js", "PostgreSQL", "Redis", "SendGrid", "Twilio", "Zapier", "REST APIs", "WebSockets"]
  ),
  "lms-development": base(
    "LMS Development",
    "Software Development",
    "Learning Management Systems with course creation tools, live and recorded video, progress tracking, certificate management, and learner analytics. For corporate training, professional certification, and consumer education platforms.",
    ["Course builder & SCORM support", "Live classes with video conferencing", "Progress tracking & gamification", "Certificates & badges system", "Stripe subscription billing", "Learner analytics dashboard"],
    ["React", "Node.js", "PostgreSQL", "AWS S3", "CloudFront", "WebRTC", "Stripe", "Redis", "Elasticsearch"]
  ),
  "desktop-app-development": base(
    "Desktop App Development",
    "Software Development",
    "Cross-platform desktop apps using Electron or Tauri for Windows, macOS, and Linux. Enterprise-grade security, auto-update, offline capability, and native OS integration — ideal for internal tools and productivity applications.",
    ["Electron & Tauri cross-platform", "Windows, macOS & Linux", "Native OS integration & menus", "Auto-update with Squirrel / Tauri updater", "Offline-first with local SQLite", "Enterprise MSI/PKG packaging"],
    ["Electron", "Tauri", "React", "TypeScript", "SQLite", "Rust", "Node.js", "GitHub Actions", "Code signing"]
  ),
  // ─── AI ────────────────────────────────────────────────────────────────────
  "generative-ai-development": base(
    "Generative AI Development",
    "Artificial Intelligence",
    "We build production-grade generative AI systems — RAG pipelines, fine-tuned domain models, AI content generation, intelligent document processing, and enterprise knowledge bases. GPT-4o, Claude, Gemini, and Llama 3 — we pick the right model for your use case.",
    ["RAG pipeline with vector search", "Fine-tuning with PEFT / LoRA", "Enterprise knowledge base (Q&A)", "AI content & image generation", "PDF / document intelligence", "Multi-agent orchestration with LangGraph"],
    ["OpenAI GPT-4o", "LangChain", "LlamaIndex", "Pinecone", "Chroma", "FastAPI", "Hugging Face", "Qdrant", "Python"]
  ),
  "ai-agent-development": base(
    "AI Agent Development",
    "Artificial Intelligence",
    "Autonomous AI agents that plan, reason, use tools, and execute complex multi-step tasks. From research agents and coding assistants to business process automation — we build agents that actually work in production, not just in demos.",
    ["Tool-use & function calling agents", "Multi-agent orchestration (LangGraph)", "Browser & API automation agents", "Long-term memory & context management", "Human-in-the-loop escalation", "Agent monitoring & observability"],
    ["Python", "LangChain", "LangGraph", "OpenAI", "Anthropic Claude", "AutoGen", "FastAPI", "Redis", "Celery"]
  ),
  "ai-chatbot-development": base(
    "AI Chatbot Development",
    "Artificial Intelligence",
    "Context-aware conversational AI for customer support, internal knowledge bases, and sales assistance. Our chatbots understand intent, remember conversation history, escalate intelligently to humans, and resolve 70%+ of queries automatically.",
    ["Intent recognition & context memory", "CRM & helpdesk integration (Zendesk, HubSpot)", "Omnichannel (web, WhatsApp, Slack, Teams)", "Human escalation with full context handoff", "Multilingual support (50+ languages)", "Analytics dashboard & conversation review"],
    ["OpenAI", "LangChain", "Pinecone", "FastAPI", "React", "Twilio", "WhatsApp API", "Slack API", "MongoDB"]
  ),
  "machine-learning-development": base(
    "Machine Learning Development",
    "Artificial Intelligence",
    "Custom ML models for demand forecasting, churn prediction, fraud detection, recommendation engines, and pricing optimization — trained on your data and integrated directly into your existing dashboards and applications.",
    ["Supervised & unsupervised learning models", "Feature engineering & data preprocessing", "Fraud detection & anomaly detection", "Recommendation & personalization engines", "Demand forecasting & predictive analytics", "Model explainability (SHAP, LIME)"],
    ["Python", "scikit-learn", "XGBoost", "PyTorch", "MLflow", "AWS SageMaker", "Feast (feature store)", "Airflow"]
  ),
  "computer-vision-development": base(
    "Computer Vision Development",
    "Artificial Intelligence",
    "Object detection, image segmentation, OCR, video analytics, facial recognition, and visual quality control systems. We train models on your domain-specific data and deploy them with production-grade serving infrastructure.",
    ["Object detection (YOLO, Detectron2)", "Image classification & segmentation", "OCR & document understanding", "Video analytics & action recognition", "Defect detection for manufacturing QA", "Face recognition & liveness detection"],
    ["Python", "PyTorch", "TensorFlow", "OpenCV", "YOLO v8", "Detectron2", "Tesseract OCR", "AWS Rekognition", "ONNX"]
  ),
  "llm-development": base(
    "LLM Development & Fine-Tuning",
    "Artificial Intelligence",
    "Build and deploy custom language models fine-tuned on your domain data. PEFT/LoRA efficient fine-tuning, RLHF alignment, evaluation benchmarks, and quantized model deployment for cost-efficient production inference at scale.",
    ["Domain-specific fine-tuning (PEFT / LoRA)", "RLHF & DPO alignment training", "Evaluation benchmarks & red-teaming", "4-bit / 8-bit quantization (GPTQ, AWQ)", "vLLM & TGI production serving", "On-premise & air-gapped deployment"],
    ["Python", "PyTorch", "Hugging Face Transformers", "PEFT", "vLLM", "Text Generation Inference", "W&B", "MLflow"]
  ),
  "nlp-development": base(
    "NLP Development Services",
    "Artificial Intelligence",
    "Natural language processing for sentiment analysis, text classification, entity extraction, document summarization, and speech-to-text. Industry-specific vocabulary training and multilingual support for global applications.",
    ["Sentiment analysis & opinion mining", "Named entity recognition (NER)", "Text classification & topic modeling", "Document summarization & extraction", "Speech-to-text with domain vocabulary", "Multilingual NLP (50+ languages)"],
    ["Python", "spaCy", "Hugging Face", "NLTK", "OpenAI Whisper", "Google Speech-to-Text", "FastAPI", "Elasticsearch"]
  ),
  // ─── BLOCKCHAIN ────────────────────────────────────────────────────────────
  "smart-contract-development": base(
    "Smart Contract Development",
    "Blockchain Development",
    "Gas-optimized Solidity and Rust smart contracts with 100% branch test coverage, formal verification, OpenZeppelin proxy upgrade patterns, and multi-sig security. Every contract undergoes internal audit before deployment.",
    ["Solidity (EVM) & Rust (Solana/NEAR)", "Gas optimization (ERC-721A, custom storage)", "OpenZeppelin proxy upgrade patterns", "Multi-sig & Timelock security", "100% branch test coverage", "Formal verification (Certora)"],
    ["Solidity", "Rust", "Hardhat", "Foundry", "OpenZeppelin", "ethers.js", "Slither", "Mythril", "Certora"]
  ),
  "nft-marketplace-development": base(
    "NFT Marketplace Development",
    "Blockchain Development",
    "Full-featured NFT marketplace with ERC-721A gas-optimized minting, lazy minting, creator royalties (EIP-2981), auction mechanics, collection management, and multi-chain support. White-label ready.",
    ["ERC-721A & ERC-1155 contracts", "Lazy minting to reduce gas costs", "Creator royalties (EIP-2981)", "Auction, offer & bulk listing mechanics", "IPFS / Arweave metadata storage", "Multi-chain (ETH, Polygon, Solana)"],
    ["Solidity", "ethers.js", "Hardhat", "IPFS", "Pinata", "The Graph", "React", "Next.js", "WalletConnect"]
  ),
  "defi-protocol-development": base(
    "DeFi Protocol Development",
    "Blockchain Development",
    "AMMs, lending markets, yield aggregators, liquid staking, and perpetual DEX. Battle-tested patterns from Uniswap, Aave, and Compound — our DeFi engineers have shipped protocols with hundreds of millions in TVL.",
    ["AMM & DEX development (Uniswap v3 model)", "Lending & borrowing market (Aave model)", "Yield aggregator & vault strategies", "Liquid staking protocol (LST)", "On-chain governance (Governor Bravo / Tally)", "Chainlink oracle integration"],
    ["Solidity", "Foundry", "Hardhat", "Chainlink", "OpenZeppelin", "The Graph", "ethers.js", "wagmi", "viem"]
  ),
  "metaverse-development": base(
    "Metaverse Development",
    "Blockchain Development",
    "3D virtual worlds, metaverse experiences, and GameFi platforms with blockchain-based ownership, interoperable digital assets, virtual economies, and social features. Unity and Unreal Engine with on-chain asset provenance.",
    ["3D virtual world construction (Unity/Unreal)", "Blockchain-based asset ownership (NFTs)", "Avatar systems & customization", "Virtual economy & marketplace", "Social features & live events", "WebGL & WebXR browser metaverse"],
    ["Unity", "Unreal Engine", "Solidity", "Three.js", "Babylon.js", "IPFS", "The Graph", "WebXR", "Blender"]
  ),
  "crypto-payment-gateway": base(
    "Crypto Payment Gateway Development",
    "Blockchain Development",
    "Accept cryptocurrency payments in any business. 50+ token support, automatic fiat conversion, merchant dashboard, invoice management, and seamless on/off ramps. PCI-DSS equivalent security architecture.",
    ["50+ cryptocurrency support", "Auto-conversion to stablecoins / fiat", "Merchant dashboard & API", "Invoice & subscription billing", "KYC/AML integration", "Fiat on/off ramp (MoonPay, Transak)"],
    ["Solidity", "Node.js", "React", "ethers.js", "Fireblocks", "BitGo", "MoonPay API", "Stripe", "PostgreSQL"]
  ),
  // ─── ENTERPRISE ────────────────────────────────────────────────────────────
  "microsoft-azure-consulting": base(
    "Microsoft Azure Consulting",
    "Enterprise Solution",
    "Azure architecture design, AKS cluster management, Azure DevOps CI/CD pipelines, Active Directory, Azure OpenAI integration, and cost optimization. We help enterprises migrate to Azure safely and run it efficiently.",
    ["Azure architecture assessment & design", "AKS (Kubernetes) cluster management", "Azure DevOps & GitHub Actions CI/CD", "Azure Active Directory & SSO", "Azure OpenAI Service integration", "Cost optimization & FinOps"],
    ["Azure", "Terraform", "Bicep", "AKS", "Azure DevOps", "Azure AD", "Azure OpenAI", "Power Platform", "Datadog"]
  ),
  "aws-development": base(
    "AWS Development & Consulting",
    "Enterprise Solution",
    "AWS architecture design, workload migration, serverless with Lambda, EKS container orchestration, S3/CloudFront media delivery, and cost optimization via Reserved Instances and Savings Plans.",
    ["AWS architecture design & review", "EKS & ECS container orchestration", "Lambda serverless architecture", "RDS, DynamoDB & ElastiCache", "CloudFront CDN & S3 media delivery", "AWS cost optimization & FinOps"],
    ["AWS", "Terraform", "CDK", "EKS", "Lambda", "RDS", "DynamoDB", "CloudFront", "SageMaker", "Datadog"]
  ),
  "salesforce-consulting": base(
    "Salesforce Consulting & Development",
    "Enterprise Solution",
    "Full Salesforce implementation — Sales Cloud, Service Cloud, Marketing Cloud, and Experience Cloud. Apex development, Lightning Web Components, Flow automation, and custom integrations connecting Salesforce to your entire tech stack.",
    ["Sales Cloud & Service Cloud setup", "Marketing Cloud & Pardot", "Apex triggers & classes", "Lightning Web Components (LWC)", "Flow & Process Builder automation", "Third-party API integration"],
    ["Salesforce", "Apex", "LWC", "SOQL", "Visualforce", "Flow", "MuleSoft", "REST APIs", "Heroku"]
  ),
  "it-staff-augmentation": base(
    "IT Staff Augmentation",
    "Enterprise Solution",
    "Vetted senior engineers embedded in your team on a contract basis — fully integrated into your culture, tools, and processes. Scale your engineering team up or down within 48 hours based on project demands.",
    ["Senior engineers (5+ years experience)", "Embedded in your team & processes", "48-hour onboarding guarantee", "Any tech stack covered", "NDA & IP assignment included", "Scale up / down with 1-week notice"],
    ["React", "Node.js", "Python", "Java", "AWS", "Docker", "Kubernetes", "PostgreSQL", "TypeScript", "Go"]
  ),
  // ─── ON-DEMAND ─────────────────────────────────────────────────────────────
  "food-delivery-app": base(
    "Food Delivery App Development",
    "On-Demand Solutions",
    "Full-stack food delivery platform — restaurant dashboard, real-time order tracking, intelligent driver dispatch, in-app chat, scheduled orders, and subscription meal plans. White-label ready with your brand in 6–8 weeks.",
    ["Customer, Driver & Restaurant apps", "Real-time GPS order tracking", "Intelligent driver dispatch algorithm", "Dynamic pricing & surge logic", "In-app chat & live order status", "Subscription meal plans & loyalty rewards"],
    ["React Native", "Node.js", "Socket.io", "Google Maps API", "Stripe Connect", "Firebase", "Redis", "PostgreSQL"]
  ),
  "taxi-ride-hailing-app": base(
    "Taxi & Ride-Hailing App Development",
    "On-Demand Solutions",
    "Uber-like ride-hailing platform with real-time driver matching, Google Maps route optimization, dynamic fare calculation, surge pricing, split payments, SOS emergency button, and driver onboarding portal.",
    ["Real-time driver-rider matching", "Google Maps routing & ETA", "Dynamic fare & surge pricing engine", "Split payment & wallet features", "Driver background check onboarding", "SOS & safety features"],
    ["React Native", "Node.js", "Google Maps Platform", "Stripe Connect", "Socket.io", "Firebase", "PostgreSQL", "Redis"]
  ),
  "grocery-delivery-app": base(
    "Grocery Delivery App Development",
    "On-Demand Solutions",
    "Multi-store grocery marketplace with slot-based delivery scheduling, real-time inventory sync, out-of-stock substitution, bundle deals, and recurring subscription orders. Integrated with POS and inventory management systems.",
    ["Multi-store & dark store support", "Slot-based delivery scheduling", "Real-time inventory sync", "OOS substitution management", "Subscription & recurring orders", "Loyalty points & offers engine"],
    ["React Native", "Node.js", "PostgreSQL", "Redis", "Stripe", "Google Maps", "Firebase", "Elasticsearch"]
  ),
  "ewallet-app": base(
    "eWallet App Development",
    "On-Demand Solutions",
    "Secure digital wallet with P2P transfers, QR code payments, bill payments, and multi-currency support. PCI-DSS compliant, RBI / FCA regulatory framework ready, with fraud detection ML models integrated.",
    ["P2P transfer & QR code payments", "Bill payment & recharge integration", "Multi-currency & crypto support", "PCI-DSS Level 1 compliance", "Fraud detection & velocity rules", "KYC / AML onboarding flow"],
    ["React Native", "Node.js", "PostgreSQL", "Stripe", "Plaid", "Twilio", "Redis", "AWS", "ML fraud models"]
  ),
  "dating-app-development": base(
    "Dating App Development",
    "On-Demand Solutions",
    "Swipe-based dating apps with AI-powered compatibility matching, video speed dating, profile verification, in-app voice/video calls, subscription monetization, and robust trust & safety moderation tools.",
    ["AI-powered compatibility matching", "Swipe / double opt-in mechanics", "Video speed dating rooms (WebRTC)", "Profile photo verification (AI)", "Subscription tiers & boost features", "Trust & safety moderation tools"],
    ["React Native", "Node.js", "WebRTC", "Redis", "PostgreSQL", "Stripe", "Firebase", "AWS Rekognition", "TensorFlow"]
  ),
};

export const getSubServiceData = (subSlug) => subServicesData[subSlug] || null;
