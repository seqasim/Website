import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(0),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    journal: z.string(),
    year: z.number(),
    link: z.string().url().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const media = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/media" }),
  schema: z.object({
    title: z.string(),
    outlet: z.string(),
    link: z.string().url(),
    year: z.number().optional(),
    order: z.number().default(0),
  }),
});

const people = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/people" }),
  schema: z.object({
    name: z.string(),
    role: z.enum(["PI", "Postdoc", "PhD Student", "Undergraduate", "Staff", "Alum"]),
    photo: z.string().optional(),
    photoPosition: z.string().optional(),
    bio: z.string(),
    email: z.string().email().optional(),
    order: z.number().default(0),
    alumni: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(0),
  }),
});

const positions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/positions" }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    description: z.string(),
    open: z.boolean().default(true),
  }),
});

export const collections = {
  research,
  publications,
  media,
  people,
  news,
  positions,
};
