import Kicker from "@/components/studio/Kicker";
import { copy, type Lang } from "@/lib/copy";

const STRIPES =
  "repeating-linear-gradient(135deg,rgba(243,235,221,0.05) 0 14px,rgba(243,235,221,0.02) 14px 28px)";

// ABOUT (06) — ორსვეტიანი: ფოტოს placeholder (4:5) + ბიო + tag pills.
// ფოტო ჯერ არ არსებობს → striped placeholder (handoff-ის მიხედვით).
export default function About({ lang }: { lang: Lang }) {
  const a = copy[lang].about;

  return (
    <section id="about" className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-[88px]">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[56px]">
        <div
          className="flex aspect-[4/5] items-center justify-center rounded-[24px] border border-[rgba(243,235,221,0.08)]"
          style={{ backgroundImage: STRIPES }}
        >
          <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-[rgba(243,235,221,0.35)]">
            {a.photo}
          </span>
        </div>

        <div>
          <Kicker number={a.number} label={a.kicker} />
          <h2 className="mb-6 text-[clamp(30px,3.6vw,48px)] font-extrabold leading-[1.05] tracking-[-0.02em]">
            {a.title}
          </h2>
          <p className="mb-[18px] text-[17px] leading-[1.7] text-[rgba(243,235,221,0.65)]">{a.p1}</p>
          <p className="mb-7 text-[17px] leading-[1.7] text-[rgba(243,235,221,0.65)]">{a.p2}</p>
          <div className="flex flex-wrap gap-[10px]">
            {a.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[rgba(243,235,221,0.16)] px-4 py-2 text-[13px] text-[rgba(243,235,221,0.7)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
