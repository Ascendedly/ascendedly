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
            One team. One plan. One set of results.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">
            <p>
              Most companies still hire four separate vendors for SEO, social, engineering, and AI.
              You do not need four separate stories. You need revenue, lower risk, and faster delivery.
            </p>
            <p>
              Ascendedly was built to close that gap. Our mixed teams keep discovery, product, and
              growth moving together, and senior people stay on the work after the project starts.
            </p>
            <p>
              If we are not the right fit, we say so early. If we are, you leave with a clear plan
              you can share with your leadership team.
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
