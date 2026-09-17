"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Briefcase,
  FolderKanban,
  Globe2,
  Trophy,
  type LucideIcon,
} from "lucide-react";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  display?: string;
  label: string;
  detail: string;
  icon: LucideIcon;
};

const stats: Stat[] = [
  {
    icon: FolderKanban,
    value: 100,
    suffix: "+",
    label: "Projects delivered",
    detail: "SEO, software, growth, and AI projects delivered from start to finish.",
  },
  {
    icon: Briefcase,
    value: 70,
    suffix: "+",
    label: "Clients partnered",
    detail: "B2B companies across SaaS, logistics, fintech, and professional services.",
  },
  {
    icon: Globe2,
    value: 12,
    suffix: "+",
    label: "Countries served",
    detail: "Remote teams supporting clients across North America, Europe, and Asia-Pacific.",
  },
  {
    icon: Trophy,
    value: 98,
    suffix: "%",
    label: "Client retention",
    detail: "Clients stay because senior people stay on the work after the project starts.",
  },
];

function AnimatedStat({
  value,
  suffix = "",
  prefix = "",
  display,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  display?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 90, damping: 18 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (!ref.current) return;
      if (display) {
        ref.current.textContent = display;
        return;
      }
      ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
    });
    return unsubscribe;
  }, [spring, prefix, suffix, display]);

  return (
    <span
      ref={ref}
      className={`tabular-nums bg-gradient-to-r from-slate-950 via-indigo-700 to-slate-950 bg-clip-text text-transparent ${className ?? ""}`}
    >
      {display ?? `${prefix}0${suffix}`}
    </span>
  );
}

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
            Stats
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl">
            Why companies choose Ascendedly
          </h2>
          <p className="mt-3 text-base text-slate-600 md:text-lg">
            Delivery numbers you can measure, not agency stories.
          </p>
        </div>

        <dl className="mt-12 grid gap-0 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group relative border-b border-slate-200 p-7 last:border-b-0 sm:odd:border-r sm:[&:nth-child(3)]:border-b-0 lg:border-b-0 lg:border-r lg:p-8 lg:last:border-r-0"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-50 to-indigo-50 text-indigo-700 ring-1 ring-indigo-100 transition-transform duration-300 group-hover:-translate-y-0.5">
                <item.icon className="h-5 w-5" aria-hidden />
              </div>
              <dt className="mt-5 text-5xl font-semibold tracking-tight md:text-6xl">
                <AnimatedStat
                  value={item.value}
                  suffix={item.suffix}
                  prefix={item.prefix}
                  display={item.display}
                />
              </dt>
              <dd className="mt-3">
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
