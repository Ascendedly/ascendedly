"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { media } from "@/data/media";

export function AboutStory() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">
            Our story
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-5xl">
            One commercial system. One pod. One P&L.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">
            <p>
              Most digital work still arrives as four vendors: SEO, social, engineering, and AI.
              Buyers do not live four stories. They live revenue, risk, and time.
            </p>
            <p>
              Ascendedly was built to close that gap. We staff hybrid pods so discovery, product,
              and growth move in the same operating cadence, with principals who stay on the work
              after kickoff.
            </p>
            <p>
              If we are not the right firm, discovery ends with a clear no. If we are, you leave
              with an operating plan you can brief to a board.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]">
            <Image
              src={media.ascendedlyClientPrototypeReview.src}
              alt={media.ascendedlyClientPrototypeReview.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
