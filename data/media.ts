/**
 * Central media registry: every content image has one semantic path + alt text.
 * Decorative backgrounds use empty alt (correct for a11y) and decorative: true.
 */
export type MediaAsset = {
  src: string;
  alt: string;
  decorative?: boolean;
};

export const media = {
  brandMark: {
    src: "/brand/mark.png",
    alt: "Ascendedly logo mark",
  },
  brandLogo: {
    src: "/brand/logo.png",
    alt: "Ascendedly wordmark logo",
  },

  modernTechOfficeSkyline: {
    src: "/images/modern-tech-office-skyline.jpg",
    alt: "Modern Ascendedly tech office with analytics workstations overlooking a city skyline",
  },
  teamCollaborationWorkspace: {
    src: "/images/team-collaboration-workspace.jpg",
    alt: "Ascendedly team collaborating on laptops around a glass table in a bright open office",
  },
  abstractBrandFlowRibbons: {
    src: "/images/abstract-brand-flow-ribbons.jpg",
    alt: "Abstract cyan, indigo, and magenta flowing ribbons in a bright minimalist architectural space",
  },
  officeReceptionHarborView: {
    src: "/images/office-reception-harbor-view.jpg",
    alt: "Ascendedly office reception lounge with cyan and purple LED accents overlooking a harbor city",
  },
  ascendedlyClientPrototypeReview: {
    src: "/images/ascendedly-client-prototype-review.webp",
    alt: "Two Ascendedly consultants presenting a website and mobile app prototype to a client in a meeting room",
  },
  projectsHeroDashboardReview: {
    src: "/images/projects-hero-dashboard-review.webp",
    alt: "Ascendedly team reviewing a live SaaS analytics dashboard on a large monitor in a modern city office",
  },

  mayaEllisonPortrait: {
    src: "/images/leadership/maya-ellison.jpg",
    alt: "Portrait of Maya Ellison, Founder and Chief Executive of Ascendedly",
  },
  rafaelOkonkwoPortrait: {
    src: "/images/leadership/rafael-okonkwo.jpg",
    alt: "Portrait of Rafael Okonkwo, Chief Technology Officer of Ascendedly",
  },
  priyaNandakumarPortrait: {
    src: "/images/leadership/priya-nandakumar.jpg",
    alt: "Portrait of Dr. Priya Nandakumar, Head of AI Systems at Ascendedly",
  },


  seoAnalyticsDashboard: {
    src: "/images/services/seo-analytics-dashboard.webp",
    alt: "SEO domain overview dashboard showing AI visibility, organic traffic, keywords, and backlink metrics",
  },
  seoDomainOverview: {
    src: "/images/services/seo-domain-overview.webp",
    alt: "SEO domain overview board with AI search visibility and organic research charts",
  },
  smmAdsAnalyticsDashboard: {
    src: "/images/services/smm-ads-analytics-dashboard.webp",
    alt: "Social media ads analytics dashboard with reach, impressions, CTR, ROAS, and campaign performance charts",
  },
  smmSocialPerformance: {
    src: "/images/services/smm-social-performance.webp",
    alt: "Social performance overview dashboard with campaign metrics and platform split",
  },
  webPlatformsAndCodeWorkstation: {
    src: "/images/services/web-platforms-and-code-workstation.webp",
    alt: "Dual-monitor web development desk with website platform logos and a dark code editor",
  },
  webPlatformsWorkstation: {
    src: "/images/services/web-platforms-workstation.webp",
    alt: "Website platforms board beside a code editor on a dual-monitor desk",
  },
  genAiPlatformsAndN8nWorkflow: {
    src: "/images/services/gen-ai-platforms-and-n8n-workflow.webp",
    alt: "Gen AI web apps board beside an n8n-style automation workflow for chatbots and customer support",
  },
  genAiWebApps: {
    src: "/images/services/gen-ai-web-apps.webp",
    alt: "Gen AI web apps and customer support workflow on dual monitors",
  },
  mobileAppTechnologiesDevices: {
    src: "/images/services/mobile-app-technologies-devices.webp",
    alt: "Mobile devices showing app technology platforms and a mobile development coding environment",
  },
  mobileAppTechnologies: {
    src: "/images/services/mobile-app-technologies.webp",
    alt: "Mobile app technologies board with devices and a development environment",
  },
} as const satisfies Record<string, MediaAsset>;

export type MediaKey = keyof typeof media;
