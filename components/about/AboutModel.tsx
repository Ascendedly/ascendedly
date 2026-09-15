"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Search,
  Target,
  ThumbsUp,
  type LucideIcon,
} from "lucide-react";

const steps: {
  num: string;
  title: string;
  copy: string;
  icon: LucideIcon;
}[] = [
  {
    num: "01",
    icon: Target,
    title: "Name the constraint",
    copy: "Pipeline, product velocity, retention, or AI risk. We start with the bottleneck that actually moves the P&L.",
  },
  {
    num: "02",
    icon: Search,
    title: "Audit systems & demand",
    copy: "Stack, analytics, and competitors scored against commercial outcomes, not vanity dashboards.",
  },
  {
    num: "03",
    icon: ClipboardList,
    title: "Scope the plan",
    copy: "Sprint board, investment range, and named owners before any long retainer conversation.",
  },
  {
    num: "04",
    icon: ThumbsUp,
    title: "Decide go / no-go",
    copy: "If Ascendedly is not the right partner, we say so. If we are, kickoff starts clean.",
  },
];

export function AboutModel() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">
            Operating model
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-5xl">
            Built like a product org. Accountable like a partner.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            The same product-shipping cadence modern software orgs use, applied to search,
            software, and AI transformation.
          </p>
        </div>

        <ol className="mt-14 grid gap-0 border-t border-slate-200 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.li
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="border-b border-slate-200 py-8 md:border-b-0 md:px-6 md:py-10 xl:border-r xl:px-8 xl:last:border-r-0 first:md:pl-0"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-50 to-indigo-50 text-indigo-700">
                <step.icon className="h-5 w-5" aria-hidden />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
                {step.num}
              </p>
              <h3 className="mt-3 whitespace-nowrap text-lg font-semibold text-slate-950 xl:text-xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{step.copy}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
