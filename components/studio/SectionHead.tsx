import Reveal from "@/components/motion/Reveal";
import WordReveal from "@/components/motion/WordReveal";

// მარცხნივ გასწორებული, რედაქციული სათაური — განზრახ არა "ცენტრში-ცენტრში SaaS".
// სათაური სიტყვა-სიტყვით ცოცხლდება (WordReveal), eyebrow/subtitle კი ბლოკად შემოდის.
export default function SectionHead({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <Reveal
        as="p"
        className="text-xs font-semibold uppercase tracking-[0.2em] text-accent"
      >
        {eyebrow}
      </Reveal>
      <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-mist sm:text-4xl">
        <WordReveal text={title} />
      </h2>
      {subtitle && (
        <Reveal as="p" className="mt-4 text-base leading-7 text-mist-dim">
          {subtitle}
        </Reveal>
      )}
    </div>
  );
}
