import * as removeStains from '../content/blog/how-to-remove-stains-from-carpet';

// Add each new article module here (newest first).
const MODULES = [removeStains];

export const POSTS = MODULES.map((m) => ({ ...m.post, Body: m.Body, Conclusion: m.Conclusion })).sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished)
);

export const getPost = (slug) => POSTS.find((p) => p.slug === slug);
export const postHref = (slug) => `/blog/${slug}/`;

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
