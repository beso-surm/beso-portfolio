"use client";

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

// პროექტის ბარათი 3D დახრით — დესკტოპზე კურსორისკენ იხრება, ზედაპირზე კი
// ნათების "ლაქა" მიჰყვება მაჩვენებელს. შეხებაზე (მობილური) მხოლოდ tap-ის
// მასშტაბირება რჩება, რომ ბმულზე გადასვლა არ შეფერხდეს. transform/opacity only.
type Props = {
  name: string;
  kind: string;
  href: string;
  monogram: string;
  gradient: string;
  image?: string;
  position?: string;
};

export default function ProjectCard({
  name,
  kind,
  href,
  monogram,
  gradient,
  image,
  position,
}: Props) {
  const reduce = useReducedMotion();

  // მაჩვენებლის პოზიცია ბარათის შიგნით: -0.5..0.5
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 150, damping: 18, mass: 0.5 });
  const sy = useSpring(py, { stiffness: 150, damping: 18, mass: 0.5 });

  const rotateX = useTransform(sy, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-7, 7]);

  const sheenX = useTransform(sx, [-0.5, 0.5], ["0%", "100%"]);
  const sheenY = useTransform(sy, [-0.5, 0.5], ["0%", "100%"]);
  const sheen = useMotionTemplate`radial-gradient(240px circle at ${sheenX} ${sheenY}, rgba(255,255,255,0.28), transparent 60%)`;

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
        style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-ink-soft"
      >
        <div
          className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${gradient}`}
        >
          {image ? (
            <img
              src={image}
              alt={`${name} — ${kind}`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
              style={position ? { objectPosition: position } : undefined}
            />
          ) : (
            <span className="font-serif text-6xl font-bold tracking-tight text-white/90">
              {monogram}
            </span>
          )}

          {/* ნათების ლაქა — მიჰყვება კურსორს (მხოლოდ დესკტოპზე ჩანს) */}
          {!reduce && (
            <motion.span
              aria-hidden
              style={{ background: sheen }}
              className="pointer-events-none absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
        </div>

        <div className="flex items-center justify-between gap-4 px-6 py-5">
          <div>
            <h3 className="text-lg font-semibold text-mist">{name}</h3>
            <p className="mt-1 text-sm text-mist-dim">{kind}</p>
          </div>
          <span
            aria-hidden
            className="text-mist-dim transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1"
          >
            ↗
          </span>
        </div>
      </motion.a>
    </motion.div>
  );
}
