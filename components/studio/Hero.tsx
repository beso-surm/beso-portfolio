import { whatsappLink } from "@/lib/site";
import { copy, type Lang } from "@/lib/copy";

// HERO — ორსვეტიანი: მარცხნივ ტექსტი + CTA + სტატისტიკა, მარჯვნივ ink-calligraphy გრაფიკა.
export default function Hero({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const h = t.hero;

  return (
    <section className="relative mx-auto max-w-[1280px] px-5 pb-[64px] pt-[80px] md:px-8">
      <div className="grid min-h-[560px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT — copy */}
        <div>
          <div className="mb-[36px] inline-flex items-center gap-[10px] rounded-full border border-[rgba(243,235,221,0.14)] px-4 py-2 text-[13px] text-[rgba(243,235,221,0.65)]">
            <span
              className="h-[7px] w-[7px] rounded-full bg-[var(--ac)]"
              style={{ animation: "pulse 2.4s ease-in-out infinite" }}
              aria-hidden
            />
            {h.eyebrow}
          </div>

          <h1 className="mb-[28px] text-[clamp(44px,5.6vw,84px)] font-black leading-[0.98] tracking-[-0.025em] text-balance">
            {h.pre}{" "}
            <em className="font-extrabold italic text-[var(--ac)]">{h.em}</em>{" "}
            {h.post}
          </h1>

          <p className="mb-[40px] max-w-[520px] text-[clamp(17px,1.5vw,20px)] leading-[1.55] text-[rgba(243,235,221,0.62)]">
            {h.sub}
          </p>

          <div className="mb-[56px] flex flex-wrap gap-[14px]">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[10px] rounded-full bg-cream px-7 py-4 text-[16px] font-bold text-base no-underline transition-[transform,background-color] duration-200 hover:-translate-y-[2px] hover:bg-[var(--ac)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ac)] focus-visible:ring-offset-2 focus-visible:ring-offset-base"
            >
              {h.cta1} <span className="text-[18px]">→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-[10px] rounded-full border border-[rgba(243,235,221,0.2)] bg-transparent px-7 py-4 text-[16px] font-semibold text-cream no-underline transition-[background-color,border-color] duration-200 hover:border-[rgba(243,235,221,0.3)] hover:bg-[rgba(243,235,221,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ac)] focus-visible:ring-offset-2 focus-visible:ring-offset-base"
            >
              {h.cta2}
            </a>
          </div>

          <div className="flex flex-wrap gap-12">
            {h.stats.map((s) => (
              <div key={s.label}>
                <div className="text-[34px] font-extrabold leading-none tracking-[-0.02em]">{s.num}</div>
                <div className="mt-1.5 text-[13px] uppercase tracking-[0.08em] text-[rgba(243,235,221,0.5)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — ink graphic */}
        <div className="relative flex items-center justify-center" aria-hidden>
          <svg viewBox="0 0 400 420" width="100%" className="h-auto max-w-[470px]" style={{ overflow: "visible" }}>
            <circle
              cx="200" cy="210" r="128" fill="var(--ac)" opacity="0.16"
              style={{ transformOrigin: "200px 210px", animation: "wash 7.5s ease-in-out infinite" }}
            />
            <path
              d="M298 104 C 372 158, 374 262, 302 318 C 230 374, 128 372, 76 300 C 26 230, 46 122, 140 90 C 206 68, 262 78, 300 116"
              pathLength={100} fill="none" stroke="var(--ac)" strokeWidth={6.5}
              strokeLinecap="round" strokeLinejoin="round" strokeDasharray={100}
              style={{ animation: "inkdraw 8s ease-in-out infinite" }}
            />
            <path
              d="M108 318 C 56 262, 64 156, 156 122 C 224 96, 286 138, 296 206"
              pathLength={100} fill="none" stroke="rgba(243,235,221,0.5)" strokeWidth={2.5}
              strokeLinecap="round" strokeDasharray={100}
              style={{ animation: "inkdraw 6.6s ease-in-out infinite", animationDelay: "-2.4s" }}
            />
            <path
              d="M132 332 C 188 352, 244 348, 286 320"
              pathLength={100} fill="none" stroke="var(--ac)" strokeWidth={3}
              strokeLinecap="round" strokeDasharray={100}
              style={{ animation: "inkdraw 5.4s ease-in-out infinite", animationDelay: "-1.2s" }}
            />
            <g style={{ transformOrigin: "200px 212px", animation: "floaty 6.5s ease-in-out infinite" }}>
              <text
                x="200" y="222" textAnchor="middle" dominantBaseline="central"
                fontFamily="var(--font-serif)" fontWeight="700" fontSize="232" fill="#f3ebdd"
              >
                ბ
              </text>
            </g>
            <circle cx="150" cy="300" r="3.2" fill="var(--ac)" style={{ "--sx": "-26px", animation: "speck 4.8s ease-in infinite" } as React.CSSProperties} />
            <circle cx="262" cy="312" r="2.4" fill="var(--ac)" style={{ "--sx": "20px", animation: "speck 5.6s ease-in infinite", animationDelay: "-1.8s" } as React.CSSProperties} />
            <circle cx="206" cy="332" r="2" fill="rgba(243,235,221,0.7)" style={{ "--sx": "8px", animation: "speck 6.2s ease-in infinite", animationDelay: "-3.2s" } as React.CSSProperties} />
            <circle cx="312" cy="232" r="2.6" fill="var(--ac)" style={{ "--sx": "14px", animation: "speck 5.2s ease-in infinite", animationDelay: "-0.8s" } as React.CSSProperties} />
          </svg>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="mt-6 flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.12em] text-[rgba(243,235,221,0.4)]">
        <span className="h-9 w-px bg-[linear-gradient(rgba(243,235,221,0.4),transparent)]" />
        {h.scroll}
      </div>
    </section>
  );
}
