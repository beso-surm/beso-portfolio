"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Pressable from "@/components/motion/Pressable";
import LangToggle from "@/components/studio/LangToggle";
import { whatsappLink } from "@/lib/site";
import { copy, type Lang } from "@/lib/copy";

const sectionIds = ["work", "pricing"] as const;

export default function Nav({ lang }: { lang: Lang }) {
  const t = copy[lang].nav;
  const navSections = sectionIds.map((id) => ({ id, label: t[id] }));
  const homeHref = lang === "en" ? "/en#top" : "/#top";

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  useEffect(() => {
    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

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
          href={homeHref}
          className="rounded-md text-base font-semibold tracking-tight text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
        >
          ბესო<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative hidden rounded-full text-sm font-medium transition-colors sm:inline-block sm:px-3 sm:py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${
                active === s.id ? "text-ink" : "text-ink-soft hover:text-ink"
              }`}
            >
              {s.label}
              {active === s.id && (
                <motion.span
                  layoutId="nav-active-indicator"
                  className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
            </a>
          ))}
          <LangToggle />
          <Pressable
            href={whatsappLink}
            external
            className="inline-flex min-h-[42px] items-center rounded-full bg-ink px-4 text-sm font-semibold text-paper transition-colors hover:bg-night-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            {t.contact}
          </Pressable>
        </div>
      </nav>
    </header>
  );
}
