import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 text-sm text-ink-soft sm:flex-row sm:items-center">
        <div>
          <p className="font-serif text-2xl font-bold tracking-tight text-ink">
            ბესო<span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-xs text-ink-dim">
            ვებ-სტუდია · {site.city}
          </p>
        </div>
        <div className="flex flex-col gap-1 text-xs text-ink-dim sm:items-end">
          <p>
            © {year} {site.name}. ყველა უფლება დაცულია.
          </p>
          <p>აშენებულია სიყვარულით ქუთაისში.</p>
        </div>
      </div>
    </footer>
  );
}
