"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Layers,
  Presentation,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

const proof: {
  value: string;
  title: string;
  detail: string;
  icon: LucideIcon;
}[] = [
  {
    icon: Layers,
    value: "5",
    title: "Practices, one pod",
    detail: "SEO, software, growth, apps, and Gen AI ship in the same operating cadence.",
  },
  {
    icon: CalendarDays,
    value: "5 days",
    title: "Paid discovery",
    detail: "Constraint named, stack scored, and a clear go or no-go before any retainer.",
  },
  {
    icon: UserCheck,
    value: "Named",
    title: "Principals on the work",
    detail: "Architecture and narrative stay with leadership after kickoff, not only the sales call.",
  },
  {
    icon: Presentation,
    value: "Board-ready",
    title: "Operating plans",
    detail: "Owners, investment range, and sprint outcomes you can brief without translation.",
  },
];

export function AboutProof() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50/80 py-16 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_10%_50%,rgba(34,211,238,0.08),transparent_55%),radial-gradient(ellipse_50%_70%_at_90%_40%,rgba(99,102,241,0.08),transparent_50%)]"
      />

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">
            Why operators choose Ascendedly
          </p>
          <p className="mt-3 text-base text-slate-600 md:text-lg">
            Concrete engagement signals, not agency folklore.
          </p>
        </div>

        <dl className="mt-12 grid gap-0 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group relative border-b border-slate-200 p-7 last:border-b-0 sm:odd:border-r sm:[&:nth-child(3)]:border-b-0 lg:border-b-0 lg:border-r lg:p-8 lg:last:border-r-0"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-50 to-indigo-50 text-indigo-700 ring-1 ring-indigo-100 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-sm">
                <item.icon className="h-5 w-5" aria-hidden />
              </div>
              <dt className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                {item.value}
              </dt>
              <dd className="mt-2">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
