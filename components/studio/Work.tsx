"use client";

import { motion } from "motion/react";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import SectionHead from "@/components/studio/SectionHead";
import ProjectCard from "@/components/studio/ProjectCard";

type Project = {
  num: string;
  name: string;
  kind: string;
  href: string;
  monogram: string;
  gradient: string;
  image?: string;
  position?: string;
  outcome?: string;
};

const projects: Project[] = [
  {
    num: "01",
    name: "Georgian House",
    kind: "სასტუმრო · ქუთაისი",
    href: "https://georgianhousekutaisi.com",
    monogram: "GH",
    gradient: "from-[#7a2a33] via-[#3a1a1f] to-[#0f0c0d]",
    image: "/work/georgian-house.jpg",
    outcome: "თანამედროვე საიტი ჯავშნებითა და ორი ენით",
  },
  {
    num: "02",
    name: "Kvirike Hills",
    kind: "ბუტიკ-სასტუმრო · კოტეჯები",
    href: "https://kvirikehills.com",
    monogram: "KH",
    gradient: "from-[#1f4d3a] via-[#13261f] to-[#0b0f0d]",
    image: "/work/kvirike-hills.jpg",
    outcome: "სამენოვანი საიტი ცოცხალი ჯავშნებით",
  },
];

export default function Work() {
  return (
    <section id="work" className="px-5 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          number="02"
          eyebrow="ნამუშევრები"
          title="შერჩეული პროექტები"
          subtitle="ცოცხალი საიტები, რომლებიც უკვე მუშაობს და კლიენტებს ემსახურება."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {projects.map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </motion.div>

        <p className="mt-12 max-w-md text-sm text-ink-dim">
          ფარული პროექტი? ვაგებ ვებსაიტებს რესტორნებისთვის, კოტეჯებისთვის და მცირე ბრენდებისთვისაც —{" "}
          <a href="#contact" className="text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
            მომწერეთ
          </a>
          .
        </p>
      </div>
    </section>
  );
}
