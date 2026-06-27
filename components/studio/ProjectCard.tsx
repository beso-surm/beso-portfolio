"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { staggerItem, tapScaleSubtle } from "@/lib/motion";

type Props = {
  num: string;
  name: string;
  kind: string;
  href: string;
  monogram: string;
  gradient: string;
  image?: string;
  position?: string;
  outcome?: string;
};

// რედაქციული პროექტ-ბარათი — ნომერი, სათაური, სატარგო, ცოცხალი ჩარჩო.
// დესკტოპზე — ნაზი 3D დახრა (transform only); მობილურზე — სუფთა ტაპი.
export default function ProjectCard({
  num,
  name,
  kind,
  href,
  monogram,
  gradient,
  image,
  position,
  outcome,
}: Props) {
  const reduce = useReducedMotion();

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 150, damping: 18, mass: 0.5 });
  const sy = useSpring(py, { stiffness: 150, damping: 18, mass: 0.5 });

  const rotateX = useTransform(sy, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-5, 5]);

  const sheenX = useTransform(sx, [-0.5, 0.5], ["0%", "100%"]);
  const sheenY = useTransform(sy, [-0.5, 0.5], ["0%", "100%"]);
  const sheen = useMotionTemplate`radial-gradient(280px circle at ${sheenX} ${sheenY}, rgba(255,255,255,0.22), transparent 60%)`;

  const onMove = (e: ReactPointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div variants={staggerItem} className="[perspective:1200px]">
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onPointerMove={onMove}
        onPointerLeave={reset}
        whileTap={tapScaleSubtle}
        style={
          reduce
            ? undefined
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        className="group relative block overflow-hidden rounded-3xl border border-line bg-card shadow-sm shadow-ink/[0.04] transition-shadow hover:shadow-xl hover:shadow-ink/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
      >
        <div
          className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${gradient}`}
        >
          {image ? (
            <Image
              src={image}
              alt={`${name} — ${kind}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              style={position ? { objectPosition: position } : undefined}
              quality={85}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-6xl font-bold tracking-tight text-white/90">
                {monogram}
              </span>
            </div>
          )}

          {/* ნომერი — შუშის ფირფიტა */}
          <span className="glass-dark absolute left-4 top-4 z-10 inline-flex items-center rounded-full px-3 py-1 font-serif text-xs font-bold tracking-tight text-mist">
            {num}
          </span>

          {!reduce && (
            <motion.span
              aria-hidden
              style={{ background: sheen }}
              className="pointer-events-none absolute inset-0 z-10 opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
        </div>

        <div className="flex items-start justify-between gap-4 px-6 py-6">
          <div>
            <h3 className="font-serif text-2xl font-bold tracking-tight text-ink">
              {name}
            </h3>
            <p className="mt-1 text-sm text-ink-soft">{kind}</p>
            {outcome && (
              <p className="mt-3 text-sm leading-6 text-ink-dim">{outcome}</p>
            )}
          </div>
          <span
            aria-hidden
            className="mt-1.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
          >
            ↗
          </span>
        </div>
      </motion.a>
    </motion.div>
  );
}
