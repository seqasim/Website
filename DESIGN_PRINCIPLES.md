# Design Principles

The Qasim Lab website should feel like a modern neuroscience lab — scientific, calm, and editorial — not a news feed or a typical university faculty page.

**Inspiration:** Doeller Lab, Arc Institute, OpenAI, Anthropic, Apple, HHMI Janelia, Allen Institute.

---

## What the site communicates

- Scientific rigor
- Curiosity
- Openness
- Technical excellence
- Human-centered neuroscience

---

## Avoid

- Corporate startup aesthetics (gradients, glassmorphism, neon accents)
- Busy pages with too many elements competing for attention
- Walls of text — break content into scannable sections
- Clip art or generic stock photography
- Skeuomorphic effects
- Flashy animations, parallax, scroll-jacking
- Gradients (solid colors only)
- Bootstrap-style or overly rounded "pill" UI
- Newsy card grids as the homepage lead

---

## Favor

- Large typography with clear hierarchy
- Clean layouts with generous whitespace
- Licensed Adobe Stock brain icons (tinted to ink teal), not improvised/AI line icons
- Soft photographic section backdrops from real EEG/lab science imagery (see below)
- Thin editorial rules (`.rule-accent`) for section accents
- Photography of real lab members and the Monet hero banner
- A slightly ink-tinted surface (`#F6F8F8`) so alternating sections are not stark white
- Interactive elements only when they improve understanding
- Subtle motion: opacity and transform transitions ≤ 200ms
- Rounded cards with subtle shadows (not heavy drop shadows)

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFFFFF` | Page background |
| Surface | `#F6F8F8` | Alternating sections — faint ink-tinted neutral (not stark gray) |
| Foreground | `#18181B` | Body text, headings |
| Muted | `#71717A` | Secondary text, captions |
| Accent | `#CC0033` | Rutgers red — CTAs and links only |
| Ink | `#0F6E6E` | Secondary scientific accent — icons, eyebrows, active nav |
| Ink soft | `#E6F2F2` | Soft circular backgrounds behind icons |
| Border | `#E4E4E7` | Card borders, dividers |

Rutgers red is an **accent for CTAs**, not a primary brand wash. Use the teal/ink token for the scientific visual system (icons, section labels). Active navigation uses ink, not red.

---

## Photographic section backdrops

Approved decorative element for scientific atmosphere behind section content (homepage Research, Join CTA echo). Implemented in [`src/components/ResearchBackdrop.astro`](src/components/ResearchBackdrop.astro).

Assets live in `public/images/backdrops/`:
- `brain-recordings-figure.jpg` — lab iEEG traces + electrode brain model (Research section)
- `eeg-traces-blue.jpg` / `eeg-traces-mono.jpg` — licensed EEG paper photographs (Join echo and alternatives)

Rules:
- **Real photography / lab figures only** — no generated SVG data motifs, no circuit-brain stock illustrations
- **Faint** — ~20–30% opacity; never competes with text or cards
- **Masked** — radial edge fade so the photo dissolves into the surface
- **Behind content** — absolute layer under a `relative z-10` content wrapper; use `Section` with `backdrop` + named `backdrop` slot
- **`aria-hidden`** — decorative only; meaning stays in adjacent copy
- **No motion** — static photos; respects the site’s no-parallax / no-flashy-animation rules

Whitespace remains intentional; a backdrop warms empty surface, it does not fill every section.

---

## Typography

- **Display / headlines:** Fraunces (serif) — editorial, scientific gravitas
- **Body / UI:** Inter (sans) — clean, readable, modern
- Large headline sizes on hero and section titles; slight negative tracking on display sizes
- Comfortable line height (1.6–1.75 for body)
- No more than 3 font sizes per section
- Nav labels: uppercase, wide tracking (lab-site convention)

---

## Icon system

Icons are cropped from the licensed Adobe Stock “Brain Icons” pack (`AdobeStock_718653205`), tinted to ink teal, and stored as PNGs in [`public/images/icons/`](public/images/icons/). [`src/components/Icon.astro`](src/components/Icon.astro) maps a name to a PNG.

| Name | Typical use |
|------|-------------|
| `neuron` | Direct brain recordings; “memories stick” |
| `cognition` | Memory / goal-directed cognition |
| `wise` | Memory persistence & mental health |
| `neural-network` | Computational methods |
| `alzheimer` | “Why do memories fade?” |
| `mental-health` | “How can memory go awry?” |
| `brain` / `learning` / `focus` / `neurology` / `intellect` | Available alternates |

Legacy names (`electrode`, `grid`, `network`, `function`, `sticky`, `fade`) still resolve via aliases. Research areas declare `icon:` in frontmatter. Wrap icons in `.icon-circle` or a small ink-soft disc on cards. Do not invent new SVG “AI slop” glyphs — add another PNG from the licensed pack instead.

---

## Spacing

- Whitespace is a feature, not wasted space
- Section padding: generous vertical rhythm (`py-16` to `py-24`)
- Content max-width: ~72rem (`max-w-6xl`) centered
- Card internal padding: consistent (`p-6` to `p-8`)

---

## Layout Rules

- Every page answers **one primary question** before introducing secondary content
- Homepage flow: Hero (Monet + sticky-memory question) → Big questions → Research → Affiliations → Publications → People → News (compact) → Join
- News is never the homepage lead — prefer a compact list, not a card grid
- One column on mobile; two or three columns on desktop where appropriate
- Cards use `rounded-xl`, subtle `shadow-sm`, white background
- Affiliations appear on Home, Contact, and Footer (data in `site.ts`)

---

## Link previews

The Monet banner (`/images/banner_picture_monet.jpg`) is the default Open Graph / Twitter card image via `BaseLayout`. Keep this as the signature share image unless a page explicitly overrides `ogImage`.

---

## Motion

- Only subtle transitions: hover opacity, slight translate on cards
- Duration: 150–200ms, ease-out
- No auto-playing animations
- Respect `prefers-reduced-motion`

---

## Accessibility

- WCAG AA contrast minimum
- Semantic HTML (`<main>`, `<nav>`, `<article>`, heading hierarchy)
- Visible focus rings on all interactive elements
- Alt text on all images
- Skip-to-content link
- Icons are `aria-hidden`; meaning lives in adjacent text

---

## When unsure, simplify.
