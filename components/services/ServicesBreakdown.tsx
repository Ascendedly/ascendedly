"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { services } from "@/data/servicesData";
import { Button } from "@/components/ui/button";

export function ServicesBreakdown() {
  return (
    <section
      id="service-breakdown"
      className="scroll-mt-24 border-b border-slate-200 bg-white py-20 md:py-28"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
            Service breakdown
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            What we build — and how each service fits
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Open any service for inclusions, positioning, and a scope calculator you can bring into
            discovery.
          </p>
        </div>

        <div className="mt-14 space-y-8 md:space-y-10">
          {services.map((service, index) => {
            const reverse = index % 2 === 1;
            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45 }}
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50/70 shadow-[0_24px_60px_-48px_rgba(15,23,42,0.35)]"
              >
                <div
                  className={`grid items-stretch lg:grid-cols-2 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 lg:aspect-auto lg:min-h-full lg:self-stretch">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#5098F8] via-[#6068F8] to-[#9020F8] text-sm font-semibold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-700">
                        {service.eyebrow}
                      </p>
                    </div>

                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                      {service.name}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                      {service.intro}
                    </p>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-slate-800 md:text-[0.95rem]">
                      {service.promise}
                    </p>

                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {service.inclusions.slice(0, 4).map((item) => (
                        <li
                          key={item.title}
                          className="rounded-xl border border-slate-200/80 bg-white px-3.5 py-3 text-sm font-medium text-slate-700"
                        >
                          {item.title}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Button asChild size="lg" className="rounded-lg">
                        <Link href={`/services/${service.slug}`}>
                          Explore {service.shortName}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
