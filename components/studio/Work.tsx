"use client";

import { motion } from "motion/react";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import SectionHead from "@/components/studio/SectionHead";
import ProjectCard from "@/components/studio/ProjectCard";

// რეალური ცოცხალი პროექტები. მობილურზე — სუფთა ვერტიკალური წყობა,
// დესკტოპზე — ორსვეტიანი ბადე 3D-დახრადი ბარათებით.
type Project = {
  name: string;
  kind: string;
  href: string;
  monogram: string;
  gradient: string;
  image?: string;
  position?: string;
};

const projects: Project[] = [
  {
    name: "Georgian House",
    kind: "სასტუმრო · ქუთაისი",
    href: "https://georgianhousekutaisi.com",
    monogram: "GH",
    gradient: "from-[#7a2a33] via-[#3a1a1f] to-[#0f0c0d]",
    image: "/work/georgian-house.jpg",
  },
  {
    name: "Kvirike Hills",
    kind: "ბუტიკ-სასტუმრო · კოტეჯები",
    href: "https://kvirikehills.com",
    monogram: "KH",
    gradient: "from-[#1f4d3a] via-[#13261f] to-[#0b0f0d]",
    image: "/work/kvirike-hills.jpg",
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-page px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="ნამუშევრები"
          title="შერჩეული პროექტები"
          subtitle="ცოცხალი საიტები, რომლებიც უკვე მუშაობს და კლიენტებს ემსახურება."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-5 md:grid-cols-2"
        >
          {projects.map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
