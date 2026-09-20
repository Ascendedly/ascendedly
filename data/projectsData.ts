import { media } from "@/data/media";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: "SEO" | "SMM" | "Web" | "Gen AI" | "App";
  summary: string;
  outcome: string;
  stack: string[];
  image: (typeof media)[keyof typeof media];
};

export const projectCategories = ["All", "SEO", "SMM", "Web", "Gen AI", "App"] as const;

export const projects: Project[] = [
  {
    slug: "commerce-organic-growth",
    title: "Organic growth system for a commerce brand",
    client: "Retail growth company",
    category: "SEO",
    summary:
      "Rebuilt technical SEO, content clusters, and page speed so search became a reliable acquisition channel.",
    outcome: "+240% organic reach in 6 months",
    stack: ["Technical SEO", "Content systems", "Core Web Vitals", "Analytics"],
    image: media.seoAnalyticsDashboard,
  },
  {
    slug: "b2b-demand-social",
    title: "LinkedIn + Meta demand engine",
    client: "B2B SaaS",
    category: "SMM",
    summary:
      "Unified organic narrative and paid acquisition so social reported like a pipeline program, not a content calendar.",
    outcome: "4x qualified meetings",
    stack: ["LinkedIn Ads", "Meta Ads", "Creative velocity", "CRM tracking"],
    image: media.smmAdsAnalyticsDashboard,
  },
  {
    slug: "cloud-portal-rebuild",
    title: "Cloud customer portal rebuild",
    client: "Enterprise operations team",
    category: "Web",
    summary:
      "Replaced a fragile legacy portal with a modern web platform: faster loads, clearer UX, and safer releases.",
    outcome: "99.9% platform uptime",
    stack: ["Next.js", "Design system", "Auth", "CI/CD"],
    image: media.webPlatformsAndCodeWorkstation,
  },
  {
    slug: "support-ai-copilot",
    title: "AI support copilot with guarded answers",
    client: "Customer experience team",
    category: "Gen AI",
    summary:
      "Shipped a retrieval-backed assistant for support and internal ops with clear controls and measurable deflection.",
    outcome: "38% fewer repetitive tickets",
    stack: ["RAG", "Workflow automation", "n8n", "Guardrails"],
    image: media.genAiPlatformsAndN8nWorkflow,
  },
  {
    slug: "field-ops-mobile-app",
    title: "Field operations mobile app",
    client: "Services network",
    category: "App",
    summary:
      "Built a cross-platform app for scheduling, job status, and offline-friendly field updates.",
    outcome: "2.1x faster job completion reporting",
    stack: ["React Native", "Offline sync", "Push alerts", "API design"],
    image: media.mobileAppTechnologiesDevices,
  },
  {
    slug: "executive-brand-system",
    title: "Executive brand + paid social system",
    client: "Professional services firm",
    category: "SMM",
    summary:
      "Created a founder-led content and paid program that sales could quote in discovery calls.",
    outcome: "Steady inbound from target accounts",
    stack: ["Brand narrative", "Creative testing", "Audience design"],
    image: media.smmAdsAnalyticsDashboard,
  },
  {
    slug: "product-marketing-site",
    title: "Product marketing site rebuild",
    client: "Series A product company",
    category: "Web",
    summary:
      "Designed and engineered a conversion-focused site with clear messaging, fast pages, and analytics wiring.",
    outcome: "+61% demo request rate",
    stack: ["Next.js", "SEO foundations", "CRO", "Analytics"],
    image: media.ascendedlyClientPrototypeReview,
  },
  {
    slug: "internal-knowledge-bot",
    title: "Internal knowledge bot for ops",
    client: "Multi-location business",
    category: "Gen AI",
    summary:
      "Connected policies and playbooks into a private assistant so teams stop hunting through shared drives.",
    outcome: "Hours saved every week across ops",
    stack: ["Embeddings", "Access control", "Knowledge base", "Chat UI"],
    image: media.genAiPlatformsAndN8nWorkflow,
  },
];

export const projectOutcomes = [
  {
    metricValue: 240,
    prefix: "+",
    suffix: "%",
    label: "organic reach",
    context: "SEO programs plus faster page performance",
  },
  {
    metricValue: 99.9,
    prefix: "",
    suffix: "%",
    decimals: 1,
    label: "platform uptime",
    context: "Cloud portal rebuild",
  },
  {
    metricValue: 4,
    prefix: "",
    suffix: "x",
    label: "qualified meetings",
    context: "Social content plus paid ads",
  },
] as const;
