"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";

// ერთი ბლოკის ელეგანტური შემოსვლა ეკრანზე გადახვევისას.
// პატივს ვცემთ prefers-reduced-motion-ს — ასეთ შემთხვევაში ანიმაცია გამოირთვება.
type Tag = "div" | "section" | "article" | "li" | "span" | "p" | "h2";

const tags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
  span: motion.span,
  p: motion.p,
  h2: motion.h2,
} as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  as?: Tag;
};

export default function Reveal({
  children,
  className,
  variants = fadeUp,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const MotionTag = tags[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </MotionTag>
  );
}
