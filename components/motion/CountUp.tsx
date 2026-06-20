"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

// რიცხვი, რომელიც ეკრანზე გამოჩენისას 0-დან მიზნობრივ მნიშვნელობამდე "ითვლება".
// SSR-ში და reduced-motion-ზე მაშინვე საბოლოო რიცხვს აჩვენებს (კარგია SEO-სთვის);
// კლიენტზე, სანამ ბლოკი ხილვადი გახდება, 0-ს აყენებს და შემდეგ ანიმირებს.
export default function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 1.3,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value); // SSR/hydration → რეალური რიცხვი
  const started = useRef(false);

  useEffect(() => {
    if (reduce || started.current) return;
    if (!inView) {
      setDisplay(0); // ჯერ ხილვადი არ არის — კლიენტზე 0-დან დავიწყოთ
      return;
    }
    started.current = true;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
