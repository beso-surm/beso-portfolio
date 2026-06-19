import { instagramLink, navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    // ქვედა padding მობილურზე StickyContact ზოლს უტოვებს ადგილს
    <footer className="border-t border-stone-200 bg-white pb-28 pt-10 lg:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-base font-bold tracking-tight">
            {site.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-stone-500">
            {site.tagline} · {site.city}
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-stone-600 transition-colors hover:text-stone-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-600 transition-colors hover:text-stone-900"
          >
            Instagram
          </a>
        </nav>
        <p className="text-sm text-stone-400">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
