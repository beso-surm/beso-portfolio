"use client";

import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { tapScale } from "@/lib/motion";

// პოლიმორფული, ტაქტილური ელემენტი — რენდერდება <a>-დ (href-ით) ან <button>-ად.
// მთავარი დანიშნულება: ერთიანი whileTap უკუკავშირი ყველა ღილაკზე/ბმულზე,
// hover-ზე დამოკიდებულების გარეშე (მობილური უპირველესია). `magnetic`-ით ღილაკი
// დესკტოპზე ნაზად კურსორისკენ "მიიზიდება" (transform-ით, layout-ის შეცვლის გარეშე).
type Common = {
  children: ReactNode;
  className?: string;
  magnetic?: boolean;
  "aria-label"?: string;
};

type AsLink = Common & {
  href: string;
  external?: boolean;
  type?: never;
  onClick?: never;
};

type AsButton = Common & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
};

function useMagnetic(enabled?: boolean) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 16, mass: 0.6 });
  const y = useSpring(my, { stiffness: 220, damping: 16, mass: 0.6 });

  if (!enabled || reduce) {
    return {
      style: undefined,
      onPointerMove: undefined,
      onPointerLeave: undefined,
    };
  }

  const onPointerMove = (e: ReactPointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.35);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const onPointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return { style: { x, y }, onPointerMove, onPointerLeave };
}

export default function Pressable(props: AsLink | AsButton) {
  const mag = useMagnetic(props.magnetic);

  if (props.href !== undefined) {
    const { href, external, children, className } = props;
    return (
      <motion.a
        href={href}
        className={className}
        style={mag.style}
        onPointerMove={mag.onPointerMove}
        onPointerLeave={mag.onPointerLeave}
        whileTap={tapScale}
        aria-label={props["aria-label"]}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </motion.a>
    );
  }

  const { onClick, type = "button", children, className } = props;
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={className}
      style={mag.style}
      onPointerMove={mag.onPointerMove}
      onPointerLeave={mag.onPointerLeave}
      whileTap={tapScale}
      aria-label={props["aria-label"]}
    >
      {children}
    </motion.button>
  );
}
