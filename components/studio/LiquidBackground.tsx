"use client";

import { motion, useReducedMotion } from "motion/react";

// გლობალური "თხევადი" ფონი — ნელა მცურავი, მორფირებადი ფერადი ნათებები მთელ გვერდზე.
// მხოლოდ transform (translate/scale) — დაბლერილი ფენა ერთხელ იხატება და მერე უბრალოდ გარდაიქმნება (GPU).
const blobs = [
  {
    c: "left-[-12%] top-[6%] h-[46vh] w-[46vh] bg-accent/20",
    a: { x: [0, 50, -10, 0], y: [0, -30, 25, 0], scale: [1, 1.12, 0.96, 1] },
    d: 19,
  },
  {
    c: "right-[-16%] top-[26%] h-[52vh] w-[52vh] bg-[#3a2c66]/35",
    a: { x: [0, -40, 20, 0], y: [0, 30, -20, 0], scale: [1, 0.95, 1.1, 1] },
    d: 23,
  },
  {
    c: "left-[22%] bottom-[-10%] h-[44vh] w-[44vh] bg-accent-2/15",
    a: { x: [0, 30, -30, 0], y: [0, -20, 12, 0], scale: [1, 1.08, 0.97, 1] },
    d: 27,
  },
];

export default function LiquidBackground() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[90px] ${b.c}`}
          animate={reduce ? undefined : b.a}
          transition={{
            duration: b.d,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
