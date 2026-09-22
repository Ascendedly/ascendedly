"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

import type { Project } from "@/data/projectsData";
import { Button } from "@/components/ui/button";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#f7f8fb]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_0%_0%,rgba(80,152,248,0.16),transparent_55%),radial-gradient(ellipse_45%_45%_at_100%_10%,rgba(144,32,248,0.1),transparent_50%)]"
      />

      <div className="container relative py-16 md:py-24 lg:py-28">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500"
        >
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/projects" className="hover:text-slate-900">
            Projects
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-slate-900">{project.category}</span>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600"
            >
              {project.category} · {project.client}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 }}
              className="mt-5 text-4xl font-semibold leading-[1.12] tracking-tight text-slate-950 md:text-5xl"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg"
            >
              {project.summary}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mt-5 text-lg font-semibold text-indigo-700"
            >
              {project.outcome}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button asChild size="lg" className="rounded-lg px-7">
                <Link href="/contact-us">
                  Start a similar project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-lg px-7">
                <Link href="/projects">All projects</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28, y: 12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.14, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-[#5098F8]/25 via-[#6068F8]/20 to-[#9020F8]/25 blur-2xl"
            />
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-white shadow-[0_40px_80px_-48px_rgba(79,70,229,0.45)]">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
