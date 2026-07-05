# Design Principles

The Qasim Lab website should feel like a modern research institute — not a typical university faculty page.

**Inspiration:** Arc Institute, OpenAI, Anthropic, Apple, HHMI Janelia, Allen Institute.

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

---

## Favor

- Large typography with clear hierarchy
- Clean layouts with generous whitespace
- Carefully chosen scientific illustrations (when available)
- Photography of real lab members (placeholder silhouettes until then)
- Interactive elements only when they improve understanding
- Subtle motion: opacity and transform transitions ≤ 200ms
- Rounded cards with subtle shadows (not heavy drop shadows)

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFFFFF` / `#FAFAFA` | Page and section backgrounds |
| Foreground | `#18181B` | Body text, headings |
| Muted | `#71717A` | Secondary text, captions |
| Accent | `#CC0033` | Rutgers red — CTAs, links, highlights only |
| Border | `#E4E4E7` | Card borders, dividers |

Rutgers red is an **accent**, not a primary color. Use it sparingly for CTAs, active nav states, and key highlights.

---

## Typography

- **Display / headlines:** Fraunces (serif) — editorial, scientific gravitas
- **Body / UI:** Inter (sans) — clean, readable, modern
- Large headline sizes on hero and section titles
- Comfortable line height (1.6–1.75 for body)
- No more than 3 font sizes per section

---

## Spacing

- Whitespace is a feature, not wasted space
- Section padding: generous vertical rhythm (`py-16` to `py-24`)
- Content max-width: ~72rem (`max-w-6xl`) centered
- Card internal padding: consistent (`p-6` to `p-8`)

---

## Layout Rules

- Every page answers **one primary question** before introducing secondary content
- Homepage flow: Hero → Research → Publications → News → People → Join
- One column on mobile; two or three columns on desktop where appropriate
- Cards use `rounded-xl`, subtle `shadow-sm`, white background

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

---

## When unsure, simplify.
