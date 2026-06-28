"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Pressable from "@/components/motion/Pressable";
import { spring } from "@/lib/motion";
import { whatsappLink } from "@/lib/site";
import { copy, locales, type Lang } from "@/lib/copy";

const headlineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const headlineWord = {
  hidden: { opacity: 0, y: "0.45em" },
  show: { opacity: 1, y: 0, transition: spring.gentle },
};

// Tbilisi-ის რეალურ-დროიანი საათი ენაზე მორგებული ფორმატით.
function useTbilisiClock(intl: string) {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const update = () => {
      const fmt = new Intl.DateTimeFormat(intl, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Tbilisi",
      });
      setTime(fmt.format(new Date()));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [intl]);
  return time;
}

export default function Hero({ lang }: { lang: Lang }) {
  const t = copy[lang].hero;
  const loc = locales[lang];

  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const time = useTbilisiClock(loc.intl);

  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.7], [0, -40]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const contentStyle = reduce ? undefined : { opacity: textOpacity, y: textY };

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-5 pb-12 pt-28 sm:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20%] top-[10%] -z-10 h-[60vh] w-[60vh] rounded-full bg-accent/[0.07] blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[10%] bottom-[5%] -z-10 h-[42vh] w-[42vh] rounded-full bg-accent-soft/60 blur-[120px]"
      />

      <motion.div style={contentStyle} className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring.gentle, delay: 0.05 }}
          className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-soft"
        >
          <span>{t.eyebrow}</span>
          <span aria-hidden className="h-px flex-1 max-w-[140px] bg-line" />
          <span className="inline-flex items-center gap-2">
            <span className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            <span suppressHydrationWarning>
              {loc.cityShort}{" "}
              <span className="tabular-nums">{time ?? "—"}</span> · {t.available}
            </span>
          </span>
        </motion.div>

        {reduce ? (
          <h1 className="mt-10 font-serif text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.02em] text-ink">
            <HeadlineStatic words={t.h1} italic={t.h1Italic} />
          </h1>
        ) : (
          <motion.h1
            variants={headlineContainer}
            initial="hidden"
            animate="show"
            className="mt-10 font-serif text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.02em] text-ink"
          >
            <HeadlineAnimated words={t.h1} italic={t.h1Italic} />
          </motion.h1>
        )}

        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring.gentle, delay: 0.35 }}
            className="max-w-md text-lg leading-relaxed text-ink-soft sm:text-xl"
          >
            {t.subtitleA}
            <span className="text-ink">{t.subtitleHighlight}</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring.gentle, delay: 0.45 }}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <Pressable
                href={whatsappLink}
                external
                magnetic
                className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-semibold text-white shadow-lg shadow-accent/20"
              >
                {t.ctaPrimary}
                <span aria-hidden>→</span>
              </Pressable>
              <Pressable
                href="#work"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-ink/15 px-7 text-base font-medium text-ink hover:bg-ink hover:text-paper transition-colors"
              >
                {t.ctaSecondary}
              </Pressable>
            </div>

            <div className="glass mt-2 grid grid-cols-3 divide-x divide-line/70 rounded-2xl px-1 py-4 text-center">
              {t.stats.map((stat) => (
                <div key={stat.l} className="px-3">
                  <p className="font-serif text-2xl font-bold leading-none text-ink">
                    {stat.v}
                  </p>
                  <p className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-ink-dim">
                    {stat.l}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        aria-hidden
        style={reduce ? undefined : { opacity: cueOpacity }}
        className="mx-auto mt-12 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-ink-dim"
      >
        <span>{t.scrollCue}</span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block h-4 w-px bg-ink-dim/50"
        />
      </motion.div>
    </section>
  );
}

// სათაურის რენდერი — სიტყვები სათითაოდ, italic აქცენტ-სიტყვისთვის.
// წერტილი ბოლო სიტყვის შიგნით რჩება, რომ ხაზის ბოლოს „გადახტომა“ არ მოხდეს.
function HeadlineAnimated({ words, italic }: { words: readonly string[]; italic: string }) {
  return (
    <>
      {words.map((word, i) => {
        const isItalic = word.replace(/[.,!?]$/, "") === italic;
        const node = isItalic ? (
          <em className="font-medium italic text-accent">{word}</em>
        ) : (
          word
        );
        // Insert <br /> after the first word (e.g. "ვებსაიტები,") and the italic word
        const insertBreakAfter =
          i === 0 || (isItalic && i < words.length - 1);
        return (
          <span key={i}>
            <motion.span variants={headlineWord} className="inline-block">
              {node}
            </motion.span>
            {insertBreakAfter ? <br className={i === 0 ? undefined : "hidden sm:block"} /> : " "}
          </span>
        );
      })}
    </>
  );
}

function HeadlineStatic({ words, italic }: { words: readonly string[]; italic: string }) {
  return (
    <>
      {words.map((word, i) => {
        const isItalic = word.replace(/[.,!?]$/, "") === italic;
        const node = isItalic ? (
          <em key={i} className="font-medium italic text-accent">{word}</em>
        ) : (
          <span key={i}>{word}</span>
        );
        const insertBreakAfter = i === 0 || (isItalic && i < words.length - 1);
        return (
          <span key={i}>
            {node}
            {insertBreakAfter ? <br className={i === 0 ? undefined : "hidden sm:block"} /> : " "}
          </span>
        );
      })}
    </>
  );
}
