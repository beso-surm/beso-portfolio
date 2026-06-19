import SectionHeading from "./SectionHeading";

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
      "ფოტოები, ფასები, ტექსტები. თუ რამე აკლია, დაგეხმარებით სტრუქტურის და ტექსტების მომზადებაში.",
  },
  {
    title: "ვაშენებ და გაჩვენებთ",
    description:
      "ვაგზავნი სამუშაო ვერსიის ბმულს — ნახულობთ ტელეფონზეც და კომპიუტერზეც, და ერთად ვასწორებთ დეტალებს.",
  },
  {
    title: "საიტი ქვეყნდება",
    description:
      "ვაკავშირებ დომენს, ვაქვეყნებ საიტს და გადმოგცემთ ყველაფერს. სურვილისამებრ — შემდგომი განახლებები და მხარდაჭერა.",
  },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="პროცესი"
          title="როგორ ვმუშაობ"
          subtitle="მარტივი, გასაგები პროცესი — თქვენგან მხოლოდ ინფორმაცია და ფოტოები გჭირდებათ."
        />
        <ol className="mx-auto mt-14 max-w-3xl space-y-0">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex gap-6 pb-10 last:pb-0">
              {index < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-5 top-12 h-[calc(100%-3rem)] w-px bg-stone-200"
                />
              )}
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-white text-sm font-bold text-accent">
                {index + 1}
              </span>
              <div className="pt-1.5">
                <h3 className="text-lg font-semibold text-stone-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
