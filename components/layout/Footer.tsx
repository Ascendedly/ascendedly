import Link from "next/link";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { services } from "@/data/servicesData";
import { siteConfig } from "@/data/site";
import { Logo } from "@/components/layout/Logo";

const socialIcons = {
  Facebook: Facebook,
  LinkedIn: Linkedin,
  Instagram: Instagram,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-white">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-2">
              {siteConfig.social.map((item) => {
                const Icon = socialIcons[item.name as keyof typeof socialIcons];
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    title={item.title}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-slate-500 transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-700"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{item.title}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Quick links
            </p>
            <ul className="space-y-3 text-sm">
              {[
                ["About Us", "/about-us"],
                ["Services", "/services"],
                ["Projects", "/projects"],
                ["Blogs", "/blogs"],
                ["Contact Us", "/contact-us"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link className="text-muted-foreground transition-colors hover:text-indigo-600" href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Services
            </p>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    className="text-muted-foreground transition-colors hover:text-indigo-600"
                    href={`/services/${service.slug}`}
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/60 p-3 transition hover:border-indigo-200 hover:bg-indigo-50/40"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-xl bg-white text-indigo-700 shadow-sm ring-1 ring-indigo-100">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 self-center">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      Email
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-medium text-slate-800 group-hover:text-indigo-700">
                      {siteConfig.email}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="group flex gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/60 p-3 transition hover:border-indigo-200 hover:bg-indigo-50/40"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-xl bg-white text-indigo-700 shadow-sm ring-1 ring-indigo-100">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 self-center">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      Phone
                    </span>
                    <span className="mt-0.5 block text-sm font-medium text-slate-800 group-hover:text-indigo-700">
                      {siteConfig.phone}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.mapLinkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/60 p-3 transition hover:border-indigo-200 hover:bg-indigo-50/40"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-xl bg-white text-indigo-700 shadow-sm ring-1 ring-indigo-100">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      Address
                    </span>
                    <span className="mt-0.5 block text-sm font-medium leading-relaxed text-slate-800 group-hover:text-indigo-700">
                      {siteConfig.address.line1}
                      <br />
                      {siteConfig.address.line2}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <div className="flex gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/60 p-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-xl bg-white text-indigo-700 shadow-sm ring-1 ring-indigo-100">
                    <Clock className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 self-center">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      Hours
                    </span>
                    <span className="mt-0.5 block text-sm font-medium text-slate-800">
                      {siteConfig.hours}
                    </span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60 bg-slate-50/80">
        <div className="container flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
