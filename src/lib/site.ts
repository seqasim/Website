/**
 * Site-wide configuration and helpers.
 * Centralizes metadata, navigation, and base-path-aware URL building.
 */

export const siteConfig = {
  name: "Qasim Lab",
  title: "Qasim Lab | Rutgers University",
  description:
    "We study the mental computations that make memories sticky — and how those processes go awry in memory loss and mental health disorders, using direct-brain recordings in human neurosurgical patients.",
  url: "https://seqasim.github.io/Website",
  institution: "Rutgers Robert Wood Johnson Medical School",
  contact: {
    email: "salman.qasim@rutgers.edu",
    address: "Department of Neurosurgery, Rutgers Robert Wood Johnson Medical School, New Brunswick, NJ",
    github: "https://github.com/seqasim",
    twitter: "https://x.com/QasimEtal",
    scholar: "https://scholar.google.com/citations?user=STCkJC4AAAAJ",
    labSite: "https://sites.rutgers.edu/qasim-lab/",
  },
} as const;

export const navLinks = [
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "People", href: "/people" },
  { label: "News", href: "/news" },
  { label: "Join", href: "/join" },
  { label: "Contact", href: "/contact" },
] as const;

/** Build a URL that respects Astro's base path (e.g. /Website). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  const normalized = path.replace(/^\//, "");
  return `${base}${normalized}`;
}

/** Format a date for display. */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Sort helper: ascending by order field. */
export function byOrder<T extends { data: { order?: number } }>(a: T, b: T): number {
  return (a.data.order ?? 0) - (b.data.order ?? 0);
}

/** Sort helper: descending by date. */
export function byDateDesc<T extends { data: { date: Date } }>(a: T, b: T): number {
  return b.data.date.getTime() - a.data.date.getTime();
}

/** Sort helper: descending by year. */
export function byYearDesc<T extends { data: { year: number } }>(a: T, b: T): number {
  return b.data.year - a.data.year;
}
