"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

// კონტეინერი, რომელიც შვილებს თანმიმდევრობით აჩენს ეკრანზე გადახვევისას.
// გამოიყენე <Stagger> + <StaggerItem> წყვილად.
export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
