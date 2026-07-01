@AGENTS.md

# Beso Surmava — Portfolio / Lead-gen site

Personal portfolio for getting Georgian hotel/restaurant/cottage clients.
Live at https://besosurmava.com (GitHub→Vercel auto-deploys on push to `master`).
Audience: non-technical Georgian business owners who want a premium feel.

---

## Stack

- **Next.js 16** (App Router, Turbopack, fully static)
- **Tailwind v4** — `@theme inline` in `app/globals.css` (no `tailwind.config.ts` for colors)
- **TypeScript** strict
- **motion 12** — installed (`motion/react`), but the espresso redesign uses pure CSS animation; `components/motion/*` are currently unused
- **Lenis 1.3** — smooth scroll, root wrapper in `components/studio/SmoothScroll.tsx`
- **Fonts** — `next/font/google`: Noto Sans + Noto Serif Georgian (georgian + latin subsets) + Space Mono (latin, 400/700)
- **sharp** — used offline for `public/og.png` + watermark patching on `public/work/*.jpg`

---

## File map (active code only)

```
app/
  layout.tsx        — fonts, metadata (OG/Twitter), SmoothScroll wrapper
  page.tsx          — KA composition (SiteContent lang="ka")
  en/page.tsx       — EN composition (SiteContent lang="en") + per-locale metadata
  globals.css       — espresso tokens, ink-motion @keyframes, reduced-motion gate
  loading.tsx       — route-level skeleton (Next 16 convention)
  robots.ts, sitemap.ts
components/
  studio/           — the LIVE site sections + UI primitives (espresso redesign)
    SiteContent.tsx      — section composition, wraps main#top
    Nav.tsx              — sticky glass bar, hover-underline links, KA/EN + WhatsApp CTA
    Hero.tsx             — italic-accent headline, 3 stats, ink-calligraphy SVG graphic
    Services.tsx         — 2×2 cards, border→accent on hover (section 01)
    Marquee.tsx          — infinite 32s linear strip, duplicated content
    Work.tsx             — 2 project cards, REAL screenshots + ↗ badge, hover-lift (02)
    Process.tsx          — 5 numbered steps, raised bg, hairline rows (section 03)
    Pricing.tsx          — 3 tiers, FEATURED middle tier (accent ring + badge) (04)
    FAQ.tsx              — accordion, one-open, +→× rotate, measured max-height (05)
    About.tsx            — striped photo placeholder + bio + tag pills (section 06)
    ContactCTA.tsx       — big rounded card w/ ink-wash motif (climax, section 07)
    Footer.tsx           — ink ბ mark + tag + copyright
    InkMark.tsx          — reusable "ink wash ბ" monogram (nav + footer)
    Kicker.tsx           — section eyebrow (mono index + uppercase label)
    LangToggle.tsx       — KA/EN text toggle, route-based (/ ↔ /en) for SEO
    SmoothScroll.tsx     — Lenis root wrapper (used by layout)
  motion/           — animation primitives, currently UNUSED (kept on disk)
    Pressable, Reveal, Stagger, WordReveal, CountUp
lib/
  copy.ts           — bilingual content (ka/en), 1:1 with sections; keeps meta{} for SEO
  site.ts           — REAL contacts: phone/WhatsApp, email, instagram, city
  motion.ts, usePointerParallax.ts — UNUSED after redesign (kept on disk)
public/
  og.png            — 1200x630 branded social card
  work/*.jpg        — Georgian House + Kvirike Hills screenshots (used in Work)
```

**DEAD CODE** lives at `components/*.tsx` (root, not `studio/`): old warm-wine v1. Ignore.
The redesign removed `VelocityMarquee/ProjectCard/StickyCta/ScrollProgress/SectionHead/LiquidBackground`.

---

## Design system — dark "espresso" (redesign, per `design_handoff_besosurmava_redesign`)

### Color tokens (in `app/globals.css` `@theme inline`)

| Token | Value | Use |
|---|---|---|
| `base` | `#16110d` | body bg (espresso) |
| `raised` | `#1b1510` | alternating sections (Process, FAQ) |
| `card` | `#1d1610` | card surfaces |
| `card-hover` | `#231a12` | card bg on hover |
| `cream` | `#f3ebdd` | primary text |
| `accent` | `#e3a23c` | honey-amber — CTAs, links, ink motion; also `--ac` custom prop |

Cream at partial opacity (hierarchy) is written as raw `rgba(243,235,221,α)` in arbitrary
utilities (`text-[rgba(243,235,221,0.58)]`, `border-[rgba(243,235,221,0.08)]`) — matches the
handoff's exact alphas. Accent is referenced as `var(--ac)` so it stays themeable.

### Tailwind v4 quirk

Color tokens become utilities automatically: `bg-base`, `text-cream`, `bg-card`. **Do not add a `tailwind.config.ts` for colors** — it's pure CSS-first.

