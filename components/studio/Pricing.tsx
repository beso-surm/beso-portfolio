"use client";

import { motion } from "motion/react";
import {
  staggerContainer,
  staggerItem,
  tapScaleSubtle,
  viewportOnce,
} from "@/lib/motion";
import SectionHead from "@/components/studio/SectionHead";
import Pressable from "@/components/motion/Pressable";

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
      "საბაზისო SEO ოპტიმიზაცია",
      "მზადაა დაახლოებით 2 კვირაში",
    ],
    featured: true,
  },
  {
    name: "პრემიუმ საიტი",
    price: "1500₾-დან",
    description:
      "ყველაფერი სტანდარტული პაკეტიდან და დამატებით — ადმინ პანელი: ფასებსა და ფოტოებს თავად განაახლებთ, როცა გინდათ.",
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

const Check = () => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
    aria-hidden
  >
    <path
      fillRule="evenodd"
      d="M16.7 5.3a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4L9 11.6l6.3-6.3a1 1 0 0 1 1.4 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Pricing() {
  return (
    <section id="pricing" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="ფასები"
          title="გამჭვირვალე პაკეტები"
          subtitle="საბოლოო ფასი დამოკიდებულია პროექტის მოცულობაზე — მომწერეთ და ერთ დღეში მიიღებთ ზუსტ შეთავაზებას."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid items-start gap-5 lg:grid-cols-3"
        >
          {packages.map((pkg) => (
            // featured ბარათს დესკტოპზე ვწევთ ზევით — lift ცალკე ფენაზეა, რომ
            // whileTap-ის transform-ს არ შეეჯახოს.
            <div
              key={pkg.name}
              className={pkg.featured ? "lg:-translate-y-3" : ""}
            >
              <motion.div
                variants={staggerItem}
                whileTap={tapScaleSubtle}
                className={`relative flex h-full flex-col rounded-3xl border p-7 ${
                  pkg.featured
                    ? "border-accent/60 bg-ink-soft shadow-2xl shadow-accent/15"
                    : "border-white/10 bg-ink-soft"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                    პოპულარული არჩევანი
                  </span>
                )}
                <h3 className="text-base font-semibold text-mist">{pkg.name}</h3>
                <p className="mt-3 font-serif text-4xl font-bold tracking-tight text-mist">
                  {pkg.price}
                </p>
                <p className="mt-3 text-sm leading-6 text-mist-dim">
                  {pkg.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-mist">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>
                <Pressable
                  href="#contact"
                  className={`mt-auto inline-flex min-h-[48px] items-center justify-center rounded-full px-6 text-sm font-semibold ${
                    pkg.featured
                      ? "bg-accent text-white shadow-lg shadow-accent/25"
                      : "border border-white/15 text-mist"
                  }`}
                >
                  შეთავაზების მიღება
                </Pressable>
              </motion.div>
            </div>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-sm text-mist-dim">
          დომენი და ჰოსტინგი ცალკე ღირს (წელიწადში დაახლოებით 40–100₾) —
          ყველაფერს მე მოგიგვარებთ.
        </p>
      </div>
    </section>
  );
}
