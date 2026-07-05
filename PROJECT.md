# Qasim Lab Website — Project Guide

This document is the source of truth for how the site is built, organized, and deployed. Read this before making structural changes.

## Overview

A minimal, editorial, science-forward static website for the Qasim Lab at Rutgers University. Content is authored in Markdown; the site is built with Astro and deployed to GitHub Pages.

**Live URL (current):** https://seqasim.github.io/Website

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
npm run dev        # http://localhost:4321/Website
npm run build      # Output to dist/
npm run preview    # Preview production build
```

## Deployment

The site deploys automatically on push to `main` via GitHub Actions.

**First-time setup:**
1. Push this repo to `github.com/seqasim/Website`
2. Go to repo **Settings → Pages → Source** and select **GitHub Actions**
3. Push to `main` — the workflow builds and deploys

**Astro config for GitHub Pages project page:**
```js
site: "https://seqasim.github.io"
base: "/Website"
```

All internal links use the `withBase()` helper from `src/lib/site.ts` to respect the base path.

## Switching to a Custom Domain Later

If Rutgers IT provides a subdomain (e.g. `qasimlab.rutgers.edu`):

1. Add `public/CNAME` containing the domain name
2. Remove `base: "/Website"` from `astro.config.mjs`
3. Update `site` to the new domain
4. Ask Rutgers IT to add a DNS `CNAME` record pointing to `seqasim.github.io`
5. In GitHub repo Settings → Pages, enter the custom domain

No code changes needed beyond config — `withBase()` will resolve to `/` when base is removed.

## Adding Content

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for step-by-step instructions on adding publications, people, news, etc.

## Design Decisions

See [DESIGN_PRINCIPLES.md](DESIGN_PRINCIPLES.md) for the visual and editorial taste guide.
