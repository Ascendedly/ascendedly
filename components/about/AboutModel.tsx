"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardList,
  Search,
  Target,
  ThumbsUp,
  type LucideIcon,
} from "lucide-react";

const steps: {
  num: string;
  day: string;
  title: string;
  copy: string;
  icon: LucideIcon;
}[] = [
  {
    num: "01",
    day: "Day 1",
    icon: Target,
    title: "Find the real problem",
    copy: "Sales pipeline, slow product delivery, retention, or AI risk. We start with the issue that most affects your results.",
  },
  {
    num: "02",
    day: "Day 2–3",
    icon: Search,
    title: "Review your systems",
    copy: "We score your tech, analytics, and competitors against business results, not empty dashboards.",
  },
  {
    num: "03",
    day: "Day 4",
    icon: ClipboardList,
    title: "Scope the plan",
    copy: "A clear work plan, budget range, and named owners before any long-term contract talk.",
  },
  {
    num: "04",
    day: "Day 5",
    icon: ThumbsUp,
    title: "Decide go / no-go",
    copy: "If Ascendedly is not the right partner, we say so. If we are, the project starts clean.",
  },
];

export function AboutModel() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_80%_10%,rgba(99,102,241,0.08),transparent_55%),radial-gradient(ellipse_45%_40%_at_10%_90%,rgba(34,211,238,0.08),transparent_50%)]"
      />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">
            How we work
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-5xl">
            We ship like a product team. We stay accountable like a partner.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            A five-day discovery process with the same pace as a strong product team, applied to
            SEO, software, and AI.
          </p>
        </div>

        {/* Desktop / tablet workflow rail */}
        <div className="relative mt-16 hidden md:block">
          <div
            aria-hidden
            className="absolute left-[12%] right-[12%] top-[2.75rem] h-px bg-gradient-to-r from-cyan-300 via-indigo-400 to-fuchsia-400"
          />

          <ol className="relative grid grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.li
                key={step.num}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-[1] flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-2xl bg-white shadow-[0_10px_30px_-12px_rgba(79,70,229,0.45)] ring-1 ring-indigo-100">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-50 to-indigo-50 text-indigo-700">
                    <step.icon className="h-5 w-5" aria-hidden />
                  </div>
                </div>

                {index < steps.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute left-[calc(50%+2.1rem)] top-[1.55rem] z-[1] hidden text-indigo-400 lg:inline-flex"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </span>
                ) : null}

                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-700">
                  {step.day}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-950 lg:text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-slate-600">
                  {step.copy}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Mobile vertical workflow */}
        <ol className="relative mt-12 space-y-0 md:hidden">
          <div
            aria-hidden
            className="absolute bottom-4 left-[1.35rem] top-4 w-px bg-gradient-to-b from-cyan-300 via-indigo-400 to-fuchsia-400"
          />
          {steps.map((step, index) => (
            <motion.li
              key={step.num}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="relative flex gap-5 pb-10 last:pb-0"
            >
              <div className="relative z-[1] flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-indigo-100">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-50 to-indigo-50 text-indigo-700">
                  <step.icon className="h-4 w-4" aria-hidden />
                </div>
              </div>
              <div className="min-w-0 pt-0.5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-700">
                  {step.day}
                </p>
                <h3 className="mt-1.5 text-lg font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.copy}</p>
              </div>
            </motion.li>
          ))}
        </ol>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-2xl text-center text-sm text-slate-500 md:mt-16"
        >
          At the end: a clear plan you can share with leadership, or an honest no before any
          contract is written.
        </motion.p>
      </div>
    </section>
  );
}
