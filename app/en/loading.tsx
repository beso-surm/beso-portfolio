export default function Loading() {
  return (
    <div className="flex min-h-[100svh] items-center justify-center bg-paper">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" />
        <p className="text-xs uppercase tracking-[0.22em] text-ink-dim">
          Loading
        </p>
      </div>
    </div>
  );
}
