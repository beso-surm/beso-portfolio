import SectionHeading from "./SectionHeading";

const faqs = [
  {
    question: "რამდენ ხანში მზადდება ვებსაიტი?",
    answer:
      "სავიზიტო გვერდი — დაახლოებით 1 კვირაში, სტანდარტული საიტი — დაახლოებით 2 კვირაში. ვადა ძირითადად იმაზეა დამოკიდებული, რამდენად სწრაფად მივიღებ ფოტოებსა და ინფორმაციას.",
  },
  {
    question: "რა ღირს ვებსაიტი?",
    answer:
      "პაკეტები 600₾-დან იწყება. ზუსტი ფასი დამოკიდებულია გვერდების რაოდენობასა და ფუნქციებზე — მომწერეთ, რა გჭირდებათ, და ერთ დღეში მიიღებთ კონკრეტულ შეთავაზებას.",
  },
  {
    question: "დომენი მჭირდება? რა არის ეს საერთოდ?",
    answer:
      "დომენი თქვენი საიტის მისამართია (მაგ. chemisastumro.com). მისი ყიდვა და დაკავშირება ჩემზეა — თქვენ მხოლოდ წლიურ საფასურს იხდით (დაახლოებით 30–60₾ წელიწადში).",
  },
  {
    question: "შეიძლება საიტი ქართულად და ინგლისურადაც იყოს?",
    answer:
      "რა თქმა უნდა — ტურისტული ბიზნესისთვის ეს თითქმის აუცილებელია. სტანდარტულ და პრემიუმ პაკეტებში ორი ენა შედის.",
  },
  {
    question: "შემეძლება მერე ფოტოების ან ფასების შეცვლა?",
    answer:
      "კი. პრემიუმ პაკეტში შედის ადმინ პანელი, საიდანაც ყველაფერს თავად შეცვლით. სხვა პაკეტების შემთხვევაში წვრილმან განახლებებს მე გავაკეთებ — სწრაფად და შეთანხმებული პირობებით.",
  },
  {
    question: "მხოლოდ სასტუმროებისთვის აკეთებ საიტებს?",
    answer:
      "ძირითადად სასტუმროებთან, კოტეჯებთან და რესტორნებთან ვმუშაობ, მაგრამ ნებისმიერი მცირე ბიზნესისთვის გავაკეთებ — სილამაზის სალონი, კლინიკა, მაღაზია… მომწერეთ და განვიხილავთ.",
  },
];

// სტრუქტურირებული მონაცემები Google-სთვის — FAQ შეიძლება პირდაპირ ძიების შედეგებში გამოჩნდეს
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-16 py-20 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="ხშირი კითხვები"
          title="გაქვთ კითხვები?"
          subtitle="აქ ყველაზე ხშირი კითხვების პასუხებია. სხვა კითხვაზე — უბრალოდ მომწერეთ."
        />
        <div className="mt-12 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-stone-200 bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-base font-semibold text-stone-900 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-5 w-5 shrink-0 text-stone-400 transition-transform group-open:rotate-45"
                >
                  <path d="M10 4v12M4 10h12" />
                </svg>
              </summary>
              <p className="px-6 pb-6 text-sm leading-7 text-stone-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
