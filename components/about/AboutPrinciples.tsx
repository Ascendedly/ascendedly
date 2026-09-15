"use client";

import { motion } from "framer-motion";
import {
  BookOpenCheck,
  FileWarning,
  Gauge,
  Handshake,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const principles: {
  title: string;
  copy: string;
  icon: LucideIcon;
}[] = [
  {
    icon: Gauge,
    title: "Ship the constraint",
    copy: "Every sprint removes a paid bottleneck: indexation, CAC, latency, or hallucination risk. Workshops are not the deliverable.",
  },
  {
    icon: Workflow,
    title: "Interfaces over folklore",
    copy: "Contracts, schemas, and runbooks travel with the work so systems remain understandable after a principal rotates.",
  },
  {
    icon: BookOpenCheck,
    title: "Measure like finance",
    copy: "Search, growth, and product report in pipeline, retention, and cost-to-serve. Dashboards exist to change decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Security from day one",
    copy: "Least privilege, audit trails, and clean offboarding are part of the first release, not a phase-two apology.",
  },
  {
    icon: FileWarning,
    title: "Radical scope honesty",
    copy: "If the calculator says two quarters, we will not compress it into six weeks to win a statement of work.",
  },
  {
    icon: Handshake,
    title: "Leave you stronger",
    copy: "Documentation, tokens, evaluation sets, and admin access are part of done. We are not a forever dependency by design.",
  },
];

export function AboutPrinciples() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">
            Principles
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-5xl">
            How we behave when the demo cannot lie
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {principles.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="border-t border-slate-200 pt-6"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-50 to-indigo-50 text-indigo-700">
                  <item.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
                  {item.copy}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
