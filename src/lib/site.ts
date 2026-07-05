/**
 * Site-wide configuration and helpers.
 * Centralizes metadata, navigation, and base-path-aware URL building.
 */

export const siteConfig = {
  name: "Qasim Lab",
  title: "Qasim Lab | Rutgers University",
  description:
    "We combine intracranial recordings, computational modeling, and behavioral experiments to understand how the human brain learns from experience.",
  url: "https://seqasim.github.io/Website",
  institution: "Rutgers University",
  contact: {
    email: "salman.qasim@rutgers.edu",
    address: "Rutgers University — New Brunswick, NJ",
    github: "https://github.com/seqasim",
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
  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith("/") ? path.slice(1) : path;
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
