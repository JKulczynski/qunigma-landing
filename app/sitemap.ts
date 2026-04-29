import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://qunigma.ai';
  const lastModified = new Date('2026-04-29');

  const plPages = [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/platforma`, priority: 0.9 },
    { url: `${base}/rozwiazania`, priority: 0.9 },
    { url: `${base}/compliance`, priority: 0.8 },
    { url: `${base}/firma`, priority: 0.7 },
    { url: `${base}/wiedza`, priority: 0.7 },
    { url: `${base}/privacy`, priority: 0.3 },
  ];

  const enPages = [
    { url: `${base}/en`, priority: 1.0 },
    { url: `${base}/en/platforma`, priority: 0.9 },
    { url: `${base}/en/rozwiazania`, priority: 0.9 },
    { url: `${base}/en/compliance`, priority: 0.8 },
    { url: `${base}/en/firma`, priority: 0.7 },
    { url: `${base}/en/wiedza`, priority: 0.7 },
    { url: `${base}/en/privacy`, priority: 0.3 },
  ];

  return [...plPages, ...enPages].map(({ url, priority }) => ({
    url,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority,
  }));
}
