import type { Metadata } from "next";

import { CtaBand } from "@/components/home/CtaBand";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsOutcomes } from "@/components/projects/ProjectsOutcomes";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects | Ascendedly Case Studies & Delivered Systems",
  description:
    "Explore Ascendedly projects across SEO, web platforms, mobile apps, social growth, and generative AI — real systems with measurable outcomes.",
  alternates: { canonical: "/projects" },
  keywords: [
    "Ascendedly projects",
    "case studies",
    "SEO results",
    "web development portfolio",
    "AI systems",
    "app development",
    ...siteConfig.keywords,
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsOutcomes />
      <CtaBand />
    </>
  );
}
