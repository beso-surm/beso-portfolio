"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  staggerContainer,
  staggerItem,
  tapScaleSubtle,
  viewportOnce,
} from "@/lib/motion";
import SectionHead from "@/components/studio/SectionHead";

// ხაზოვანი იკონები — მსუბუქი, პრემიუმ, emoji-ს გარეშე.
const Icon = ({ d }: { d: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden
  >
    <path d={d} />
  </svg>
);

const services: { title: string; desc: string; icon: ReactNode }[] = [
  {
    title: "ვებ დიზაინი",
    desc: "თქვენს ბრენდზე მორგებული, თანამედროვე და სუფთა ინტერფეისი.",
    icon: <Icon d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586" />,
  },
  {
    title: "დეველოპმენტი",
    desc: "სწრაფი და საიმედო საიტები, აგებული უახლეს ტექნოლოგიებზე.",
    icon: <Icon d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
  },
  {
    title: "მობილური ვერსია",
    desc: "სრულყოფილი გამოცდილება ტელეფონის ეკრანზე — ჩვენი მთავარი ფოკუსი.",
    icon: <Icon d="M5 4a2 2 0 012-2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4zM11 18h2" />,
  },
  {
    title: "SEO & სიჩქარე",
    desc: "Google-ში ხილვადობა და ელვისებური ჩატვირთვა მეტი კლიენტისთვის.",
    icon: <Icon d="M12 20a8 8 0 100-16 8 8 0 000 16zM12 12l3.5-3.5M12 12v.01" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="რას ვაკეთებთ"
          title="სრული სერვისი — იდეიდან გაშვებამდე"
          subtitle="ერთ ადგილას თავს ვუყრით ყველაფერს, რაც თქვენს ბიზნესს ონლაინ წარმატებისთვის სჭირდება."
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((s) => (
            <motion.li
              key={s.title}
              variants={staggerItem}
              whileTap={tapScaleSubtle}
              className="rounded-2xl border border-white/10 bg-ink-soft p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                {s.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-mist">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-mist-dim">{s.desc}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
