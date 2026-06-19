export default function About() {
  return (
    <section className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 sm:flex-row sm:items-start">
          {/* TODO: ჩაანაცვლე რეალური ფოტოთი (components/About.tsx) */}
          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-stone-900 font-serif text-4xl font-bold text-white">
            ბ
          </div>
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              ჩემ შესახებ
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-stone-900">
              გამარჯობა, მე ბესო ვარ
            </h2>
            <p className="mt-4 text-base leading-7 text-stone-600">
              ვებ-დეველოპერი ვარ ქუთაისიდან და ვქმნი პრაქტიკულ, თანამედროვე
              ვებსაიტებს ქართული ბიზნესებისთვის — ძირითადად სასტუმროებისთვის,
              კოტეჯებისთვის და რესტორნებისთვის.
            </p>
            <p className="mt-3 text-base leading-7 text-stone-600">
              კი, ახალგაზრდა ვარ — და სწორედ ეს არის ჩემი უპირატესობა: ვმუშაობ
              უახლესი ხელსაწყოებით, ვპასუხობ სწრაფად და თითოეული პროექტი
              ჩემთვის მთავარი საქმეა, არა რიგითი შეკვეთა მრავალთაგან.
            </p>
            <p className="mt-3 text-base leading-7 text-stone-600">
              კარგად ვიცნობ ადგილობრივ ტურიზმს, ამიტომ ვაკეთებ არა უბრალოდ
              „ლამაზ საიტებს“, არამედ ისეთებს, რომლებიც სტუმრისთვის გასაგებია
              და რეალურ შედეგზეა ორიენტირებული — მეტი შეტყობინება, მეტი
              ჯავშანი, მეტი ნდობა. ვმუშაობ Next.js-ით — იმავე ტექნოლოგიით,
              რომელსაც მსხვილი საერთაშორისო კომპანიები იყენებენ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
