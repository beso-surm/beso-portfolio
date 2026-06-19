"use client";

import { motion, useReducedMotion } from "motion/react";
import { spring, viewportOnce } from "@/lib/motion";

// სათაური სიტყვა-სიტყვით ამოდის და ჩნდება — უფრო ცოცხალი, ვიდრე ერთიანი ბლოკი.
// ქართული დამწერლობის გამო განზრახ არ ვიყენებთ overflow-hidden ნიღაბს (არ ჭრის ასოებს).
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

const word = {
  hidden: { opacity: 0, y: "0.5em" },
  show: { opacity: 1, y: 0, transition: spring.gentle },
};

export default function WordReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className}>{text}</span>;

  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      aria-label={text}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} aria-hidden className="inline-block">
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
