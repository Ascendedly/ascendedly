"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { projectOutcomes } from "@/data/projectsData";
import { media } from "@/data/media";

function AnimatedMetric({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function ProjectsOutcomes() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <Image
        src={media.abstractBrandFlowRibbons.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#5098F8]/20 via-transparent to-[#9020F8]/25" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Outcomes
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Results you can show your leadership team
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-200">
            Measured in analytics and CRM, not empty dashboards.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 border-t border-white/15 pt-10 md:grid-cols-3 md:gap-10">
          {projectOutcomes.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <p className="bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
                <AnimatedMetric
                  value={item.metricValue}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  decimals={"decimals" in item ? item.decimals : 0}
                />
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                {item.label}
              </p>
              <p className="mt-2 text-sm text-slate-300">{item.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
