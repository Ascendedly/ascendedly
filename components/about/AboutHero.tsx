"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { media } from "@/data/media";

const blobMorph = [
  "48% 52% 42% 58% / 42% 38% 62% 58%",
  "42% 58% 52% 48% / 48% 42% 58% 52%",
  "55% 45% 38% 62% / 40% 55% 45% 60%",
  "45% 55% 58% 42% / 55% 40% 60% 45%",
  "48% 52% 42% 58% / 42% 38% 62% 58%",
];

const crescentMorph = [
  "58% 42% 48% 52% / 48% 42% 58% 52%",
  "52% 48% 55% 45% / 42% 55% 45% 58%",
  "48% 52% 42% 58% / 55% 40% 60% 45%",
  "58% 42% 48% 52% / 48% 42% 58% 52%",
];

export function AboutHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#f7f8fb]">
      <div className="container relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="relative z-10 max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400"
          >
            About Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="mt-5 text-4xl font-semibold leading-[1.12] tracking-tight text-slate-950 md:text-5xl lg:text-[3.35rem]"
          >
            Helping businesses{" "}
            <span className="relative inline-block px-1">
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-10 h-[0.55em] rounded-sm bg-cyan-200/70 md:bottom-1.5"
              />
              succeed
            </span>{" "}
            with systems that actually work.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg"
          >
            SEO, software, growth marketing, and AI from one team that owns the outcome.
            Built for companies that need live results, not presentation decks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-8"
          >
            <Button asChild size="lg" className="rounded-lg px-7">
              <Link href="/contact-us">Talk with our team</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 24 }}
          animate={
            reduceMotion
              ? { opacity: 1, scale: 1, x: 0 }
              : {
                  opacity: 1,
                  scale: [1, 1.02, 1],
                  x: [0, 6, 0],
                  y: [0, -10, 0],
                }
          }
          transition={
            reduceMotion
              ? { delay: 0.14, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
              : {
                  opacity: { delay: 0.14, duration: 0.7 },
                  scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                }
          }
          className="relative mx-auto w-full max-w-[540px] lg:max-w-none"
        >
          <motion.div
            aria-hidden
            className="absolute -left-[6%] top-[8%] h-[78%] w-[72%] bg-slate-900"
            style={{ rotate: -8 }}
            animate={
              reduceMotion
                ? undefined
                : {
                    borderRadius: crescentMorph,
                    rotate: [-8, -5, -10, -8],
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    borderRadius: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 14, repeat: Infinity, ease: "easeInOut" },
                  }
            }
          />

          <motion.div
            aria-hidden
            className="absolute -left-[2%] bottom-[12%] z-[1] h-[38%] w-[42%]"
            style={{
              borderRadius: "50% 50% 45% 55% / 55% 45% 55% 45%",
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.55) 1.4px, transparent 1.5px)",
              backgroundSize: "12px 12px",
            }}
            animate={reduceMotion ? undefined : { opacity: [0.7, 1, 0.7], y: [0, -6, 0] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }
          />

          <motion.div
            className="relative z-[2] aspect-[5/4] w-[92%] overflow-hidden shadow-[0_30px_60px_-28px_rgba(15,23,42,0.45)] sm:ml-auto"
            animate={reduceMotion ? undefined : { borderRadius: blobMorph }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 14, repeat: Infinity, ease: "easeInOut" }
            }
            style={{
              borderRadius: blobMorph[0],
            }}
          >
            <motion.div
              className="absolute inset-[-12%]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.08, 1.03, 1],
                      x: ["0%", "3%", "-2%", "0%"],
                      y: ["0%", "-2%", "2%", "0%"],
                    }
              }
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 18, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <Image
                src={media.teamCollaborationWorkspace.src}
                alt={media.teamCollaborationWorkspace.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 48vw"
                className="object-cover object-[center_30%]"
              />
            </motion.div>
          </motion.div>

          <motion.div
            aria-hidden
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -10, 0], opacity: [0.4, 0.7, 0.4] }
            }
            transition={
              reduceMotion
                ? undefined
                : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
            }
            className="absolute -right-1 top-[18%] z-[3] flex flex-col gap-2.5"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-px origin-right -rotate-[28deg] bg-indigo-300/80"
                style={{ width: `${2.2 - i * 0.25}rem` }}
              />
            ))}
          </motion.div>

          <motion.div
            aria-hidden
            animate={
              reduceMotion
                ? undefined
                : { y: [0, 12, 0], scale: [1, 1.12, 1], opacity: [0.55, 0.9, 0.55] }
            }
            transition={
              reduceMotion
                ? undefined
                : { duration: 6.5, repeat: Infinity, ease: "easeInOut" }
            }
            className="absolute -bottom-2 right-[8%] z-[3] h-16 w-16 rounded-full border border-cyan-300/50 bg-cyan-200/20"
          />
          <motion.div
            aria-hidden
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -8, 0], x: [0, 4, 0], scale: [1, 1.15, 1] }
            }
            transition={
              reduceMotion
                ? undefined
                : { duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
            }
            className="absolute left-[8%] top-[4%] z-[3] h-8 w-8 rounded-full bg-indigo-200/35"
          />
        </motion.div>
      </div>
    </section>
  );
}
