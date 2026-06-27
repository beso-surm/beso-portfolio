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
import CountUp from "@/components/motion/CountUp";

const packages = [
  {
    name: "სავიზიტო გვერდი",
    priceFrom: 600,
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
    priceFrom: 1000,
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
    priceFrom: 1500,
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
    <section id="pricing" className="px-5 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          number="04"
          eyebrow="ფასები"
          title="გამჭვირვალე პაკეტები"
          subtitle="საბოლოო ფასი დამოკიდებულია პროექტის მოცულობაზე — მომწერეთ და ერთ დღეში მიიღებთ ზუსტ შეთავაზებას."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid items-start gap-6 lg:grid-cols-3"
        >
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={pkg.featured ? "lg:-translate-y-4" : ""}
            >
              <motion.div
                variants={staggerItem}
                whileTap={tapScaleSubtle}
                className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                  pkg.featured
                    ? "border-ink bg-ink text-mist shadow-2xl shadow-ink/20"
                    : "border-line bg-card shadow-sm shadow-ink/[0.04]"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                    პოპულარული
                  </span>
                )}
                <h3
                  className={`text-sm font-semibold uppercase tracking-[0.16em] ${
                    pkg.featured ? "text-mist-dim" : "text-ink-dim"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`mt-4 font-serif text-5xl font-bold leading-none tracking-tight ${
                    pkg.featured ? "text-mist" : "text-ink"
                  }`}
                >
                  <CountUp value={pkg.priceFrom} suffix="₾" />
                </p>
                <p
                  className={`mt-2 text-xs uppercase tracking-[0.14em] ${
                    pkg.featured ? "text-mist-dim" : "text-ink-dim"
                  }`}
                >
                  დან
                </p>
                <p
                  className={`mt-5 text-sm leading-6 ${
                    pkg.featured ? "text-mist-dim" : "text-ink-soft"
                  }`}
                >
                  {pkg.description}
                </p>
                <ul className="mt-7 space-y-3 text-sm">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 ${
                        pkg.featured ? "text-mist" : "text-ink"
                      }`}
                    >
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>
                <Pressable
                  href="#contact"
                  magnetic
                  className={`mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full px-6 text-sm font-semibold ${
                    pkg.featured
                      ? "bg-accent text-white shadow-lg shadow-accent/25"
                      : "border border-ink/15 text-ink hover:bg-ink hover:text-paper transition-colors"
                  }`}
                >
                  შეთავაზების მიღება
                </Pressable>
              </motion.div>
            </div>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-sm text-ink-dim">
          დომენი და ჰოსტინგი ცალკე ღირს (წელიწადში დაახლოებით 40–100₾) —
          ყველაფერს მე მოგიგვარებთ.
        </p>
      </div>
    </section>
  );
}
