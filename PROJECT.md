# Qasim Lab Website — Project Guide

This document is the source of truth for how the site is built, organized, and deployed. Read this before making structural changes.

## Overview

A minimal, editorial, science-forward static website for the Qasim Lab at Rutgers University. Content is authored in Markdown; the site is built with Astro and deployed to GitHub Pages.

**Live URL (current):** https://qasimlab.rutgers.edu

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Astro 6 (static output) |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` |
| Language | TypeScript (strict) |
| Content | Markdown Content Collections (Content Layer API) |
| Hosting | GitHub Pages (free) |
| CI/CD | GitHub Actions (`withastro/action`) |

**Not used:** React, databases, CMS, WordPress, Bootstrap, jQuery.

## Site Map

| Route | Page | Content source |
|-------|------|----------------|
| `/` | Home | Hero + featured sections from collections |
| `/research` | Research overview | `src/content/research/` |
| `/research/[slug]` | Research area detail | Individual research `.md` files |
| `/publications` | Publications | `src/content/publications/` |
| `/people` | People | `src/content/people/` |
| `/news` | News index | `src/content/news/` |
| `/news/[slug]` | News detail | Individual news `.md` files |
| `/join` | Join the Lab | `src/content/positions/` + static copy |
| `/contact` | Contact | `src/lib/site.ts` config |

## Folder Structure

```
Website/
├── .github/workflows/deploy.yml   # GitHub Pages deployment
├── public/                        # Static assets (favicon, robots.txt)
├── src/
│   ├── components/                # Reusable UI components
│   ├── content/                   # Markdown content files
│   │   ├── research/
│   │   ├── publications/
│   │   ├── people/
│   │   ├── news/
│   │   └── positions/
│   ├── layouts/                   # Page layouts
│   ├── lib/                       # Site config, helpers (withBase)
│   ├── pages/                     # Astro routes
│   ├── styles/                    # Global CSS + design tokens
│   └── content.config.ts          # Collection schemas
├── PROJECT.md                     # This file
├── DESIGN_PRINCIPLES.md           # Design taste guide
├── CONTENT_GUIDE.md               # How to edit content
└── README.md                      # Quick start
```

## Local Development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # Output to dist/
npm run preview    # Preview production build
```

## Deployment

The site deploys automatically on push to `master` via GitHub Actions, and is served at the Rutgers custom domain.

**Astro config for custom domain (root path):**
```js
site: "https://qasimlab.rutgers.edu"
# no base — custom domains serve at /
```

`public/CNAME` contains `qasimlab.rutgers.edu`. All internal links use `withBase()` from `src/lib/site.ts`, which resolves to `/` when no base path is set.

**Important:** Do not re-add `base: "/Website"`. That causes CSS/JS to load from `/Website/_astro/...`, which 404s on the custom domain and breaks all styling.

## Adding Content

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for step-by-step instructions on adding publications, people, news, etc.

## Design Decisions

See [DESIGN_PRINCIPLES.md](DESIGN_PRINCIPLES.md) for the visual and editorial taste guide.
