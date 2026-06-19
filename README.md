# Beso Surmava — Portfolio

პერსონალური პორტფოლიო საიტი: ვებსაიტები ქართული ბიზნესებისთვის (სასტუმროები, კოტეჯები, რესტორნები).

## გაშვება

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## სად შევცვალო ჩემი ინფორმაცია

- **კონტაქტი (WhatsApp ნომერი, Instagram, ელფოსტა):** `lib/site.ts` — ერთი ფაილი, ყველგან ავტომატურად განახლდება.
  - `whatsappNumber` — ფორმატი `995XXXXXXXXX` (პლუსის და ჰარების გარეშე)
  - `instagram` — მხოლოდ username, @-ის გარეშე
- **ფასები და პაკეტები:** `components/Pricing.tsx`
- **ნამუშევრები:** `components/Portfolio.tsx` — მესამე ბარათი ("რესტორნის დემო") ჯერ placeholder-ია.
- **ჩემი ფოტო:** `components/About.tsx` — ამჟამად ინიციალია, TODO კომენტარით მონიშნული.
- **SEO / სათაური:** `app/layout.tsx`

## სტრუქტურა

- `app/page.tsx` — მთავარი გვერდი, აწყობილია სექციების კომპონენტებისგან
- `components/` — Header, Hero, Services, Portfolio, WhyWebsite, Pricing, Process, About, FAQ, Contact, Footer
- `lib/site.ts` — საკონტაქტო ინფო და ნავიგაცია

Tech: Next.js 16 (App Router), TypeScript, Tailwind CSS v4.
