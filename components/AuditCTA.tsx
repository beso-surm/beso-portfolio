import { auditWhatsappLink } from "@/lib/site";

export default function AuditCTA() {
  return (
    <section className="py-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-accent px-6 py-12 text-center sm:px-12 lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl">
              არ იცით, რა საიტი გჭირდებათ?
            </h2>
            <p className="mt-3 text-base leading-7 text-white/85">
              გამომიგზავნეთ თქვენი Facebook ან Instagram გვერდი — უფასოდ
              გეტყვით, რა ტიპის ვებსაიტი მოუხდება თქვენს ბიზნესს და რა
              დაჯდება. არანაირი ვალდებულება.
            </p>
          </div>
          <a
            href={auditWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-accent transition-colors hover:bg-stone-100"
          >
            გვერდის გაგზავნა
          </a>
        </div>
      </div>
    </section>
  );
}
