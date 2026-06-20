"use client";

import { motion, useReducedMotion, useTransform } from "motion/react";
import { usePointerParallax } from "@/lib/usePointerParallax";

// გლობალური "თხევადი" ფონი — ნელა მცურავი, მორფირებადი ფერადი ნათებები მთელ გვერდზე.
// დესკტოპზე ნათებები კურსორსაც „რეაგირებენ“ (სხვადასხვა სიღრმით) — გვერდი ცოცხლდება.
// მხოლოდ transform (translate/scale) — დაბლერილი ფენა ერთხელ იხატება (GPU).
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
  const { x, y } = usePointerParallax(40, 16);

  // თითო ნათებას სხვადასხვა სიღრმის parallax — ფიქსირებული hook-ები (3 ბლობი).
  const x0 = useTransform(x, [-1, 1], [-35, 35]);
  const y0 = useTransform(y, [-1, 1], [-28, 28]);
  const x1 = useTransform(x, [-1, 1], [55, -55]);
  const y1 = useTransform(y, [-1, 1], [40, -40]);
  const x2 = useTransform(x, [-1, 1], [-24, 24]);
  const y2 = useTransform(y, [-1, 1], [20, -20]);
  const offsets = [
    { x: x0, y: y0 },
    { x: x1, y: y1 },
    { x: x2, y: y2 },
  ];

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={reduce ? undefined : { x: offsets[i].x, y: offsets[i].y }}
        >
          <motion.div
            className={`absolute rounded-full blur-[90px] ${b.c}`}
            animate={reduce ? undefined : b.a}
            transition={{
              duration: b.d,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
