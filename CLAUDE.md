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
- **motion 12** — imports from `motion/react` (NOT `framer-motion`)
- **Lenis 1.3** — smooth scroll, root wrapper in `components/studio/SmoothScroll.tsx`
- **Fonts** — `next/font/google` Noto Sans/Serif Georgian (both subsets: georgian + latin)
- **sharp** — used offline for `public/og.png` + watermark patching on `public/work/*.jpg`

---

## File map (active code only)

```
app/
  layout.tsx        — fonts, metadata (OG/Twitter), SmoothScroll wrapper
  page.tsx          — section composition
  globals.css       — design tokens, .glass utilities, paper-grain bg
  loading.tsx       — route-level skeleton (Next 16 convention)
  robots.ts, sitemap.ts
components/
  studio/           — the LIVE site sections + UI primitives
    Nav.tsx              — glass-on-scroll, scroll-spy active state
    Hero.tsx             — editorial display headline, live Tbilisi clock, glass stats
    Services.tsx         — newspaper-grid 4-card layout (section 01)
    VelocityMarquee.tsx  — massive serif words, scroll-velocity reactive
    Work.tsx             — maps to ProjectCard
    ProjectCard.tsx      — 3D tilt + sheen, next/image with fill
    Process.tsx          — scroll-drawn timeline (paper-soft bg, section 03)
    Pricing.tsx          — 3 tiers, FEATURED tier inverted to dark
    FAQ.tsx              — accordion, plus→X icon rotate
    About.tsx            — ink avatar block (paper-soft bg, section 06)
    ContactCTA.tsx       — big dark inner card on cream (climax, section 07)
    Footer.tsx           — wordmark + copyright (stays cream)
    StickyCta.tsx        — mobile bottom bar (glass white)
    SectionHead.tsx      — number / eyebrow / title / subtitle (editorial)
    ScrollProgress.tsx, SmoothScroll.tsx, LiquidBackground.tsx (UNUSED, kept on disk)
  motion/           — animation primitives, NO color references
    Pressable.tsx        — polymorphic <a>/<button>, focus-visible ring built in
    Reveal.tsx, Stagger.tsx, WordReveal.tsx, CountUp.tsx
lib/
  motion.ts         — spring presets, viewport options, tapScale variants
  site.ts           — REAL contacts: phone/WhatsApp, email, instagram, city
  usePointerParallax.ts — springy normalized cursor offset (pointer:fine gated)
public/
  og.png            — 1200x630 branded social card
  work/*.jpg        — Georgian House + Kvirike Hills screenshots
```

**DEAD CODE** lives at `components/*.tsx` (root, not `studio/`): old warm-wine design from v1. Ignore. Only `components/studio/*` and `components/motion/*` are wired in.

---

## Design system — cream editorial

### Color tokens (in `app/globals.css` `@theme inline`)

| Token | Value | Use |
|---|---|---|
| `paper` | `#F4EFE6` | body bg (warm cream) |
| `paper-soft` | `#ECE5D5` | alternating sections (Process, About) |
| `card` | `#FFFFFF` | surfaces |
| `ink` | `#0F0F10` | primary text |
| `ink-soft` | `#4A4A4F` | secondary text |
| `ink-dim` | `#6E6E76` | tertiary / hints |
| `line` | `#D9D0BE` | subtle borders |
| `line-strong` | `#B8AC92` | heavier borders |
| `accent` | `#C2410C` | CTAs, links, accents (burnt sienna) |
| `accent-2` | `#E96B2B` | lighter accent (rarely used) |
| `accent-soft` | `#F5E6D8` | accent-tinted backgrounds |
| `night`, `night-soft` | `#0F0F10`, `#1B1B1F` | dark surfaces (ContactCTA inner, Pricing featured) |
| `mist`, `mist-dim` | `#F5EFE3`, `#A29F95` | text ON dark surfaces — DO NOT use on cream |

### Tailwind v4 quirk

Color tokens become utilities automatically: `bg-paper`, `text-ink-soft`, `border-line`. **Do not add a `tailwind.config.ts` for colors** — it's pure CSS-first.

### Glass utilities (custom, in `globals.css`)

- `.glass` → translucent white + backdrop-blur (for cream surfaces)
- `.glass-dark` → translucent black + backdrop-blur (for dark surfaces)

**Used sparingly for perf**: Nav (scrolled), Hero stats card, ProjectCard project-number tag, StickyCta. **Do not add backdrop-blur surfaces without removing one** — perf budget is ~5 surfaces total.

### Typography

- **Display / headings**: `font-serif` (Noto Serif Georgian) — bold, tight tracking (`tracking-[-0.02em]`)
- **Body**: `font-sans` (Noto Sans Georgian)
- **Italic accent** is the signature emphasis — `<em className="font-medium italic text-accent">` — no underlines, no gradient text-clip
- **Hero h1** uses fluid `text-[clamp(2.5rem,8.5vw,6.5rem)]` — do NOT switch back to fixed breakpoints

### Section structure

Every section uses `SectionHead` with `number` prop (`"01"`–`"07"`). Section numbers establish editorial rhythm — keep them sequential when adding sections.

---

## Conventions

### Performance budget (user constraint: "must not lag")

- All animation on `transform` / `opacity` only — never `width` / `height` / `top` / `left`
- `useReducedMotion()` gate on every motion effect
- Pointer-reactive effects gated on `pointerType === "mouse"` AND `window.matchMedia("(pointer: fine)")` — mobile must stay clean
- Backdrop-filter (glass) capped at ~5 simultaneous surfaces
- Images via `next/image` with `fill` + `sizes` (not raw `<img>`)
- Server Components by default; `"use client"` only when needed for hooks/events

### Accessibility

- `Pressable` has `focus-visible:ring-2 ring-accent` built in — every CTA inherits it
- Scroll-spy in Nav uses IntersectionObserver, not scroll math (cheap)
- Reduced-motion branches in Hero, Process, ProjectCard, VelocityMarquee, StickyCta, FAQ
- `suppressHydrationWarning` on the live Tbilisi clock span (server renders `—`, client populates)
- All decorative motion uses `aria-hidden`

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
- **No CMS** — content lives in component files (Georgian copy inline).
- **No analytics** — Search Console verification meta tag is in `app/layout.tsx`; no GA/Plausible yet.

---

## Quick reference — common edits

| Want to change… | Edit |
|---|---|
| Accent color | `--color-accent` in `app/globals.css` (single line — propagates everywhere) |
| Pricing tiers | `packages` array in `Pricing.tsx` |
| Add FAQ question | `faqs` array in `FAQ.tsx` |
| Add project | `projects` array in `Work.tsx` + add screenshot to `public/work/` |
| Section copy | inline in respective `components/studio/*.tsx` |
| Contact info | `lib/site.ts` (single source) |
| Hero headline | `Hero.tsx` — note the period stays glued inside accent word's `motion.span` |
| Nav links | `navSections` array in `Nav.tsx` (scroll-spy auto-updates) |
