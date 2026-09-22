import type { Metadata } from "next";

import { CtaBand } from "@/components/home/CtaBand";
import { ServicesBreakdown } from "@/components/services/ServicesBreakdown";
import { ServicesCalculator } from "@/components/services/ServicesCalculator";
import { ServicesFaq } from "@/components/services/ServicesFaq";
import { ServicesHero } from "@/components/services/ServicesHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Services | SEO, Web, Apps, SMM & Gen AI | Ascendedly",
  description:
    "Explore Ascendedly services: SEO, social media marketing, web development, generative AI, and app development — one accountable team for growth and product systems.",
  alternates: { canonical: "/services" },
  keywords: [
    "Ascendedly services",
    "SEO agency",
    "web development",
    "app development",
    "generative AI",
    "social media marketing",
    ...siteConfig.keywords,
  ],
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesBreakdown />
      <ServicesCalculator />
      <ServicesFaq />
      <CtaBand />
    </>
  );
}
