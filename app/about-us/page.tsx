import type { Metadata } from "next";

import { AboutHero } from "@/components/about/AboutHero";
import { AboutLeadership } from "@/components/about/AboutLeadership";
import { AboutModel } from "@/components/about/AboutModel";
import { AboutPrinciples } from "@/components/about/AboutPrinciples";
import { AboutProof } from "@/components/about/AboutProof";
import { AboutStory } from "@/components/about/AboutStory";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "About Ascendedly | Mission, Model & Leadership",
  description:
    "Ascendedly is a B2B technology and growth agency. Learn how we unite search, software, growth, and generative AI under one accountable delivery surface.",
  keywords: [
    "digital agency leadership",
    "enterprise software partner",
    "AI transformation firm",
    "B2B growth agency",
  ],
  alternates: { canonical: "/about-us" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutProof />
      <AboutModel />
      <AboutPrinciples />
      <AboutLeadership />
      <CtaBand />
    </>
  );
}
