"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { media } from "@/data/media";

const testimonials = [
  {
    quote:
      "Through collaboration with Ascendedly I have been able to take my business to the next level and grow results I can measure.",
    name: "Doug Arnold",
    role: "Entrepreneur",
    image: media.rafaelOkonkwoPortrait.src,
    imageAlt: "Portrait of Doug Arnold",
  },
  {
    quote:
      "Ascendedly rebuilt our website and SEO plan in one clear process. Traffic went up, and our sales team finally had pages that matched what we sell.",
    name: "Sara Ahmed",
    role: "Head of Marketing",
    image: media.mayaEllisonPortrait.src,
    imageAlt: "Portrait of Sara Ahmed",
  },
  {
    quote:
      "Clear communication, clear timelines, and one team for app and growth work. Delivery felt simple from kickoff to launch.",
    name: "Ayesha Khan",
    role: "Product Director",
    image: media.priyaNandakumarPortrait.src,
    imageAlt: "Portrait of Ayesha Khan",
  },
];

export function Testimonials() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [reduceMotion, active]);

  const item = testimonials[active];

  function prev() {
    setActive((current) => (current - 1 + testimonials.length) % testimonials.length);
  }

  function next() {
    setActive((current) => (current + 1) % testimonials.length);
  }

  return (
    <section className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-cyan-50 to-fuchsia-100"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(99,102,241,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(217,70,239,0.18), transparent 42%)",
        }}
      />

      <div className="container relative px-8 sm:px-10 md:px-12">
        <div className="relative mx-auto max-w-5xl">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-indigo-600 to-fuchsia-500 text-white shadow-lg transition hover:scale-105 md:h-14 md:w-14"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-20 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-indigo-600 to-fuchsia-500 text-white shadow-lg transition hover:scale-105 md:h-14 md:w-14"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="rounded-[1.5rem] border border-white/80 bg-white px-6 py-10 shadow-[0_40px_100px_-48px_rgba(15,23,42,0.4)] sm:px-10 md:px-14 md:py-14">
            <div className="mx-auto mb-2 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500" />
            <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Client reviews
            </h2>
            <p className="mt-2 text-center text-sm text-slate-500 md:text-base">
              See what people are saying.
            </p>

            <div className="mt-10 grid items-center gap-8 md:mt-12 md:grid-cols-[0.85fr_1.15fr] md:gap-12">
              <div className="relative mx-auto flex h-52 w-52 items-center justify-center sm:h-60 sm:w-60 md:h-64 md:w-64">
                <div
                  aria-hidden
                  className="absolute h-[88%] w-[88%] translate-x-3 translate-y-2 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 opacity-90"
                />
                <div className="relative h-[78%] w-[78%] overflow-hidden rounded-full border-[6px] border-white shadow-lg">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="256px"
                        className="object-cover object-top"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="text-center md:text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                  >
                    <p className="text-lg italic leading-relaxed text-slate-600 md:text-xl md:leading-relaxed">
                      “{item.quote}”
                    </p>
                    <p className="mt-6 text-lg font-semibold bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">{item.role}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-2">
              {testimonials.map((entry, index) => (
                <button
                  key={entry.name}
                  type="button"
                  aria-label={`Show testimonial from ${entry.name}`}
                  aria-pressed={index === active}
                  onClick={() => setActive(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === active
                      ? "w-8 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"
                      : "w-5 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
