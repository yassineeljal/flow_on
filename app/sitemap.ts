import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://flowon.example.com';
  const locales = ['fr', 'en', 'es'];
  const pages = [
    '',
    '/services',
    '/pricing',
    '/about',
    '/contact',
    '/faq',
    '/legal',
    '/legal/privacy',
    '/legal/terms',
    '/legal/cookies',
  ];

  const urls: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    pages.forEach((page) => {
      urls.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : 0.8,
      });
    });
  });

  return urls;
}
