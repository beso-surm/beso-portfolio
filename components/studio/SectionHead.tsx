import Reveal from "@/components/motion/Reveal";
import WordReveal from "@/components/motion/WordReveal";

// რედაქციული თავი — სექციის ნომერი, eyebrow, სათაური სიტყვა-სიტყვით.
// ნომერი დიდი მონოს ფონტითაა — ჟურნალური მინიშნება, რომელიც გვერდს რიტმს აძლევს.
export default function SectionHead({
  number,
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  number?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <Reveal
        as="div"
        className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-soft ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        {number && (
          <>
            <span className="font-serif text-base font-bold tracking-tight text-accent">
              {number}
            </span>
            <span aria-hidden className="h-px w-8 bg-line" />
          </>
        )}
        <span>{eyebrow}</span>
      </Reveal>
      <h2 className="mt-5 font-serif text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-ink sm:text-5xl lg:text-6xl">
        <WordReveal text={title} />
      </h2>
      {subtitle && (
        <Reveal
          as="p"
          className="mt-5 max-w-xl text-base leading-7 text-ink-soft sm:text-lg"
        >
          {subtitle}
        </Reveal>
      )}
    </div>
  );
}