### Fonts (`next/font/google`, vars in `layout.tsx`)

- `font-sans` — Noto Sans Georgian (body + UI, incl. hero/section headings, weights to 900)
- `font-serif` — Noto Serif Georgian (the ბ monogram + "ბესო" wordmark only)
- `font-mono` — Space Mono (micro-labels: section indexes, "Web Studio", placeholder captions)

### Typography

- **Headline/section H2**: `font-sans` heavy (800–900), tight tracking (`tracking-[-0.02em]`) — NOT serif
- **Italic accent** is the signature emphasis — `<em className="font-extrabold italic text-[var(--ac)]">` (inherits sans; synthetic italic, matching the prototype)
- **Hero h1** fluid `text-[clamp(44px,5.6vw,84px)]` weight 900, `leading-[0.98]`

### Ink-motion system (all CSS `@keyframes` in `globals.css`)

`wash` (breathing amber blob), `floaty` (ბ gentle float+wobble), `inkdraw` (stroke draw→erase via
`stroke-dashoffset`, `pathLength="100"`), `speck` (drifting dots), `pulse` (eyebrow dot), `marq`
(marquee). Durations/delays are set inline per-instance so loops don't sync. `InkMark` = the shared
ბ-over-wash logo. A `prefers-reduced-motion` block neutralizes all of it.

### Section structure

Each section opens with `<Kicker number label />` (mono index + uppercase label), numbers `"01"`–`"07"`, kept sequential. Sticky nav requires **no `overflow-x: hidden` scroll-container ancestor** — body uses `overflow-x: clip` for this reason.

---

## Conventions

### Performance budget (user constraint: "must not lag")

- All animation on `transform` / `opacity` only — never `width` / `height` / `top` / `left`
- Ink motion is pure CSS `@keyframes`; a single `prefers-reduced-motion` block in `globals.css` neutralizes every animation/transition (no per-component JS gate needed)
- Backdrop-filter used on exactly ONE surface (the sticky nav) — keep it that way
- Images via `next/image` with `fill` + `sizes` (not raw `<img>`)
- Server Components by default; only `FAQ` + `LangToggle` are `"use client"` (accordion state / `usePathname`)

### Accessibility

- Every CTA/link has `focus-visible:ring-2 ring-[var(--ac)]` inline
- FAQ button uses `aria-expanded`; the `+`→`×` icon and answer panel are `aria-hidden`/decorative
- All decorative ink SVGs are `aria-hidden`; the `InkMark` carries `aria-label="ბესო"`
- Reduced motion handled globally in CSS (see Performance)

### Georgian-text editing gotcha (CRITICAL)

**NEVER use PowerShell 5.1 `Get-Content`/`-replace` on these files** — PS 5.1 reads UTF-8 Georgian as cp1251 and corrupts it. Use the `Edit` / `Write` tools, or PowerShell 7+, or Bash. Recovery is painful (re-encode cp1251→UTF-8).

### Deploy flow

`git push origin master` → Vercel auto-builds + aliases `besosurmava.com`. Confirmed via deployments showing `source:"git"`. **Do NOT** run `vercel deploy` manually — the GitHub integration handles it. **Do NOT** run `vercel env pull` (per georgian-house project convention; same team).

### Build verification

Local preview MCP often can't bind port 3000 (beso-client-hunter dev server hogs it). Verify with:
```
npx next build      # ~12s, catches Tailwind + TS issues
npx tsc --noEmit    # ~5s, type check only
```
Both should pass before pushing.

---

## What's intentionally NOT here

- **No testimonials section** — won't fabricate quotes. Wire one when Beso has real client praise (screenshot proof).
- **No contact form** — single CTA path (WhatsApp + phone) by user request; reduces friction.
- **No blog / case-study pages** — single-page site for v1.
- **No CMS** — all bilingual content lives in `lib/copy.ts` (ka/en objects).
- **No analytics** — Search Console verification meta tag is in `app/layout.tsx`; no GA/Plausible yet.

---

## Quick reference — common edits

| Want to change… | Edit |
|---|---|
| Accent color | `--color-accent` in `app/globals.css` (feeds `--ac` → propagates everywhere) |
| Any section copy (both langs) | `lib/copy.ts` — edit the `ka` + `en` objects (structure is 1:1 with sections) |
| Pricing tiers | `pricing.tiers` in `lib/copy.ts` (`popular: true` = featured) |
| Add FAQ question | `faq.items` in `lib/copy.ts` |
| Add project | `work.items` in `lib/copy.ts` + `meta[]` (url/image) in `Work.tsx` + screenshot in `public/work/` |
| Contact info | `lib/site.ts` (single source) |
| Hero headline | `hero.pre` / `hero.em` (italic accent) / `hero.post` in `lib/copy.ts` |
| Nav links | `nav` array in `lib/copy.ts` (hash hrefs, both langs) |
| Logo mark | `InkMark.tsx` (shared ink-wash ბ) |
