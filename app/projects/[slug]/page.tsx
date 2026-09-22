import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CtaBand } from "@/components/home/CtaBand";
import { ProjectDetails } from "@/components/projects/ProjectDetails";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { RelatedProjects } from "@/components/projects/RelatedProjects";
import {
  getProjectBySlug,
  getRelatedProjects,
  projectSlugs,
} from "@/data/projectsData";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} | Ascendedly Projects`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    keywords: [project.category, project.client, ...project.stack, "Ascendedly project"],
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/projects/${project.slug}`,
      type: "article",
      images: [{ url: project.image.src, alt: project.image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.slug);

  return (
    <>
      <ProjectHero project={project} />
      <ProjectDetails project={project} />
      <RelatedProjects projects={related} />
      <CtaBand />
    </>
  );
}
