"use client";

import { motion } from "motion/react";
import { type ReactNode } from "react";
import {
  staggerContainer,
  staggerItem,
  tapScaleSubtle,
  viewportOnce,
} from "@/lib/motion";
import SectionHead from "@/components/studio/SectionHead";
import { copy, type Lang } from "@/lib/copy";

const Icon = ({ d, size = "md" }: { d: string; size?: "md" | "lg" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={size === "lg" ? "h-9 w-9" : "h-6 w-6"}
    aria-hidden
  >
    <path d={d} />
  </svg>
);

// იკონები ფიქსირებული რიგით — ენაზე არ არიან დამოკიდებული.
const icons: ReactNode[] = [
  <Icon key="0" size="lg" d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586" />,
  <Icon key="1" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
  <Icon key="2" d="M5 4a2 2 0 012-2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4zM11 18h2" />,
  <Icon key="3" d="M12 20a8 8 0 100-16 8 8 0 000 16zM12 12l3.5-3.5M12 12v.01" />,
];

const layoutClass = ["sm:col-span-2 sm:row-span-2 p-8 sm:p-10", "p-6 sm:p-7", "p-6 sm:p-7", "sm:col-span-3 p-7 sm:p-9"];
const titleSizeClass = ["text-3xl sm:text-4xl", "text-xl", "text-xl", "text-xl"];
const descSizeClass = ["text-base sm:text-lg leading-7", "text-sm", "text-sm", "text-sm"];

export default function Services({ lang }: { lang: Lang }) {
  const t = copy[lang].services;
  return (
    <section id="services" className="px-5 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          number={t.number}
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-4 sm:grid-cols-3 sm:grid-rows-[auto_auto_auto]"
        >
          {t.items.map((s, i) => (
            <motion.li
              key={s.num}
              variants={staggerItem}
              whileTap={tapScaleSubtle}
              className={`group relative flex flex-col rounded-3xl border border-line bg-card shadow-sm shadow-ink/[0.04] transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-md ${layoutClass[i]}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-sm font-bold tracking-tight text-accent">
                  {s.num}
                </span>
                <div
                  className={`flex items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105 ${
                    i === 0 ? "h-14 w-14" : "h-11 w-11"
                  }`}
                >
                  {icons[i]}
                </div>
              </div>
              <h3 className={`mt-auto pt-10 font-serif font-bold tracking-tight text-ink ${titleSizeClass[i]}`}>
                {s.title}
              </h3>
              <p className={`mt-3 leading-6 text-ink-soft ${descSizeClass[i]}`}>
                {s.desc}
              </p>
              {"meta" in s && s.meta && (
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-dim">
                  {s.meta}
                </p>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
