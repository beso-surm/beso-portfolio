// სექციის kicker — მონო ინდექსი + uppercase ლეიბლი (01 · რას ვაკეთებთ).
export default function Kicker({ number, label }: { number: string; label: string }) {
  return (
    <div className="mb-[18px] flex items-baseline gap-[14px]">
      <span className="font-mono text-[14px] text-[var(--ac)]">{number}</span>
      <span className="text-[14px] uppercase tracking-[0.16em] text-[rgba(243,235,221,0.55)]">
        {label}
      </span>
    </div>
  );
}
