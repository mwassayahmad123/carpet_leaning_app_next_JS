import { SERVICES, serviceHref } from '../data/services';
import { POSTS, postHref } from '../data/blog';

export default function sitemap() {
  const baseUrl = 'https://fivestarcarpetcleaning.co.uk';
  const lastModified = new Date().toISOString();

  const pages = [
    { path: '/', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/about/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/contact/', changeFrequency: 'monthly', priority: 0.8 },
    ...SERVICES.map((service) => ({ path: serviceHref(service.slug), changeFrequency: 'monthly', priority: 0.9 })),
    { path: '/blog/', changeFrequency: 'weekly', priority: 0.6 },
  ];

  return [
    ...pages.map(({ path, changeFrequency, priority }) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })),
    ...POSTS.map((post) => ({
      url: `${baseUrl}${postHref(post.slug)}`,
      lastModified: new Date(`${post.dateModified || post.datePublished}T00:00:00Z`).toISOString(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  ];
}
