import Image from "next/image";
import Kicker from "@/components/studio/Kicker";
import { copy, type Lang } from "@/lib/copy";

// WORK (02) — ცოცხალი პროექტების ბარათები რეალური სქრინშოტებით.
// (handoff-ის striped placeholder-ები მონიშნულია "to be replaced with real screenshots".)
const meta = [
  { url: "https://georgianhousekutaisi.com", image: "/work/georgian-house.jpg" },
  { url: "https://kvirikehills.com", image: "/work/kvirike-hills.jpg" },
];

export default function Work({ lang }: { lang: Lang }) {
  const w = copy[lang].work;

  return (
    <section id="work" className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-[88px]">
      <Kicker number={w.number} label={w.kicker} />
      <h2 className="mb-[14px] max-w-[760px] text-[clamp(30px,3.6vw,52px)] font-extrabold leading-[1.05] tracking-[-0.02em]">
        {w.title}
      </h2>
      <p className="mb-[48px] max-w-[560px] text-[18px] text-[rgba(243,235,221,0.55)]">{w.intro}</p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {w.items.map((p, i) => (
          <a
            key={p.num}
            href={meta[i].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-[24px] border border-[rgba(243,235,221,0.08)] bg-card text-cream no-underline transition-[transform,border-color] duration-[250ms] hover:-translate-y-1 hover:border-[rgba(227,162,60,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ac)] focus-visible:ring-offset-2 focus-visible:ring-offset-base"
          >
            <div className="relative h-[280px] border-b border-[rgba(243,235,221,0.08)]">
              <Image
                src={meta[i].image}
                alt={`${p.name} — ${p.type}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
              <span className="absolute right-[18px] top-[18px] flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(243,235,221,0.2)] bg-[rgba(22,17,13,0.7)] text-[16px] backdrop-blur-sm">
                ↗
              </span>
            </div>
            <div className="px-[30px] pb-8 pt-7">
              <div className="mb-[10px] flex items-baseline justify-between">
                <span className="font-mono text-[12px] text-[var(--ac)]">{p.num}</span>
                <span className="text-[13px] text-[rgba(243,235,221,0.5)]">{p.type}</span>
              </div>
              <h3 className="mb-2 text-[26px] font-bold tracking-[-0.01em]">{p.name}</h3>
              <p className="text-[15px] leading-[1.5] text-[rgba(243,235,221,0.55)]">{p.desc}</p>
            </div>
          </a>
        ))}
      </div>

      <p className="mt-8 text-[15.5px] text-[rgba(243,235,221,0.5)]">
        {w.note}{" "}
        <a
          href="#contact"
          className="border-b border-[rgba(227,162,60,0.4)] text-[var(--ac)] no-underline"
        >
          {w.noteLink}
        </a>
        .
      </p>
    </section>
  );
}
