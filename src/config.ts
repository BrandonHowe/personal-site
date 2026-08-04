/**
 * Site-wide settings. Page *content* lives in `src/content/` as markdown —
 * this file is just the things that aren't prose.
 */

export const site = {
  name: "Brandon Howe",
  email: "brandon.howe006@gmail.com",
  description: "Personal site of Brandon Howe.",
};

export const nav = [
  { label: "home", href: "/" },
  { label: "work", href: "/work" },
  { label: "projects", href: "/projects" },
  { label: "blog", href: "/blog" },
  { label: "presentations", href: "/presentations" },
  { label: "contact", href: "/contact" },
];

/** The "Elsewhere:" row on the home page. */
export const elsewhere = [
  { label: "GitHub", href: "https://github.com/BrandonHowe" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/brandon-howe-12a60a18b/" },
  { label: "Résumé", href: "/brandon-howe-resume.pdf" },
];

/** Titles and intro lines for the list pages. */
export const pageMeta = {
  work: {
    title: "Work",
    // Shown in search results and link previews, not on the page itself.
    meta: "Where Brandon Howe has worked — Mechanical Solutions, Touch by Touch, and Agatha Labs.",
  },
  projects: {
    title: "Projects",
    meta: "Projects by Brandon Howe — AI safety replications, a COOL compiler, CUDA/MPI neural networks, and fencing analysis tools.",
  },
  blog: {
    title: "Blog",
    meta: "Writing by Brandon Howe on AI safety, philosophy, and software.",
  },
  presentations: {
    title: "Presentations",
  },
};
