"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { media } from "@/data/media";

export function ProjectsHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#f7f8fb]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_0%_0%,rgba(80,152,248,0.16),transparent_55%),radial-gradient(ellipse_45%_45%_at_100%_10%,rgba(144,32,248,0.1),transparent_50%)]"
      />

      <div className="container relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
        <div className="relative z-10 max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600"
          >
            Projects
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="mt-5 text-4xl font-semibold leading-[1.12] tracking-tight text-slate-950 md:text-5xl lg:text-[3.35rem]"
          >
            Work that ships — and{" "}
            <span className="relative inline-block px-1">
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-10 h-[0.55em] rounded-sm bg-cyan-200/70 md:bottom-1.5"
              />
              proves
            </span>{" "}
            itself in the numbers.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg"
          >
            SEO, platforms, apps, social growth, and AI systems built for companies that need
            outcomes they can show their leadership team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg" className="rounded-lg px-7">
              <Link href="#work">
                Browse the work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-lg px-7">
              <Link href="/contact-us">Start a project</Link>
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white shadow-[0_40px_80px_-48px_rgba(79,70,229,0.45)]">
            <Image
              src={media.ascendedlyClientPrototypeReview.src}
              alt={media.ascendedlyClientPrototypeReview.alt}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
