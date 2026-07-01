import Kicker from "@/components/studio/Kicker";
import { site, whatsappLink, instagramLink } from "@/lib/site";
import { copy, type Lang } from "@/lib/copy";

// CONTACT (07) — დიდი მომრგვალებული ბარათი, ინკ-ვაშ მოტივით (უფრო მცირე/ნაზი),
// სათაური, WhatsApp + ტელეფონის CTA და email/Instagram ბმულები.
export default function ContactCTA({ lang }: { lang: Lang }) {
  const c = copy[lang].contact;

  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-5 pb-[96px] pt-[40px] md:px-8">
      <div className="relative overflow-hidden rounded-[32px] border border-[rgba(243,235,221,0.1)] bg-card p-[clamp(40px,6vw,80px)]">
        {/* ink-wash motif */}
        <svg
          viewBox="0 0 320 320"
          width="360"
          height="360"
          className="pointer-events-none absolute right-[-70px] top-[-90px]"
          style={{ overflow: "visible" }}
          aria-hidden
        >
          <circle
            cx="180" cy="150" r="100" fill="var(--ac)" opacity="0.1"
            style={{ transformOrigin: "180px 150px", animation: "wash 8s ease-in-out infinite" }}
          />
          <path
            d="M250 64 C 312 110, 314 206, 250 250 C 186 294, 96 290, 56 226"
            pathLength={100} fill="none" stroke="rgba(227,162,60,0.4)" strokeWidth={3}
            strokeLinecap="round" strokeDasharray={100}
            style={{ animation: "inkdraw 9s ease-in-out infinite" }}
          />
          <path
            d="M96 252 C 52 210, 58 132, 132 108"
            pathLength={100} fill="none" stroke="rgba(243,235,221,0.22)" strokeWidth={2}
            strokeLinecap="round" strokeDasharray={100}
            style={{ animation: "inkdraw 7s ease-in-out infinite", animationDelay: "-2s" }}
          />
        </svg>

        <div className="relative max-w-[720px]">
          <Kicker number={c.number} label={c.kicker} />
          <h2 className="mb-[22px] text-[clamp(34px,4.6vw,64px)] font-black leading-none tracking-[-0.025em] text-balance">
            {c.pre} <em className="font-extrabold italic text-[var(--ac)]">{c.em}</em>
          </h2>
          <p className="mb-9 max-w-[520px] text-[18px] leading-[1.55] text-[rgba(243,235,221,0.6)]">
            {c.sub}
          </p>
          <div className="mb-10 flex flex-wrap gap-[14px]">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[10px] rounded-full bg-[var(--ac)] px-7 py-4 text-[16px] font-bold text-base no-underline transition-transform duration-200 hover:-translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ac)] focus-visible:ring-offset-2 focus-visible:ring-offset-card"
            >
              {c.btn} <span>→</span>
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-[10px] rounded-full border border-[rgba(243,235,221,0.2)] bg-transparent px-7 py-4 text-[16px] font-semibold text-cream no-underline transition-[background-color,border-color] duration-200 hover:border-[rgba(243,235,221,0.3)] hover:bg-[rgba(243,235,221,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ac)] focus-visible:ring-offset-2 focus-visible:ring-offset-card"
            >
              {site.phoneDisplay}
            </a>
          </div>
          <div className="flex flex-wrap gap-7 text-[15px]">
            <a
              href={`mailto:${site.email}`}
              className="text-[rgba(243,235,221,0.7)] no-underline transition-colors hover:text-[var(--ac)]"
            >
              {site.email}
            </a>
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgba(243,235,221,0.7)] no-underline transition-colors hover:text-[var(--ac)]"
            >
              @{site.instagram}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
