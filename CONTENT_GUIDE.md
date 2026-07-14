# Content Guide

How to add and edit content on the Qasim Lab website. No coding required — just edit Markdown files.

## Previewing Changes

```bash
npm install
npm run dev
```

Open http://localhost:4321 in your browser. Changes to Markdown files reload automatically.

---

## Research Areas

**Location:** `src/content/research/`

Create a new `.md` file (filename becomes the URL slug):

```markdown
---
title: "Memory Persistence and Mental Health"
summary: "How the computations that make memories sticky can go awry in memory loss and psychiatric disorders."
order: 1
---

Your detailed research description here. Supports **Markdown** formatting.
```

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Display name |
| `summary` | Yes | Short description for cards |
| `order` | Yes | Sort order (lower = first) |
| Body | Yes | Full description (Markdown) |

---

## Publications

**Location:** `src/content/publications/`

```markdown
---
title: "Neural signatures of memory-guided decisions"
authors:
  - "Qasim, S.E."
  - "Smith, J."
  - "Doe, A."
journal: "Nature Neuroscience"
year: 2025
link: "https://doi.org/10.1038/example"
featured: true
tags:
  - "intracranial EEG"
  - "decision-making"
---
```

Optional one-line abstract as the Markdown body.

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Paper title |
| `authors` | Yes | List of author names |
| `journal` | Yes | Journal or venue |
| `year` | Yes | Publication year |
| `link` | No | URL to paper |
| `featured` | No | Show on homepage (default: false) |
| `tags` | No | Topic tags |

---

## People

**Location:** `src/content/people/`

```markdown
---
name: "Salman E. Qasim"
role: "PI"
photo: "/images/people/placeholder.svg"
bio: "Principal Investigator. Studies the mental computations that make memories sticky."
email: "salman.qasim@rutgers.edu"
order: 1
alumni: false
---
```

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Full name |
| `role` | Yes | `PI`, `Postdoc`, `PhD Student`, or `Alum` |
| `photo` | No | Path under `public/` |
| `bio` | Yes | Short biography |
| `email` | No | Contact email |
| `order` | Yes | Display order within role group |
| `alumni` | No | Move to Alumni section (default: false) |

**Photos:** Place images in `public/images/people/`. Use square crops, at least 400×400px.

---

## News

**Location:** `src/content/news/`

```markdown
---
title: "Lab welcomes new postdoctoral fellow"
date: 2025-09-01
summary: "Dr. Jane Smith joins the lab to study computational models of memory."
---

Full news article body in Markdown.
```

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Headline |
| `date` | Yes | Publication date (YYYY-MM-DD) |
| `summary` | Yes | Short excerpt for cards |
| Body | Yes | Full article (Markdown) |

---

## Open Positions

**Location:** `src/content/positions/`

```markdown
---
title: "PhD Student — Memory and Mental Health"
type: "PhD"
description: "We are seeking a motivated PhD student to join our NIH-funded project."
open: true
---
```

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Position title |
| `type` | Yes | `PhD`, `Postdoc`, `Research Assistant`, etc. |
| `description` | Yes | Brief description |
| `open` | Yes | Whether currently accepting applications |

---

## Placeholder vs. Real Content

The following are **placeholder** and should be replaced with real content:

- All people names, photos, and bios (except structure)
- All publication entries
- All news posts
- Lab address and contact details in `src/lib/site.ts`
- Hero headline and subheadline (currently match the lab's research focus — verify accuracy)

---

## Images

- Store in `public/images/`
- Use descriptive filenames: `salman-qasim.jpg`, not `IMG_1234.jpg`
- Always provide meaningful alt text via the `photo` field context
- Prefer real lab photography over stock images
- SVG placeholders are fine until real photos are available
