"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import type { Project } from "@/data/projectsData";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProjectHero({ project }: { project: Project }) {
  const slides = project.gallery.length ? project.gallery : [project.image];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [project.slug]);

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [slides.length, project.slug]);

  const goPrev = () => setIndex((current) => (current - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((current) => (current + 1) % slides.length);

  const active = slides[index] ?? project.image;

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
                <Link href="#project-gallery">
                  View project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-lg px-7">
                <Link href="#book-service">Book your service</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            id="project-gallery"
            initial={{ opacity: 0, x: 28, y: 12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.14, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-lg scroll-mt-28 lg:max-w-none"
          >
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-[#5098F8]/25 via-[#6068F8]/20 to-[#9020F8]/25 blur-2xl"
            />

            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-white bg-slate-100 shadow-[0_40px_80px_-48px_rgba(79,70,229,0.45)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${project.slug}-${active.src}-${index}`}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.src}
                    alt={active.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 90vw, 42vw"
                    className="object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>

              {slides.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-slate-800 shadow-sm transition hover:bg-white"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-slate-800 shadow-sm transition hover:bg-white"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
                    {slides.map((slide, slideIndex) => (
                      <button
                        key={`${slide.src}-${slideIndex}`}
                        type="button"
                        aria-label={`Show image ${slideIndex + 1}`}
                        onClick={() => setIndex(slideIndex)}
                        className={cn(
                          "h-2 rounded-full transition",
                          slideIndex === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                        )}
                      />
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
