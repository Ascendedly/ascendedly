import type { Metadata } from "next";

import { BrandIntro } from "@/components/home/BrandIntro";
import { CtaBand } from "@/components/home/CtaBand";
import { FaqSection } from "@/components/home/FaqSection";
import { HomeHero } from "@/components/home/HomeHero";
import { ServiceShowcase } from "@/components/home/ServiceShowcase";
import { Testimonials } from "@/components/home/Testimonials";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: "Ascendedly | Software, SEO & AI for Growing Companies",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  keywords: [...siteConfig.keywords],
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BrandIntro />
      <ServiceShowcase />
      <Testimonials />
      <FaqSection />
      <CtaBand />
    </>
  );
}
