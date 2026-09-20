"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TypewriterWord } from "@/components/home/TypewriterWord";
import { HeroContactForm } from "@/components/home/HeroContactForm";
import { media } from "@/data/media";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={media.modernTechOfficeSkyline.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/88 to-cyan-50/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(217,70,239,0.12),transparent_28%),radial-gradient(circle_at_12%_72%,rgba(34,211,238,0.14),transparent_30%)]" />
      </div>

      <div className="container relative grid min-h-[88vh] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-3 py-1.5 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400/70" />
              <span className="relative h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            Growth and engineering partner for modern companies
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.55 }}
            className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600"
          >
            Ascendedly
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65 }}
            className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.15] text-slate-950 [text-wrap:wrap] md:text-6xl lg:text-[4.35rem]"
          >
            <span className="block">The system behind</span>
            <span className="mt-1 inline-flex flex-wrap items-baseline gap-x-3">
              <span>your</span>
              <TypewriterWord
                words={["search", "software", "growth", "AI", "pipeline", "retention"]}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            SEO, software, and AI from one team that owns the outcome. Built for companies that
            need systems that grow revenue, not presentation decks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg">
              <Link href="/projects">
                Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about-us">About Us</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28, y: 12 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.22, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-indigo-400/15 to-fuchsia-400/20 blur-2xl"
          />
          <HeroContactForm />
        </motion.div>
      </div>
    </section>
  );
}
