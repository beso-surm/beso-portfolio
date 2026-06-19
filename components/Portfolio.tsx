import { whatsappLink } from "@/lib/site";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    name: "Georgian House Hotel",
    domain: "georgianhousekutaisi.com",
    url: "https://georgianhousekutaisi.com",
    location: "ქუთაისი",
    badge: { label: "ცოცხალი საიტი", tone: "live" as const },
    tags: ["სასტუმრო", "ჯავშნის ფორმა", "ორი ენა"],
    problem:
      "სასტუმროს სჭირდებოდა საკუთარი ვებსაიტი, რომ სტუმრებს პირდაპირ, საშუამავლო საიტების საკომისიოს გარეშე დაეჯავშნათ.",
    result:
      "სტუმრები საიტიდანვე აგზავნიან ჯავშნის მოთხოვნას, რომელიც პირდაპირ სასტუმროს ელფოსტაზე მიდის — ოთახებით, ფასებითა და გალერეით.",
  },
  {
    name: "Kvirike Hills",
    domain: "kvirikehills.com",
    url: "https://kvirikehills.com",
    location: "ქობულეთი",
    badge: { label: "გაყიდული პროექტი", tone: "sold" as const },
    tags: ["კოტეჯები", "ადმინ პანელი", "გალერეა"],
    problem:
      "კოტეჯების მფლობელს სურდა თანამედროვე საიტი, რომლის განახლებასაც თავად შეძლებდა — პროგრამისტის დახმარების გარეშე.",
    result:
      "მფლობელი ადმინ პანელიდან თავად ცვლის ფასებს, ფოტოებსა და ინფორმაციას. პროექტი გაყიდულია და დღესაც მუშაობს.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-16 bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="ნამუშევრები"
          title="რეალური, მომუშავე პროექტები"
          subtitle="ეს არ არის შაბლონები — ეს ცოცხალი ვებსაიტებია, რომლებსაც რეალური ბიზნესები იყენებენ. შეგიძლიათ ახლავე გახსნათ."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow hover:shadow-lg hover:shadow-stone-900/5"
            >
              {/* ბრაუზერის სტილის პრევიუ — შეგიძლია ჩაანაცვლო რეალური სქრინშოტით */}
              <div className="border-b border-stone-200 bg-stone-50 p-3">
                <div className="flex items-center gap-2">
                  <span className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                  </span>
                  <span className="flex-1 truncate rounded-md bg-white px-3 py-1 text-xs text-stone-500">
                    {project.domain}
                  </span>
                </div>
                <div className="mt-3 rounded-lg bg-gradient-to-br from-accent-soft to-stone-100 p-4">
                  <p className="font-serif text-base font-bold text-stone-800">
                    {project.name}
                  </p>
                  <div className="mt-2.5 space-y-1.5">
                    <div className="h-1.5 w-3/4 rounded bg-stone-300/70" />
                    <div className="h-1.5 w-1/2 rounded bg-stone-300/70" />
                  </div>
                  <div className="mt-3 inline-block rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold text-white">
                    დაჯავშნა
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-stone-900">
                    {project.name}
                  </h3>
                  <span
                    className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                      project.badge.tone === "sold"
                        ? "bg-accent-soft text-accent"
                        : "bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    {project.badge.label}
                  </span>
                </div>
                <p className="mt-1 text-xs font-medium text-stone-500">
                  {project.location}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-stone-200 px-2.5 py-1 text-xs font-medium text-stone-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-stone-600">
                  <span className="font-semibold text-stone-800">ამოცანა: </span>
                  {project.problem}
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  <span className="font-semibold text-stone-800">შედეგი: </span>
                  {project.result}
                </p>
                <div className="mt-auto pt-5">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-2.5 text-sm font-semibold text-stone-800 transition-colors hover:border-stone-400 hover:bg-stone-50"
                  >
                    საიტის ნახვა
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M5 15L15 5M8 5h7v7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}

          {/* მესამე ბარათი — მოწვევა, არა ცარიელი "მალე" */}
          <article className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-stone-300 bg-transparent p-8 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-6 w-6"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
            <h3 className="mt-5 font-serif text-xl font-bold text-stone-900">
              აქ თქვენი პროექტია
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-stone-600">
              შემდეგი საიტი, რომელსაც ავაწყობ, შეიძლება თქვენი სასტუმროს,
              კოტეჯის ან რესტორნისთვის იყოს.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-700"
            >
              დავიწყოთ საუბრით
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
