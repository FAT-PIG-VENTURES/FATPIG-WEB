export default function sitemap() {
  const baseUrl = 'https://fatpigventures.com';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/careers',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  return routes;
}
