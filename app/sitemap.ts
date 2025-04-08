import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.lovechatai.org',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://www.lovechatai.org/chat',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.8,
    }
  ]
} 