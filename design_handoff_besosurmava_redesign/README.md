# Handoff: besosurmava.com Redesign

## Overview
A full visual redesign of besosurmava.com (Beso Surmava's web-studio site, Kutaisi/Georgia). Dark "espresso" premium aesthetic with a hand-inked Georgian ბ ("B") monogram as the brand mark, bilingual KA/EN content, and calligraphic ink-motion animations throughout. Goal: implement this exactly as designed on the real besosurmava.com codebase (Next.js, per the client's existing stack).

## About the Design Files
The bundled file `Beso Surmava.dc.html` is a **design reference built in HTML** — a high-fidelity prototype of look, content, and motion, not production code to paste in as-is. Recreate it in the target codebase's existing environment (Next.js/React) using idiomatic components, CSS/SCSS or CSS-in-JS per the project's conventions — porting structure, values, and behavior faithfully rather than the raw HTML.

## Fidelity
**High-fidelity.** Colors, type, spacing, copy, and animation timings below are final — implement pixel/timing-accurate.

## Design Tokens

**Colors**
- Background (base): `#16110d`
- Background (raised/alt section): `#1b1510`
- Card background: `#1d1610`
- Card background hover: `#231a12`
- Border (subtle): `rgba(243,235,221,0.08)` – `rgba(243,235,221,0.14)` (varies by context)
- Text primary (cream): `#f3ebdd`
- Text muted: `rgba(243,235,221,0.55–0.65)` depending on hierarchy
- Text faint: `rgba(243,235,221,0.4–0.5)`
- Accent (honey-amber): `#e3a23c` — exposed as a CSS custom property `--ac` so it's themeable
- Selection highlight: background `#e3a23c`, text `#16110d`

**Typography**
- Georgian/Latin body + UI: **Noto Sans Georgian**, weights 400/500/600/700/800/900 (Google Fonts)
- Display/logo/headline serif accents: **Noto Serif Georgian**, weights 500–900 (Google Fonts) — used for the ბ monogram, the "ბესო" wordmark, and hero/CTA headline em-phrases
- Micro-labels (index numbers, "Web Studio" sub-label, image-placeholder captions): **Space Mono**, 400/700
- Base font stack: `'Noto Sans Georgian', system-ui, sans-serif`
- Scale: hero H1 `clamp(44px,5.6vw,84px)` weight 900, line-height 0.98; section H2 `clamp(30px,3.6vw,52px)` weight 800; body ~16–20px; micro-labels 9–14px with heavy letter-spacing (0.06–0.26em) and uppercase

**Spacing / Layout**
- Max content width: 1280px, side padding 32px
- Section vertical padding: ~88px (desktop)
- Card border-radius: 20–24px; pill buttons/badges: 999px (full round)
- Grid: 2-column for services/work cards, 3-column for pricing, all with `gap` (16–20px) — no margin-based spacing

## Screens / Sections (single scrolling homepage)

1. **Nav (sticky)** — Logo lockup left: ბ monogram (see Logo below) + serif "ბესო" wordmark + mono "Web Studio · Kutaisi" sub-label. Center-right: 5 nav links (მთავარი/Home, სერვისები/Services, ნამუშევრები/Work, ფასები/Pricing, კონტაქტი/Contact) as plain text links with a 1.5px accent underline that fades in on hover (no pill/background chip). Far right: a minimal "KA / EN" text-only language toggle (active language colored accent, inactive muted, separated by a "/"), then a WhatsApp CTA pill (cream bg → accent bg + lift on hover). Backdrop-blur glass bar, 1px bottom hairline border.

2. **Hero** — Two-column: left = eyebrow pill ("Web Studio · Kutaisi/Tbilisi — Available" with a pulsing accent dot), big headline with one word/phrase in italic accent color, subhead, two CTAs (solid cream primary "Start a project →", outline secondary "View work"), and a 3-stat row (3+ Years / 12 Projects / 24h Response). Right = the **ink-calligraphy hero graphic** (see Animations below). Below the grid: a small "Scroll" mono label with a fading vertical tick line.

3. **Services (section 01)** — Kicker "01 · What I do", H2, intro line, 2×2 grid of 4 service cards (Web Design, Development, Mobile Version, SEO & Speed) each with an index number, an icon-in-circle, title, body copy, and a mono tag line. Card border brightens to accent on hover.

4. **Marquee** — Infinite horizontal auto-scrolling strip (linear, no easing, ~32s loop) of category words (Hotels/Restaurants/Cottages/Branding/Websites/Kutaisi) separated by a ✦ glyph, duplicated content for seamless looping.

5. **Work (section 02)** — Kicker "02 · Work", H2, intro, 2-column grid of project cards (Georgian House, Kvirike Hills) — each a striped placeholder image area (to be replaced with real screenshots) with an external-link badge, plus index/type/name/description below. Card lifts on hover, links out to the live client site.

6. **Process (section 03)** — Alt background (`#1b1510`). Kicker, H2, intro, then a plain vertically-stacked list of 5 numbered steps (large accent-colored number + title + body), each row separated by a hairline top border.

7. **Pricing (section 04)** — Kicker, H2, intro, 3-column card grid: Landing Page (600₾), Standard Site (1000₾, marked "Popular" with an accent border + badge), Premium Site (1500₾). Each card: name, big price + "from", description, divider, checklist of features (✓ in accent), CTA button (accent-filled on the popular card, outline on the others). Footnote about domain/hosting cost.

