"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Pressable from "@/components/motion/Pressable";
import { spring } from "@/lib/motion";
import { whatsappLink } from "@/lib/site";

// გმირი-სექცია (The Hook). გადახვევისას ტექსტი ნაზად ქრება და პატარავდება,
// ფონის ნათება კი ოდნავ ჩამორჩება (parallax) — ეს ხელს უწყობს ქვემოთ გადახვევას.
// მკაცრად მხოლოდ transform/opacity — layout-ის გადათვლის გარეშე.
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.92]);
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, -60]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  const contentStyle = reduce
    ? undefined
    : { opacity: textOpacity, scale: textScale, y: textY };

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-20 pt-28"
    >
      {/* ფონის ნათება — მსუბუქი parallax */}
      <motion.div
        aria-hidden
        style={reduce ? undefined : { y: glowY }}
        className="pointer-events-none absolute -top-[20%] left-1/2 -z-10 h-[78vh] w-[78vh] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]"
      />

      <motion.div style={contentStyle} className="mx-auto w-full max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring.gentle, delay: 0.05 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-mist-dim"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          ვებ-სტუდია · ქუთაისი
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring.gentle, delay: 0.12 }}
          className="font-serif text-[2.75rem] font-bold leading-[1.04] tracking-tight text-mist sm:text-6xl"
        >
          ვქმნით საიტებს,
          <br className="hidden sm:block" /> რომლებსაც{" "}
          <span className="text-accent">ამჩნევენ</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring.gentle, delay: 0.2 }}
          className="mt-6 max-w-md text-lg leading-relaxed text-mist-dim"
        >
          პრემიუმ ვებსაიტები სასტუმროებისთვის, რესტორნებისა და ბრენდებისთვის —
          სწრაფი, მობილური და გაყიდვებზე ორიენტირებული.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring.gentle, delay: 0.28 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <Pressable
            href={whatsappLink}
            external
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-semibold text-white shadow-lg shadow-accent/25"
          >
            დავიწყოთ პროექტი
            <span aria-hidden>→</span>
          </Pressable>
          <Pressable
            href="#work"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/15 px-7 text-base font-medium text-mist"
          >
            ნამუშევრების ნახვა
          </Pressable>
        </motion.div>
      </motion.div>

      {/* გადახვევის მინიშნება — ქრება, როგორც კი მომხმარებელი დაიწყებს გადახვევას */}
      <motion.div
        aria-hidden
        style={reduce ? undefined : { opacity: cueOpacity }}
        className="absolute inset-x-0 bottom-7 mx-auto flex flex-col items-center gap-2 text-mist-dim"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          გადააქვით ქვემოთ
        </span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block h-5 w-px bg-mist-dim/60"
        />
      </motion.div>
    </section>
  );
}
