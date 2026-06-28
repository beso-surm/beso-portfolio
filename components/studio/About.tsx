import Reveal from "@/components/motion/Reveal";
import WordReveal from "@/components/motion/WordReveal";
import { copy, type Lang } from "@/lib/copy";

export default function About({ lang }: { lang: Lang }) {
  const t = copy[lang].about;
  return (
    <section id="about" className="bg-paper-soft px-5 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-10 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-12">
          <Reveal>
            <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] bg-ink font-serif text-6xl font-bold text-paper shadow-xl shadow-ink/10">
              ბ
            </div>
          </Reveal>

          <div>
            <Reveal
              as="div"
              className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-soft"
            >
              <span className="font-serif text-base font-bold tracking-tight text-accent">
                {t.number}
              </span>
              <span aria-hidden className="h-px w-8 bg-line" />
              <span>{t.eyebrow}</span>
            </Reveal>
            <h2 className="mt-5 font-serif text-4xl font-bold tracking-[-0.02em] text-ink sm:text-5xl">
              <WordReveal text={t.title} />
            </h2>
            {t.paragraphs.map((p, i) => (
              <Reveal
                key={i}
                as="p"
                className={`${i === 0 ? "drop-cap mt-6" : "mt-3"} text-base leading-7 text-ink-soft`}
              >
                {p}
              </Reveal>
            ))}

            <Reveal className="mt-7 flex flex-wrap gap-2">
              {t.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-line bg-card px-3.5 py-1.5 text-xs text-ink-soft"
                >
                  {chip}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
