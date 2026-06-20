import Reveal from "@/components/motion/Reveal";
import Pressable from "@/components/motion/Pressable";
import { site, whatsappLink, instagramLink } from "@/lib/site";

// დასკვნითი მოწოდება — დიდი განცხადება და ცხელი ღილაკები (ტაქტილური უკუკავშირით).
export default function ContactCTA() {
  return (
    <section id="contact" className="bg-page px-5 py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-ink px-6 py-16 text-center sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-1/3 left-1/2 -z-0 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
        />
        <div className="relative">
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            მოდი ვისაუბროთ
          </Reveal>
          <Reveal
            as="h2"
            className="mx-auto mt-4 max-w-xl font-serif text-3xl font-bold leading-tight tracking-tight text-mist sm:text-4xl"
          >
            მზად ხართ თქვენი ბიზნესის საიტისთვის?
          </Reveal>
          <Reveal as="p" className="mx-auto mt-4 max-w-md text-base leading-7 text-mist-dim">
            უფასო კონსულტაცია — მომწერეთ და ერთად განვიხილავთ, რა სჭირდება თქვენს
            ბიზნესს ონლაინ.
          </Reveal>

          <Reveal className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Pressable
              href={whatsappLink}
              external
              magnetic
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-semibold text-white shadow-lg shadow-accent/25 sm:w-auto"
            >
              WhatsApp-ით მოწერა
            </Pressable>
            <Pressable
              href={site.phoneHref}
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/15 px-7 text-base font-medium text-mist sm:w-auto"
            >
              {site.phoneDisplay}
            </Pressable>
          </Reveal>

          <Reveal className="mt-6 flex items-center justify-center gap-5 text-sm text-mist-dim">
            <a href={`mailto:${site.email}`} className="hover:text-mist">
              {site.email}
            </a>
            <span aria-hidden>·</span>
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mist"
            >
              @{site.instagram}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
