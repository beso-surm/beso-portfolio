"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { copy, type Lang } from "@/lib/copy";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

function Row({ words }: { words: readonly string[] }) {
  return (
    <span className="flex shrink-0 items-center">
      {words.map((w, i) => (
        <span key={i} className="flex items-center">
          <span className="px-8 font-serif text-5xl font-bold tracking-[-0.02em] text-ink sm:text-7xl lg:text-8xl">
            {w}
          </span>
          <span className="text-3xl text-accent sm:text-4xl">✦</span>
        </span>
      ))}
    </span>
  );
}

export default function VelocityMarquee({
  lang,
  baseVelocity = 3,
}: {
  lang: Lang;
  baseVelocity?: number;
}) {
  const words = copy[lang].marquee;
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) direction.current = -1;
    else if (velocityFactor.get() > 0) direction.current = 1;
    moveBy += direction.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative flex select-none overflow-hidden border-y border-line py-10 sm:py-14">
      <motion.div
        className="flex flex-nowrap whitespace-nowrap"
        style={reduce ? undefined : { x }}
      >
        <Row words={words} />
        <Row words={words} />
        <Row words={words} />
        <Row words={words} />
      </motion.div>
    </div>
  );
}
