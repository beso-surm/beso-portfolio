import Kicker from "@/components/studio/Kicker";
import { whatsappLink } from "@/lib/site";
import { copy, type Lang } from "@/lib/copy";

// PRICING (04) — 3 პაკეტი; შუა ("პოპულარული") აქცენტისფერი ბარდერით + ring + badge.
export default function Pricing({ lang }: { lang: Lang }) {
  const pr = copy[lang].pricing;

  return (
    <section id="pricing" className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-[88px]">
      <Kicker number={pr.number} label={pr.kicker} />
      <h2 className="mb-[14px] max-w-[760px] text-[clamp(30px,3.6vw,52px)] font-extrabold leading-[1.05] tracking-[-0.02em]">
        {pr.title}
      </h2>
      <p className="mb-[48px] max-w-[560px] text-[18px] text-[rgba(243,235,221,0.55)]">{pr.intro}</p>

      <div className="grid grid-cols-1 items-start gap-[18px] lg:grid-cols-3">
        {pr.tiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col rounded-[24px] bg-card px-8 py-9 ${
              tier.popular
                ? "border-[1.5px] border-[var(--ac)] shadow-[0_0_0_4px_rgba(227,162,60,0.08)]"
                : "border border-[rgba(243,235,221,0.1)]"
            }`}
          >
            {tier.popular && (
              <span className="mb-[18px] inline-block self-start rounded-full bg-[var(--ac)] px-[14px] py-1.5 text-[12px] font-bold uppercase tracking-[0.08em] text-base">
                {pr.popular}
              </span>
            )}
            <h3 className="mb-4 text-[21px] font-bold">{tier.name}</h3>
            <div className="mb-[18px] flex items-baseline gap-2">
              <span className="text-[46px] font-extrabold tracking-[-0.02em]">{tier.price}</span>
              <span className="text-[14px] text-[rgba(243,235,221,0.5)]">{pr.from}</span>
            </div>
            <p className="mb-6 min-h-[66px] text-[15px] leading-[1.55] text-[rgba(243,235,221,0.58)]">
              {tier.desc}
            </p>
            <div className="mb-[22px] h-px bg-[rgba(243,235,221,0.1)]" />
            <div className="mb-[30px] flex flex-col gap-[13px]">
              {tier.features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-[11px] text-[14.5px] leading-[1.45] text-[rgba(243,235,221,0.78)]"
                >
                  <span className="mt-px text-[14px] text-[var(--ac)]">✓</span>
                  {f}
                </div>
              ))}
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-auto rounded-full px-5 py-3.5 text-center text-[15px] font-bold no-underline transition-transform duration-200 hover:-translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ac)] focus-visible:ring-offset-2 focus-visible:ring-offset-base ${
                tier.popular
                  ? "bg-[var(--ac)] text-base"
                  : "border border-[rgba(243,235,221,0.16)] bg-[rgba(243,235,221,0.08)] text-cream"
              }`}
            >
              {pr.cta}
            </a>
          </div>
        ))}
      </div>

      <p className="mt-[28px] max-w-[640px] text-[14.5px] text-[rgba(243,235,221,0.45)]">{pr.note}</p>
    </section>
  );
}
