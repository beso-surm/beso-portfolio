"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";
import SectionHead from "@/components/studio/SectionHead";

const steps = [
  {
    title: "ვეცნობი თქვენს ბიზნესს",
    description:
      "მოკლე საუბარი ტელეფონით ან WhatsApp-ში: რა გჭირდებათ, ვინ არიან თქვენი სტუმრები და რა უნდა გააკეთოს საიტმა.",
  },
  {
    title: "გიგზავნით შეთავაზებას",
    description:
      "ზუსტი ფასი, ვადა და რას მიიღებთ — ყველაფერი წინასწარ, მოულოდნელობების გარეშე.",
  },
  {
    title: "თქვენ აგზავნით ფოტოებსა და ინფორმაციას",
    description:
      "ფოტოები, ფასები, ტექსტები. თუ რამე აკლია, დაგეხმარებით სტრუქტურისა და ტექსტების მომზადებაში.",
  },
  {
    title: "ვაშენებ და გაჩვენებთ",
    description:
      "ვაგზავნი სამუშაო ვერსიის ბმულს — ნახულობთ ტელეფონზეც და კომპიუტერზეც, და ერთად ვასწორებთ დეტალებს.",
  },
  {
    title: "საიტი ქვეყნდება",
    description:
      "ვაკავშირებ დომენს, ვაქვეყნებ საიტს და გადმოგცემთ ყველაფერს. სურვილისამებრ — შემდგომი მხარდაჭერა.",
  },
];

export default function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  // ხაზი "იხატება" გადახვევისას — სკროლზე მიბმული scaleY (transform).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 85%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHead
          eyebrow="პროცესი"
          title="როგორ ვმუშაობ"
          subtitle="მარტივი, გასაგები ნაბიჯები — თქვენგან მხოლოდ ინფორმაცია და ფოტოები გჭირდებათ."
        />

        <motion.ol
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-12 space-y-8"
        >
          {/* ხაზის ბილიკი */}
          <span
            aria-hidden
            className="absolute bottom-5 left-[19px] top-5 w-px bg-white/10"
          />
          {/* ხაზის შევსება — გადახვევაზე იზრდება */}
          <motion.span
            aria-hidden
            style={reduce ? undefined : { scaleY: lineScale }}
            className="absolute bottom-5 left-[19px] top-5 w-px origin-top bg-gradient-to-b from-accent to-accent-2"
          />

          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              variants={staggerItem}
              className="relative flex gap-5"
            >
              <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-ink text-sm font-bold text-accent">
                {i + 1}
              </span>
              <div className="pt-1.5">
                <h3 className="text-lg font-semibold text-mist">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-mist-dim">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
