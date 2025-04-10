import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*'],
      },
    ],
    sitemap: 'https://www.lovechatai.org/sitemap.xml',
    host: 'https://www.lovechatai.org',
  }
} 