import * as removeStains from '../content/blog/how-to-remove-stains-from-carpet';
import * as cleanCarpetAtHome from '../content/blog/how-to-clean-carpet-at-home';
import * as removePetStains from '../content/blog/how-to-remove-pet-stains-from-carpet';
import * as redWine from '../content/blog/how-to-get-red-wine-out-of-carpet';
import * as mudStains from '../content/blog/how-to-remove-mud-stains-from-carpet';
import * as oilStains from '../content/blog/how-to-remove-oil-stains-from-carpet';

// Add each new article module here (sorted by date below).
const MODULES = [oilStains, mudStains, redWine, removePetStains, cleanCarpetAtHome, removeStains];

export const POSTS = MODULES.map((m) => ({ ...m.post, Body: m.Body, Conclusion: m.Conclusion })).sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished)
);

export const getPost = (slug) => POSTS.find((p) => p.slug === slug);
export const postHref = (slug) => `/blog/${slug}/`;

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
