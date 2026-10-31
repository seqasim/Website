/**
 * Site-wide configuration and helpers.
 * Centralizes metadata, navigation, and base-path-aware URL building.
 */

export const siteConfig = {
  name: "Qasim Lab",
  title: "Qasim Lab | Rutgers University",
  description:
    "We study the mental computations that make memories sticky — and how those processes go awry in memory loss and mental health disorders, using direct-brain recordings in human neurosurgical patients.",
  url: "https://qasimlab.rutgers.edu",
  institution: "Rutgers Robert Wood Johnson Medical School",
  /** Default Open Graph / link-preview image (Monet banner). */
  ogImage: "/images/banner_picture_monet.jpg",
  contact: {
    email: "salman.qasim@rutgers.edu",
    address: "Department of Neurosurgery, Rutgers Robert Wood Johnson Medical School, New Brunswick, NJ",
    github: "https://github.com/seqasim",
    twitter: "https://x.com/QasimEtal",
    scholar: "https://scholar.google.com/citations?user=STCkJC4AAAAJ",
    labSite: "https://sites.rutgers.edu/qasim-lab/",
  },
} as const;

/** Institutional affiliations shown on Home, Contact, and Footer. */
export const affiliations = [
  {
    name: "Brain Health Institute",
    shortName: "Rutgers BHI",
    role: "Core member",
    url: "https://brainhealthinstitute.rutgers.edu/",
  },
  {
    name: "Department of Neurosurgery",
    shortName: "RWJMS",
    role: "Faculty",
    url: "https://rwjms.rutgers.edu/department/neurological-surgery",
  },
  {
    name: "NTICe",
    shortName: "New Jersey Translational Immunology & Cognitive Neuroscience Center",
    role: "Board member",
    url: "https://ntice.rutgers.edu/",
  },
] as const;

export const navLinks = [
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "People", href: "/people" },
  { label: "News", href: "/news" },
  { label: "Resources", href: "/resources" },
  { label: "Join", href: "/join" },
  { label: "Contact", href: "/contact" },
] as const;

/** Campus and lab portals shown on the Resources hub. */
export const labQuickLinks = [
  {
    title: "Lab GitHub",
    description: "Shared analysis pipelines, experiment code, and lab repositories.",
    url: "https://github.com/seqasim",
  },
  {
    title: "Rutgers Amarel HPC",
    description: "Office of Advanced Research Computing cluster documentation and access.",
    url: "https://oarc.rutgers.edu/resources/amarel/",
  },
  {
    title: "CITI & Human Subjects Training",
    description: "Required CITI modules for human subjects research at Rutgers.",
    url: "https://research.rutgers.edu/researcher-support/research-compliance/human-subjects-protection-program-irb/training-and-education",
  },
  {
    title: "Rutgers eIRB",
    description: "Submit and manage IRB protocols through the Rutgers research portal.",
    url: "https://research.rutgers.edu/researcher-support/research-compliance/human-subjects-protection-program-irb",
  },
  {
    title: "Brain Health Institute",
    description: "Rutgers BHI community, seminars, and neuroscience resources.",
    url: "https://brainhealthinstitute.rutgers.edu/",
  },
] as const;

/** Build a URL that respects Astro's base path (root `/` on custom domain). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  const normalized = path.replace(/^\//, "");
  return `${base}${normalized}`;
}

/** Sort helper: ascending by order field. */
export function byOrder<T extends { data: { order?: number } }>(a: T, b: T): number {
  return (a.data.order ?? 0) - (b.data.order ?? 0);
}

/** Sort helper: descending by year. */
export function byYearDesc<T extends { data: { year: number } }>(a: T, b: T): number {
  return b.data.year - a.data.year;
}
