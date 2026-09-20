"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { media } from "@/data/media";

export function BrandIntro() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_0%_40%,rgba(14,165,233,0.07),transparent_55%),radial-gradient(ellipse_45%_50%_at_100%_20%,rgba(67,56,202,0.08),transparent_50%)]"
      />

      <div className="container relative py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[320px] md:max-w-[380px]">
              {/* Single logo square — clean brand gradient */}
              <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-400 via-indigo-600 to-fuchsia-500 shadow-[0_30px_70px_-36px_rgba(79,70,229,0.45)]">
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/15"
                />

                {/* Soft white light sweep only */}
                <motion.div
                  aria-hidden
                  className="absolute -left-1/3 top-0 h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={reduceMotion ? undefined : { x: ["0%", "280%"] }}
                  transition={
                    reduceMotion
                      ? undefined
                      : { duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2.2 }
                  }
                />

                <div
                  aria-hidden
                  className="absolute inset-0 ring-1 ring-inset ring-white/20"
                />

                {/* Animated logo */}
                <div className="relative z-[1] flex h-full w-full items-center justify-center p-10 md:p-14">
                  <motion.div
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            y: [0, -8, 0],
                            scale: [1, 1.03, 1],
                          }
                    }
                    transition={
                      reduceMotion
                        ? undefined
                        : { duration: 5, repeat: Infinity, ease: "easeInOut" }
                    }
                    className="w-full max-w-[240px] md:max-w-[280px]"
                  >
                    <Image
                      src={media.brandLogo.src}
                      alt={media.brandLogo.alt}
                      width={320}
                      height={90}
                      className="h-auto w-full object-contain brightness-0 invert"
                      priority
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="max-w-xl text-center lg:max-w-none lg:text-left"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">
              What Ascendedly does
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
              We help companies grow with search, software, and AI.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
              <p>
                Ascendedly is a technology and growth partner. We plan, build, and improve the
                digital systems your business runs on, from websites and apps to SEO, social, and AI
                tools.
              </p>
              <p>
                You work with one team instead of many vendors. That means clearer communication,
                faster delivery, and results you can track.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button asChild size="lg" className="rounded-xl">
                <Link href="#services">
                  Explore our services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl">
                <Link href="/contact-us">Talk to us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
