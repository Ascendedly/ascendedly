import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact/ContactForm";
import { ContactMap } from "@/components/contact/ContactMap";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us | Book a Discovery Call",
  description:
    "Contact Ascendedly about SEO, growth marketing, enterprise software, or AI. Visit our DHA Lahore office or send an inquiry.",
  keywords: [
    "contact digital agency",
    "book discovery call",
    "Ascendedly Lahore",
    "enterprise software consultation",
    "SEO agency contact",
    "AI consulting inquiry",
  ],
  alternates: { canonical: "/contact-us" },
};

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: Clock,
    label: "Hours",
    value: siteConfig.hours,
  },
] as const;

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_8%_0%,rgba(34,211,238,0.14),transparent_55%),radial-gradient(ellipse_55%_50%_at_92%_8%,rgba(99,102,241,0.12),transparent_50%)]"
        />

        <div className="container relative py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-700">
              Contact Us
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl lg:text-[3.4rem]">
              Start with a clear brief. Finish with a named team.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              Tell us the outcome you want, the main challenge, and your budget range. If you used a
              service calculator, that estimate is already attached to this inquiry.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const inner = (
                <>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-50 to-indigo-50 text-indigo-700 ring-1 ring-indigo-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {card.label}
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-slate-900 md:text-base">{card.value}</p>
                </>
              );

              if ("href" in card && card.href) {
                return (
                  <a
                    key={card.label}
                    href={card.href}
                    className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_18px_50px_-36px_rgba(15,23,42,0.4)] transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-[0_22px_50px_-30px_rgba(79,70,229,0.35)]"
                  >
                    {inner}
                  </a>
                );
              }

              return (
                <div
                  key={card.label}
                  className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_18px_50px_-36px_rgba(15,23,42,0.4)]"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50/70 py-16 md:py-20">
        <div className="container grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">
              Visit the studio
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl">
              DHA Lahore
            </h2>
            <div className="mt-6 flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-50 to-indigo-50 text-indigo-700 ring-1 ring-indigo-100">
                <MapPin className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-950">Office address</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {siteConfig.address.line1},
                  <br />
                  {siteConfig.address.line2}
                </p>
                <a
                  href={siteConfig.mapLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-700 hover:text-indigo-900"
                >
                  Open in Google Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_30px_70px_-40px_rgba(15,23,42,0.45)]">
              <ContactMap className="aspect-[4/3] w-full md:aspect-[16/11]" />
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.4)] md:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">
                Inquiry
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950 md:text-3xl">
                Send a discovery brief
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Three short steps. A senior lead replies within one business day.
              </p>
            </div>
            <Suspense
              fallback={
                <p className="text-sm text-slate-500">Loading inquiry form…</p>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
