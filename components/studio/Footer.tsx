import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-mist-dim sm:flex-row">
        <p className="font-semibold text-mist">
          ბესო<span className="text-accent">.</span>
        </p>
        <p>
          © {year} {site.name} · {site.city}
        </p>
      </div>
    </footer>
  );
}
