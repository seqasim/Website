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
- Hand-authored minimalist SVG line icons (neuroscience motifs)
- Faint data-motif backdrops behind key sections (see below)
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

## Data-motif backdrops

Approved decorative element for scientific atmosphere behind section content (homepage Research, Join CTA echo). Implemented in [`src/components/ResearchBackdrop.astro`](src/components/ResearchBackdrop.astro).

Rules:
- **Faint** — low ink/accent opacity (~10–14%); never competes with text or cards
- **Masked** — radial edge fade so the graphic dissolves into the surface
- **Behind content** — absolute layer under a `relative z-10` content wrapper; use `Section` with `backdrop` + named `backdrop` slot
- **Palette-locked** — `currentColor` ink + sparse accent only; no gradients as page backgrounds
- **`aria-hidden`** — decorative only; meaning stays in adjacent copy
- **No motion** — static SVG; respects the site’s no-parallax / no-flashy-animation rules

Motifs (left → right): spike raster, place-field heatmap, LFP traces, fitted curve — abstract stand-ins for the four research areas. Prefer this hand-authored SVG language over stock or clip-art science imagery.

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

Custom line icons live in [`src/components/Icon.astro`](src/components/Icon.astro). They use `currentColor` stroke (~1.5px) and are referenced by name:

| Name | Motif | Typical use |
|------|-------|-------------|
| `electrode` | Probe + waveform | Direct brain recordings |
| `grid` | Hexagonal place field | Memory / spatial cognition |
| `network` | Connected nodes | Memory persistence / mental health |
| `function` | Axes + curve | Computational methods |
| `sticky` / `fade` / `mental-health` | Big-question row | Homepage questions |

Research areas declare `icon:` in frontmatter. Wrap icons in `.icon-circle` or a small ink-soft disc on cards.

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
