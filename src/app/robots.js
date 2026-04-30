export default function robots() {
  const baseUrl = 'https://fivestarcarpetcleaning.co.uk';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
