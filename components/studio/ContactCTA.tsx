import Reveal from "@/components/motion/Reveal";
import Pressable from "@/components/motion/Pressable";
import { site, whatsappLink, instagramLink } from "@/lib/site";
import { copy, type Lang } from "@/lib/copy";

export default function ContactCTA({ lang }: { lang: Lang }) {
  const t = copy[lang].contactCta;
  return (
    <section id="contact" className="px-5 py-28 sm:py-36">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-ink px-6 py-20 text-center sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-1/3 left-1/2 -z-0 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-1/3 right-0 -z-0 h-[40vh] w-[40vh] rounded-full bg-accent-soft/20 blur-[120px]"
        />

        <div className="relative">
          <Reveal
            as="div"
            className="flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-mist-dim"
          >
            <span className="font-serif text-base font-bold tracking-tight text-accent">
              {t.number}
            </span>
            <span aria-hidden className="h-px w-8 bg-mist-dim/40" />
            <span>{t.eyebrow}</span>
          </Reveal>
          <Reveal
            as="h2"
            className="mx-auto mt-6 max-w-2xl font-serif text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-mist sm:text-6xl lg:text-7xl"
          >
            {t.titleA}{" "}
            <em className="font-medium italic text-accent">{t.titleItalic}</em>
            {t.titleB}
          </Reveal>
          <Reveal as="p" className="mx-auto mt-6 max-w-md text-base leading-7 text-mist-dim">
            {t.subtitle}
          </Reveal>

          <Reveal className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Pressable
              href={whatsappLink}
              external
              magnetic
              className="inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-accent px-8 text-base font-semibold text-white shadow-lg shadow-accent/30 sm:w-auto"
            >
              {t.ctaPrimary}
              <span aria-hidden>→</span>
            </Pressable>
            <Pressable
              href={site.phoneHref}
              className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full border border-mist/20 px-8 text-base font-medium text-mist hover:bg-mist/10 transition-colors sm:w-auto"
            >
              {site.phoneDisplay}
            </Pressable>
          </Reveal>

          <Reveal className="mt-8 flex items-center justify-center gap-5 text-sm text-mist-dim">
            <a href={`mailto:${site.email}`} className="hover:text-mist">
              {site.email}
            </a>
            <span aria-hidden>·</span>
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mist"
            >
              @{site.instagram}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
