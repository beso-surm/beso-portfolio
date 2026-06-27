"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SectionHead from "@/components/studio/SectionHead";
import { spring } from "@/lib/motion";

const faqs = [
  {
    q: "რამდენ ხანში მზადდება საიტი?",
    a: "სავიზიტო გვერდი — დაახლოებით 1 კვირაში. სტანდარტული საიტი — 2 კვირაში. პრემიუმ პაკეტი — 3–4 კვირაში, რთულობის მიხედვით. ზუსტ ვადას წინასწარ შეთანხმებაში ვწერ.",
  },
  {
    q: "შემიძლია თვითონ განვაახლო კონტენტი?",
    a: "დიახ — პრემიუმ პაკეტში შედის ადმინ პანელი, საიდანაც ფასებს, ფოტოებსა და ტექსტებს თავად ანახლებთ. სტანდარტული პაკეტისთვის მცირე ცვლილებები ჩემს მხარდაჭერაში შედის.",
  },
  {
    q: "რა ღირს დომენი და ჰოსტინგი?",
    a: "დომენი — დაახლოებით 40–60₾ წელიწადში. ჰოსტინგი — ჩვეულებრივ უფასოა Vercel-ის გვერდიდან (პოპულარული ვარიანტი) ან 40–80₾ წელიწადში პრემიუმ გადაწყვეტებზე. ყველაფერს თქვენთან ერთად ვაკონფიგურირებ.",
  },
  {
    q: "რა მოხდება საიტის გაშვების შემდეგ?",
    a: "1 თვის უფასო მხარდაჭერა — ნებისმიერ შეცდომას ვასწორებ ხელფასის გარეშე. ამის შემდეგ — ან თქვენ ანახლებთ თვითონ, ან ვთანამშრომლობთ ფიქსირებული ფასით.",
  },
  {
    q: "მხოლოდ ქუთაისში მუშაობთ?",
    a: "არა — საქართველოს ნებისმიერი წერტილიდან ვმუშაობ. WhatsApp, Zoom და ელფოსტა — საკმარისია. ფიზიკურ შეხვედრებს ვაწყობ ქუთაისსა და თბილისში.",
  },
  {
    q: "ვმუშაობთ ხელშეკრულებით?",
    a: "დიახ — ყველა პროექტი ფორმდება მარტივი ხელშეკრულებით სადაც ჩაწერილია: რას ვაკეთებ, რა ვადაში, რა ფასი და რა გარანტიები. გადახდა ჩვეულებრივ ეტაპობრივად — 50% დაწყებამდე, 50% გაშვებამდე.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-t border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-accent"
      >
        <span className="flex items-baseline gap-4">
          <span className="font-serif text-sm font-bold tracking-tight text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-serif text-lg font-bold tracking-tight text-ink sm:text-xl">
            {q}
          </span>
        </span>
        <motion.span
          aria-hidden
          animate={{ rotate: open ? 45 : 0 }}
          transition={spring.snappy}
          className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-7 pl-10 pr-12 text-sm leading-7 text-ink-soft sm:text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="px-5 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <SectionHead
          number="05"
          eyebrow="გავრცელებული კითხვები"
          title="რასაც ხშირად მეკითხებიან"
          subtitle="თუ თქვენი კითხვა აქ არ არის — მომწერეთ WhatsApp-ით და ერთ საათში ვუპასუხებ."
        />

        <ul className="mt-14 border-b border-line">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
