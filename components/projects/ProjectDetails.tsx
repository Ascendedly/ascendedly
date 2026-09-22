"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import type { Project } from "@/data/projectsData";

export function ProjectDetails({ project }: { project: Project }) {
  return (
    <section className="border-b border-slate-200 bg-white py-20 md:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
                Challenge
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                What was broken
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
                Approach
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                How Ascendedly delivered
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                {project.approach}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
                Results
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                What changed
              </h2>
              <ul className="mt-6 space-y-4">
                {project.results.map((result) => (
                  <li key={result} className="flex gap-3 text-base text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Project snapshot
              </p>
              <dl className="mt-5 space-y-5">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Client
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-slate-900">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Category
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-slate-900">{project.category}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Timeline
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-slate-900">{project.timeline}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Outcome
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-indigo-700">{project.outcome}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Services used
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.services.map((item) => (
                  <Link
                    key={item}
                    href="/services"
                    className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 transition hover:bg-indigo-100"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
