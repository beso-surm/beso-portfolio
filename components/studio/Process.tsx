"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";
import SectionHead from "@/components/studio/SectionHead";
import { copy, type Lang } from "@/lib/copy";

export default function Process({ lang }: { lang: Lang }) {
  const t = copy[lang].process;
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 85%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="bg-paper-soft px-5 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <SectionHead
          number={t.number}
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
        />

        <motion.ol
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-16 space-y-10"
        >
          <span
            aria-hidden
            className="absolute bottom-5 left-[19px] top-5 w-px bg-line"
          />
          <motion.span
            aria-hidden
            style={reduce ? undefined : { scaleY: lineScale }}
            className="absolute bottom-5 left-[19px] top-5 w-px origin-top bg-accent"
          />

          {t.steps.map((step, i) => (
            <motion.li
              key={step.title}
              variants={staggerItem}
              className="relative flex gap-6"
            >
              <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-card font-serif text-sm font-bold text-accent shadow-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-1.5">
                <h3 className="font-serif text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink-soft">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
