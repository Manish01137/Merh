const stdModels = [
  { title: "Full-Time", hours: "8 hrs/day", days: "5 days/week", billing: "Monthly", price: "From $3,000/mo", savings: "Save 60% vs in-house" },
  { title: "Part-Time", hours: "4 hrs/day", days: "Flexible slots", billing: "Weekly", price: "From $1,500/mo", savings: "Perfect for growing teams" },
  { title: "Hourly", hours: "As needed", days: "Pay-per-hour", billing: "Prepaid blocks", price: "From $25/hr", savings: "No lock-in, cancel anytime" },
];

const stdProcess = [
  "Share Your Requirements",
  "Review Matched Profiles",
  "Interview Candidates",
  "Choose Engagement Model",
  "Onboard in 48 Hours",
  "Deliver & Iterate",
];

export const hireDeveloperData = {
  "ai-developers": {
    title: "Hire AI Developers",
    heroDesc: "Access MershilTech's elite AI engineers who build production-grade AI systems — not demos. From GPT-4o integrations and custom LLMs to computer vision pipelines and MLOps infrastructure, our AI developers ship intelligent systems that create real competitive advantage.",
    skills: ["GPT-4o & LLM Integration", "Machine Learning & Deep Learning", "AI Agent Development", "Computer Vision & NLP", "MLOps & Model Deployment", "Python & PyTorch"],
    subSkills: [
      { icon: "robot", title: "Generative AI & RAG Systems", desc: "Build RAG pipelines, fine-tuned LLMs, and enterprise knowledge bases using GPT-4o, Claude, Gemini, and Llama 3. Production-hardened with vector databases and semantic search." },
      { icon: "search", title: "AI Agent Development", desc: "Autonomous agents that plan, reason, and execute multi-step tasks using LangChain, LlamaIndex, and custom tool-use frameworks — from research bots to business process automation." },
      { icon: "eye", title: "Computer Vision Systems", desc: "Object detection, image segmentation, OCR, video analytics, and visual QA systems trained on your domain data using PyTorch, TensorFlow, and OpenCV." },
      { icon: "chat", title: "AI Chatbot Development", desc: "Context-aware conversational AI for customer support, internal knowledge bases, and sales assistance — resolving 70%+ of queries automatically with seamless human escalation." },
      { icon: "brain", title: "LLM Fine-Tuning & Alignment", desc: "Domain-specific LLM fine-tuning with PEFT/LoRA, RLHF alignment, evaluation benchmarks, and quantized model deployment for cost-efficient production inference." },
      { icon: "gear", title: "MLOps & AI Infrastructure", desc: "Feature stores, model registries, automated retraining pipelines, A/B testing, and drift monitoring keeping your AI accurate and compliant in production at scale." },
    ],
    tech: ["Python", "PyTorch", "TensorFlow", "OpenAI GPT-4o", "LangChain", "Hugging Face", "Pinecone", "FastAPI", "AWS SageMaker", "Kubernetes", "MLflow", "Ray"],
    whyHire: [
      { title: "Production AI, Not Demos", desc: "Our AI engineers have shipped 80+ production AI systems — not prototypes. They understand data pipelines, model drift, latency SLAs, and the engineering required to keep AI reliable at scale." },
      { title: "Full-Stack AI Expertise", desc: "From data preprocessing to model training, API serving, and frontend integration — our developers cover the full AI stack so you don't need 5 different vendors." },
      { title: "ROI-Focused Approach", desc: "We help you identify which AI use cases deliver the highest ROI and build those first — validated with real metrics before we scale investment." },
    ],
    process: stdProcess,
    models: stdModels,
  },

  "dedicated-developers": {
    title: "Hire Dedicated Developers",
    heroDesc: "Partner with MershilTech to access dedicated engineers who become a true extension of your team. Full-stack expertise, transparent communication, clean code, and flexible engagement — all without the headache of hiring, onboarding, or managing overhead.",
    skills: ["Full-Stack Development", "System Architecture Design", "API & Integration Development", "Cloud Deployment & DevOps", "Database Optimization", "Agile & Scrum"],
    subSkills: [
      { icon: "laptop", title: "Custom Software Development", desc: "Tailored applications built from scratch with clean architecture, scalable database design, and enterprise-grade security — precisely matching your business requirements." },
      { icon: "link", title: "API & Integration Development", desc: "REST and GraphQL APIs, third-party service integration, payment gateway setup, and ERP data pipelines — built with proper versioning, docs, and error handling." },
      { icon: "cloud", title: "Cloud-Native Development", desc: "AWS, Azure, or GCP deployments with containerization, auto-scaling, managed databases, CDN configuration, and infrastructure-as-code using Terraform." },
      { icon: "build", title: "System Architecture", desc: "Scalable microservices, event-driven architectures, and domain-driven design — built to handle 10x your current load without a painful rewrite." },
      { icon: "mobile", title: "Full-Stack Web & Mobile", desc: "React frontends to Node.js/Python backends to mobile apps — a single dedicated team covering your entire product stack with consistent code quality." },
      { icon: "lock", title: "Security & Compliance", desc: "OWASP-compliant implementations, GDPR-ready data handling, SOC2 controls, penetration testing support, and security code reviews on every pull request." },
    ],
    tech: ["React", "Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes", "TypeScript"],
    whyHire: [
      { title: "Top 3% — Rigorously Vetted", desc: "Less than 3% of applicants pass our 5-stage screening: coding challenge, system design, code review, communication assessment, and cultural alignment evaluation." },
      { title: "Zero Ramp Time", desc: "Our developers are production-ready from day one. They follow your coding standards, join your Slack, attend standups, and push meaningful code in the first 5 days." },
      { title: "Transparent, Fixed Billing", desc: "Fixed monthly rates with zero recruitment fees, zero benefits overhead, and no long-term lock-in. Cancel anytime with 30 days notice — no questions asked." },
    ],
    process: stdProcess,
    models: stdModels,
  },

  "mobile-app-developers": {
    title: "Hire Mobile App Developers",
    heroDesc: "MershilTech's mobile engineers have shipped 200+ apps on the App Store and Google Play. From your first MVP to your 10 millionth user, our developers build apps that are performant, beautiful, and built to scale — averaging 4.9★ store ratings.",
    skills: ["iOS (Swift) & Android (Kotlin)", "React Native & Flutter", "App Store Optimization", "Push Notifications & Analytics", "Offline-First Architecture", "Payment & Maps SDKs"],
    subSkills: [
      { icon: "robot", title: "Native Android Development", desc: "Kotlin-first Android apps with Jetpack Compose, MVVM architecture, Material Design 3, and thorough testing on real devices — covering all screen sizes and Android versions." },
      { icon: "apple", title: "Native iOS Development", desc: "Swift and SwiftUI for the full Apple ecosystem — iPhone, iPad, Apple Watch, and Mac. HIG-compliant, App Store approved, and integrated with HealthKit, ARKit, and SiriKit." },
      { icon: "react", title: "React Native Development", desc: "Shared JavaScript/TypeScript codebase with native modules delivering true native performance. CI/CD with Fastlane for reliable, automated releases to both stores." },
      { icon: "flutter", title: "Flutter Development", desc: "Beautiful 60fps Flutter apps from a single Dart codebase — with BLoC/Riverpod state management, custom widget creation, and seamless platform channel integration." },
      { icon: "plug", title: "API & Backend Integration", desc: "Seamless integration with REST APIs, GraphQL, Firebase, WebSockets, Stripe, Google Maps, social auth (Apple, Google, Facebook), and 100+ third-party SDKs." },
      { icon: "chart", title: "Analytics & Crash Reporting", desc: "Firebase Analytics, Mixpanel, Amplitude, and Crashlytics setup for data-driven product decisions, funnel analysis, and proactive crash resolution." },
    ],
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux", "GraphQL", "AWS", "Fastlane", "Jest", "Detox", "Mixpanel"],
    whyHire: [
      { title: "200+ Published Apps", desc: "Our mobile developers have shipped across every category — fintech, health, social, on-demand — with an average 4.8★ App Store rating across the portfolio." },
      { title: "Performance Obsessed", desc: "We profile every screen, optimize cold start times, and ensure your app scores 90+ on App Store performance metrics on mid-range Android hardware." },
      { title: "App Store Experts", desc: "We know Apple and Google review guidelines inside out. Our apps sail through review on first submission — no delays, no rejections, no resubmission cycles." },
    ],
    process: ["Define App Requirements", "UI/UX Design & Prototype", "Agile Development Sprints", "QA on 50+ Real Devices", "App Store Submission & ASO", "Post-Launch Support"],
    models: stdModels,
  },

  "android-developers": {
    title: "Hire Android Developers",
    heroDesc: "Our Android developers build Kotlin-first, Jetpack-powered applications for the full Android ecosystem. From consumer apps to enterprise mobility solutions, we deliver Android experiences that are fast, reliable, and consistently rated 4.8★+ on the Google Play Store.",
    skills: ["Kotlin & Jetpack Compose", "MVVM & Clean Architecture", "Google Play Publishing", "Background Services & WorkManager", "Bluetooth, NFC & Hardware APIs", "Material Design 3"],
    subSkills: [
      { icon: "robot", title: "Native Android App Development", desc: "Kotlin-first Android development with Jetpack Compose UI, MVVM clean architecture, and Coroutines for responsive, crash-free apps that cover all Android versions from API 24+." },
      { icon: "build", title: "Android Architecture", desc: "MVVM, MVI, and Clean Architecture patterns with Hilt dependency injection, Room Database, DataStore, and Paging 3 — modular, testable, and maintainable codebases." },
      { icon: "plug", title: "Hardware & Sensor Integration", desc: "Bluetooth LE, NFC, USB, camera APIs, biometric auth, GPS and geofencing, barcode scanning, and device-specific hardware integration for enterprise Android deployments." },
      { icon: "broadcast", title: "Real-Time & Offline Sync", desc: "WorkManager background jobs, Firebase Realtime Database sync, Room offline caching, and conflict-resolution strategies — apps that work perfectly with or without connectivity." },
      { icon: "lock", title: "Android Security", desc: "Keystore-backed encryption, certificate pinning, ProGuard obfuscation, root detection, biometric authentication, and OWASP Mobile Security compliance on every build." },
      { icon: "flask", title: "Android Testing & QA", desc: "JUnit, Mockito, Espresso, and Robolectric test suites with Firebase Test Lab execution across 50+ real Android devices — ensuring quality at every screen density and OS version." },
    ],
    tech: ["Kotlin", "Jetpack Compose", "Android SDK", "Room", "Retrofit", "Hilt", "Coroutines", "Firebase", "Google Maps", "WorkManager", "Espresso", "Gradle"],
    whyHire: [
      { title: "Kotlin-First by Default", desc: "100% of our Android code is written in Kotlin with Coroutines and Flow — no legacy Java debt, no callback hell, just clean, modern Android development." },
      { title: "All Screen Sizes Covered", desc: "We design and test for phones, tablets, foldables, and Android TV — ensuring your app looks perfect on every device your users might own." },
      { title: "Google Play Compliance", desc: "We stay current with every Google Play policy update. Our apps pass review on first submission and maintain compliant status through all Play Store policy changes." },
    ],
    process: stdProcess,
    models: stdModels,
  },

  "ios-developers": {
    title: "Hire iOS Developers",
    heroDesc: "Our iOS developers build Swift-first, SwiftUI-powered applications for the complete Apple ecosystem. From iPhone and iPad to Apple Watch and Mac — we deliver polished, App Store–approved experiences with deep Apple ecosystem integration.",
    skills: ["Swift & SwiftUI", "UIKit & Storyboards", "Core Data & CloudKit", "ARKit & RealityKit", "HealthKit & WatchKit", "App Store Connect & TestFlight"],
    subSkills: [
      { icon: "apple", title: "Native iOS App Development", desc: "Swift and SwiftUI development following Apple's Human Interface Guidelines — pixel-perfect on iPhone 15 and backward-compatible to iOS 16, with full accessibility support." },
      { icon: "⌚", title: "Apple Watch & iPad Apps", desc: "WatchKit and widgetKit for Apple Watch, and adaptive iPad-first layouts with multi-column navigation, drag-and-drop, and keyboard/trackpad support for Stage Manager." },
      { icon: "gpu", title: "ARKit & visionOS Development", desc: "Augmented reality experiences with ARKit and RealityKit, and cutting-edge spatial computing apps for Apple Vision Pro — retail, training, visualization, and entertainment." },
      { icon: "hospital", title: "HealthKit & CoreMotion", desc: "Health and fitness apps with HealthKit integration, CoreMotion activity tracking, CareKit for health management, and HIPAA-compliant data handling." },
      { icon: "keylock", title: "iOS Security & Keychain", desc: "Keychain Services for credential storage, Face ID/Touch ID integration, App Transport Security, certificate pinning, and OWASP Mobile Top 10 compliance." },
      { icon: "flask", title: "XCTest & TestFlight QA", desc: "Comprehensive XCTest unit and UI test suites, snapshot testing, TestFlight beta distribution, and App Store Connect performance monitoring for production quality." },
    ],
    tech: ["Swift", "SwiftUI", "UIKit", "Core Data", "CloudKit", "Firebase", "ARKit", "HealthKit", "Alamofire", "Combine", "XCTest", "Xcode"],
    whyHire: [
      { title: "Apple Ecosystem Specialists", desc: "We don't just build iPhone apps — we build experiences that span iPhone, iPad, Watch, Mac, and now Apple Vision Pro, all sharing code through Swift packages." },
      { title: "App Store First Submission Pass", desc: "Our developers know Apple's review guidelines exhaustively. Every app we submit passes on the first attempt — saving you weeks of delays and iteration." },
      { title: "SwiftUI-First, UIKit When Needed", desc: "We write modern SwiftUI code by default while knowing exactly when UIKit is the right choice — ensuring your app is maintainable for years to come." },
    ],
    process: stdProcess,
    models: stdModels,
  },

  "react-native-developers": {
    title: "Hire React Native Developers",
    heroDesc: "MershilTech's React Native engineers build cross-platform mobile apps that deliver true native performance from a single JavaScript/TypeScript codebase. Ship to iOS and Android simultaneously — 40% faster to market at 60% of the cost of two native apps.",
    skills: ["React Native & Expo", "TypeScript & JavaScript", "Redux & Zustand State Management", "Native Module Bridging", "React Navigation", "Fastlane CI/CD"],
    subSkills: [
      { icon: "react", title: "React Native App Development", desc: "Production React Native apps with TypeScript, optimized JS bridges, native modules, Hermes engine tuning, and Flipper debugging — genuinely native performance on both platforms." },
      { icon: "rocket", title: "Expo & Managed Workflow", desc: "Expo SDK for rapid development, over-the-air updates with EAS Update, push notifications via Expo Push, and EAS Build for managed cloud CI/CD — from code to store fast." },
      { icon: "palette", title: "React Native Animations", desc: "Reanimated 3 and Gesture Handler for 60fps native-thread animations, shared element transitions, and gesture-driven interactions that feel completely native to each platform." },
      { icon: "link", title: "Native Module Development", desc: "Custom Objective-C, Swift, Kotlin, and Java native modules that expose device hardware, third-party SDKs, or platform-specific APIs not available in the React Native ecosystem." },
      { icon: "box", title: "State Management", desc: "Redux Toolkit, Zustand, React Query, and Jotai — the right state management for your app's complexity, with offline persistence using MMKV or AsyncStorage." },
      { icon: "flask", title: "Jest & Detox Testing", desc: "Unit tests with Jest and React Native Testing Library, E2E tests with Detox running on real iOS and Android devices in CI — ensuring quality before every release." },
    ],
    tech: ["React Native", "TypeScript", "Expo", "Redux Toolkit", "React Navigation", "Reanimated 3", "Zustand", "MMKV", "Detox", "Fastlane", "Firebase", "Stripe"],
    whyHire: [
      { title: "True Cross-Platform, Native Feel", desc: "We write platform-specific components where the experience demands it — so both iOS and Android users feel a native app, not a compromise." },
      { title: "95% Code Sharing Achieved", desc: "Our architecture patterns typically achieve 93–97% code sharing between iOS and Android, dramatically reducing cost while maintaining quality." },
      { title: "OTA Updates Without App Store", desc: "With Expo EAS Update, we can ship critical fixes to users in minutes — without waiting for App Store review, keeping your users on the latest, safest version." },
    ],
    process: stdProcess,
    models: stdModels,
  },

  "flutter-developers": {
    title: "Hire Flutter Developers",
    heroDesc: "Flutter is Google's UI toolkit for building natively compiled apps for mobile, web, and desktop from a single Dart codebase. Our Flutter developers have shipped 50+ production Flutter apps with an average 4.9★ rating — beautiful, performant, and fast to market.",
    skills: ["Flutter & Dart", "BLoC & Riverpod Architecture", "Custom Widget Development", "Firebase & REST Integration", "Fastlane CI/CD", "Flutter Web & Desktop"],
    subSkills: [
      { icon: "flutter", title: "Flutter Mobile Development", desc: "Production Flutter apps for iOS and Android with pixel-perfect custom UI, smooth 60fps animations, and native platform integration via platform channels and Flutter plugins." },
      { icon: "globe", title: "Flutter Web Development", desc: "Progressive web apps and admin dashboards with Flutter Web sharing 90%+ of your mobile codebase — single team, single codebase, consistent experience across platforms." },
      { icon: "desktop", title: "Flutter Desktop Apps", desc: "Windows, macOS, and Linux desktop applications with Flutter — ideal for internal enterprise tools, data dashboards, and productivity applications with native OS integration." },
      { icon: "palette", title: "Custom Widget & Animation", desc: "Bespoke Flutter widgets with custom painters, Rive animations, Lottie integration, and Hero transitions — matching your design system at pixel level with smooth 120fps support." },
      { icon: "fire", title: "Firebase Full-Stack", desc: "Firebase Auth, Firestore, Cloud Functions, Remote Config, FCM push, Crashlytics, and Firebase Analytics — the complete Firebase stack properly implemented with security rules." },
      { icon: "lightning", title: "Performance Optimization", desc: "Widget rebuild profiling with Flutter DevTools, const constructors, RepaintBoundary, lazy loading, and image caching — ensuring smooth 60fps on budget Android devices." },
    ],
    tech: ["Flutter", "Dart", "BLoC", "Riverpod", "Firebase", "GetX", "Drift", "Fastlane", "Mockito", "Patrol", "Dio", "Isar"],
    whyHire: [
      { title: "50+ Production Flutter Apps", desc: "Our Flutter developers have shipped in fintech, healthcare, eCommerce, and social — all with 4.8★+ ratings and hundreds of thousands of active users." },
      { title: "60fps Guaranteed", desc: "We use Flutter DevTools to profile every screen and ensure consistent smooth rendering on mid-range Android devices — not just flagship phones." },
      { title: "Code Reuse Maximized", desc: "Our architecture typically achieves 95%+ code sharing across iOS, Android, and Web — dramatically reducing cost and keeping features in sync across platforms." },
    ],
    process: ["Requirement Analysis", "Architecture & State Design", "UI Implementation", "Platform Integration", "QA on Real Devices", "App Store Launch"],
    models: stdModels,
  },

  "react-developers": {
    title: "Hire ReactJS Developers",
    heroDesc: "MershilTech's React developers build high-performance, scalable front-end applications used by millions of users. From component libraries to complex Next.js SSR apps and real-time dashboards — our engineers deliver pixel-perfect React experiences with exceptional Core Web Vitals scores.",
    skills: ["React.js & Next.js", "TypeScript (Strict Mode)", "Redux Toolkit & React Query", "Performance Optimization", "Accessibility (WCAG 2.1 AA)", "Jest & Cypress Testing"],
    subSkills: [
      { icon: "react", title: "React SPA Development", desc: "Single-page applications with React Router, code splitting, lazy loading, and optimized bundle sizes — consistent sub-2s load times and LCP scores under 2.5 seconds." },
      { icon: "lightning", title: "Next.js SSR & SSG", desc: "Server-side rendered and statically generated Next.js apps with ISR, API routes, App Router, Server Components, and full SEO optimization built into the architecture." },
      { icon: "palette", title: "Component Library Development", desc: "Reusable, accessible, and documented component systems with Storybook, design token support, and chromatic visual testing — your design system, codified." },
      { icon: "box", title: "State Management", desc: "Redux Toolkit, Zustand, React Query, TanStack Query, and Context API — the right tool for each layer of your application's state complexity." },
      { icon: "plug", title: "REST & GraphQL Integration", desc: "API integration with React Query, SWR, Apollo Client, and RTK Query — optimistic updates, infinite scroll, real-time subscriptions, and intelligent caching strategies." },
      { icon: "flask", title: "Testing & Quality Assurance", desc: "Jest and React Testing Library for unit/integration tests, Cypress or Playwright for E2E, and 80%+ coverage targets enforced in CI — quality gates on every PR." },
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Vite", "Jest", "Cypress", "Storybook", "GraphQL", "Framer Motion", "React Query"],
    whyHire: [
      { title: "Core Web Vitals Champions", desc: "Our React developers consistently achieve LCP <2.5s, FID <100ms, and CLS <0.1 — the scores that win on Google Search and keep users engaged." },
      { title: "TypeScript-First by Default", desc: "All React code is written in TypeScript with strict mode enabled. No runtime surprises, no type errors in production, and self-documenting component APIs." },
      { title: "Accessibility by Default", desc: "We build WCAG 2.1 AA compliant UIs by default — required by enterprise clients, mandatory in public sector, and universally better for all users." },
    ],
    process: ["Understand UI Requirements", "Component Architecture Design", "Sprint Development", "Performance Profiling", "Cross-Browser QA", "Handoff & Docs"],
    models: stdModels,
  },

  "node-developers": {
    title: "Hire NodeJS Developers",
    heroDesc: "Our Node.js developers build backend systems that handle millions of daily requests without breaking a sweat. REST APIs, GraphQL, real-time WebSocket systems, microservices, and event-driven architectures — production-hardened and performance-optimized from day one.",
    skills: ["Node.js & Express/NestJS", "TypeScript", "REST & GraphQL APIs", "Microservices & Event-Driven", "WebSockets & Real-Time", "PostgreSQL, MongoDB & Redis"],
    subSkills: [
      { icon: "rocket", title: "REST API Development", desc: "Clean, versioned REST APIs with OpenAPI Swagger specs, proper error handling, rate limiting, pagination, request validation, and comprehensive integration test suites." },
      { icon: "predict", title: "GraphQL API Development", desc: "Schema-first GraphQL APIs with Apollo Server, DataLoader for N+1 prevention, subscription support, schema federation, and permission-based field-level authorization." },
      { icon: "lightning", title: "Real-Time Systems", desc: "WebSocket and Socket.io systems for live chat, collaborative tools, real-time dashboards, push notifications, and multi-player game backends handling 10,000+ concurrent connections." },
      { icon: "build", title: "Microservices Architecture", desc: "Event-driven microservices with RabbitMQ or Apache Kafka, Docker containers, Kubernetes orchestration, and distributed tracing via OpenTelemetry for independent scaling." },
      { icon: "database", title: "Database Architecture", desc: "PostgreSQL, MongoDB, Redis, and Elasticsearch — schema design, query optimization, strategic indexing, connection pooling, and caching layers for maximum throughput." },
      { icon: "keylock", title: "Auth & Security", desc: "JWT, OAuth 2.0 with PKCE, RBAC/ABAC authorization, OWASP-compliant input validation, rate limiting, helmet.js headers, and comprehensive API security hardening." },
    ],
    tech: ["Node.js", "TypeScript", "Express", "NestJS", "Fastify", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Docker", "Kafka", "Prisma"],
    whyHire: [
      { title: "Throughput-Optimized Systems", desc: "Our Node.js engineers understand the event loop deeply. We build non-blocking I/O patterns achieving 10,000+ concurrent connections on modest hardware." },
      { title: "API Design Experts", desc: "We write REST and GraphQL APIs that frontend developers love — consistent naming conventions, meaningful error codes, and always-current Swagger documentation." },
      { title: "Database Performance Masters", desc: "We've optimized queries that cut load times by 95%. We know when to index, when to denormalize, and when to introduce Redis — making the right call every time." },
    ],
    process: ["API Requirements Workshop", "Database Schema Design", "Development Sprints", "Load & Security Testing", "API Documentation", "Deployment & Monitoring"],
    models: stdModels,
  },

  "web-developers": {
    title: "Hire Web Developers",
    heroDesc: "Our full-stack web developers build fast, scalable, SEO-optimized web applications and websites. From Next.js marketing sites and React dashboards to Laravel backends and Shopify storefronts — we cover the entire web stack with modern, maintainable code.",
    skills: ["React & Next.js", "Node.js & Laravel", "TypeScript & JavaScript", "Database Design (SQL & NoSQL)", "Cloud Deployment (AWS/Vercel)", "SEO & Performance Optimization"],
    subSkills: [
      { icon: "lightning", title: "Next.js & React Development", desc: "Server-side rendered and statically generated sites with Next.js App Router, React Server Components, and built-in SEO — fast by default and scalable by design." },
      { icon: "build", title: "Laravel & PHP Development", desc: "Robust Laravel backends with Eloquent ORM, queue workers, scheduled tasks, REST API development, multi-tenancy, and PHP 8.3 features for modern backend engineering." },
      { icon: "cart", title: "eCommerce & Shopify", desc: "Custom Shopify themes with Liquid, Shopify Plus implementations, Hydrogen storefronts, WooCommerce development, and Magento configuration for high-volume retail." },
      { icon: "chart", title: "Dashboard & Web App Development", desc: "Data-rich web applications, admin panels, BI dashboards, and SaaS platforms built with React or Vue frontends backed by Node.js or Python APIs with real-time updates." },
      { icon: "plug", title: "CMS & Headless Development", desc: "WordPress, Contentful, Sanity, and Strapi headless CMS setups — giving marketing teams content control while developers maintain performance and flexibility." },
      { icon: "search", title: "SEO & Core Web Vitals", desc: "Technical SEO implementation, Core Web Vitals optimization, schema markup, XML sitemaps, and page speed improvements that move the needle on organic search rankings." },
    ],
    tech: ["Next.js", "React", "Laravel", "Node.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "WordPress", "Shopify", "Vercel", "AWS", "Contentful"],
    whyHire: [
      { title: "Full-Stack Coverage", desc: "Our web developers own the entire stack — database, API, frontend, deployment. One team, one communication channel, no gaps between front and back end." },
      { title: "Core Web Vitals Optimized", desc: "Every site we ship achieves LCP under 2.5s and a Lighthouse score above 90 — better search rankings, lower bounce rates, and happier users." },
      { title: "SEO Architecture by Default", desc: "We build with SEO in mind from the first line — semantic HTML, structured data, performant images, and crawlable routing for maximum organic visibility." },
    ],
    process: stdProcess,
    models: stdModels,
  },

  "php-developers": {
    title: "Hire PHP Developers",
    heroDesc: "Our PHP developers build robust, secure web applications and APIs using modern PHP 8+ practices. From Laravel and Symfony enterprise backends to WordPress and Magento platforms — our engineers deliver PHP solutions that are fast, maintainable, and production-hardened.",
    skills: ["PHP 8+ & Modern Standards", "Laravel & Symfony", "WordPress & Magento", "REST API Development", "MySQL & Redis", "PHPUnit & Testing"],
    subSkills: [
      { icon: "php", title: "Laravel Development", desc: "Elegant Laravel applications with Eloquent ORM, Livewire, Laravel Nova admin panels, queue workers, Laravel Echo WebSockets, Telescope debugging, and full-stack Inertia.js." },
      { icon: "cart", title: "eCommerce (Magento & WooCommerce)", desc: "Magento 2 custom module development, theme creation, performance optimization, and WooCommerce extensions for high-volume eCommerce platforms with complex pricing rules." },
      { icon: "edit", title: "WordPress Development", desc: "Custom WordPress themes with block editor (Gutenberg) support, plugin development, WooCommerce integration, multisite setups, and headless WordPress with REST API or WPGraphQL." },
      { icon: "build", title: "Symfony & CakePHP", desc: "Enterprise Symfony applications with dependency injection, Doctrine ORM, API Platform for REST/GraphQL APIs, and Symfony Messenger for async job processing." },
      { icon: "link", title: "REST API Development", desc: "RESTful API design and development with Laravel Sanctum/Passport auth, API resource transformers, versioning strategies, rate limiting, and OpenAPI documentation." },
      { icon: "flask", title: "PHPUnit & Testing", desc: "Comprehensive PHPUnit test suites, Laravel Dusk browser testing, Pest PHP, and code coverage reporting — ensuring your PHP application is well-tested and regression-free." },
    ],
    tech: ["PHP 8+", "Laravel", "Symfony", "WordPress", "Magento", "MySQL", "Redis", "Composer", "PHPUnit", "Pest", "Docker", "Nginx"],
    whyHire: [
      { title: "Modern PHP Practices", desc: "No legacy PHP from 2010. Our developers write PHP 8.3 with strict types, readonly properties, enums, fibers, and all modern language features." },
      { title: "Framework Versatility", desc: "Whether your project needs Laravel's elegance, Symfony's power, WordPress's ecosystem, or Magento's commerce features — we have certified specialists for each." },
      { title: "Performance-Optimized PHP", desc: "OpCache tuning, Redis session caching, database query optimization, and CDN configuration — our PHP apps serve thousands of concurrent users without slowdowns." },
    ],
    process: stdProcess,
    models: stdModels,
  },

  "angular-developers": {
    title: "Hire AngularJS Developers",
    heroDesc: "Our Angular developers build enterprise-grade single-page applications with TypeScript-first, Angular 17+ architecture. From complex B2B dashboards to customer portals and progressive web apps — our engineers deliver robust, maintainable Angular solutions.",
    skills: ["Angular 17+ & TypeScript", "RxJS & Reactive Programming", "NgRx State Management", "Angular Material & CDK", "Angular Universal SSR", "Karma, Jasmine & Cypress"],
    subSkills: [
      { icon: "angular", title: "Angular SPA Development", desc: "Enterprise Angular applications with lazy-loaded feature modules, standalone components, Angular Signals, and OnPush change detection for maximum runtime performance." },
      { icon: "broadcast", title: "RxJS & Reactive Architecture", desc: "Complex reactive data flow management with RxJS operators, Subject/BehaviorSubject patterns, declarative programming, and observables that are easy to compose and test." },
      { icon: "box", title: "NgRx State Management", desc: "NgRx Store, Effects, Entity, and Component Store for predictable, scalable application state — with Redux DevTools integration for complete state visibility." },
      { icon: "palette", title: "Angular Material & CDK", desc: "Pixel-perfect Angular Material implementations, custom CDK overlays and drag-and-drop, theming with Material tokens, and accessible component development." },
      { icon: "rocket", title: "Angular Universal SSR", desc: "Server-side rendering with Angular Universal for SEO-critical content, pre-rendering static routes, hydration, and defer blocks for progressive page loading." },
      { icon: "flask", title: "Angular Testing Suite", desc: "Unit tests with Karma and Jasmine, component tests with Angular Testing Library, E2E tests with Cypress or Playwright — targeting 80%+ code coverage in every module." },
    ],
    tech: ["Angular 17+", "TypeScript", "RxJS", "NgRx", "Angular Material", "Angular CDK", "Karma", "Jasmine", "Cypress", "Node.js", "Webpack", "SCSS"],
    whyHire: [
      { title: "Enterprise Angular Specialists", desc: "Angular is built for large, complex applications. Our developers understand module federation, micro-frontends, and modular architecture for multi-team enterprise development." },
      { title: "RxJS Experts", desc: "Reactive programming is Angular's superpower — and a common source of bugs and memory leaks when misunderstood. Our developers write RxJS that is clean, correct, and performant." },
      { title: "Angular Signals Ready", desc: "We use Angular's new Signals API where appropriate — fine-grained reactivity without the RxJS overhead, with full backward compatibility and gradual migration paths." },
    ],
    process: stdProcess,
    models: stdModels,
  },

  "java-developers": {
    title: "Hire Java Developers",
    heroDesc: "Our Java developers build enterprise-grade applications, microservices, and backend systems with Spring Boot and Java 21. From financial trading systems to large-scale SaaS platforms — our engineers deliver Java solutions that are reliable, performant, and built to last.",
    skills: ["Java 21 & Spring Boot", "Microservices & Spring Cloud", "JPA & Hibernate", "Apache Kafka & RabbitMQ", "Maven & Gradle", "JUnit 5 & TestContainers"],
    subSkills: [
      { icon: "java", title: "Spring Boot API Development", desc: "Production Spring Boot REST and GraphQL APIs with Spring Security, JWT auth, bean validation, OpenAPI docs, and comprehensive integration test suites using TestContainers." },
      { icon: "build", title: "Microservices Architecture", desc: "Spring Cloud microservices with service discovery (Eureka), API gateway (Spring Cloud Gateway), circuit breakers (Resilience4j), and distributed tracing with OpenTelemetry." },
      { icon: "broadcast", title: "Event-Driven Systems", desc: "Apache Kafka and RabbitMQ-based event streaming architectures — producers, consumers, dead-letter queues, event sourcing, CQRS patterns, and saga orchestration." },
      { icon: "database", title: "JPA & Database Engineering", desc: "Hibernate ORM, JPA Criteria API, Spring Data JPA repositories, connection pool tuning with HikariCP, Flyway migrations, and complex PostgreSQL/MySQL query optimization." },
      { icon: "cloud", title: "Cloud-Native Java", desc: "GraalVM native image compilation for instant startup, Spring Boot on Kubernetes, AWS Lambda Java functions, containerized deployments, and cloud-managed database integration." },
      { icon: "flask", title: "Java Testing Practices", desc: "JUnit 5, Mockito, AssertJ, TestContainers for integration tests, ArchUnit for architecture governance, and Gatling for load testing — quality enforced at every layer." },
    ],
    tech: ["Java 21", "Spring Boot", "Spring Cloud", "Hibernate/JPA", "Apache Kafka", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Maven", "JUnit 5", "Testcontainers"],
    whyHire: [
      { title: "Java 21 Virtual Threads", desc: "Our developers use Project Loom virtual threads and structured concurrency — writing high-throughput concurrent Java that's dramatically simpler than traditional thread-pool models." },
      { title: "Spring Ecosystem Experts", desc: "Spring Boot, Spring Cloud, Spring Security, Spring Batch, Spring Integration — deep expertise across the full Spring portfolio, not just the basics." },
      { title: "Enterprise Reliability Standards", desc: "Financial-grade reliability patterns: circuit breakers, bulkheads, retry with exponential backoff, comprehensive monitoring, and zero-downtime deployment strategies." },
    ],
    process: stdProcess,
    models: stdModels,
  },

  "laravel-developers": {
    title: "Hire Laravel Developers",
    heroDesc: "Our Laravel developers build elegant, scalable PHP applications with the world's most popular PHP framework. From SaaS platforms and REST APIs to eCommerce backends and enterprise CMS — our engineers deliver Laravel solutions that are a joy to work with and built for growth.",
    skills: ["Laravel 11 & PHP 8.3", "Eloquent ORM & Database Design", "Livewire & Filament Admin", "REST API & API Resources", "Laravel Horizon & Queues", "PHPUnit & Pest Testing"],
    subSkills: [
      { icon: "laravel", title: "Laravel Application Development", desc: "Full-featured Laravel applications with Eloquent relationships, service providers, repository patterns, observer events, Laravel Sanctum auth, and clean MVC architecture." },
      { icon: "lightning", title: "Livewire & Inertia.js", desc: "Reactive Laravel UIs with Livewire components and Alpine.js, or full-stack SPA experiences with Inertia.js connecting Laravel backends to React or Vue frontends." },
      { icon: "tools", title: "Filament Admin Panels", desc: "Rapid internal tool development with FilamentPHP — custom resources, relation managers, widgets, and multi-tenancy configuration for enterprise admin dashboards." },
      { icon: "broadcast", title: "REST API Development", desc: "Laravel API resources, API versioning, Sanctum/Passport token auth, rate limiting, request validation, OpenAPI documentation, and comprehensive Postman test collections." },
      { icon: "clock", title: "Queues, Jobs & Scheduling", desc: "Laravel Horizon queue management, Redis job dispatching, scheduled artisan commands, broadcast events with Laravel Echo/Pusher, and background process monitoring." },
      { icon: "flask", title: "PHPUnit & Pest Testing", desc: "Feature tests, unit tests, database factories, and RefreshDatabase traits — Pest PHP for expressive test syntax with code coverage enforced in GitHub Actions CI." },
    ],
    tech: ["Laravel 11", "PHP 8.3", "MySQL", "Redis", "Livewire", "Filament", "Inertia.js", "Laravel Horizon", "PHPUnit", "Pest", "Docker", "AWS"],
    whyHire: [
      { title: "Laravel 11 & Modern PHP", desc: "We write Laravel with PHP 8.3 features — readonly classes, enums, fibers, and strict typing. Clean, expressive, and optimized for the modern PHP ecosystem." },
      { title: "SaaS Architecture Specialists", desc: "Multi-tenancy, subscription billing with Laravel Cashier/Stripe, feature flags, and user role management — we've built the Laravel SaaS playbook dozens of times." },
      { title: "Full Artisan Command Suite", desc: "Custom Artisan commands for data migrations, scheduled maintenance, and DevOps automation — your Laravel app has a rich CLI toolset from day one." },
    ],
    process: stdProcess,
    models: stdModels,
  },

  "software-developers": {
    title: "Hire Software Developers",
    heroDesc: "Our software developers design and build custom enterprise software — SaaS platforms, ERPs, CRMs, desktop applications, and complex backend systems. Cross-stack expertise, clean architecture, and production-proven engineering practices on every engagement.",
    skills: ["Full-Stack Web & Desktop", "SaaS & Enterprise Architecture", "API-First Design", "Database Engineering", "DevOps & CI/CD", "Security & Compliance"],
    subSkills: [
      { icon: "desktop", title: "Custom Software Development", desc: "Bespoke applications perfectly fitted to your workflows — from requirement analysis and architecture design to development, QA, deployment, and long-term maintenance." },
      { icon: "cloud", title: "SaaS Platform Development", desc: "Multi-tenant SaaS with usage-based billing, self-service onboarding, feature flags, usage analytics, and horizontal scaling infrastructure that grows with your customer base." },
      { icon: "factory", title: "ERP & CRM Development", desc: "Custom ERP and CRM systems tailored to your industry processes — replacing rigid off-the-shelf software with flexible solutions that actually match how your business operates." },
      { icon: "link", title: "System Integration & APIs", desc: "REST and GraphQL APIs, webhook systems, ETL pipelines, and third-party integrations connecting your software ecosystem — Salesforce, SAP, QuickBooks, Stripe, and more." },
      { icon: "refresh", title: "Legacy Modernization", desc: "Strangler fig pattern migration from legacy monoliths to cloud-native microservices — incremental, risk-free modernization with zero business disruption or data loss." },
      { icon: "flask", title: "QA & Test Automation", desc: "Automated test suites at every layer — unit, integration, E2E, and load testing — with quality gates enforced in CI pipelines for every pull request and deployment." },
    ],
    tech: ["Java", "Python", "Node.js", "React", "PostgreSQL", "Docker", "Kubernetes", "Terraform", "Redis", "AWS", "TypeScript", "Kafka"],
    whyHire: [
      { title: "Domain-Agnostic Expertise", desc: "Our software developers have shipped in fintech, healthtech, logistics, manufacturing, and education — bringing cross-industry best practices to every engagement." },
      { title: "Architecture-First Approach", desc: "We design the system before writing code. Architecture review, database schema approval, and API contract definition happen before the first sprint begins." },
      { title: "Long-Term Partnership", desc: "We build software as if we'll maintain it forever — because many clients have been with us for 5+ years. Clean code, complete docs, and knowledge transfer are non-negotiable." },
    ],
    process: stdProcess,
    models: stdModels,
  },

  "blockchain-developers": {
    title: "Hire Blockchain Developers",
    heroDesc: "Our blockchain developers build production-grade smart contracts, DeFi protocols, NFT platforms, and Web3 dApps with security-first engineering. Zero security incidents across all deployments, 100% audit pass rate, expertise across Ethereum, Solana, Polygon, and 12+ other chains.",
    skills: ["Solidity & Rust Smart Contracts", "DeFi Protocol Architecture", "NFT & ERC Standards", "Web3.js & ethers.js", "Security Auditing", "Layer 2 Solutions (Arbitrum, Base)"],
    subSkills: [
      { icon: "scroll", title: "Smart Contract Development", desc: "Gas-optimized Solidity and Rust smart contracts with 100% branch coverage, formal verification, OpenZeppelin proxy upgrade patterns, and multi-sig security architecture." },
      { icon: "bank", title: "DeFi Protocol Development", desc: "AMMs, lending markets, yield aggregators, and liquid staking protocols — architected with battle-tested patterns from Uniswap, Aave, and Compound as reference implementations." },
      { icon: "palette", title: "NFT Platform Development", desc: "ERC-721A gas-optimized NFT contracts, lazy minting, creator royalties (EIP-2981), on-chain metadata, marketplace smart contracts, and full Web3 frontend integration." },
      { icon: "exchange", title: "DeFi Exchange Development", desc: "Decentralized exchange (DEX) development with order book or AMM mechanisms, LP token management, governance tokens, and cross-chain bridge integration." },
      { icon: "globe", title: "Web3 dApp Development", desc: "End-to-end React/Next.js dApp development with wagmi, viem, WalletConnect v2, RainbowKit wallet UI, and The Graph subgraphs for on-chain data indexing." },
      { icon: "lock", title: "Smart Contract Security Auditing", desc: "Manual and automated security audits using Slither, Mythril, and Foundry invariant testing — all critical and high severity findings resolved before mainnet deployment." },
    ],
    tech: ["Solidity", "Rust", "Ethereum", "Solana", "Polygon", "Arbitrum", "Hardhat", "Foundry", "ethers.js", "wagmi", "The Graph", "IPFS"],
    whyHire: [
      { title: "Zero Security Incidents", desc: "100% of our smart contracts have passed security audits with zero critical findings in production. We treat blockchain security as non-negotiable — because it is." },
      { title: "Multi-Chain Expertise", desc: "Ethereum, Solana, Polygon, Arbitrum, Base, BNB Chain, Avalanche — we write smart contracts optimized for each chain's constraints and fee structure." },
      { title: "DeFi Protocol Veterans", desc: "Our blockchain team has shipped protocols with hundreds of millions in TVL. We understand tokenomics, on-chain governance, liquidity bootstrapping, and protocol economics." },
    ],
    process: ["Protocol Design & Tokenomics", "Smart Contract Development", "Internal Security Review", "Third-Party Audit", "Testnet Launch & Bug Bounty", "Mainnet Deployment"],
    models: stdModels,
  },

  "remote-developers": {
    title: "Hire Remote Developers",
    heroDesc: "Access world-class remote engineers who seamlessly integrate into your team regardless of timezone. MershilTech's remote developers are experts in async collaboration, proactive communication, and self-managed productivity — delivering the same quality as an in-office team, globally.",
    skills: ["Async-First Communication", "GitHub & Project Management Tools", "Time-Zone Flexible Scheduling", "Self-Managed Productivity", "Full-Stack Technical Expertise", "Daily Standup Culture"],
    subSkills: [
      { icon: "world", title: "Full-Stack Remote Development", desc: "Senior engineers who work independently, manage their own tasks, proactively flag blockers, and deliver consistently — with daily async updates and weekly video standups." },
      { icon: "handshake", title: "Agile Remote Collaboration", desc: "Jira/Linear sprint management, GitHub pull request workflows, Figma design handoff, Notion documentation, and Slack async communication — your full remote toolkit covered." },
      { icon: "halfclock", title: "Timezone Flexible Engagement", desc: "Engineers available in UTC-8 to UTC+8 timezones — with 4-hour daily overlap guaranteed for synchronous collaboration, code reviews, and stakeholder meetings." },
      { icon: "lock", title: "Security-First Remote Work", desc: "VPN usage, encrypted communications, NDA agreements, IP assignment, and data residency compliance — all remote work follows enterprise security standards." },
      { icon: "chart", title: "Transparent Progress Tracking", desc: "Daily GitHub commits, Jira velocity tracking, weekly demo sessions, and monthly engineering reviews — complete visibility into what your remote team is building." },
      { icon: "lightning", title: "Rapid Onboarding", desc: "Our remote developers follow a structured 5-day onboarding playbook — environment setup, codebase orientation, team introductions, and first PR merged within the first week." },
    ],
    tech: ["Any Stack", "GitHub / GitLab", "Jira / Linear / Notion", "Figma", "Slack / Teams", "Zoom", "AWS / GCP / Azure", "Docker", "CI/CD Pipelines"],
    whyHire: [
      { title: "Remote-Native Culture", desc: "We've operated 100% remotely since day one — our processes, tools, and communication norms are built for distributed teams, not adapted from an office model." },
      { title: "4-Hour Overlap Guaranteed", desc: "Every remote developer provides at least 4 hours of daily timezone overlap with your core team — enabling real collaboration, not just async file exchanges." },
      { title: "Proven Remote Track Record", desc: "500+ engineers, 70+ countries served, 1100+ projects delivered 100% remotely — with the same quality, accountability, and communication as an in-house team." },
    ],
    process: stdProcess,
    models: stdModels,
  },

  "offshore-developers": {
    title: "Hire Offshore Developers",
    heroDesc: "MershilTech provides world-class offshore development teams at 60–70% of the cost of equivalent onshore talent — without compromising on quality, communication, or transparency. Access the global top 3% of engineering talent on flexible, risk-free engagement models.",
    skills: ["Full-Stack Web & Mobile", "Cloud & DevOps Engineering", "Offshore Team Management", "Agile & Scrum Methodology", "IP Protection & NDA Compliance", "Quality Assurance"],
    subSkills: [
      { icon: "rocket", title: "Dedicated Offshore Teams", desc: "Fully dedicated development teams that work exclusively on your project — your processes, your tools, your culture — just without the overhead of local hiring and retention." },
      { icon: "money", title: "Cost-Effective Development", desc: "60–70% cost savings vs. onshore US/UK/AU rates — without hidden costs, benefits overhead, office space, recruitment fees, or HR management complexity." },
      { icon: "clock", title: "Follow-the-Sun Development", desc: "Offshore teams in complementary timezones can extend your development hours to 16+ per day — critical bug fixes happening while your onshore team sleeps." },
      { icon: "lock", title: "IP Protection & Compliance", desc: "All offshore work is covered by robust NDAs, IP assignment agreements, data residency compliance (GDPR, CCPA), and enterprise security protocols before any work begins." },
      { icon: "clipboard", title: "Transparent Project Management", desc: "Daily GitHub commits, public Jira boards, weekly video standup recordings, and monthly executive reviews — complete transparency into every hour billed." },
      { icon: "trending", title: "Scale On Demand", desc: "Scale your offshore team from 1 to 50 developers within weeks — no recruitment timelines, no notice periods, no restructuring costs. Pure flexibility for project-driven organizations." },
    ],
    tech: ["React", "Node.js", "Python", "Java", "PHP", "Flutter", "React Native", "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB"],
    whyHire: [
      { title: "60-70% Cost Savings", desc: "Comparable engineering quality at a fraction of US, UK, or Australian rates — allowing you to build more product, hire more specialists, or extend your runway further." },
      { title: "Elite Talent Pool", desc: "Our offshore engineers are the top 3% of applicants — senior engineers who have worked at leading product companies and can operate with minimal management overhead." },
      { title: "Risk-Free Trial Period", desc: "Start with a 2-week paid pilot. If you're not completely satisfied with the output, communication, and cultural fit — we replace the team member at zero additional cost." },
    ],
    process: stdProcess,
    models: stdModels,
  },

  "mean-stack-developers": {
    title: "Hire MEAN Stack Developers",
    heroDesc: "Our MEAN stack developers build end-to-end JavaScript applications with MongoDB, Express.js, Angular, and Node.js — a single language across the full stack. Rapid development, consistent data structures, and a unified team for your entire web application.",
    skills: ["MongoDB & Mongoose", "Express.js & Node.js", "Angular 17+ & TypeScript", "REST & GraphQL APIs", "Redux/NgRx State Management", "Docker & AWS Deployment"],
    subSkills: [
      { icon: "box", title: "MongoDB & Data Modeling", desc: "MongoDB schema design with Mongoose, aggregation pipeline optimization, Atlas Search full-text indexing, change streams for real-time features, and multi-region Atlas cluster setup." },
      { icon: "rocket", title: "Express & NestJS APIs", desc: "RESTful and GraphQL APIs with Express.js middleware chains or structured NestJS modules — JWT auth, rate limiting, request validation, and OpenAPI Swagger documentation." },
      { icon: "angular", title: "Angular Frontend Development", desc: "Enterprise Angular SPAs with lazy-loaded modules, NgRx state management, RxJS reactive streams, Angular Material UI, and Angular Universal SSR for SEO-critical routes." },
      { icon: "lightning", title: "Node.js Real-Time Features", desc: "Socket.io WebSocket integration for real-time notifications, live chat, collaborative editing, and streaming data — built on top of your Express or NestJS MEAN stack." },
      { icon: "keylock", title: "Full-Stack Auth & Security", desc: "Passport.js strategies, JWT access/refresh token rotation, role-based access control, OWASP-compliant input handling, and helmet.js security headers across the full stack." },
      { icon: "cloud", title: "MEAN Stack DevOps", desc: "Dockerized MEAN applications deployed on AWS ECS, EKS, or EC2 — with MongoDB Atlas for managed database, PM2 process management, and NGINX reverse proxy configuration." },
    ],
    tech: ["MongoDB", "Express.js", "Angular 17+", "Node.js", "TypeScript", "NgRx", "Socket.io", "Docker", "AWS", "Redis", "Mongoose", "Jest"],
    whyHire: [
      { title: "True Full-Stack in One Language", desc: "JavaScript/TypeScript across every layer means shared models, shared validation logic, and developers who own the entire feature — from database query to Angular component." },
      { title: "JSON-Native Architecture", desc: "MongoDB's document model and Angular's JSON service integration create a natural data flow — no impedance mismatch, no ORM complexity, just clean JSON all the way down." },
      { title: "Rapid Prototyping Speed", desc: "MEAN stack's uniformity means features can be prototyped and validated extremely quickly — ideal for startups proving product-market fit before investing in more complex architectures." },
    ],
    process: stdProcess,
    models: stdModels,
  },

  "salesforce-developers": {
    title: "Hire Salesforce Developers",
    heroDesc: "Avail a FREE consultation with MershilTech's certified Salesforce experts. As a Salesforce Summit-tier partner, we help startups and enterprises maximize their Salesforce CRM investment with custom Sales Cloud, Service Cloud, Marketing Cloud, Einstein Analytics, Pardot, CPQ, and Commerce Cloud solutions — built by Salesforce-certified developers with 10+ years of experience.",
    skills: ["Salesforce Customer 360", "Sales, Service & Marketing Cloud", "Apex, LWC & Lightning Flow", "AppExchange Development", "Salesforce Einstein Analytics", "Pardot, CPQ & Commerce Cloud"],
    subSkills: [
      { icon: "salesforce", title: "Salesforce CRM Implementation", desc: "End-to-end Salesforce Customer 360 implementation — Sales Cloud, Service Cloud, and Marketing Cloud configured and customized around your unique sales and service workflows, not the other way around." },
      { icon: "code", title: "Apex & Lightning Development", desc: "Custom Apex classes, triggers, Lightning Web Components (LWC), Aura components, and Lightning Flow automations that extend Salesforce beyond declarative limits and deliver pixel-perfect UX." },
      { icon: "link", title: "Salesforce Integrations", desc: "Bi-directional integrations with ERPs (SAP, NetSuite), payment gateways, telephony (CTI), marketing automation, and any third-party system using REST/SOAP APIs, Mulesoft, Informatica, or Jitterbit." },
      { icon: "chart", title: "Einstein Analytics & AI", desc: "Salesforce Einstein predictions, Tableau CRM dashboards, lead scoring models, next-best-action recommendations, and AI-powered customer insights integrated directly into your Salesforce UI." },
      { icon: "cloud", title: "AppExchange Development", desc: "Build and publish managed packages on the Salesforce AppExchange — architecture, security review (SFDC SecReview), multi-tenant design, and the go-to-market support you need to launch a commercial app." },
      { icon: "gear", title: "Lightning Migration & Optimization", desc: "Classic-to-Lightning migration with Lightning Readiness audits, component modernization, and performance optimization so your Salesforce org runs faster, cleaner, and ready for the next decade." },
    ],
    tech: ["Apex", "Lightning Web Components", "Salesforce Flow", "Sales Cloud", "Service Cloud", "Marketing Cloud", "Pardot", "Einstein Analytics", "Mulesoft", "Informatica Cloud", "Jitterbit", "CPQ"],
    whyHire: [
      { title: "Salesforce Summit Partner Certified", desc: "MershilTech is a Salesforce Summit-tier partner with a team of certified Administrators, Platform Developers (PD1, PD2), Application Architects, and System Architects — the highest recognition Salesforce awards to consulting partners." },
      { title: "Two Decades of CRM Expertise", desc: "15+ years implementing Salesforce across FinTech, Healthcare, Retail, and B2B SaaS — with deep industry playbooks that accelerate implementation and avoid the common pitfalls." },
      { title: "ISO 27001 Secure Delivery", desc: "ISO 27001 certified delivery practices with 24/7 consultant availability, signed NDAs before every engagement, and strict access controls on client Salesforce orgs and data." },
    ],
    process: ["Free Discovery Workshop", "Solution Design & Roadmap", "Implementation & Configuration", "Customization & Apex Dev", "User Training & Go-Live", "Managed Support & Optimization"],
    models: stdModels,
  },

  "cybersecurity-experts": {
    title: "Hire Cybersecurity Experts",
    heroDesc: "Protect your business with MershilTech's certified cybersecurity experts — OSCP, CEH, CISSP, and AWS Security Specialists who defend enterprises against modern threats 24/7. From penetration testing and SOC 2 compliance to managed SOC and incident response, our security engineers plug into your team in 48 hours and strengthen your posture from day one.",
    skills: ["Penetration Testing (OSCP, CEH)", "SIEM & SOAR (Splunk, Sentinel)", "Cloud Security (AWS, Azure, GCP)", "Compliance (SOC 2, ISO 27001, HIPAA)", "Application Security (SAST/DAST)", "Incident Response & Forensics"],
    subSkills: [
      { icon: "lock", title: "Penetration Testing", desc: "Black-box and white-box pen-tests on web apps, mobile apps, APIs, and cloud infrastructure. CVSS-scored vulnerabilities, exploitation proof-of-concept, and remediation playbooks your engineering team can actually act on." },
      { icon: "security", title: "Compliance Engineering", desc: "SOC 2 Type II, ISO 27001, HIPAA, GDPR, and PCI-DSS programs — gap analysis, control design, evidence automation, and auditor-readiness support that gets you certified in months, not years." },
      { icon: "eye", title: "SOC Analyst & Threat Hunter", desc: "24/7 SIEM monitoring with Splunk, Microsoft Sentinel, or Elastic. Proactive threat hunting, IOC enrichment, incident triage, and a 4-minute average alert-to-response time across client environments." },
      { icon: "cloud", title: "Cloud Security Engineer", desc: "AWS, Azure, and GCP hardening — IAM least-privilege design, network segmentation, KMS key management, CSPM tooling (Prisma Cloud, Wiz), Kubernetes security, and infrastructure-as-code policy enforcement." },
      { icon: "code", title: "Application Security Engineer", desc: "Shift-left AppSec — SAST (SonarQube, Semgrep), DAST (Burp, OWASP ZAP), SCA (Snyk), threat modeling, secure code review, and developer training that reduces vulnerabilities in production by 70%+." },
      { icon: "search", title: "Incident Response Specialist", desc: "Retainer-based IR — breach containment, forensic analysis, chain-of-custody evidence handling, regulatory breach reporting, and post-incident hardening so the same attack never happens twice." },
    ],
    tech: ["Splunk", "Microsoft Sentinel", "CrowdStrike", "Burp Suite", "Metasploit", "Kali Linux", "Nessus", "AWS Security Hub", "Prisma Cloud", "Snyk", "HashiCorp Vault", "Okta"],
    whyHire: [
      { title: "Certified & Battle-Tested", desc: "Every engineer holds at least one of OSCP, CEH, CISSP, CISM, CCSP, or AWS Security Specialist — backed by years of real-world incident response and red-team experience." },
      { title: "Offensive & Defensive Mindset", desc: "Our engineers think like attackers and defenders. That dual perspective is why our penetration tests find vulnerabilities automated scanners miss — and why our defenses hold up against real threats." },
      { title: "Zero Breaches on Our Watch", desc: "500+ security audits completed, 0 breaches in monitored client systems. Our managed SOC, paired with continuous threat hunting, stops attacks before they reach your customers." },
    ],
    process: ["Risk Assessment", "Security Architecture Review", "Hardening & Testing", "SIEM & Monitoring Setup", "24/7 SOC Operations", "Continuous Improvement"],
    models: stdModels,
  },
};

export const getHireDeveloperData = (slug) => {
  if (hireDeveloperData[slug]) return hireDeveloperData[slug];

  return {
    title: "Hire Developers",
    heroDesc: "MershilTech connects you with rigorously vetted senior developers ready to join your team within 48 hours. All engineers pass a 5-stage screening — only the top 3% make it through.",
    skills: ["Full-Stack Development", "System Architecture", "API Development", "Cloud & DevOps", "Testing & QA", "Agile Methodology"],
    subSkills: [
      { icon: "laptop", title: "Custom Development", desc: "End-to-end development with clean architecture, scalable databases, and enterprise-grade security." },
      { icon: "build", title: "System Architecture", desc: "Design scalable, resilient architectures handling growth from 100 to 10 million users." },
      { icon: "link", title: "API Development", desc: "REST and GraphQL APIs with proper versioning, error handling, and comprehensive documentation." },
      { icon: "cloud", title: "Cloud & DevOps", desc: "CI/CD pipelines, containerized deployments, and monitoring dashboards in AWS, Azure, or GCP." },
      { icon: "flask", title: "Testing & QA", desc: "Comprehensive unit, integration, and E2E test suites with quality gates on every PR." },
      { icon: "keylock", title: "Security Best Practices", desc: "OWASP compliance, authentication patterns, and security code reviews on every pull request." },
    ],
    tech: ["React", "Node.js", "Python", "PostgreSQL", "AWS", "Docker"],
    whyHire: [
      { title: "Top 3% of Applicants", desc: "Our 5-stage vetting process screens for technical skill, problem-solving, communication quality, and cultural alignment." },
      { title: "Production-Ready Immediately", desc: "Engineers hit the ground running — familiar with Agile, GitHub workflows, code reviews, and your preferred communication tools." },
      { title: "Risk-Free Trial", desc: "Start with a 1-week paid trial. If unsatisfied with output and communication, we replace them free of charge." },
    ],
    process: stdProcess,
    models: stdModels,
  };
};
