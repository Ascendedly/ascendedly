"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/data/servicesData";

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      className="h-full w-full"
    >
      <Link
        href={`/services/${service.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_24px_60px_-36px_rgba(79,70,229,0.45)]"
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
          <Image
            src={service.homeImage}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-700">
            {service.eyebrow}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-950">{service.shortName}</h3>
          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
            {service.intro}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700">
            Explore {service.shortName}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export function ServiceShowcase() {
  const topServices = services.slice(0, 3);
  const bottomServices = services.slice(3);

  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-slate-200 bg-white py-20 md:py-28"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">
            Our services
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-5xl">
            Five services. One accountable team.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Open any service, estimate scope in the calculator, and bring that estimate into
            discovery.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {topServices.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>

        <div className="mt-6 flex flex-col items-stretch justify-center gap-6 sm:flex-row sm:flex-wrap">
          {bottomServices.map((service, index) => (
            <div
              key={service.slug}
              className="w-full sm:w-[calc(50%-0.75rem)] xl:w-[calc((100%-3rem)/3)]"
            >
              <ServiceCard service={service} index={index + 3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
