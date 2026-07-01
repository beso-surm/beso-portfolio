import { copy, type Lang } from "@/lib/copy";

// MARQUEE — უსასრულო ჰორიზონტალური ლენტი (linear, ~32s). კონტენტი გაორმაგებულია
// უწყვეტი ლუპისთვის; translateX(-50%) ერთ ორიგინალ ნაკრებს გადააადგილებს.
export default function Marquee({ lang }: { lang: Lang }) {
  const words = copy[lang].marquee;

  const Group = ({ hidden }: { hidden?: boolean }) => (
    <span className="inline-flex items-center" aria-hidden={hidden || undefined}>
      {words.map((w, i) => (
        <span key={i} className="inline-flex items-center">
          <span className="px-7 text-[26px] font-bold tracking-[-0.01em] text-[rgba(243,235,221,0.85)]">
            {w}
          </span>
          <span className="text-[18px] text-[var(--ac)]">✦</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-[rgba(243,235,221,0.07)] py-[26px]">
      <div className="inline-flex will-change-transform" style={{ animation: "marq 32s linear infinite" }}>
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
