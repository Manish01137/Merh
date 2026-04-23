/**
 * Problem → Fit narratives for each audience.
 * Each entry powers a <ProblemFitSection> somewhere in the site.
 */

import {
  // pain icons
  TrendingUp, DollarSign, Users, Clock, AlertTriangle, Flame,
  ShieldAlert, EyeOff, FileWarning, Bug,
  Briefcase, Globe,
  // solution icons
  Rocket, Target, Zap, CheckCircle2, Sparkles, HeartHandshake,
  Shield, Lock, FileCheck, Siren,
  Layers, Activity,
} from "lucide-react";

export const startupProblemsFit = {
  eyebrow: "Built for Australian Startups",
  heading: (
    <>
      Scaling a Startup in Australia? <br className="hidden md:block" />
      <span className="text-blue-400">Here's Why Founders Choose MershilTech</span>
    </>
  ),
  subtitle:
    "Sydney-based startups tell us the same story: local engineering hires take 3+ months, cost 2-3× Southeast Asian rates, and runway disappears before a product even ships. Our Sydney HQ + offshore model is built for exactly this.",
  problems: [
    { icon: DollarSign,    title: "Local engineering is burning your runway",
      desc: "Senior devs in Sydney now cost $180-220k+. For a seed-stage startup, 2 engineers wipe out half the round before MVP." },
    { icon: Clock,         title: "Hiring cycles are killing momentum",
      desc: "Average 90-120 days to close a senior engineering hire in Australia. Your competitors ship two releases in that window." },
    { icon: Users,         title: "Talent pool is too shallow",
      desc: "Specialized roles (ML, DevOps, iOS, Solidity) have <50 candidates actively looking in all of AU. You're bidding against Atlassian and Canva." },
    { icon: AlertTriangle, title: "Freelancers leave you exposed",
      desc: "Missed deadlines, no IP assignment, ghosting, unpredictable quality. Enough cautionary tales to fill a LinkedIn feed." },
    { icon: Flame,         title: "Growth plateaus before Series A",
      desc: "Without a scalable engineering foundation, you hit technical debt walls exactly when investors want momentum charts going up-and-to-the-right." },
    { icon: TrendingUp,    title: "No one to own the tech roadmap",
      desc: "Founders end up writing code instead of selling. Best case: product ships late. Worst case: product ships broken." },
  ],
  solutions: [
    { icon: Rocket,         title: "Sydney-based engagement, offshore delivery",
      desc: "Your account lead and architect sit in our Chippendale office. Build team in our London + Mumbai hubs. AU contract, AU invoicing, AU timezone overlap." },
    { icon: Zap,            title: "Onboarded in 48 hours, not 12 weeks",
      desc: "Pre-vetted senior engineers ready to start. NDA signed same day, first standup within 48 hours of kickoff. Momentum from day one." },
    { icon: Target,         title: "MVP in 10-12 weeks, fixed scope",
      desc: "Investor-ready MVP for the cost of one local senior hire. 350+ startups shipped; we know exactly where founders waste time — and cut it." },
    { icon: HeartHandshake, title: "Startup-friendly commercial model",
      desc: "Up to 35% startup discount, deferred payment options, and equity-for-services arrangements for early-stage ventures we believe in." },
    { icon: Sparkles,       title: "Scale team up or down in 1 week",
      desc: "Start with 2 engineers for MVP. Scale to 8 when you raise. Scale back for runway extension. No long-term lock-in, no redundancy payouts." },
    { icon: CheckCircle2,   title: "Fractional CTO included",
      desc: "Senior engineering leadership with Series A experience, joining your pitch calls, investor diligence, and roadmap reviews — without the $400k salary." },
  ],
  cta: {
    label: "Book a Free Founder Call",
    to: "/contact",
    secondary: { label: "See Hiring Models", to: "/hire" },
  },
  impactStats: [
    { n: "350+", l: "Startups Launched" },
    { n: "$500M+", l: "Client Funding Raised" },
    { n: "10-12 wks", l: "Avg MVP Delivery" },
    { n: "35%", l: "Founder Discount" },
  ],
  featuredQuote: {
    text: "MershilTech took our napkin sketch and shipped a production-ready MVP in 11 weeks. Investors closed our pre-seed the week after launch. They're the technical co-founder we couldn't afford to hire.",
    name: "James Richardson",
    role: "Founder & CEO",
    company: "FinTech Startup (Sydney)",
    rating: 5,
    metric: { value: "$3.2M", label: "Pre-seed Raised" },
  },
};

