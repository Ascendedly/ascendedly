"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";

import { media } from "@/data/media";

type Leader = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  social: {
    linkedin: string;
    x: string;
    instagram: string;
  };
};

const leaders: Leader[] = [
  {
    name: "Maya Ellison",
    role: "Founder & Chief Executive",
    image: media.mayaEllisonPortrait.src,
    imageAlt: media.mayaEllisonPortrait.alt,
    social: {
      linkedin: "https://www.linkedin.com/company/ascendedly",
      x: "https://x.com/ascendedly",
      instagram: "https://www.instagram.com/ascendedly",
    },
  },
  {
    name: "Rafael Okonkwo",
    role: "Chief Technology Officer",
    image: media.rafaelOkonkwoPortrait.src,
    imageAlt: media.rafaelOkonkwoPortrait.alt,
    social: {
      linkedin: "https://www.linkedin.com/company/ascendedly",
      x: "https://x.com/ascendedly",
      instagram: "https://www.instagram.com/ascendedly",
    },
  },
  {
    name: "Dr. Priya Nandakumar",
    role: "Head of AI Systems",
    image: media.priyaNandakumarPortrait.src,
    imageAlt: media.priyaNandakumarPortrait.alt,
    social: {
      linkedin: "https://www.linkedin.com/company/ascendedly",
      x: "https://x.com/ascendedly",
      instagram: "https://www.instagram.com/ascendedly",
    },
  },
];

export function AboutLeadership() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">
            Leadership
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-5xl">
            Our Leadership
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Senior leaders stay involved in the work. Architecture, strategy, and AI quality still
            go through the people below, not only the first meeting deck.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {leaders.map((leader, index) => (
            <motion.article
              key={leader.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-[1.75rem] bg-white shadow-[0_20px_50px_-28px_rgba(15,23,42,0.35)] outline-none focus-within:ring-2 focus-within:ring-indigo-400/60"
              tabIndex={0}
            >
              <Image
                src={leader.image}
                alt={leader.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04] group-focus-within:scale-[1.04]"
              />

              {/* Soft bottom fade so reveal panel reads cleanly */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100 max-md:opacity-100"
              />

              <div
                className="absolute inset-x-3 bottom-3 translate-y-[calc(100%+0.75rem)] rounded-2xl bg-white px-5 py-4 opacity-0 shadow-[0_12px_40px_-18px_rgba(15,23,42,0.45)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 max-md:translate-y-0 max-md:opacity-100"
              >
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                  {leader.name}
                </h3>
                <p className="mt-0.5 text-sm text-slate-500">{leader.role}</p>

                <div className="mt-3 flex items-center gap-2">
                  <Link
                    href={leader.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${leader.name} on LinkedIn`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 transition-colors hover:bg-indigo-100"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                  <Link
                    href={leader.social.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${leader.name} on X`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 transition-colors hover:bg-indigo-100"
                  >
                    <Twitter className="h-4 w-4" />
                  </Link>
                  <Link
                    href={leader.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${leader.name} on Instagram`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 transition-colors hover:bg-indigo-100"
                  >
                    <Instagram className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
