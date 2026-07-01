import Kicker from "@/components/studio/Kicker";
import { copy, type Lang } from "@/lib/copy";

// PROCESS (03) — ალტ. ფონი (#1b1510). ვერტიკალურად დაწყობილი 5 დანომრილი ნაბიჯი.
export default function Process({ lang }: { lang: Lang }) {
  const p = copy[lang].process;

  return (
    <section
      id="process"
      className="border-y border-[rgba(243,235,221,0.07)] bg-raised"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-[88px]">
        <Kicker number={p.number} label={p.kicker} />
        <h2 className="mb-[14px] max-w-[760px] text-[clamp(30px,3.6vw,52px)] font-extrabold leading-[1.05] tracking-[-0.02em]">
          {p.title}
        </h2>
        <p className="mb-[52px] max-w-[560px] text-[18px] text-[rgba(243,235,221,0.55)]">{p.intro}</p>

        <div className="flex flex-col">
          {p.steps.map((step) => (
            <div
              key={step.num}
              className="grid grid-cols-[80px_1fr] gap-7 border-t border-[rgba(243,235,221,0.1)] py-7"
            >
              <span className="text-[40px] font-extrabold leading-none tracking-[-0.02em] text-[var(--ac)]">
                {step.num}
              </span>
              <div className="max-w-[640px]">
                <h3 className="mb-2 text-[22px] font-bold">{step.title}</h3>
                <p className="text-[16px] leading-[1.6] text-[rgba(243,235,221,0.58)]">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
