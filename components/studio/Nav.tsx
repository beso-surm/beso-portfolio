"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import Pressable from "@/components/motion/Pressable";
import { whatsappLink } from "@/lib/site";

// მინიმალისტური ზედა ბარი. გადახვევისას ჩნდება ბუნდოვანი ფონი და ქვედა ხაზი —
// კონტენტი რჩება მთავარი, ნავიგაცია — მსუბუქი.
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a
          href="#top"
          className="text-base font-semibold tracking-tight text-mist"
        >
          ბესო<span className="text-accent">.</span>
        </a>
        <Pressable
          href={whatsappLink}
          external
          className="inline-flex min-h-[44px] items-center rounded-full border border-white/15 px-4 text-sm font-medium text-mist"
        >
          დაკავშირება
        </Pressable>
      </nav>
    </header>
  );
}
