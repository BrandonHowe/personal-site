import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const link = z.object({
  label: z.string(),
  /** Omit to render the label as plain muted text — e.g. "Source not available". */
  href: z.string().optional(),
});

/** Standalone prose pages (home, contact). */
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    /** The page's <h1>. */
    heading: z.string().optional(),
    /**
     * Keep the heading in the DOM and the accessibility tree, but don't paint
     * it — for pages that read better without a visible title but still need
     * an h1 for screen readers and search engines.
     */
    hideHeading: z.boolean().default(false),
    description: z.string().optional(),
    /** Key/value rows, used by the contact page. */
    rows: z
      .array(
        z.object({
          key: z.string(),
          label: z.string(),
          href: z.string().optional(),
        })
      )
      .optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    /** One-line summary shown in the blog index. */
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    company: z.string().optional(),
    /** Logo in public/logos/. Falls back to a lettermark when absent. */
    logo: z.string().optional(),
    /** Variant for dark mode, if the main logo is drawn in dark ink. */
    logoDark: z.string().optional(),
    /** Company website — makes the logo and name clickable. */
    href: z.string().optional(),
    // Bare years (2025) parse as YAML numbers, so coerce rather than
    // making everyone remember to quote them.
    dates: z.coerce.string().optional(),
    tags: z.array(z.string()).optional(),
    links: z.array(link).optional(),
    /** Lower numbers sort first. */
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    // Bare years (2025) parse as YAML numbers, so coerce rather than
    // making everyone remember to quote them.
    dates: z.coerce.string().optional(),
    href: z.string().optional(),
    tags: z.array(z.string()).optional(),
    links: z.array(link).optional(),
    order: z.number().default(0),
  }),
});

/** One file per group of talks (one SIG, one seminar series, …). */
const talks = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/talks" }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(0),
    talks: z
      .array(
        z.object({
          title: z.string(),
          /** Sorted newest-first. Undated talks keep their listed order. */
          date: z.coerce.date().optional(),
          /** Path or URL to the slides, e.g. /slides/foo.pdf */
          slides: z.string().optional(),
          note: z.string().optional(),
        })
      )
      .default([]),
  }),
});

export const collections = { pages, blog, work, projects, talks };
