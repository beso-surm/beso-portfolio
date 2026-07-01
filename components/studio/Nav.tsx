import InkMark from "@/components/studio/InkMark";
import LangToggle from "@/components/studio/LangToggle";
import { whatsappLink } from "@/lib/site";
import { copy, type Lang } from "@/lib/copy";

// Sticky glass nav — logo lockup მარცხნივ, ლინკები + ენა + WhatsApp CTA მარჯვნივ.
// backdrop-blur მუდმივია (არა scroll-triggered) — handoff-ის ზუსტი ქცევა.
export default function Nav({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const homeHref = lang === "en" ? "/en" : "/";

  return (
    <nav className="sticky top-0 z-[60] border-b border-[rgba(243,235,221,0.09)] bg-[rgba(22,17,13,0.78)] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-3.5 md:gap-8 md:px-8">
        {/* Logo lockup */}
        <a
          href={homeHref}
          className="group flex items-center gap-[13px] text-cream no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ac)] focus-visible:ring-offset-4 focus-visible:ring-offset-base"
        >
          <span className="inline-flex transition-transform duration-[350ms] ease-out group-hover:-translate-y-0.5">
            <InkMark width={48} height={48} washDur="6s" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[22px] font-bold tracking-[-0.01em]">ბესო</span>
            <span className="mt-1 hidden whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.24em] text-[rgba(243,235,221,0.42)] sm:block">
              Web Studio · Kutaisi
            </span>
          </span>
        </a>

        {/* Right cluster */}
        <div className="flex items-center gap-3 md:gap-[30px]">
          <div className="hidden items-center gap-[30px] lg:flex">
            {t.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="border-b-[1.5px] border-transparent pb-1 text-[14.5px] font-medium text-[rgba(243,235,221,0.58)] no-underline transition-colors duration-200 hover:border-[var(--ac)] hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ac)] focus-visible:ring-offset-2 focus-visible:ring-offset-base"
              >
                {n.label}
              </a>
            ))}
          </div>

          <span className="hidden h-[22px] w-px bg-[rgba(243,235,221,0.13)] lg:block" />

          <LangToggle />

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-cream px-4 py-[11px] text-[13px] font-bold text-base no-underline transition-[transform,background-color] duration-200 hover:-translate-y-px hover:bg-[var(--ac)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ac)] focus-visible:ring-offset-2 focus-visible:ring-offset-base md:gap-[9px] md:px-[21px] md:text-[14px]"
          >
            <span className="h-[7px] w-[7px] rounded-full bg-base" />
            {t.navCta}
          </a>
        </div>
      </div>
    </nav>
  );
}
