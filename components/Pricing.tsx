import SectionHeading from "./SectionHeading";

const packages = [
  {
    name: "სავიზიტო გვერდი",
    price: "600₾-დან",
    description:
      "ერთგვერდიანი თანამედროვე საიტი მცირე ბიზნესისთვის, რომელსაც სწრაფად სჭირდება ონლაინ წარმომადგენლობა.",
    features: [
      "ერთგვერდიანი დიზაინი",
      "მობილურზე სრულად მორგებული",
      "გალერეა და ბიზნესის აღწერა",
      "კონტაქტი: ზარი, WhatsApp, რუკა",
      "მზადაა დაახლოებით 1 კვირაში",
    ],
    featured: false,
  },
  {
    name: "სტანდარტული საიტი",
    price: "1000₾-დან",
    description:
      "სრულფასოვანი ვებსაიტი სასტუმროსთვის, კოტეჯისთვის ან რესტორნისთვის — ყველაზე ხშირად ამას ირჩევენ.",
    features: [
      "4–6 გვერდი (ოთახები/მენიუ, გალერეა…)",
      "ფასები და დეტალური ინფორმაცია",
      "ჯავშნის / კონტაქტის ფორმა",
      "ორი ენა (ქართული + ინგლისური)",
      "SEO საბაზისო ოპტიმიზაცია",
      "მზადაა დაახლოებით 2 კვირაში",
    ],
    featured: true,
  },
  {
    name: "პრემიუმ საიტი",
    price: "1500₾-დან",
    description:
      "ყველაფერი სტანდარტულიდან, პლუს ადმინ პანელი — ფასებსა და ფოტოებს თავად განაახლებთ, როცა გინდათ.",
    features: [
      "ყველაფერი სტანდარტული პაკეტიდან",
      "ადმინ პანელი მართვისთვის",
      "ჯავშნის შეტყობინებები ელფოსტაზე",
      "მეტი გვერდი და ფუნქცია საჭიროებისას",
      "გაშვების შემდეგ მხარდაჭერა",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16 bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="ფასები"
          title="გამჭვირვალე პაკეტები"
          subtitle="საბოლოო ფასი დამოკიდებულია პროექტის მოცულობაზე — მომწერეთ და ერთ დღეში მიიღებთ ზუსტ შეთავაზებას."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-8 ${
                pkg.featured
                  ? "border-accent shadow-lg shadow-accent/10"
                  : "border-stone-200"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                  პოპულარული არჩევანი
                </span>
              )}
              <h3 className="text-lg font-semibold text-stone-900">
                {pkg.name}
              </h3>
              <p className="mt-3 text-3xl font-bold tracking-tight text-stone-900">
                {pkg.price}
              </p>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                {pkg.description}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-stone-700">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4L9 11.6l6.3-6.3a1 1 0 0 1 1.4 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition-colors ${
                  pkg.featured
                    ? "bg-stone-900 text-white hover:bg-stone-700"
                    : "border border-stone-300 text-stone-800 hover:border-stone-400 hover:bg-stone-50"
                }`}
              >
                შეთავაზების მიღება
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-stone-500">
          დომენი და ჰოსტინგი ცალკე ღირს (წელიწადში დაახლოებით 40–100₾) — ყველაფერს
          მე მოგიგვარებთ.
        </p>
      </div>
    </section>
  );
}
