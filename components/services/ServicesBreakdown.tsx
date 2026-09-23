"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/data/servicesData";
import { cn } from "@/lib/utils";

export function ServicesBreakdown() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  return (
    <section
      id="service-breakdown"
      className="scroll-mt-24 border-b border-slate-200 bg-[#f7f8fb] py-20 md:py-28"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
            Service breakdown
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Five capabilities. Clear scope for each.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Explore SEO, social growth, web platforms, generative AI, and mobile apps — then open
            any service for inclusions and a planning estimate.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4 lg:gap-5">
          {services.map((service, index) => {
            const isActive = activeSlug === service.slug;

            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc((100%-2.5rem)/3)]"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={cn(
                    "group relative block aspect-square overflow-hidden rounded-[1.5rem] outline-none",
                    "focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
                    isActive && "ring-2 ring-indigo-400 ring-offset-2"
                  )}
                  onMouseEnter={() => setActiveSlug(service.slug)}
                  onMouseLeave={() => setActiveSlug(null)}
                  onFocus={() => setActiveSlug(service.slug)}
                  onBlur={() => setActiveSlug(null)}
                  onClick={(event) => {
                    const canHover =
                      typeof window !== "undefined" &&
                      window.matchMedia("(hover: hover)").matches;
                    if (!canHover && activeSlug !== service.slug) {
                      event.preventDefault();
                      setActiveSlug(service.slug);
                    }
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Default label — flush with image */}
                  <div
                    className={cn(
                      "absolute inset-x-0 bottom-0 z-[1] bg-gradient-to-t from-slate-950/90 via-slate-950/55 to-transparent px-5 pb-5 pt-16 transition duration-300 md:px-6 md:pb-6",
                      "group-hover:pointer-events-none group-hover:opacity-0 group-focus-visible:opacity-0",
                      isActive && "pointer-events-none opacity-0"
                    )}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                      {service.eyebrow}
                    </p>
                    <p className="mt-1.5 text-xl font-semibold tracking-tight text-white md:text-2xl">
                      {service.shortName}
                    </p>
                  </div>

                  {/* Hover / active: full text reveal */}
                  <div
                    className={cn(
                      "absolute inset-0 z-[2] flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 md:p-6",
                      "opacity-0 transition duration-500 ease-out",
                      "group-hover:opacity-100 group-focus-visible:opacity-100",
                      isActive && "opacity-100"
                    )}
                  >
                    <div
                      className={cn(
                        "translate-y-5 opacity-0 transition duration-500 ease-out",
                        "group-hover:translate-y-0 group-hover:opacity-100",
                        "group-focus-visible:translate-y-0 group-focus-visible:opacity-100",
                        isActive && "translate-y-0 opacity-100"
                      )}
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                        {service.eyebrow}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-[1.65rem]">
                        {service.name}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/80">
                        {service.intro}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                        Explore {service.shortName}
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
