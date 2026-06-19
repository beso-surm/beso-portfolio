"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { tapScale } from "@/lib/motion";

// პოლიმორფული, ტაქტილური ელემენტი — რენდერდება <a>-დ (href-ით) ან <button>-ად.
// მთავარი დანიშნულება: ერთიანი whileTap უკუკავშირი ყველა ღილაკზე/ბმულზე,
// hover-ზე დამოკიდებულების გარეშე (მობილური უპირველესია).
type Common = { children: ReactNode; className?: string; "aria-label"?: string };

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

export default function Pressable(props: AsLink | AsButton) {
  if (props.href !== undefined) {
    const { href, external, children, className } = props;
    return (
      <motion.a
        href={href}
        className={className}
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
      whileTap={tapScale}
      aria-label={props["aria-label"]}
    >
      {children}
    </motion.button>
  );
}
