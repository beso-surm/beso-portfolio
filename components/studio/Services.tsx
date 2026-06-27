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

// ხაზოვანი იკონები — დახვეწილი, რედაქციული, emoji-ს გარეშე.
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

const services: { num: string; title: string; desc: string; icon: ReactNode }[] = [
  {
    num: "01",
    title: "ვებ დიზაინი",
    desc: "თქვენს ბრენდზე მორგებული, თანამედროვე და სუფთა ინტერფეისი.",
    icon: <Icon d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586" />,
  },
  {
    num: "02",
    title: "დეველოპმენტი",
    desc: "სწრაფი და საიმედო საიტები, აგებული უახლეს ტექნოლოგიებზე.",
    icon: <Icon d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
  },
  {
    num: "03",
    title: "მობილური ვერსია",
    desc: "სრულყოფილი გამოცდილება ტელეფონის ეკრანზე — ჩვენი მთავარი ფოკუსი.",
    icon: <Icon d="M5 4a2 2 0 012-2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4zM11 18h2" />,
  },
  {
    num: "04",
    title: "SEO & სიჩქარე",
    desc: "Google-ში ხილვადობა და ელვისებური ჩატვირთვა მეტი კლიენტისთვის.",
    icon: <Icon d="M12 20a8 8 0 100-16 8 8 0 000 16zM12 12l3.5-3.5M12 12v.01" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="px-5 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          number="01"
          eyebrow="რას ვაკეთებთ"
          title="სრული სერვისი — იდეიდან გაშვებამდე"
          subtitle="ერთ ადგილას თავს ვუყრით ყველაფერს, რაც თქვენს ბიზნესს ონლაინ წარმატებისთვის სჭირდება."
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((s) => (
            <motion.li
              key={s.title}
              variants={staggerItem}
              whileTap={tapScaleSubtle}
              className="group relative flex flex-col bg-card p-8 transition-colors hover:bg-accent-soft/40"
            >
              <span className="font-serif text-sm font-bold tracking-tight text-accent">
                {s.num}
              </span>
              <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                {s.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{s.desc}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