export const offshoreTeamProblemsFit = {
  eyebrow: "For Australian Tech Firms & Scale-ups",
  heading: (
    <>
      Need to Scale Engineering <span className="text-blue-600">Without the Sydney Hiring Pain?</span>
    </>
  ),
  subtitle:
    "You have product-market fit, revenue, and a roadmap — but every quarter your local hiring pipeline delivers 2 offers out of 20 slots. Our offshore engineering teams, managed from Sydney, plug the gap with zero cultural friction.",
  problems: [
    { icon: Users,     title: "Can't find senior engineers locally",
      desc: "Atlassian, Canva, Afterpay, and Google ANZ vacuum up 80% of senior AU talent. You're pitching mid-level candidates for senior roles." },
    { icon: DollarSign,title: "Fully-loaded cost is destroying margin",
      desc: "Between salary, super, payroll tax, office, benefits — a $180k senior engineer costs you $260k+ per year. Hard to justify in a $15M ARR business." },
    { icon: Clock,     title: "Time-to-hire crushes roadmap velocity",
      desc: "Product managers plan 6 months ahead but can't staff the sprint that ships next month. Roadmap slips; board notices." },
    { icon: Briefcase, title: "Contractors aren't accountable enough",
      desc: "Offshore freelancers on Upwork/Toptal ship when they feel like it. No project manager, no escalation path, no IP protection." },
    { icon: Globe,     title: "Outsourcing abroad creates timezone chaos",
      desc: "US/India-direct engagements mean async-only communication, missed standups, and PM overhead that erases the cost savings." },
  ],
  solutions: [
    { icon: Briefcase,     title: "Sydney-managed offshore teams",
      desc: "Account lead, architect, and delivery manager based in Sydney. Your engineers work from our London and Mumbai hubs with 4+ hours daily AU timezone overlap." },
    { icon: Layers,        title: "Dedicated team, not project agency",
      desc: "Same engineers, your backlog, your Jira, your GitHub. It's your team — hosted by us — with 100% IP assignment and AU MSA coverage." },
    { icon: Activity,      title: "Full ownership, full transparency",
      desc: "Daily standups, sprint demos, GitHub contributions visible, weekly exec reports. You'll know exactly what was built yesterday and why." },
    { icon: Zap,           title: "48-hour ramp-up, 1-week ramp-down",
      desc: "Need a React Native dev next week? Done. Cut the iOS seat for Q3? Done. No redundancy, no lock-in, no ATO headache." },
    { icon: Shield,        title: "Enterprise-grade commercial terms",
      desc: "AU-registered entity, GST-invoiced, professional indemnity insurance, NDA + IP assignment on every engagement. Ready for your procurement team." },
  ],
  cta: {
    label: "Hire Developers",
    to: "/hire",
    secondary: { label: "Talk to Sydney Team", to: "/contact" },
  },
  theme: "light",
};

