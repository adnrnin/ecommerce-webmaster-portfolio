import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "aura-luxury-apparel",
    title: "Aura Luxury Apparel",
    client: "Aura Haute Couture Ltd.",
    category: "Headless E-commerce & Mobile CRO",
    tagline: "Ultra-fast headless fashion storefront with sub-second page loads and zero cart-drop.",
    summary:
      "Engineered an enterprise-grade headless architecture separating Shopify's backend catalog from a high-performance Next.js frontend, resulting in an unprecedented 42% lift in mobile conversions.",
    heroMetric: {
      value: "+42%",
      label: "Mobile Conversion Rate",
    },
    metrics: [
      { label: "Mobile Conversion", value: "+42%", subtext: "Post-launch 90 days" },
      { label: "Time To First Byte (TTFB)", value: "0.8s", subtext: "Global average" },
      { label: "Cart Drop-Off", value: "0.0%", subtext: "Zero cart-drop architecture" },
      { label: "Core Web Vitals", value: "100/100", subtext: "LCP < 1.2s, CLS 0" },
    ],
    techStack: [
      "Next.js 14 (App Router)",
      "Shopify Storefront API",
      "Tailwind CSS",
      "Stripe Checkout",
      "GraphQL Codegen",
      "Vercel Edge Network",
    ],
    challenge:
      "The client suffered from sluggish monolithic Liquid templates (4.8s initial render on mobile), high cart abandonment, and unresponsive faceted filtering during peak flash sale campaigns.",
    solution:
      "Migrated the catalog to headless GraphQL with edge-cached Product Detail Pages (PDP), client-side optimistic cart mutations, preloaded media previews, and a zero-friction Stripe Checkout integration.",
    architectureHighlights: [
      "Edge-cached PDP static regeneration with stale-while-revalidate headers",
      "Optimistic UI cart drawer updating in <16ms before server round-trips",
      "GraphQL fragments query batching reducing API payloads by 68%",
      "Custom responsive picture elements generating AVIF/WebP on the fly",
    ],
    keyAchievements: [
      "Eliminated cart drop-off via background sync and persistent local state",
      "Achieved sub-second TTFB across North America, Europe, and Asia-Pacific",
      "Supported 45,000 concurrent shoppers during Black Friday without downtime",
    ],
    mockupType: "aura",
    liveUrl: "https://aura-luxury.demo-store.dev",
    githubUrl: "https://github.com/webmaster-pro/aura-headless-storefront",
    featured: true,
  },
  {
    id: "apex-gear-marketplace",
    title: "Apex Gear Marketplace",
    client: "Apex Tactical & Outdoor Co.",
    category: "Multi-Vendor B2B & B2C Marketplace",
    tagline: "Scalable multi-vendor commerce engine with automated split payouts and live inventory sync.",
    summary:
      "Architected a unified B2B/B2C marketplace handling over 120,000 monthly transactions with MedusaJS, automated Stripe Connect split-payouts, and tiered wholesale pricing tiers.",
    heroMetric: {
      value: "120K+",
      label: "Monthly Orders Scaled",
    },
    metrics: [
      { label: "Monthly Orders", value: "120K+", subtext: "Processed concurrently" },
      { label: "Automated Payouts", value: "100%", subtext: "Stripe Connect Custom" },
      { label: "Vendor Onboarding", value: "< 5 min", subtext: "Automated KYC & payouts" },
      { label: "DB Query Time", value: "< 18ms", subtext: "Postgres + Redis cache" },
    ],
    techStack: [
      "Next.js",
      "MedusaJS Engine",
      "PostgreSQL",
      "Redis Cluster",
      "Stripe Connect",
      "Docker & Kubernetes",
    ],
    challenge:
      "Managing complex vendor payouts manually caused payment delays and bookkeeping errors. In addition, high-velocity SKU inventory conflicts frequently led to overselling across multi-channel B2B vendors.",
    solution:
      "Built a custom headless marketplace using MedusaJS coupled with Stripe Connect. Developed a real-time distributed inventory lock via Redis and automated settlement schedules.",
    architectureHighlights: [
      "Redis atomic mutex locks preventing multi-vendor inventory race conditions",
      "Automated split-tender ledger calculating platform commissions & payouts in real-time",
      "Role-based vendor portals with isolated inventory feeds and order fulfillment dispatch",
      "Dual-mode checkout supporting credit lines, net-30 invoicing, and instant credit card clearing",
    ],
    keyAchievements: [
      "Handled 120,000+ monthly orders with 99.99% ledger accuracy",
      "Cut supplier onboarding time from 3 days to under 5 minutes with automated KYC flows",
      "Zero overselling incidents across 85,000 live active inventory SKUs",
    ],
    mockupType: "apex",
    liveUrl: "https://apexgear.demo-market.dev",
    githubUrl: "https://github.com/webmaster-pro/apex-multivendor-engine",
    featured: true,
  },
  {
    id: "nova-botanics-dtc",
    title: "Nova Botanics DTC",
    client: "Nova Botanical Health",
    category: "High-Volume Subscription Platform",
    tagline: "Tailored recurring commerce platform boosting retention through seamless subscriber self-service.",
    summary:
      "Engineered an automated DTC subscription ecosystem driving a 28% increase in customer lifetime retention through 1-click checkouts, smart rebill prediction, and self-serve frequency management.",
    heroMetric: {
      value: "+28%",
      label: "Customer Retention Lift",
    },
    metrics: [
      { label: "Subscriber Retention", value: "+28%", subtext: "Year-over-year lift" },
      { label: "Churn Reduction", value: "-34%", subtext: "Via flexible skip/swap" },
      { label: "1-Click Checkout", value: "< 2.1s", subtext: "From landing to receipt" },
      { label: "Webhook Reliability", value: "99.999%", subtext: "Zero failed subscription renewals" },
    ],
    techStack: [
      "React / Next.js",
      "Node.js Microservices",
      "Stripe Billing",
      "Webhooks Worker",
      "SendGrid Dynamic Templates",
      "Tailwind CSS",
    ],
    challenge:
      "High customer churn caused by rigid subscription rules, lack of self-serve skip/swap tools, and failed billing retries that silently dropped subscribers without automated recovery.",
    solution:
      "Architected a bespoke subscription portal on top of Stripe Billing, featuring custom dunning retry logic, friction-free 1-click upsells, and predictive notification flows.",
    architectureHighlights: [
      "Smart dunning retry engine recouping 62% of initially failed credit card rebills",
      "Self-serve subscriber hub allowing 1-click product swaps, skips, and cadence changes",
      "Zero-friction headless checkout prefilling customer tokens for returning members",
      "Idempotent webhook pipeline processing recurring billing events with zero duplicates",
    ],
    keyAchievements: [
      "Increased 6-month subscriber cohort retention by +28%",
      "Recouped $340,000+ in annual recurring revenue through automated smart dunning",
      "Reduced customer support subscription tickets by 53%",
    ],
    mockupType: "nova",
    liveUrl: "https://novabotanics.demo-wellness.dev",
    githubUrl: "https://github.com/webmaster-pro/nova-dtc-subscriptions",
    featured: true,
  },
  {
    id: "quantum-pay-fraud-shield",
    title: "Quantum Pay & Fraud Shield",
    client: "Quantum Commerce Infrastructure",
    category: "Custom Global Checkout & Fraud Defense",
    tagline: "Enterprise checkout infrastructure delivering 99.98% clean transactions and cutting false declines.",
    summary:
      "Constructed a high-throughput global checkout routing engine with custom Stripe Radar rules, dynamic 3D Secure 2.0 fallback, and multi-currency instant settlement across 40+ countries.",
    heroMetric: {
      value: "99.98%",
      label: "Clean Transaction Rate",
    },
    metrics: [
      { label: "Clean Transactions", value: "99.98%", subtext: "Zero chargeback threshold" },
      { label: "False Decline Reduction", value: "-65%", subtext: "Intelligent Radar tuning" },
      { label: "Processing Latency", value: "< 95ms", subtext: "Cloudflare Edge Workers" },
      { label: "Supported Currencies", value: "42", subtext: "Real-time FX settlement" },
    ],
    techStack: [
      "Next.js App Router",
      "TypeScript",
      "Stripe Radar API",
      "Cloudflare Workers",
      "Redis Edge KV",
      "Tailwind CSS",
    ],
    challenge:
      "Aggressive generic fraud filters were falsely declining legitimate high-ticket international orders ($800+), costing the merchant hundreds of thousands in lost revenue and alienated customers.",
    solution:
      "Designed a smart scoring pipeline using Cloudflare Workers at the edge and custom Stripe Radar risk rules, applying step-up 3D Secure 2.0 verification only when behavioral flags require it.",
    architectureHighlights: [
      "Sub-100ms edge fraud pre-scoring evaluating 20+ device and IP signals",
      "Dynamic 3DS 2.0 challenge triggering solely for anomalous risk scores (>65)",
      "Multi-currency dynamic pricing engine with real-time foreign exchange margin locking",
      "Resilient fallback payment rails preventing downtime during primary gateway hiccups",
    ],
    keyAchievements: [
      "Reduced false decline rate by 65%, rescuing $1.2M in annual cross-border sales",
      "Maintained chargeback ratio below 0.02% (well under Visa/Mastercard thresholds)",
      "Processed transactions in 42 currencies with zero reconciliation discrepancy",
    ],
    mockupType: "quantum",
    liveUrl: "https://quantumpay.demo-fintech.dev",
    githubUrl: "https://github.com/webmaster-pro/quantum-pay-engine",
    featured: true,
  },
];
