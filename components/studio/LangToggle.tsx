"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// ენის გადამრთველი — მინიმალური "KA / EN" ტექსტ-ტოგლი (handoff-ის ზუსტი სტილი).
// აქტიური ენა — აქცენტისფერი, არააქტიური — მიბინდული. მარშრუტზე დაფუძნებული (/ ↔ /en) — SEO-სთვის.
export default function LangToggle() {
  const path = usePathname() ?? "/";
  const isEn = path.startsWith("/en");
  const otherHref = isEn ? "/" : "/en";

  const base = "text-[13.5px] font-bold tracking-[0.07em] transition-colors duration-200";
  const active = "text-[var(--ac)]";
  const idle = "text-[rgba(243,235,221,0.4)]";

  return (
    <Link
      href={otherHref}
      aria-label={isEn ? "Switch to Georgian" : "ენის შეცვლა ინგლისურზე"}
      className="flex items-center gap-[7px] no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ac)] focus-visible:ring-offset-4 focus-visible:ring-offset-base"
    >
      <span className={`${base} ${isEn ? idle : active}`}>KA</span>
      <span className="text-[12px] text-[rgba(243,235,221,0.25)]">/</span>
      <span className={`${base} ${isEn ? active : idle}`}>EN</span>
    </Link>
  );
}
