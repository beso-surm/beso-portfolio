"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Kicker from "@/components/studio/Kicker";
import { copy, type Lang } from "@/lib/copy";

// FAQ (05) — აკორდეონი. თავიდან პირველი ღიაა; ერთდროულად მხოლოდ ერთი იშლება.
// "+" ტრიალდება 45°-ით. პასუხის სიმაღლეს ვზომავ (fixed max-height არ ჭრის გრძელ ტექსტს).
export default function FAQ({ lang }: { lang: Lang }) {
  const f = copy[lang].faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-y border-[rgba(243,235,221,0.07)] bg-raised">
      <div className="mx-auto max-w-[920px] px-5 py-16 md:px-8 md:py-[88px]">
        <Kicker number={f.number} label={f.kicker} />
        <h2 className="mb-[40px] text-[clamp(30px,3.6vw,52px)] font-extrabold leading-[1.05] tracking-[-0.02em]">
          {f.title}
        </h2>
        <div className="flex flex-col">
          {f.items.map((q, i) => (
            <FaqRow
              key={q.num}
              num={q.num}
              q={q.q}
              a={q.a}
              isOpen={open === i}
              onToggle={() => setOpen((cur) => (cur === i ? null : i))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqRow({
  num,
  q,
  a,
  isOpen,
  onToggle,
}: {
  num: string;
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const inner = useRef<HTMLParagraphElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const el = inner.current;
    if (!el) return;
    const measure = () => setHeight(el.scrollHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="border-t border-[rgba(243,235,221,0.1)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-5 px-1 py-[26px] text-left text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ac)] focus-visible:ring-offset-2 focus-visible:ring-offset-raised"
      >
        <span className="flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-[var(--ac)]">{num}</span>
          <span className="text-[18.5px] font-semibold">{q}</span>
        </span>
        <span
          className="inline-block flex-shrink-0 text-[26px] font-light text-[var(--ac)] transition-transform duration-[250ms]"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden"
        style={{
          maxHeight: isOpen ? height : 0,
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.3s ease, opacity 0.25s",
        }}
      >
        <p
          ref={inner}
          className="pb-[26px] pl-[46px] pr-1 text-[16px] leading-[1.65] text-[rgba(243,235,221,0.6)]"
        >
          {a}
        </p>
      </div>
    </div>
  );
}
