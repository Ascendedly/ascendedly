"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { ServiceData } from "@/data/servicesData";
import {
  getProjectsByCategory,
  serviceSlugToCategory,
  type Project,
} from "@/data/projectsData";
import { cn } from "@/lib/utils";

export function ServiceRelatedProjects({ service }: { service: ServiceData }) {
  const category = serviceSlugToCategory(service.slug);
  const related = category ? getProjectsByCategory(category) : [];
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  if (!related.length) return null;

  return (
    <section className="border-b border-slate-200 bg-[#f7f8fb] py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
            Related work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            {service.shortName} projects
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Selected engagements delivered under this capability.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 lg:gap-5">
          {related.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              isActive={hoveredSlug === project.slug}
              onActivate={() => setHoveredSlug(project.slug)}
              onDeactivate={() => setHoveredSlug(null)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 transition hover:text-indigo-900"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isActive,
  onActivate,
  onDeactivate,
}: {
  project: Project;
  index: number;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.28 }}
      className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc((100%-2.5rem)/3)]"
    >
      <Link
        href={`/projects/${project.slug}`}
        className={cn(
          "group relative block aspect-square overflow-hidden rounded-[1.5rem] outline-none",
          "focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
          isActive && "ring-2 ring-indigo-400 ring-offset-2"
        )}
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
        onFocus={onActivate}
        onBlur={onDeactivate}
        onClick={(event) => {
          const canHover =
            typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;
          if (!canHover && !isActive) {
            event.preventDefault();
            onActivate();
          }
        }}
      >
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition duration-700 ease-out group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 z-[3] rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-indigo-700 shadow-sm">
          {project.category}
        </span>

        <div
          className={cn(
            "absolute inset-x-0 bottom-0 z-[1] bg-gradient-to-t from-slate-950/90 via-slate-950/55 to-transparent px-5 pb-5 pt-16 transition duration-300 md:px-6 md:pb-6",
            "group-hover:pointer-events-none group-hover:opacity-0 group-focus-visible:opacity-0",
            isActive && "pointer-events-none opacity-0"
          )}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
            {project.client}
          </p>
          <p className="mt-1.5 line-clamp-2 text-lg font-semibold tracking-tight text-white md:text-xl">
            {project.title}
          </p>
        </div>

        <div
          className={cn(
            "absolute inset-0 z-[2] flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 md:p-6",
            "opacity-0 transition duration-500 ease-out",
            "group-hover:opacity-100 group-focus-visible:opacity-100",
            isActive && "opacity-100"
          )}
        >
          <div
            className={cn(
              "translate-y-5 opacity-0 transition duration-500 ease-out",
              "group-hover:translate-y-0 group-hover:opacity-100",
              "group-focus-visible:translate-y-0 group-focus-visible:opacity-100",
              isActive && "translate-y-0 opacity-100"
            )}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
              {project.client}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-white md:text-2xl">
              {project.title}
            </h3>
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/80">
              {project.summary}
            </p>
            <p className="mt-3 text-sm font-semibold text-cyan-200">{project.outcome}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
              View project
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
