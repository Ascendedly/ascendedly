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
    title: "Fix what blocks growth",
    copy: "Every sprint removes a real blocker: search visibility, customer acquisition cost, site speed, or AI reliability. Workshops alone are not the deliverable.",
  },
  {
    icon: Workflow,
    title: "Clear docs over tribal knowledge",
    copy: "Contracts, data models, and runbooks travel with the work so your systems stay understandable when people change.",
  },
  {
    icon: BookOpenCheck,
    title: "Measure what money cares about",
    copy: "SEO, growth, and product report on pipeline, retention, and cost to serve. Dashboards exist to help you make better decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Security from day one",
    copy: "Limited access, audit trails, and clean handoff of credentials are part of the first release, not a later apology.",
  },
  {
    icon: FileWarning,
    title: "Honest about scope",
    copy: "If the work needs two quarters, we will not pretend it fits in six weeks just to win a contract.",
  },
  {
    icon: Handshake,
    title: "Leave you stronger",
    copy: "Docs, access keys, test sets, and admin rights are part of done. We are not designed to keep you dependent forever.",
  },
];

export function AboutPrinciples() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">
            What we stand for
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-5xl">
            How we work when results have to be real
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
