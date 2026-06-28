"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// ენის გადამრთველი — გადარბენს მიმდინარე გვერდის ბმულზე მეორე ენაზე.
// /  ↔ /en  (მთავარი გვერდი ორი ვერსიით; სხვა ბილიკები — ფესვური / -ით).
export default function LangToggle() {
  const path = usePathname() ?? "/";
  const isEn = path.startsWith("/en");
  const otherHref = isEn ? "/" : "/en";
  const otherLabel = isEn ? "KA" : "EN";

  return (
    <Link
      href={otherHref}
      className="inline-flex h-9 items-center rounded-full border border-line bg-card/60 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft transition-colors hover:border-ink/30 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
      aria-label={isEn ? "Switch to Georgian" : "ენის შეცვლა ინგლისურზე"}
    >
      <span className={isEn ? "text-ink" : "opacity-50"}>EN</span>
      <span className="mx-1.5 text-ink-dim/60">/</span>
      <span className={isEn ? "opacity-50" : "text-ink"}>KA</span>
    </Link>
  );
}
