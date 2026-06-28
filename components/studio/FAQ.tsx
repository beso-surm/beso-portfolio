"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SectionHead from "@/components/studio/SectionHead";
import { spring } from "@/lib/motion";
import { copy, type Lang } from "@/lib/copy";

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-t border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
      >
        <span className="flex items-baseline gap-4">
          <span className="font-serif text-sm font-bold tracking-tight text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-serif text-lg font-bold tracking-tight text-ink sm:text-xl">
            {q}
          </span>
        </span>
        <motion.span
          aria-hidden
          animate={{ rotate: open ? 45 : 0 }}
          transition={spring.snappy}
          className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-7 pl-10 pr-12 text-sm leading-7 text-ink-soft sm:text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function FAQ({ lang }: { lang: Lang }) {
  const t = copy[lang].faq;
  return (
    <section id="faq" className="px-5 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <SectionHead
          number={t.number}
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
        />

        <ul className="mt-14 border-b border-line">
          {t.items.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
