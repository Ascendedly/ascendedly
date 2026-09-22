"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { media } from "@/data/media";

const serviceFaqs = [
  {
    question: "Can we combine multiple services in one engagement?",
    answer:
      "Yes. Most clients run two or more services together — for example SEO plus web, or app plus Gen AI. One lead team keeps scope, timeline, and reporting aligned.",
  },
  {
    question: "How do the service calculators work?",
    answer:
      "Each service page includes a scope calculator. Adjust the inputs to get a planning estimate, then bring that estimate into discovery so we can refine it with your real constraints.",
  },
  {
    question: "Do you only take enterprise work?",
    answer:
      "No. We work with startups and growing companies as well as larger teams. Scope and sprint size are matched to your stage, budget, and urgency.",
  },
  {
    question: "What happens after I pick a service?",
    answer:
      "You book discovery. We review your goal, tools, and constraints, then share a clear plan: scope, timeline, owners, and a go / no-go recommendation.",
  },
  {
    question: "How long before we see results?",
    answer:
      "It depends on the service. A focused SEO or site sprint can show early signals in weeks. Larger platforms, apps, or AI systems usually need a longer first phase with clear milestones.",
  },
  {
    question: "Who owns the work day to day?",
    answer:
      "A named Ascendedly lead stays accountable. You get transparent sprints, demos, and written scope changes — not a rotating vendor handoff.",
  },
];

export function ServicesFaq() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fb] py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_55%_at_15%_30%,rgba(34,211,238,0.16),transparent_55%),radial-gradient(ellipse_45%_50%_at_70%_60%,rgba(99,102,241,0.12),transparent_50%),radial-gradient(ellipse_40%_40%_at_90%_20%,rgba(217,70,239,0.1),transparent_45%)]"
      />

      <div className="container relative">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500" />
              <p className="text-sm font-semibold text-slate-700">FAQs</p>
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Questions about our services
            </h2>

            <div className="mt-8 rounded-3xl border border-white bg-white p-6 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.35)] md:p-7">
              <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-indigo-100">
                <Image
                  src={media.mayaEllisonPortrait.src}
                  alt="Ascendedly team member"
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                />
              </div>
              <p className="mt-5 text-lg font-semibold text-slate-950">Book a 15 min call</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Not sure which service fits? Book a short call and we will map the right starting
                point before you commit.
              </p>
              <Button asChild size="lg" className="mt-6 h-12 w-full rounded-full text-base">
                <Link href="/contact-us">Book a Free Call</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
              {serviceFaqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="overflow-hidden rounded-2xl border border-slate-200/80 border-b-slate-200/80 bg-white px-5 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.25)] data-[state=open]:border-indigo-200 data-[state=open]:shadow-[0_18px_50px_-30px_rgba(79,70,229,0.35)]"
                >
                  <AccordionTrigger className="group py-5 text-left text-base font-semibold text-slate-900 hover:no-underline hover:text-slate-900 md:text-[1.05rem] [&>svg]:hidden">
                    <span className="pr-4">{faq.question}</span>
                    <span className="relative ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-data-[state=open]:bg-indigo-50 group-data-[state=open]:text-indigo-600">
                      <Plus className="h-4 w-4 transition group-data-[state=open]:scale-0 group-data-[state=open]:opacity-0" />
                      <X className="absolute h-4 w-4 scale-0 opacity-0 transition group-data-[state=open]:scale-100 group-data-[state=open]:opacity-100" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-600 md:text-[0.95rem]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
