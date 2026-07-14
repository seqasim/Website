# Qasim Lab Website

Modern static website for the Qasim Lab at Rutgers University.

**Live site:** https://qasimlab.rutgers.edu

## Quick Start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Project Docs

- [PROJECT.md](PROJECT.md) — architecture, folder structure, deployment
- [DESIGN_PRINCIPLES.md](DESIGN_PRINCIPLES.md) — visual and editorial guidelines
- [CONTENT_GUIDE.md](CONTENT_GUIDE.md) — how to edit Markdown content

## Deployment

Pushes to `master` deploy automatically via GitHub Actions to GitHub Pages, served at the Rutgers custom domain.

**Settings checklist:**
1. Repo **Settings → Pages → Source** = **GitHub Actions**
2. Custom domain = `qasimlab.rutgers.edu` (matches `public/CNAME`)
3. Prefer enabling **Enforce HTTPS** once the certificate is ready

**Astro config for the custom domain:**
```js
site: "https://qasimlab.rutgers.edu"
# no base path — custom domains are served from /
```
