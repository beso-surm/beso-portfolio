"use client";

import { useEffect } from "react";
import { useMotionValue, useReducedMotion, useSpring } from "motion/react";

// მაჩვენებლის (კურსორი) ნაზად დამუშავებული პოზიცია, ნორმალიზებული [-1, 1]-ში,
// ეკრანის ცენტრის მიმართ. მხოლოდ "fine" მაჩვენებელზე (დესკტოპი) ააქტიურებს —
// მობილურზე და reduced-motion-ზე 0-ში რჩება, ანუ ეფექტი ითიშება.
export function usePointerParallax(stiffness = 50, damping = 18) {
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness, damping, mass: 0.6 });
  const y = useSpring(rawY, { stiffness, damping, mass: 0.6 });

  useEffect(() => {
    if (reduce || typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: PointerEvent) => {
      rawX.set((e.clientX / window.innerWidth) * 2 - 1);
      rawY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, rawX, rawY]);

  return { x, y };
}