export const cybersecurityProblemsFit = {
  eyebrow: "Why AU Businesses Choose MershilTech Security",
  heading: (
    <>
      Cyber Threats Are Up 67% in Australia. <br className="hidden md:block" />
      <span className="text-blue-400">Is Your Business Actually Ready?</span>
    </>
  ),
  subtitle:
    "Essential Eight, CPS 234, Privacy Act reforms, and the Notifiable Data Breaches scheme have made security a board-level priority. Most Australian businesses still rely on bolt-on tooling and annual audits. We build continuous security programs that actually stop breaches.",
  problems: [
    { icon: ShieldAlert, title: "Compliance ≠ Security",
      desc: "Passing ISO 27001 or SOC 2 once doesn't stop a ransomware crew. 78% of breached companies were compliant at time of breach." },
    { icon: EyeOff,      title: "No 24/7 monitoring coverage",
      desc: "Most AU mid-market companies have no after-hours SOC. Breaches happen at 2am Sunday; by Monday the damage is done." },
    { icon: Bug,         title: "Annual pen-tests miss 70% of vulnerabilities",
      desc: "One pen-test per year = 364 days of new CVEs, new deployments, and new attack surface that nobody tests." },
    { icon: FileWarning, title: "Cyber insurance won't pay out",
      desc: "Insurers now demand proof of MFA, EDR, backups, and incident response plans. Fail to evidence any one — claim denied." },
    { icon: AlertTriangle,title: "Your team is stretched thin",
      desc: "Internal IT is covering DevOps, end-user support, AND security. Nobody has time for threat hunting or red-teaming." },
  ],
  solutions: [
    { icon: Siren,       title: "24/7 SOC from our global hubs",
      desc: "Certified analysts in 3 timezones monitoring your environment. Under 4-min average alert triage, with SOAR playbooks auto-containing common attacks in seconds." },
    { icon: Lock,        title: "Continuous pen-testing, not annual",
      desc: "Automated DAST/SAST on every commit + quarterly manual pen-tests by OSCP-certified testers. No blind spots between audits." },
    { icon: FileCheck,   title: "Essential Eight + SOC 2 + ISO 27001",
      desc: "End-to-end compliance programs mapped to Australian regulatory requirements. We handle evidence, auditor liaison, and ongoing monitoring." },
    { icon: Shield,      title: "Incident response retainer",
      desc: "1-hour response SLA 24/7, forensic team on standby, breach-notification support (OAIC 72hr rule), ransomware negotiation — all pre-contracted." },
    { icon: CheckCircle2,title: "Insurance-ready evidence",
      desc: "Pre-built evidence packages for your cyber insurer. MFA coverage, EDR status, backup verification, IR plan — everything claims adjusters ask for." },
  ],
  cta: {
    label: "Book Free Security Assessment",
    to: "/contact",
    secondary: { label: "See Security Services", to: "/cybersecurity" },
  },
};

export const salesforceProblemsFit = {
  eyebrow: "Why AU Enterprises Choose Us for Salesforce",
  heading: (
    <>
      Salesforce Projects Don't Have to Run <span className="text-blue-400">6 Months Over Budget</span>
    </>
  ),
  subtitle:
    "Half of Australian Salesforce implementations we see started as a 3-month rollout and stretched to 9. Custom Apex rot, rigid Flows, and disconnected integrations are the usual suspects. We build Salesforce like engineering: version-controlled, test-covered, and actually maintainable.",
  problems: [
    { icon: Clock,        title: "Delivery timelines double",
      desc: "Vague scope + rigid SIs + waterfall change requests = every milestone slips. Budget blowouts follow within weeks." },
    { icon: Bug,          title: "Custom Apex rot",
      desc: "Undocumented triggers, no test coverage, governor-limit hacks. Every new feature breaks something unpredictable in Production." },
    { icon: AlertTriangle,title: "Flows become unmaintainable",
      desc: "40-step Flows, manually edited in production, no version control, no rollback. One edit and the sales pipeline stops." },
    { icon: Users,        title: "Admins leave, knowledge walks",
      desc: "Institutional knowledge in one admin's head. They leave — suddenly nobody knows why that Process Builder exists or what it does." },
    { icon: Briefcase,    title: "Disconnected from the real stack",
      desc: "Salesforce siloed from your data warehouse, product app, and billing system. Sales reports live in one world, product metrics in another." },
  ],
  solutions: [
    { icon: Rocket,       title: "2-week sprint deliveries",
      desc: "Agile Salesforce delivery with weekly demos and fortnightly releases. You see progress in Prod every 2 weeks — no more 6-month dark tunnels." },
    { icon: Shield,       title: "Test-covered Apex",
      desc: "80%+ Apex test coverage on every PR, automated CI via Salesforce DX, no untested code deployed to Production. Ever." },
    { icon: Layers,       title: "Version-controlled Flows & metadata",
      desc: "SFDX + Git + sandbox seeding means every Flow, Process Builder, and LWC lives in source control. Rollbacks in minutes, not panic-stations." },
    { icon: Target,       title: "Enterprise integrations done right",
      desc: "MuleSoft, Workato, and direct API integrations to your DWH, NetSuite, Xero, and product stack. One source of truth, not five." },
    { icon: HeartHandshake, title: "Knowledge-transfer baked in",
      desc: "Full architecture docs, admin handover guides, video walkthroughs of every custom component. Your team doesn't depend on us to survive." },
  ],
  cta: {
    label: "Book Salesforce Strategy Call",
    to: "/contact",
    secondary: { label: "Explore Enterprise Services", to: "/services" },
  },
};
