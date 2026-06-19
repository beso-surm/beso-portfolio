import { instagramLink, site, whatsappLink } from "@/lib/site";

const channels = [
  {
    name: "WhatsApp",
    value: site.phoneDisplay,
    href: whatsappLink,
    icon: (
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.2 14.8l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 0 1 12 4Zm-3.1 4.2c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.2.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.1l-1 1.2c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.3 0-.4.1-.6l.5-.6c.1-.2.2-.3.3-.5v-.5L9.6 8.6c-.2-.4-.4-.4-.6-.4h-.1Z" />
    ),
  },
  {
    name: "ტელეფონი",
    value: site.phoneDisplay,
    href: site.phoneHref,
    icon: (
      <path d="M6.6 2h2.9a1 1 0 0 1 1 .8l.7 3.4a1 1 0 0 1-.5 1.1l-1.8 1a13.9 13.9 0 0 0 6.8 6.8l1-1.8a1 1 0 0 1 1.1-.5l3.4.7a1 1 0 0 1 .8 1v2.9a2 2 0 0 1-2.2 2A18 18 0 0 1 4.6 4.2 2 2 0 0 1 6.6 2Z" />
    ),
  },
  {
    name: "Instagram",
    value: `@${site.instagram}`,
    href: instagramLink,
    icon: (
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.3-3.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
    ),
  },
  {
    name: "ელფოსტა",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: (
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.5l8 5 8-5V6H4Zm16 2.9-7.5 4.7a1 1 0 0 1-1 0L4 8.9V18h16V8.9Z" />
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-stone-900 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-light">
            კონტაქტი
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
            მზად ხართ თქვენი ვებსაიტისთვის?
          </h2>
          <p className="mt-4 text-base leading-7 text-stone-300">
            მომწერეთ რამდენიმე სიტყვა თქვენი ბიზნესის შესახებ — იმავე დღეს
            გიპასუხებთ, ერთ დღეში კი კონკრეტულ შეთავაზებას მიიღებთ ფასით და
            ვადით. კონსულტაცია უფასოა.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={
                channel.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="flex flex-col items-center gap-3 rounded-2xl border border-stone-700 bg-stone-800/60 p-6 text-center transition-colors hover:border-stone-500 hover:bg-stone-800"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7 text-accent-light"
              >
                {channel.icon}
              </svg>
              <span className="text-base font-semibold text-white">
                {channel.name}
              </span>
              <span className="break-all text-sm text-stone-400">
                {channel.value}
              </span>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-white px-8 py-3.5 text-base font-semibold text-stone-900 transition-colors hover:bg-stone-200"
          >
            მომწერეთ ახლავე
          </a>
        </div>
      </div>
    </section>
  );
}
