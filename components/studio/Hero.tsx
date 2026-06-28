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

// — სათაურის ტრიტმენტი: სიტყვები სათითაოდ ამოდიან ქვემოდან, აქცენტ-სიტყვა
//   რედაქციული კურსივით — გრადიენტებისა და "ხელით" ხაზგასმის გარეშე.
const headlineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const headlineWord = {
  hidden: { opacity: 0, y: "0.45em" },
  show: { opacity: 1, y: 0, transition: spring.gentle },
};

// Tbilisi-ის რეალურ-დროიანი საათი — მცირე ნდობის სიგნალი ("ცოცხალია, პასუხობს")
function useTbilisiClock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const update = () => {
      const fmt = new Intl.DateTimeFormat("ka-GE", {
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
  }, []);
  return time;
}

// გმირი-სექცია — რედაქციული, დიდი ტიპოგრაფიკა, წინდახედული მოძრაობა.
// ფონი მემკვიდრეობით cream-ია, რომ მთლიანი გვერდი ერთ ფურცელივით აღიქმებოდეს.
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const time = useTbilisiClock();

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
      {/* დახვეწილი თბილი ნათება — ფონის ფაქტურა მიჰყვება ფინიშურ კონცეფციას */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20%] top-[10%] -z-10 h-[60vh] w-[60vh] rounded-full bg-accent/[0.07] blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[10%] bottom-[5%] -z-10 h-[42vh] w-[42vh] rounded-full bg-accent-soft/60 blur-[120px]"
      />

      <motion.div style={contentStyle} className="mx-auto w-full max-w-6xl">
        {/* Eyebrow + cocxalი მაჩვენებელი */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring.gentle, delay: 0.05 }}
          className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-soft"
        >
          <span>ვებ-სტუდია · ქუთაისი</span>
          <span aria-hidden className="h-px flex-1 max-w-[140px] bg-line" />
          <span className="inline-flex items-center gap-2">
            <span className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            <span suppressHydrationWarning>
              თბილისი{" "}
              <span className="tabular-nums">{time ?? "—"}</span> · ხელმისაწვდომი
            </span>
          </span>
        </motion.div>

        {/* რედაქციული სათაური — დიდი, ასიმეტრიული, კურსივი აქცენტი */}
        {reduce ? (
          <h1 className="mt-10 font-serif text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.02em] text-ink">
            ვებსაიტები,
            <br />
            რომლებიც <em className="font-medium italic text-accent">მუშაობს</em>
            <br className="hidden sm:block" /> თქვენი ბიზნესისთვის.
          </h1>
        ) : (
          <motion.h1
            variants={headlineContainer}
            initial="hidden"
            animate="show"
            className="mt-10 font-serif text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.02em] text-ink"
          >
            <motion.span variants={headlineWord} className="inline-block">
              ვებსაიტები,
            </motion.span>
            <br />
            <motion.span variants={headlineWord} className="inline-block">
              რომლებიც
            </motion.span>{" "}
            <motion.span variants={headlineWord} className="inline-block">
              <em className="font-medium italic text-accent">მუშაობს</em>
            </motion.span>
            <br className="hidden sm:block" />{" "}
            <motion.span variants={headlineWord} className="inline-block">
              თქვენი
            </motion.span>{" "}
            <motion.span variants={headlineWord} className="inline-block">
              ბიზნესისთვის.
            </motion.span>
          </motion.h1>
        )}

        {/* ქვედა გრიდი — სუბსათაური მარცხნივ, ღილაკები + meta მარჯვნივ */}
        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring.gentle, delay: 0.35 }}
            className="max-w-md text-lg leading-relaxed text-ink-soft sm:text-xl"
          >
            ვაგებ პრემიუმ ვებსაიტებს სასტუმროების, რესტორნებისა და ბრენდებისთვის —
            სუფთა, სწრაფი, მობილურზე მორგებული და
            <span className="text-ink"> შედეგზე ორიენტირებული</span>.
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
                დავიწყოთ პროექტი
                <span aria-hidden>→</span>
              </Pressable>
              <Pressable
                href="#work"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-ink/15 px-7 text-base font-medium text-ink hover:bg-ink hover:text-paper transition-colors"
              >
                ნამუშევრების ნახვა
              </Pressable>
            </div>

            {/* შუშის ქარდი — სტატისტიკა / ნდობის სიგნალები */}
            <div className="glass mt-2 grid grid-cols-3 divide-x divide-line/70 rounded-2xl px-1 py-4 text-center">
              {[
                { v: "3+", l: "წელი" },
                { v: "12", l: "პროექტი" },
                { v: "24სთ", l: "პასუხი" },
              ].map((stat) => (
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

      {/* გადახვევის მინიშნება — ქრება მაშინვე, როცა მომხმარებელი დაიწყებს გადახვევას */}
      <motion.div
        aria-hidden
        style={reduce ? undefined : { opacity: cueOpacity }}
        className="mx-auto mt-12 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-ink-dim"
      >
        <span>გადაახვიეთ</span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block h-4 w-px bg-ink-dim/50"
        />
      </motion.div>
    </section>
  );
}