8. **FAQ (section 05)** — Alt background. Kicker, H2, then an accordion of 6 Q&As. Each row: mono index number + question + a "+" icon that rotates 45° when open; answer panel expands via `max-height`/`opacity` transition. Only one open at a time (accordion behavior, default first item open).

9. **About (section 06)** — Two-column: left = photo placeholder (4:5 ratio, striped pattern + caption "to be replaced with a photo of Beso"), right = kicker, H2 ("Hi, I'm Beso"), two paragraphs of bio copy, and a row of 4 tag pills (Next.js, Mobile-first, Kutaisi, Fast support).

10. **Contact (section 07)** — A large rounded card (32px radius) on the page background, containing the same ink-wash motion motif (smaller/subtler), kicker, big headline with an italic accent phrase, subhead, WhatsApp + phone CTAs, and email/Instagram links.

11. **Footer** — Small ბ mark + "Web Studio · Kutaisi" tag on the left, copyright line on the right, top hairline border.

## Interactions & Behavior

- **Language toggle**: single button in the nav flips ALL page copy between Georgian (`ka`) and English (`en`) via a client-side state flag — every string on the page has a KA and EN version (see Content below); no page reload.
- **FAQ accordion**: click a question to expand/collapse its answer; clicking an open item closes it; only one open at a time. Icon rotates 45° in sync with the expand transition (~0.25–0.3s ease).
- **Hover states**: nav links get a bottom accent underline; buttons lift (`translateY(-1px to -2px)`) and/or swap cream→accent background; cards get an accent-tinted border and (for Work cards) lift up 4px; the logo mark nudges up 2px on hover.
- **Sticky nav** with backdrop blur; stays pinned while scrolling.
- All anchor links (`#services`, `#work`, etc.) smooth-scroll to their section.

## Animations (all CSS, infinite/looping unless noted)

This is the signature visual system — implement precisely:

1. **Logo mark ("ink wash ბ")** — used in nav, hero, and footer for brand consistency: the Georgian ბ glyph (Noto Serif Georgian, bold) rendered over a soft amber ellipse/blob positioned behind it. The blob continuously "breathes": scales between ~0.86× and ~1.12× while opacity cycles between ~0.12 and ~0.34, on a 6–7s ease-in-out infinite loop (slightly different duration per placement so instances don't sync visually). The ბ itself has a very gentle float: translateY between 0 and -14px combined with a ±1.5–2° rotation wobble, 6–6.5s ease-in-out infinite.

2. **Hero centerpiece** — a large version of the same ბ-over-wash motif, plus:
   - A prominent ink "brushstroke ring" (an open, hand-drawn-feeling circular path, NOT a perfect/mechanical circle) drawn with `stroke-dasharray`/`stroke-dashoffset` so it appears to continuously write itself and then erase, 7–9s ease-in-out infinite, using `pathLength="100"` normalization for consistent timing regardless of path length.
   - 2–3 additional thinner accent/cream calligraphic stroke paths behind/around it, animating the same draw-erase way but staggered with negative animation-delays (-1.2s, -2.4s) so motion feels layered, not synchronized.
   - Several small "ink speck" dots drifting upward (translateY ~ -90 to -110px) and fading out, staggered start times, ~4.5–6.2s ease-in loops.
   - Do **not** use a mechanical/technical-looking spinning target, dashed concentric rings, or crosshair lines — the brief was explicitly to avoid that generic "startup studio" spinning-circle look in favor of an organic, hand-inked feel.

3. **Marquee**: constant-speed linear `translateX(-50%)` loop, ~32s, no pause on hover required.

4. **Eyebrow pulse dot**: small dot in the hero eyebrow pill scales 0.85↔1.1 and fades 0.5↔1 opacity, 2.4s ease-in-out infinite.

## Assets
- No photography yet — all imagery is a striped/repeating-diagonal-gradient placeholder with a monospace caption stating what should go there (e.g. "Georgian House · screenshot", "Beso · photo"). Real assets to source: 2 project screenshots (Georgian House, Kvirike Hills) and a photo of Beso for the About section.
- Fonts are loaded from Google Fonts (Noto Sans Georgian, Noto Serif Georgian, Space Mono) — no local font files.
- Logo is generated in-code (SVG text glyph + shape), not an image file — recreate as SVG/CSS, not a raster export.

## Content (bilingual — implement both, toggle-driven)
All real copy (Georgian, sourced from the live site) plus English translations, nav labels, service descriptions, the 5-step process, all 3 pricing tiers with exact prices (600₾/1000₾/1500₾) and feature lists, and 6 FAQ questions are written out in full inside `Beso Surmava.dc.html`'s script — search for the `content()` method, which returns a `{ ka: {...}, en: {...} }` object with every string used on the page. Treat that object as the copy source of truth (note: the 6 FAQ **answers** were authored by the designer as placeholders since the original site's answers were collapsed/inaccessible — flag these for the client to confirm/edit before launch).

Real contact info (already live, keep as-is):
- WhatsApp: `https://wa.me/995596855050`
- Phone: `+995 596 85 50 50`
- Email: `besosurm12@gmail.com`
- Instagram: `@beso_surmava`
- Live client sites linked from Work section: `https://georgianhousekutaisi.com`, `https://kvirikehills.com`

## Files
- `Beso Surmava.dc.html` — the full design (structure + inline styles + all copy/logic in one file). Open directly in a browser to view/interact with it.
- `Logo Options.dc.html` — a side-by-side board of 5 alternate logo-mark treatments explored before landing on the final "ink wash" version (kept for reference only; not part of the final design).
