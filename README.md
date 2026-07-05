# Qasim Lab Website

Modern static website for the Qasim Lab at Rutgers University.

**Live site:** https://seqasim.github.io/Website

## Quick Start

```bash
npm install
npm run dev      # http://localhost:4321/Website
npm run build
npm run preview
```

## Project Docs

- [PROJECT.md](PROJECT.md) — architecture, folder structure, deployment
- [DESIGN_PRINCIPLES.md](DESIGN_PRINCIPLES.md) — visual and editorial guidelines
- [CONTENT_GUIDE.md](CONTENT_GUIDE.md) — how to edit Markdown content

## Deployment

Pushes to `main` deploy automatically via GitHub Actions.

**First-time setup:**
1. Push to `github.com/seqasim/Website`
2. Repo **Settings → Pages → Source** → select **GitHub Actions**
3. Push to `main`

## Switching to a Custom Domain

If Rutgers IT provides a subdomain (e.g. `qasimlab.rutgers.edu`):

1. Create `public/CNAME` with the domain name
2. Remove `base: "/Website"` from `astro.config.mjs`
3. Update `site` to the new domain
4. Ask Rutgers IT for a DNS `CNAME` record → `seqasim.github.io`
5. Enter the custom domain in GitHub repo Settings → Pages
