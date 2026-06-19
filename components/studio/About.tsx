import Reveal from "@/components/motion/Reveal";
import WordReveal from "@/components/motion/WordReveal";

const chips = ["Next.js", "მობილური-პირველი", "ქუთაისი", "სწრაფი მხარდაჭერა"];

export default function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-10">
          <Reveal>
            <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-accent to-accent-2 font-serif text-5xl font-bold text-white shadow-lg shadow-accent/20">
              ბ
            </div>
          </Reveal>

          <div>
            <Reveal
              as="p"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-accent"
            >
              ჩემ შესახებ
            </Reveal>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-mist sm:text-4xl">
              <WordReveal text="გამარჯობა, მე ბესო ვარ" />
            </h2>
            <Reveal as="p" className="mt-4 text-base leading-7 text-mist-dim">
              ვებ-დეველოპერი ვარ ქუთაისიდან და ვქმნი პრაქტიკულ, თანამედროვე
              ვებსაიტებს ქართული ბიზნესებისთვის — ძირითადად სასტუმროებისთვის,
              კოტეჯებისთვის და რესტორნებისთვის. ვმუშაობ უახლესი ხელსაწყოებით,
              ვპასუხობ სწრაფად და თითოეული პროექტი ჩემთვის მთავარი საქმეა.
            </Reveal>
            <Reveal as="p" className="mt-3 text-base leading-7 text-mist-dim">
              კარგად ვიცნობ ადგილობრივ ტურიზმს, ამიტომ ვაკეთებ არა უბრალოდ „ლამაზ
              საიტებს“, არამედ ისეთებს, რომლებიც სტუმრისთვის გასაგებია და რეალურ
              შედეგზეა ორიენტირებული — მეტი შეტყობინება, მეტი ჯავშანი, მეტი ნდობა.
            </Reveal>

            <Reveal className="mt-6 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-ink-soft px-3 py-1.5 text-xs text-mist-dim"
                >
                  {chip}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
