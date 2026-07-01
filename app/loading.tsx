// Route-level loading UI (Next.js 16) — ესპრესო თემაზე მორგებული მინიმალური სკელეტონი.
export default function Loading() {
  return (
    <div className="flex min-h-[100svh] items-center justify-center bg-base">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[rgba(243,235,221,0.15)] border-t-[var(--ac)]" />
        <p className="text-xs uppercase tracking-[0.22em] text-[rgba(243,235,221,0.4)]">
          იტვირთება
        </p>
      </div>
    </div>
  );
}
