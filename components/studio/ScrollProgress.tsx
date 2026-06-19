"use client";

import { motion, useScroll, useSpring } from "motion/react";

// გვერდის გადახვევის ინდიკატორი — თხელი ზოლი ზევით.
// მხოლოდ scaleX (transform) იცვლება → GPU, layout-ის გადათვლის გარეშე.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-accent to-accent-2"
    />
  );
}
