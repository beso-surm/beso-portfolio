"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import Pressable from "@/components/motion/Pressable";
import { whatsappLink } from "@/lib/site";

// მინიმალისტური ზედა ბარი — გადახვევისას ცოცხლდება შუშისებრი ფონი.
// ერთი backdrop-filter ზედაპირი — perf-ფრიენდლი.
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-300 ${
        scrolled
          ? "glass border-b border-line/70"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a
          href="#top"
          className="text-base font-semibold tracking-tight text-ink"
        >
          ბესო<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-2">
          <a
            href="#work"
            className="hidden text-sm font-medium text-ink-soft transition-colors hover:text-ink sm:inline-block sm:px-3 sm:py-2"
          >
            ნამუშევრები
          </a>
          <a
            href="#pricing"
            className="hidden text-sm font-medium text-ink-soft transition-colors hover:text-ink sm:inline-block sm:px-3 sm:py-2"
          >
            ფასები
          </a>
          <Pressable
            href={whatsappLink}
            external
            className="inline-flex min-h-[42px] items-center rounded-full bg-ink px-4 text-sm font-semibold text-paper transition-colors hover:bg-night-soft"
          >
            დაკავშირება
          </Pressable>
        </div>
      </nav>
    </header>
  );
}
