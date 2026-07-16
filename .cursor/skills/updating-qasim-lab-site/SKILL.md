---
name: updating-qasim-lab-site
description: Add, edit, or remove Qasim Lab website content — research areas, publications, lab members (including moving members to alumni), news posts, and job postings. Use when updating this Astro site's Markdown content, when the user mentions adding a paper, person, news item, announcement, or position, or when moving a lab member to Alumni.
---

# Updating the Qasim Lab Website

This site is a static Astro site. All content lives in Markdown files under `src/content/`. Each content type is a "collection" with a fixed frontmatter schema defined in `src/content.config.ts`. To change site content, add/edit/delete Markdown files — never hardcode content into `.astro` pages.

## Golden rules

1. Match the frontmatter schema exactly (see each section below). A missing required field or wrong type breaks the build.
2. One item = one `.md` file. The filename (kebab-case, no spaces) becomes the URL slug for research and news.
3. Follow existing files as templates. Read a sibling file in the same folder before writing a new one.
4. Keep the voice scientific, concise, and plain (see [DESIGN_PRINCIPLES.md](../../../DESIGN_PRINCIPLES.md)). No marketing hype.
5. Always verify with a build before finishing (see "Build and deploy").

## Collections at a glance

| Type | Folder | Filename = slug? | Sort |
|------|--------|------------------|------|
| Research areas | `src/content/research/` | Yes | `order` ascending |
| Publications | `src/content/publications/` | No | `year` descending |
| People | `src/content/people/` | No | `order` ascending, grouped by `role` |
| News | `src/content/news/` | Yes | `order` ascending |
| Media coverage | `src/content/media/` | No | `order` ascending |
| Positions | `src/content/positions/` | No | file order; `open: true` shown |

---

## Add a research area

Create `src/content/research/<slug>.md`:

```markdown
---
title: "Short Area Name"
summary: "One-sentence description shown on cards."
order: 5
icon: "neural-network"
---

Body paragraphs in Markdown describing the research area. Two short
paragraphs is ideal. This renders on the detail page /research/<slug>.
```

- `order`: set higher than the current max to append, or renumber to reposition.
- `icon`: optional name from the Adobe Stock brain-icon set in `public/images/icons/` (via `src/components/Icon.astro`). Preferred values: `neuron`, `cognition`, `wise`, `neural-network`, `mental-health`, `alzheimer`, `neurology`, `intellect`, `brain`, `learning`, `focus`. Shown on Research cards and the homepage.
- Featured on the homepage automatically (homepage shows all research areas).

To remove: delete the file.

---

## Update affiliations

Affiliations are **not** a Markdown collection. They live in the `affiliations` array in [`src/lib/site.ts`](../../../src/lib/site.ts):

```ts
{
  name: "Brain Health Institute",
  shortName: "Rutgers BHI",
  role: "Core member",
  url: "https://brainhealthinstitute.rutgers.edu/",
},
```

They render on the homepage, Contact page, and Footer via `Affiliations.astro`. Edit that array to add/remove/reorder — no page changes needed.

---

## Add a publication

Create `src/content/publications/<descriptive-name>.md` (filename is not user-visible):

```markdown
---
title: "Full paper title"
authors:
  - "Qasim, S.E."
  - "Coauthor, A.B."
journal: "Journal Name"
year: 2026
link: "https://doi.org/..."
featured: false
tags:
  - "topic"
---
```

Field rules:
- `authors`: list, "Lastname, F.M." format. Bold/emphasis is not used here.
- `journal`: include status in parentheses if not yet published, e.g. `"PLOS Computational Biology (in press)"` or `"bioRxiv (in revision at Cell)"`.
- `link`: optional. Omit the line entirely if there is no URL yet (do not use an empty string). Must be a valid URL when present.
- `featured: true`: surfaces the paper in the homepage "Recent publications" section. Keep ~3 featured; prefer the newest high-impact papers.
- `tags`: optional list of lowercase topic keywords.

The Publications page groups by `year` automatically and links to Google Scholar for the full list.

To remove: delete the file.

---

## Add a lab member

Create `src/content/people/<firstname-lastname>.md`:

