"use client";

import { motion } from "motion/react";
import {
  staggerContainer,
  staggerItem,
  tapScaleSubtle,
  viewportOnce,
} from "@/lib/motion";
import SectionHead from "@/components/studio/SectionHead";

// რეალური ცოცხალი პროექტები. მობილურზე — სუფთა ვერტიკალური წყობა,
// დესკტოპზე — ორსვეტიანი კრეატიული ბადე.
type Project = {
  name: string;
  kind: string;
  href?: string;
  monogram: string;
  gradient: string;
};

const projects: Project[] = [
  {
    name: "Georgian House",
    kind: "სასტუმრო · ქუთაისი",
    href: "https://georgianhousekutaisi.com",
    monogram: "GH",
    gradient: "from-[#7a2a33] via-[#3a1a1f] to-[#0f0c0d]",
  },
  {
    name: "Kvirike Hills",
    kind: "ბუტიკ-სასტუმრო · კოტეჯები",
    href: "https://kvirikehills.com",
    monogram: "KH",
    gradient: "from-[#1f4d3a] via-[#13261f] to-[#0b0f0d]",
  },
  {
    name: "Submarine Coffee",
    kind: "კაფე · ბათუმი",
    monogram: "SC",
    gradient: "from-[#16405c] via-[#102634] to-[#0a0f14]",
  },
];

export default function Work() {
  return (
    <section id="work" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="ნამუშევრები"
          title="შერჩეული პროექტები"
          subtitle="ცოცხალი საიტები, რომლებიც დღეს მუშაობს და კლიენტებს ემსახურება."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-5 md:grid-cols-2"
        >
          {projects.map((p, i) => {
            const isLink = Boolean(p.href);
            const Card = isLink ? motion.a : motion.div;
            const linkProps = isLink
              ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <Card
                key={p.name}
                {...linkProps}
                variants={staggerItem}
                whileTap={tapScaleSubtle}
                className={`group block overflow-hidden rounded-3xl border border-white/10 bg-ink-soft ${
                  // პირველ ბარათს დესკტოპზე ვუტოვებთ მთელ სიგანეს — ასიმეტრიული აქცენტი
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br ${p.gradient}`}
                >
                  <span className="font-serif text-6xl font-bold tracking-tight text-white/90">
                    {p.monogram}
                  </span>
                  {!isLink && (
                    <span className="absolute right-4 top-4 rounded-full border border-white/20 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white/80">
                      მალე ონლაინ
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  <div>
                    <h3 className="text-lg font-semibold text-mist">{p.name}</h3>
                    <p className="mt-1 text-sm text-mist-dim">{p.kind}</p>
                  </div>
                  {isLink && (
                    <span
                      aria-hidden
                      className="text-mist-dim transition-transform duration-300 group-active:translate-x-1"
                    >
                      ↗
                    </span>
                  )}
                </div>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
