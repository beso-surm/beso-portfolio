import InkMark from "@/components/studio/InkMark";
import { copy, type Lang } from "@/lib/copy";

// FOOTER — პატარა ბ ნიშანი + tag მარცხნივ, copyright მარჯვნივ, ზედა hairline.
export default function Footer({ lang }: { lang: Lang }) {
  const f = copy[lang].footer;

  return (
    <footer className="border-t border-[rgba(243,235,221,0.08)]">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-5 px-5 py-[40px] md:px-8">
        <div className="flex items-center gap-3">
          <InkMark width={38} height={40} rx={26} ry={23} washDur="7s" />
          <span className="text-[13px] text-[rgba(243,235,221,0.4)]">{f.tag}</span>
        </div>
        <div className="text-[13px] text-[rgba(243,235,221,0.4)]">{f.rights}</div>
      </div>
    </footer>
  );
}
