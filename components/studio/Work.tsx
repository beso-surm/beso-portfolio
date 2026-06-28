"use client";

import { motion } from "motion/react";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import SectionHead from "@/components/studio/SectionHead";
import ProjectCard from "@/components/studio/ProjectCard";
import { copy, type Lang } from "@/lib/copy";

// საიტი-ფიქსირებული მონაცემები (href/image/gradient) — ენაზე არ იცვლება.
const projectMeta = [
  {
    monogram: "GH",
    href: "https://georgianhousekutaisi.com",
    gradient: "from-[#7a2a33] via-[#3a1a1f] to-[#0f0c0d]",
    image: "/work/georgian-house.jpg",
  },
  {
    monogram: "KH",
    href: "https://kvirikehills.com",
    gradient: "from-[#1f4d3a] via-[#13261f] to-[#0b0f0d]",
    image: "/work/kvirike-hills.jpg",
  },
] as const;

export default function Work({ lang }: { lang: Lang }) {
  const t = copy[lang].work;
  const contactHref = lang === "en" ? "/en#contact" : "#contact";

  return (
    <section id="work" className="px-5 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          number={t.number}
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {t.projects.map((p, i) => (
            <ProjectCard
              key={p.name}
              num={String(i + 1).padStart(2, "0")}
              name={p.name}
              kind={p.kind}
              outcome={p.outcome}
              href={projectMeta[i].href}
              monogram={projectMeta[i].monogram}
              gradient={projectMeta[i].gradient}
              image={projectMeta[i].image}
            />
          ))}
        </motion.div>

        <p className="mt-12 max-w-md text-sm text-ink-dim">
          {t.note}
          <a
            href={contactHref}
            className="text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
          >
            {t.noteLink}
          </a>
          {t.noteTail}
        </p>
      </div>
    </section>
  );
}
