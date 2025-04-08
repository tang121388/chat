import './globals.css'
import type { Metadata } from 'next'
import GoogleAnalytics from './components/GoogleAnalytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lovechatai.org'),
  title: 'AI Dating Chat Assistant - Expert Dating Advice for Shy Guys',
  description: 'Get personalized dating advice, conversation tips, and relationship guidance from our AI assistant. Perfect for shy guys looking to improve their dating life and build confidence.',
  keywords: [
    'dating advice',
    'AI chat',
    'relationship tips',
    'dating assistant',
    'conversation tips',
    'dating help',
    'shy guys dating',
    'dating confidence',
    'first date tips',
    'dating conversation starters'
  ],
  authors: [{ name: 'AI Dating Assistant Team' }],
  creator: 'AI Dating Assistant Team',
  publisher: 'LoveChatAI',
  openGraph: {
    title: 'AI Dating Chat Assistant - Expert Dating Advice',
    description: 'Get personalized dating advice and conversation tips from our AI assistant. Perfect for shy guys looking to improve their dating life.',
    url: 'https://www.lovechatai.org',
    siteName: 'AI Dating Chat Assistant',
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: 'https://www.lovechatai.org/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Dating Chat Assistant'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Dating Chat Assistant - Expert Dating Advice',
    description: 'Get personalized dating advice and conversation tips from our AI assistant',
    images: ['https://www.lovechatai.org/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.lovechatai.org',
  },
  verification: {
    google: 'your-google-site-verification-code',
    other: {
      'yandex-verification': 'yandex-verification-code',
      'bing-verification': 'bing-verification-code'
    }
  },
  category: 'Dating & Relationships'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

  if (process.env.NODE_ENV === 'development' && !GA_MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID is missing');
  }

  return (
    <html lang="zh">
      <head>
        {GA_MEASUREMENT_ID && <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
} 