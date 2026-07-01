import Kicker from "@/components/studio/Kicker";
import { copy, type Lang } from "@/lib/copy";

// SERVICES (01) — 2×2 ბარათი; ბარდერი აქცენტისფერზე იკაშკაშებს hover-ზე.
export default function Services({ lang }: { lang: Lang }) {
  const s = copy[lang].services;

  return (
    <section
      id="services"
      className="mx-auto max-w-[1280px] border-t border-[rgba(243,235,221,0.07)] px-5 py-16 md:px-8 md:py-[88px]"
    >
      <Kicker number={s.number} label={s.kicker} />
      <h2 className="mb-[14px] max-w-[760px] text-[clamp(30px,3.6vw,52px)] font-extrabold leading-[1.05] tracking-[-0.02em]">
        {s.title}
      </h2>
      <p className="mb-[48px] max-w-[560px] text-[18px] text-[rgba(243,235,221,0.55)]">{s.intro}</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {s.items.map((sv) => (
          <div
            key={sv.num}
            className="rounded-[20px] border border-[rgba(243,235,221,0.08)] bg-card p-8 transition-[background-color,border-color] duration-[250ms] hover:border-[rgba(227,162,60,0.4)] hover:bg-card-hover"
          >
            <div className="mb-[22px] flex items-start justify-between">
              <span className="font-mono text-[13px] text-[var(--ac)]">{sv.num}</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(243,235,221,0.16)] text-[18px] text-[rgba(243,235,221,0.7)]">
                {sv.icon}
              </span>
            </div>
            <h3 className="mb-3 text-[23px] font-bold tracking-[-0.01em]">{sv.title}</h3>
            <p className="mb-5 text-[15.5px] leading-[1.6] text-[rgba(243,235,221,0.58)]">{sv.body}</p>
            <span className="font-mono text-[11.5px] tracking-[0.04em] text-[rgba(243,235,221,0.4)]">
              {sv.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
