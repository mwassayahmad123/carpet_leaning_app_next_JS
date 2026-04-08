export default function sitemap() {
  const baseUrl = 'https://fivestarcarpetcleaning.co.uk';
  
  // Define all available routes for your application.
  // Currently this is a single page application, so we only have the root route.
  // If you add more pages (e.g. '/about', '/services'), simply add them to this array.
  const routes = [
    '',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
