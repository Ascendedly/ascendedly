"use client";

import { useMemo, useState } from "react";

import { services } from "@/data/servicesData";
import { ServiceCalculator } from "@/components/services/ServiceCalculator";
import { cn } from "@/lib/utils";

export function ServicesCalculator() {
  const [activeSlug, setActiveSlug] = useState(services[0]?.slug ?? "seo");
  const activeService = useMemo(
    () => services.find((service) => service.slug === activeSlug) ?? services[0],
    [activeSlug]
  );

  if (!activeService) return null;

  return (
    <div>
      <div className="border-b border-slate-200 bg-white pt-16 md:pt-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
              Client calculator
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Estimate your project before you book
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Pick a service, adjust the scope inputs, and lock an estimate into the contact form.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2 pb-2">
            {services.map((service) => {
              const isActive = service.slug === activeSlug;
              return (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => setActiveSlug(service.slug)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition",
                    isActive
                      ? "border-transparent bg-gradient-to-r from-[#5098F8] via-[#6068F8] to-[#9020F8] text-white shadow-sm"
                      : "border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:text-indigo-700"
                  )}
                >
                  {service.shortName}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <ServiceCalculator key={activeService.slug} service={activeService} hideIntro />
    </div>
  );
}
