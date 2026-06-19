import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "სასტუმროს ვებსაიტი",
    description:
      "ოთახები, ფასები, გალერეა და ჯავშნის მოთხოვნის ფორმა — ყველაფერი, რაც სტუმარს გადაწყვეტილების მისაღებად სჭირდება.",
    icon: (
      <path d="M3 21V8l9-5 9 5v13M9 21v-6h6v6M3 21h18M7.5 11h.01M12 11h.01M16.5 11h.01" />
    ),
  },
  {
    title: "კოტეჯი / საოჯახო სასტუმრო",
    description:
      "მარტივი, ლამაზი საიტი ბუნებაში დასასვენებელი ადგილისთვის: ფოტოები, პირობები, ლოკაცია და სწრაფი დაკავშირება.",
    icon: <path d="M3 12l9-8 9 8M5 10v10h14V10M9 20v-6h6v6" />,
  },
  {
    title: "რესტორნის ვებსაიტი",
    description:
      "მენიუ, ინტერიერის ფოტოები, სამუშაო საათები და ლოკაცია — სტუმარი ზუსტად ხედავს, რატომ უნდა გესტუმროთ.",
    icon: (
      <path d="M5 3v18M5 8c2 0 3-1.5 3-3.5V3M5 8C3 8 2 6.5 2 4.5V3M14 3v18M14 3c3 0 5 2.5 5 6s-2 5-5 5" />
    ),
  },
  {
    title: "სავიზიტო (Landing) გვერდი",
    description:
      "ერთგვერდიანი საიტი, რომელიც მოკლედ და დამაჯერებლად წარადგენს თქვენს ბიზნესს და კონტაქტამდე მიჰყავს მომხმარებელი.",
    icon: <path d="M4 5h16v14H4zM4 9h16M8 13h8M8 16h5" />,
  },
  {
    title: "ჯავშანზე ორიენტირებული საიტი",
    description:
      "სტრუქტურა, რომელიც აგებულია ერთ მიზანზე: მეტმა სტუმარმა მოგწეროთ, დაგირეკოთ ან ჯავშნის მოთხოვნა გამოგზავნოთ.",
    icon: (
      <path d="M8 2v4M16 2v4M3 9h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM9 15l2 2 4-4" />
    ),
  },
  {
    title: "ადმინ პანელი (სურვილისამებრ)",
    description:
      "თუ გინდათ, თავად შეცვალოთ ფასები, ფოტოები და ტექსტები — დაგიმატებთ მარტივ მართვის პანელს, პროგრამისტის გარეშე.",
    icon: (
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.4-3a7.4 7.4 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7.5 7.5 0 0 0-2-1.2L14.5 3h-5l-.4 2.6a7.5 7.5 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6a7.4 7.4 0 0 0 0 2.4l-2 1.6 2 3.4 2.4-1a7.5 7.5 0 0 0 2 1.2l.4 2.6h5l.4-2.6a7.5 7.5 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.07-.4.1-.8.1-1.2Z" />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="სერვისები"
          title="რას ვაკეთებ"
          subtitle="ვმუშაობ ძირითადად ტურიზმსა და მომსახურებაზე ორიენტირებულ ბიზნესებთან — ისეთ საიტებზე, რომლებსაც რეალური შედეგი მოაქვთ."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-stone-200 bg-white p-7 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  {service.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-stone-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
