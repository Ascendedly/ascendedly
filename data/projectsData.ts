import { media, type MediaAsset } from "@/data/media";

export type ProjectCategory = "SEO" | "SMM" | "Web" | "Gen AI" | "App";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  summary: string;
  outcome: string;
  stack: string[];
  image: MediaAsset;
  gallery: MediaAsset[];
  challenge: string;
  approach: string;
  results: string[];
  highlights: string[];
  timeline: string;
  services: string[];
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
    gallery: [
      media.seoDomainOverview,
      media.seoAnalyticsDashboard,
      media.projectsHeroDashboardReview,
    ],
    challenge:
      "Organic traffic had stalled. Category pages were slow, thin, and competing with paid media for the same buyers.",
    approach:
      "We fixed crawl and index issues, rebuilt content clusters around commercial intent, and improved Core Web Vitals so rankings and conversion moved together.",
    results: [
      "+240% organic reach in six months",
      "Faster category and product page loads",
      "Clearer search-to-revenue reporting for leadership",
    ],
    highlights: [
      "Technical audit and fix sprint",
      "Commercial content architecture",
      "Performance and analytics wiring",
    ],
    timeline: "16 weeks",
    services: ["SEO", "Web"],
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
    gallery: [
      media.smmSocialPerformance,
      media.smmAdsAnalyticsDashboard,
      media.teamCollaborationWorkspace,
    ],
    challenge:
      "Organic posts and paid ads told different stories. Sales could not use social as a real pipeline source.",
    approach:
      "We built one narrative system across LinkedIn and Meta, with creative testing, audience design, and CRM-matched conversion tracking.",
    results: [
      "4x qualified meetings from social",
      "Shared narrative sales could quote in discovery",
      "Creative velocity model with kill-or-scale rules",
    ],
    highlights: [
      "Executive brand + demand narrative",
      "Paid social architecture",
      "Pipeline-assisted measurement",
    ],
    timeline: "12 weeks",
    services: ["SMM"],
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
    gallery: [
      media.webPlatformsWorkstation,
      media.webPlatformsAndCodeWorkstation,
      media.ascendedlyClientPrototypeReview,
    ],
    challenge:
      "The legacy portal was slow, hard to change, and risky to release. Support tickets kept rising around basic account tasks.",
    approach:
      "We rebuilt the portal on a modern stack with a shared design system, cleaner auth flows, and CI/CD so releases stayed safe.",
    results: [
      "99.9% platform uptime after launch",
      "Faster task completion for customers",
      "Safer weekly release cadence",
    ],
    highlights: [
      "Platform rebuild",
      "Design system and UX",
      "Auth and delivery pipeline",
    ],
    timeline: "20 weeks",
    services: ["Web Development"],
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
    gallery: [
      media.genAiWebApps,
      media.genAiPlatformsAndN8nWorkflow,
      media.projectsHeroDashboardReview,
    ],
    challenge:
      "Support spent hours answering the same policy and product questions. Existing chatbots hallucinated and lacked safe controls.",
    approach:
      "We shipped a retrieval-backed copilot with source grounding, access controls, and workflow handoffs into the existing support stack.",
    results: [
      "38% fewer repetitive tickets",
      "Faster first responses on common issues",
      "Traceable answers with clear escalation paths",
    ],
    highlights: [
      "RAG knowledge layer",
      "Guardrails and audit trail",
      "Ops workflow automation",
    ],
    timeline: "14 weeks",
    services: ["Gen AI"],
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
    gallery: [
      media.mobileAppTechnologies,
      media.mobileAppTechnologiesDevices,
      media.ascendedlyClientPrototypeReview,
    ],
    challenge:
      "Field teams relied on calls and spreadsheets. Job status was delayed, and managers lacked a live view of work in progress.",
    approach:
      "We built a cross-platform mobile app with offline-friendly updates, push alerts, and APIs that synced cleanly with existing ops systems.",
    results: [
      "2.1x faster job completion reporting",
      "Fewer missed status updates in the field",
      "Live visibility for dispatch and managers",
    ],
    highlights: [
      "Cross-platform app delivery",
      "Offline sync and alerts",
      "Ops API integration",
    ],
    timeline: "18 weeks",
    services: ["App Development"],
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
    gallery: [
      media.smmSocialPerformance,
      media.smmAdsAnalyticsDashboard,
      media.officeReceptionHarborView,
    ],
    challenge:
      "Leadership had strong expertise, but social activity was inconsistent and did not support business development.",
    approach:
      "We built a founder-led narrative system, paired it with paid amplification, and aligned creative with the accounts sales cared about.",
    results: [
      "Steady inbound from target accounts",
      "Higher engagement on executive content",
      "Sales using posts as discovery proof",
    ],
    highlights: [
      "Founder brand system",
      "Paid amplification",
      "Account-focused creative",
    ],
    timeline: "10 weeks",
    services: ["SMM"],
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
    gallery: [
      media.ascendedlyClientPrototypeReview,
      media.webPlatformsWorkstation,
      media.seoDomainOverview,
    ],
    challenge:
      "The old site was slow, unclear, and hard to measure. Demo requests lagged behind product quality.",
    approach:
      "We rebuilt messaging, page structure, and performance, then wired analytics so the team could see which pages drove demos.",
    results: [
      "+61% demo request rate",
      "Faster page experience across key journeys",
      "Clearer conversion reporting",
    ],
    highlights: [
      "Messaging and UX rebuild",
      "SEO foundations",
      "CRO and analytics",
    ],
    timeline: "12 weeks",
    services: ["Web Development", "SEO"],
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
    gallery: [
      media.genAiWebApps,
      media.genAiPlatformsAndN8nWorkflow,
      media.teamCollaborationWorkspace,
    ],
    challenge:
      "Policies and playbooks lived across shared drives. New hires and ops leads spent too long hunting for the right answer.",
    approach:
      "We indexed approved knowledge into a private assistant with access control, citation-style answers, and a simple chat UI for daily use.",
    results: [
      "Hours saved every week across ops",
      "Faster onboarding answers",
      "Fewer conflicting policy interpretations",
    ],
    highlights: [
      "Private knowledge base",
      "Access-controlled retrieval",
      "Internal chat experience",
    ],
    timeline: "11 weeks",
    services: ["Gen AI"],
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

export const projectSlugs = projects.map((project) => project.slug);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = getProjectBySlug(slug);
  if (!current) return projects.slice(0, limit);

  const sameCategory = projects.filter(
    (project) => project.slug !== slug && project.category === current.category
  );
  const others = projects.filter(
    (project) => project.slug !== slug && project.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, limit);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((project) => project.category === category);
}

export function serviceSlugToCategory(slug: string): ProjectCategory | null {
  switch (slug) {
    case "seo":
      return "SEO";
    case "smm":
      return "SMM";
    case "web-development":
      return "Web";
    case "gen-ai":
      return "Gen AI";
    case "app-development":
      return "App";
    default:
      return null;
  }
}
