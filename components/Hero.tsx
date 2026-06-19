import { site, whatsappLink } from "@/lib/site";

const stats = [
  { value: "2", label: "ცოცხალი პროექტი" },
  { value: "1–2 კვირა", label: "გაშვებამდე" },
  { value: "100%", label: "მობილურზე მორგებული" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-150 bg-gradient-to-b from-accent-soft via-white to-white" />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-1.5 text-sm font-medium text-stone-600">
              <span className="h-2 w-2 rounded-full bg-accent" />
              ვებ-დეველოპერი · {site.city}
            </p>
            <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.18] tracking-tight text-stone-900 sm:text-5xl">
              ვებსაიტი, რომელიც თქვენს ბიზნესს{" "}
              <span className="text-accent">სტუმრებს მოუყვანს</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-stone-600 lg:mx-0">
              ვუმზადებ ქართულ სასტუმროებს, კოტეჯებს, რესტორნებსა და მცირე
              ბიზნესებს სუფთა, თანამედროვე ვებსაიტებს — ისეთს, რომელიც ნდობას
              ქმნის და სტუმარს დაკავშირებამდე ან დაჯავშნამდე მიჰყავს.
            </p>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-stone-900 px-8 py-3.5 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-stone-700 sm:w-auto"
              >
                მომწერეთ WhatsApp-ში
              </a>
              <a
                href="#portfolio"
                className="w-full rounded-full border border-stone-300 bg-white px-8 py-3.5 text-center text-base font-semibold text-stone-800 transition-colors hover:border-stone-400 hover:bg-stone-50 sm:w-auto"
              >
                ნამუშევრების ნახვა
              </a>
            </div>
            <dl className="mt-10 flex items-center justify-center gap-8 lg:justify-start">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-xl font-bold tracking-tight text-stone-900">
                    {stat.value}
                  </dd>
                  <dd className="mt-0.5 text-xs text-stone-500">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* მინი-მაკეტი: რას იღებს მფლობელი — სასტუმროს საიტის პრევიუ */}
          <div aria-hidden className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="rounded-2xl border border-stone-200 bg-white shadow-xl shadow-stone-900/5">
              <div className="flex items-center gap-2 border-b border-stone-100 px-4 py-3">
                <span className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
                </span>
                <span className="flex-1 rounded-md bg-stone-100 px-3 py-1 text-xs text-stone-500">
                  shenisastumro.ge
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif text-sm font-bold text-stone-900">
                      სასტუმრო ★★★★
                    </p>
                    <p className="text-[11px] text-stone-500">
                      იმერეთი · საქართველო
                    </p>
                  </div>
                  <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-white">
                    დაჯავშნა
                  </span>
                </div>
                <div className="mt-4 flex h-28 items-end rounded-xl bg-gradient-to-br from-accent-soft via-stone-100 to-stone-200 p-3">
                  <span className="rounded-md bg-white/90 px-2 py-1 text-[10px] font-medium text-stone-600">
                    თქვენი ფოტოები აქ
                  </span>
                </div>
                <div className="mt-4 space-y-2.5">
                  {[
                    { name: "ორადგილიანი ოთახი", price: "120₾" },
                    { name: "საოჯახო ლუქსი", price: "180₾" },
                  ].map((room) => (
                    <div
                      key={room.name}
                      className="flex items-center justify-between rounded-lg border border-stone-100 bg-stone-50 px-3 py-2.5"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="h-8 w-8 rounded-md bg-gradient-to-br from-stone-200 to-stone-300" />
                        <span className="text-xs font-medium text-stone-700">
                          {room.name}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-accent">
                        {room.price}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between rounded-lg bg-stone-900 px-3 py-2.5">
                  <span className="text-[11px] font-medium text-white">
                    დაგვიკავშირდით WhatsApp-ში
                  </span>
                  <span className="h-5 w-5 rounded-full bg-emerald-400/90" />
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-stone-400">
              ასე გამოიყურება საიტი, რომელსაც თქვენთვის ავაწყობ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
