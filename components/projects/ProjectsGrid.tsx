"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projectCategories, projects, type Project } from "@/data/projectsData";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");

  const filtered =
    active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <section id="work" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Built across growth, product, and AI
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Filter by capability to see how we approach each kind of engagement.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {projectCategories.map((category) => {
            const isActive = category === active;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "border-transparent bg-gradient-to-r from-[#5098F8] via-[#6068F8] to-[#9020F8] text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:text-indigo-700"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-14 rounded-[1.75rem] border border-indigo-100 bg-gradient-to-br from-slate-50 via-white to-indigo-50/60 px-6 py-10 text-center md:px-10">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
            Have a build in mind?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
            Tell us the bottleneck — acquisition, product, delivery, or AI — and we will map a clear
            first sprint.
          </p>
          <Link
            href="/contact-us"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 transition hover:text-indigo-900"
          >
            Book a discovery call
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.28 }}
      className="group h-full overflow-hidden rounded-[1.5rem] border border-slate-200/90 bg-white shadow-[0_24px_60px_-42px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_28px_70px_-40px_rgba(79,70,229,0.35)]"
    >
      <Link href={`/projects/${project.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-indigo-700 shadow-sm">
            {project.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
            {project.client}
          </p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-950 md:text-xl">
            {project.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{project.summary}</p>
          <p className="mt-4 text-sm font-semibold text-indigo-700">{project.outcome}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600"
              >
                {item}
              </span>
            ))}
          </div>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700">
            View project
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
