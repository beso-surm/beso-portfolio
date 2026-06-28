// ცენტრალური თარგმანი — შეცვალე აქ და ორივე ენაზე განახლდება.
// Central translation dictionary — edit here and both routes update.

export type Lang = "ka" | "en";

export const locales: Record<Lang, { intl: string; cityShort: string }> = {
  ka: { intl: "ka-GE", cityShort: "თბილისი" },
  en: { intl: "en-US", cityShort: "Tbilisi" },
};

export const copy = {
  ka: {
    nav: {
      work: "ნამუშევრები",
      pricing: "ფასები",
      contact: "დაკავშირება",
      home: "მთავარი",
    },
    hero: {
      eyebrow: "ვებ-სტუდია · ქუთაისი",
      available: "ხელმისაწვდომი",
      // headline parts — broken into chunks for the word-by-word reveal
      h1: ["ვებსაიტები,", "რომლებიც", "მუშაობს", "თქვენი", "ბიზნესისთვის."],
      h1Italic: "მუშაობს",
      subtitleA: "ვაგებ პრემიუმ ვებსაიტებს სასტუმროების, რესტორნებისა და ბრენდებისთვის — სუფთა, სწრაფი, მობილურზე მორგებული და",
      subtitleHighlight: " შედეგზე ორიენტირებული",
      ctaPrimary: "დავიწყოთ პროექტი",
      ctaSecondary: "ნამუშევრების ნახვა",
      stats: [
        { v: "3+", l: "წელი" },
        { v: "12", l: "პროექტი" },
        { v: "24სთ", l: "პასუხი" },
      ],
      scrollCue: "გადაახვიეთ",
    },
    services: {
      number: "01",
      eyebrow: "რას ვაკეთებთ",
      title: "სრული სერვისი — იდეიდან გაშვებამდე",
      subtitle: "ერთ ადგილას თავს ვუყრით ყველაფერს, რაც თქვენს ბიზნესს ონლაინ წარმატებისთვის სჭირდება.",
      items: [
        {
          num: "01",
          title: "ვებ დიზაინი",
          desc: "თქვენს ბრენდზე მორგებული, თანამედროვე და სუფთა ინტერფეისი — სუფთა ტიპოგრაფიკით, თბილი ფერებით და გააზრებული გრიდით, რომელიც სტუმარს თქვენი სივრცის ემოციას გადასცემს.",
          meta: "ბრენდინგი · ვიზუალური ენა",
        },
        {
          num: "02",
          title: "დეველოპმენტი",
          desc: "Next.js-ით აგებული, საიმედო და სწრაფი საიტი.",
        },
        {
          num: "03",
          title: "მობილური ვერსია",
          desc: "მთავარი ფოკუსი — ტელეფონის ეკრანი.",
        },
        {
          num: "04",
          title: "SEO & სიჩქარე",
          desc: "Google-ში ხილვადობა და ელვისებური ჩატვირთვა — Core Web Vitals 90+ ქულა, AVIF გამოსახულებები და სუფთა მეტა-ტეგები.",
          meta: "Core Web Vitals · Schema.org · OpenGraph",
        },
      ],
    },
    marquee: ["სასტუმროები", "რესტორნები", "კოტეჯები", "ბრენდინგი", "ვებსაიტები", "ქუთაისი"],
    work: {
      number: "02",
      eyebrow: "ნამუშევრები",
      title: "შერჩეული პროექტები",
      subtitle: "ცოცხალი საიტები, რომლებიც უკვე მუშაობს და კლიენტებს ემსახურება.",
      note: "ფარული პროექტი? ვაგებ ვებსაიტებს რესტორნებისთვის, კოტეჯებისთვის და მცირე ბრენდებისთვისაც — ",
      noteLink: "მომწერეთ",
      noteTail: ".",
      projects: [
        {
          name: "Georgian House",
          kind: "სასტუმრო · ქუთაისი",
          outcome: "თანამედროვე საიტი ჯავშნებითა და ორი ენით",
        },
        {
          name: "Kvirike Hills",
          kind: "ბუტიკ-სასტუმრო · კოტეჯები",
          outcome: "სამენოვანი საიტი ცოცხალი ჯავშნებით",
        },
      ],
    },
    process: {
      number: "03",
      eyebrow: "პროცესი",
      title: "როგორ ვმუშაობ",
      subtitle: "მარტივი, გასაგები ნაბიჯები — თქვენგან მხოლოდ ფოტოები და ინფორმაცია მჭირდება.",
      steps: [
        {
          title: "ვეცნობი თქვენს ბიზნესს",
          description: "მოკლე საუბარი ტელეფონით ან WhatsApp-ით: რა გჭირდებათ, ვინ არიან თქვენი სტუმრები და რა უნდა გააკეთოს საიტმა.",
        },
        {
          title: "გიგზავნით შეთავაზებას",
          description: "ზუსტი ფასი, ვადა და რას მიიღებთ — ყველაფერი წინასწარ, მოულოდნელობების გარეშე.",
        },
        {
          title: "თქვენ აგზავნით ფოტოებსა და ინფორმაციას",
          description: "ფოტოები, ფასები, ტექსტები. თუ რამე აკლია, დაგეხმარებით სტრუქტურისა და ტექსტების მომზადებაში.",
        },
        {
          title: "ვაშენებ და გაჩვენებთ",
          description: "ვაგზავნი სამუშაო ვერსიის ბმულს — ნახულობთ ტელეფონზეც და კომპიუტერზეც, და ერთად ვასწორებთ დეტალებს.",
        },
        {
          title: "საიტი ქვეყნდება",
          description: "ვაკავშირებ დომენს, ვაქვეყნებ საიტს და გადმოგცემთ ყველაფერს. სურვილისამებრ — შემდგომი მხარდაჭერა.",
        },
      ],
    },
    pricing: {
      number: "04",
      eyebrow: "ფასები",
      title: "გამჭვირვალე პაკეტები",
      subtitle: "საბოლოო ფასი დამოკიდებულია პროექტის მოცულობაზე — მომწერეთ და ერთ დღეში მიიღებთ ზუსტ შეთავაზებას.",
      popular: "პოპულარული",
      from: "დან",
      cta: "შეთავაზების მიღება",
      note: "დომენი და ჰოსტინგი ცალკე ღირს (წელიწადში დაახლოებით 40–100₾) — ყველაფერს მე მოგიგვარებთ.",
      packages: [
        {
          name: "სავიზიტო გვერდი",
          priceFrom: 600,
          description: "ერთგვერდიანი თანამედროვე საიტი მცირე ბიზნესისთვის, რომელსაც სწრაფად სჭირდება ონლაინ წარმომადგენლობა.",
          features: [
            "ერთგვერდიანი დიზაინი",
            "მობილურზე სრულად მორგებული",
            "გალერეა და ბიზნესის აღწერა",
            "კონტაქტი: ზარი, WhatsApp, რუკა",
            "მზადაა დაახლოებით 1 კვირაში",
          ],
          featured: false,
        },
        {
          name: "სტანდარტული საიტი",
          priceFrom: 1000,
          description: "სრულფასოვანი ვებსაიტი სასტუმროსთვის, კოტეჯისთვის ან რესტორნისთვის — ყველაზე ხშირად ამას ირჩევენ.",
          features: [
            "4–6 გვერდი (ოთახები/მენიუ, გალერეა…)",
            "ფასები და დეტალური ინფორმაცია",
            "ჯავშნის / კონტაქტის ფორმა",
            "ორი ენა (ქართული + ინგლისური)",
            "საბაზისო SEO ოპტიმიზაცია",
            "მზადაა დაახლოებით 2 კვირაში",
          ],
          featured: true,
        },
        {
          name: "პრემიუმ საიტი",
          priceFrom: 1500,
          description: "ყველაფერი სტანდარტული პაკეტიდან და დამატებით — ადმინ პანელი: ფასებსა და ფოტოებს თავად განაახლებთ, როცა გინდათ.",
          features: [
            "ყველაფერი სტანდარტული პაკეტიდან",
            "ადმინ პანელი მართვისთვის",
            "ჯავშნის შეტყობინებები ელფოსტაზე",
            "მეტი გვერდი და ფუნქცია საჭიროებისას",
            "გაშვების შემდეგ მხარდაჭერა",
          ],
          featured: false,
        },
      ],
    },
    faq: {
      number: "05",
      eyebrow: "გავრცელებული კითხვები",
      title: "რასაც ხშირად მეკითხებიან",
      subtitle: "თუ თქვენი კითხვა აქ არ არის — მომწერეთ WhatsApp-ით და ერთ საათში ვუპასუხებ.",
      items: [
        { q: "რამდენ ხანში მზადდება საიტი?", a: "სავიზიტო გვერდი — დაახლოებით 1 კვირაში. სტანდარტული საიტი — 2 კვირაში. პრემიუმ პაკეტი — 3–4 კვირაში, რთულობის მიხედვით. ზუსტ ვადას წინასწარ შეთანხმებაში ვწერ." },
        { q: "შემიძლია თვითონ განვაახლო კონტენტი?", a: "დიახ — პრემიუმ პაკეტში შედის ადმინ პანელი, საიდანაც ფასებს, ფოტოებსა და ტექსტებს თავად ანახლებთ. სტანდარტული პაკეტისთვის მცირე ცვლილებები ჩემს მხარდაჭერაში შედის." },
        { q: "რა ღირს დომენი და ჰოსტინგი?", a: "დომენი — დაახლოებით 40–60₾ წელიწადში. ჰოსტინგი — ჩვეულებრივ უფასოა Vercel-ის გვერდიდან (პოპულარული ვარიანტი) ან 40–80₾ წელიწადში პრემიუმ გადაწყვეტებზე. ყველაფერს თქვენთან ერთად ვაკონფიგურირებ." },
        { q: "რა მოხდება საიტის გაშვების შემდეგ?", a: "1 თვის უფასო მხარდაჭერა — ნებისმიერ შეცდომას ვასწორებ ხელფასის გარეშე. ამის შემდეგ — ან თქვენ ანახლებთ თვითონ, ან ვთანამშრომლობთ ფიქსირებული ფასით." },
        { q: "მხოლოდ ქუთაისში მუშაობთ?", a: "არა — საქართველოს ნებისმიერი წერტილიდან ვმუშაობ. WhatsApp, Zoom და ელფოსტა — საკმარისია. ფიზიკურ შეხვედრებს ვაწყობ ქუთაისსა და თბილისში." },
        { q: "ვმუშაობთ ხელშეკრულებით?", a: "დიახ — ყველა პროექტი ფორმდება მარტივი ხელშეკრულებით სადაც ჩაწერილია: რას ვაკეთებ, რა ვადაში, რა ფასი და რა გარანტიები. გადახდა ჩვეულებრივ ეტაპობრივად — 50% დაწყებამდე, 50% გაშვებამდე." },
      ],
    },
    about: {
      number: "06",
      eyebrow: "ჩემ შესახებ",
      title: "გამარჯობა, მე ბესო ვარ",
      paragraphs: [
        "ვებ-დეველოპერი ვარ ქუთაისიდან და ვქმნი პრაქტიკულ, თანამედროვე ვებსაიტებს ქართული ბიზნესებისთვის — ძირითადად სასტუმროებისთვის, კოტეჯებისთვის და რესტორნებისთვის. ვმუშაობ უახლესი ხელსაწყოებით, ვპასუხობ სწრაფად და თითოეული პროექტი ჩემთვის მთავარი საქმეა.",
        "კარგად ვიცნობ ადგილობრივ ტურიზმს, ამიტომ ვაკეთებ არა უბრალოდ „ლამაზ საიტებს\", არამედ ისეთებს, რომლებიც სტუმრისთვის გასაგებია და რეალურ შედეგზეა ორიენტირებული — მეტი შეტყობინება, მეტი ჯავშანი, მეტი ნდობა.",
      ],
      chips: ["Next.js", "მობილურზე მორგებული", "ქუთაისი", "სწრაფი მხარდაჭერა"],
    },
    contactCta: {
      number: "07",
      eyebrow: "მოდი ვისაუბროთ",
      titleA: "მზად ხართ თქვენი ბიზნესის",
      titleItalic: "საიტისთვის",
      titleB: "?",
      subtitle: "უფასო კონსულტაცია — მომწერეთ და ერთად განვიხილავთ, რა სჭირდება თქვენს ბიზნესს ონლაინ.",
      ctaPrimary: "WhatsApp-ით მოწერა",
    },
    footer: {
      role: "ვებ-სტუდია",
      city: "ქუთაისი",
      rights: "ყველა უფლება დაცულია.",
      builtWith: "აშენებულია სიყვარულით ქუთაისში.",
    },
    sticky: {
      whatsapp: "WhatsApp",
      call: "დარეკვა",
      callAria: "დარეკვა",
    },
    loading: "იტვირთება",
    meta: {
      title: "ბესო სურმავა — ვებსაიტები ქართული ბიზნესებისთვის",
      description: "თანამედროვე, მობილურზე მორგებული ვებსაიტები სასტუმროებისთვის, კოტეჯებისთვის, რესტორნებისთვის და მცირე ბიზნესებისთვის. ცოცხალი ნამუშევრები, გამჭვირვალე ფასები, უფასო კონსულტაცია.",
      ogTitle: "ბესო სურმავა — ვებსაიტები ქართული ბიზნესებისთვის",
      ogDescription: "თანამედროვე ვებსაიტები სასტუმროებისთვის, კოტეჯებისთვის და რესტორნებისთვის — სუფთა დიზაინი, მობილური ვერსია, მეტი ჯავშანი.",
      ogAlt: "ბესო სურმავა — ვებ-სტუდია, ქუთაისი",
      twTitle: "ბესო სურმავა — ვებსაიტები ქართული ბიზნესებისთვის",
      twDescription: "პრემიუმ ვებსაიტები სასტუმროების, რესტორნებისა და ბრენდებისთვის — სწრაფი, მობილური, შედეგზე ორიენტირებული.",
    },
  },
  en: {
    nav: {
      work: "Work",
      pricing: "Pricing",
      contact: "Contact",
      home: "Home",
    },
    hero: {
      eyebrow: "Web studio · Kutaisi",
      available: "Available",
      h1: ["Websites", "that", "work", "for your", "business."],
      h1Italic: "work",
      subtitleA: "I build premium websites for hotels, restaurants and brands — clean, fast, mobile-first, and",
      subtitleHighlight: " built for results",
      ctaPrimary: "Start a project",
      ctaSecondary: "See selected work",
      stats: [
        { v: "3+", l: "Years" },
        { v: "12", l: "Projects" },
        { v: "24h", l: "Reply" },
      ],
      scrollCue: "Scroll",
    },
    services: {
      number: "01",
      eyebrow: "What I do",
      title: "Full service — from idea to launch",
      subtitle: "Everything your business needs to win online, handled end-to-end by one person who actually cares.",
      items: [
        {
          num: "01",
          title: "Web design",
          desc: "A modern, brand-tailored interface — clean typography, warm colours and an intentional grid that conveys the emotion of your space to every guest.",
          meta: "Branding · Visual language",
        },
        {
          num: "02",
          title: "Development",
          desc: "Reliable, fast sites built on Next.js.",
        },
        {
          num: "03",
          title: "Mobile-first",
          desc: "The phone screen is the main canvas.",
        },
        {
          num: "04",
          title: "SEO & speed",
          desc: "Visibility on Google and lightning-fast loads — 90+ Core Web Vitals, AVIF images and clean meta tags.",
          meta: "Core Web Vitals · Schema.org · OpenGraph",
        },
      ],
    },
    marquee: ["Hotels", "Restaurants", "Cottages", "Branding", "Websites", "Kutaisi"],
    work: {
      number: "02",
      eyebrow: "Selected work",
      title: "Selected projects",
      subtitle: "Live websites already at work for their owners.",
      note: "Project in mind? I also build sites for restaurants, cottages and small brands — ",
      noteLink: "say hello",
      noteTail: ".",
      projects: [
        {
          name: "Georgian House",
          kind: "Hotel · Kutaisi",
          outcome: "Modern bilingual site with bookings built in",
        },
        {
          name: "Kvirike Hills",
          kind: "Boutique hotel · Cottages",
          outcome: "Trilingual site with live bookings",
        },
      ],
    },
    process: {
      number: "03",
      eyebrow: "Process",
      title: "How I work",
      subtitle: "Simple, transparent steps — all I need from you is photos and information.",
      steps: [
        {
          title: "I get to know your business",
          description: "A short call or WhatsApp chat: what you need, who your guests are, and what the site has to do for you.",
        },
        {
          title: "I send a clear proposal",
          description: "Exact price, timeline, and what you'll get — everything written down up-front, no surprises.",
        },
        {
          title: "You send photos and content",
          description: "Photos, prices, copy. If anything is missing, I'll help you structure it and write what's needed.",
        },
        {
          title: "I build and show you",
          description: "I send a link to a working version — review it on your phone and laptop, and we polish the details together.",
        },
        {
          title: "The site goes live",
          description: "I connect the domain, publish the site and hand everything over. Ongoing support available if you'd like it.",
        },
      ],
    },
    pricing: {
      number: "04",
      eyebrow: "Pricing",
      title: "Transparent packages",
      subtitle: "Final cost depends on scope — message me and I'll send an exact quote within a day.",
      popular: "Popular",
      from: "from",
      cta: "Get a proposal",
      note: "Domain and hosting are billed separately (roughly 40–100₾ per year) — I'll set everything up for you.",
      packages: [
        {
          name: "Landing page",
          priceFrom: 600,
          description: "A modern one-page site for small businesses that need an online presence fast.",
          features: [
            "Single-page design",
            "Fully mobile-responsive",
            "Gallery and business description",
            "Contact: call, WhatsApp, map",
            "Ready in roughly 1 week",
          ],
          featured: false,
        },
        {
          name: "Standard site",
          priceFrom: 1000,
          description: "A full website for a hotel, cottage or restaurant — the most popular choice.",
          features: [
            "4–6 pages (rooms / menu, gallery…)",
            "Prices and detailed information",
            "Booking / contact form",
            "Two languages (Georgian + English)",
            "Foundational SEO optimisation",
            "Ready in roughly 2 weeks",
          ],
          featured: true,
        },
        {
          name: "Premium site",
          priceFrom: 1500,
          description: "Everything in Standard plus an admin panel — update prices and photos yourself, whenever you want.",
          features: [
            "Everything in the Standard package",
            "Admin panel for self-management",
            "Booking notifications by email",
            "More pages and features as needed",
            "Post-launch support",
          ],
          featured: false,
        },
      ],
    },
    faq: {
      number: "05",
      eyebrow: "Frequently asked",
      title: "What clients usually ask",
      subtitle: "Don't see your question? Message me on WhatsApp and I'll reply within the hour.",
      items: [
        { q: "How long does it take?", a: "Landing page — about 1 week. Standard site — 2 weeks. Premium package — 3–4 weeks, depending on complexity. The exact timeline is written into the proposal up-front." },
        { q: "Can I update content myself?", a: "Yes — the Premium package includes an admin panel where you update prices, photos and copy yourself. For the Standard package, small changes are covered under my support." },
        { q: "What do domain and hosting cost?", a: "Domain — about 40–60₾ per year. Hosting — usually free on Vercel (the popular choice) or 40–80₾ per year on premium options. I configure everything with you." },
        { q: "What happens after launch?", a: "One month of free support — I fix any bugs at no cost. After that, either you update things yourself, or we agree on ongoing support at a fixed rate." },
        { q: "Do you only work in Kutaisi?", a: "No — I work with clients anywhere in Georgia. WhatsApp, Zoom and email are enough. I take in-person meetings in Kutaisi and Tbilisi." },
        { q: "Do we work with a contract?", a: "Yes — every project starts with a simple contract that spells out scope, timeline, price and guarantees. Payment is usually split — 50% to start, 50% at launch." },
      ],
    },
    about: {
      number: "06",
      eyebrow: "About",
      title: "Hi, I'm Beso",
      paragraphs: [
        "I'm a web developer based in Kutaisi, building practical, modern websites for Georgian businesses — mostly hotels, cottages and restaurants. I work with current tools, reply fast, and treat every project as the main thing on my desk.",
        "I know local hospitality well, so I don't just build “pretty sites” — I build ones that make sense to your guests and are aimed at real outcomes: more enquiries, more bookings, more trust.",
      ],
      chips: ["Next.js", "Mobile-first", "Kutaisi", "Fast support"],
    },
    contactCta: {
      number: "07",
      eyebrow: "Let's talk",
      titleA: "Ready for your business's",
      titleItalic: "website",
      titleB: "?",
      subtitle: "Free consultation — message me and we'll figure out together what your business needs online.",
      ctaPrimary: "Message on WhatsApp",
    },
    footer: {
      role: "Web studio",
      city: "Kutaisi",
      rights: "All rights reserved.",
      builtWith: "Built with care in Kutaisi.",
    },
    sticky: {
      whatsapp: "WhatsApp",
      call: "Call",
      callAria: "Call",
    },
    loading: "Loading",
    meta: {
      title: "Beso Surmava — Websites for hospitality and small business",
      description: "Modern, mobile-first websites for hotels, cottages, restaurants and small businesses — based in Kutaisi, Georgia. Live work, transparent pricing, free consultation.",
      ogTitle: "Beso Surmava — Web studio, Kutaisi",
      ogDescription: "Premium websites for hotels, restaurants and brands — clean design, mobile-first, more bookings.",
      ogAlt: "Beso Surmava — Web studio, Kutaisi",
      twTitle: "Beso Surmava — Websites built for hospitality",
      twDescription: "Premium websites for hotels, restaurants and brands — fast, mobile-first, results-driven.",
    },
  },
} as const;

export type Copy = typeof copy.ka;
