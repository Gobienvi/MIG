import { MetadataRoute } from 'next';
import { testimonies } from '@/lib/testimonies';

export default function sitemap(): MetadataRoute.Sitemap {
  const testimonyPages = testimonies.map((t) => ({
    url: `https://www.mumsingeosciences.com/testimonies/${t.slug}`,
    lastModified: new Date('2026-03-05'),
    changeFrequency: 'yearly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://www.mumsingeosciences.com',
      lastModified: new Date('2026-03-05'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...testimonyPages,
    {
      url: 'https://www.mumsingeosciences.com/privacy',
      lastModified: new Date('2026-03-05'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
