import SectionHeading from "./SectionHeading";

const reasons = [
  {
    title: "სტუმრები ჯერ ინტერნეტში გეძებენ",
    description:
      "სანამ დარეკავენ ან ჩამოვლენ, ადამიანების უმეტესობა ბიზნესს ჯერ ტელეფონში ეძებს. თუ ვერ გიპოვეს — კონკურენტთან მიდიან.",
  },
  {
    title: "თანამედროვე საიტი ნდობას ქმნის",
    description:
      "სუფთა, პროფესიონალური ვებსაიტი პირველივე წამიდან აჩვენებს, რომ ბიზნესი სერიოზულია და სტუმარზე ზრუნავს.",
  },
  {
    title: "მობილური ვერსია გადამწყვეტია",
    description:
      "ვიზიტორების დიდი ნაწილი საიტს ტელეფონიდან ხსნის. თუ საიტი მობილურზე ცუდად გამოიყურება, სტუმარი მაშინვე ტოვებს.",
  },
  {
    title: "მკაფიო ინფორმაცია = მეტი ჯავშანი",
    description:
      "კარგი ფოტოები, გასაგები ფასები და თვალსაჩინო კონტაქტის ღილაკი რეალურად ზრდის შეტყობინებებისა და ჯავშნების რაოდენობას.",
  },
];

export default function WhyWebsite() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="რატომ ღირს"
          title="რატომ სჭირდება შენს ბიზნესს ვებსაიტი"
          subtitle="მარტივი მიზეზები, რომლებსაც ყოველდღე ვხედავ ქართულ ტურისტულ ბიზნესებში."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="flex gap-5 rounded-2xl border border-stone-200 bg-white p-7"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-bold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-stone-900">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