```markdown
---
name: "Full Name, Ph.D."
role: "Postdoc"
photo: "/images/people/firstname-lastname.jpg"
bio: "2–3 sentences: current role, training/degree, and research focus."
email: "name@rutgers.edu"
order: 3
alumni: false
---
```

Field rules:
- `role`: must be one of `PI`, `Postdoc`, `PhD Student`, `Undergraduate`, `Staff`, `Alum`. To add a new role, first add it to the `role` enum in `src/content.config.ts` and to `roleGroups` in `src/pages/people/index.astro`.
- `photo`: optional. Put the image in `public/images/people/` and reference it as `/images/people/<file>` (leading slash). If omitted, a placeholder initial is shown.
- `photoPosition`: optional CSS `object-position` for cropping adjustments, e.g. `"center 35%"` if the top of the head is cut off. Default is `"center center"`.
- `email`: optional; omit the line if none.
- `order`: controls order within the person's role group.

To remove entirely: delete the file.

---

## Move a member to Alumni

Do NOT delete the person. Edit their `.md` file:

1. Set `alumni: true`.
2. Optionally change `role` to `"Alum"`.
3. Update the `bio` to reflect where they went next, e.g. "Former PhD student; now a postdoc at ...".

Anyone with `alumni: true` (or `role: "Alum"`) appears in the Alumni section on the People page and is excluded from the active groups and the homepage.

---

## Add a news post

News posts appear on the **News** page (`/news`) and the **first 3 by `order`** automatically show on the homepage. Do **not** include dates.

**Step 1:** Pick a filename slug (kebab-case, becomes the URL). Example: `lab-presentation-sfn-2026.md` → `/news/lab-presentation-sfn-2026`.

**Step 2:** Create `src/content/news/<slug>.md`:

```markdown
---
title: "Headline shown on the page and cards"
summary: "One-sentence excerpt for cards and previews."
order: 1
---

Full post body in Markdown. One or two short paragraphs is enough.
You can use **bold**, links, and lists.
```

**Field rules:**
- `title`: headline (required).
- `summary`: short teaser for cards on `/news` and the homepage (required).
- `order`: lower numbers appear first (set new posts to `1` and bump others if needed).
- Body: optional Markdown for the detail page.

**Step 3:** Run `npm run build` to verify, then commit and push.

**Examples of good news posts:**
- New paper published
- Grant or award received
- New lab member joined
- Upcoming talk or conference presentation

To remove: delete the file.

To edit: change the frontmatter or body in place — no other files need updating.

---

## Add media coverage

Media links appear in the **Media coverage** section on the Publications page (`/publications`).

Create `src/content/media/<slug>.md`:

```markdown
---
title: "Article headline"
outlet: "New Scientist"
link: "https://..."
year: 2023
order: 1
---

Optional note about which paper the coverage refers to.
```

- `order`: lower numbers appear first.
- To remove: delete the file.

---

## Add a job posting (position)

Create `src/content/positions/<slug>.md`:

```markdown
---
title: "Position title"
type: "Postdoc"
description: "1–2 sentence summary shown on the Join page card."
open: true
---

Optional Markdown body with application details.
```

- `type`: free text, e.g. `PhD`, `Undergraduate`, `Research Assistant`. **Postdoc positions are currently hidden from the Join page** even if `open: true` — set `open: false` or omit postdoc postings until the lab is hiring.
- `open: true` shows the posting on the Join page. Set `open: false` to hide it without deleting.

To remove: delete the file.

---

## Build and deploy

After any content change, from the repo root:

```bash
npm install   # first time only
npm run build # must succeed with no errors
```

If the build fails, fix the reported file (usually a schema mismatch) before continuing.

To publish: commit and push to `master`. GitHub Actions builds and deploys to https://qasimlab.rutgers.edu automatically. Only commit/push when the user asks.

Use a clear commit message, e.g.:

```
Add publication: <short title>
```
or
```
Move <name> to Alumni
```

## Where things live

- Content schemas: `src/content.config.ts`
- Site metadata, nav, contact links: `src/lib/site.ts`
- Page templates: `src/pages/`
- Shared components: `src/components/`
- Voice and visual rules: [DESIGN_PRINCIPLES.md](../../../DESIGN_PRINCIPLES.md)
- Non-technical content reference: [CONTENT_GUIDE.md](../../../CONTENT_GUIDE.md)
