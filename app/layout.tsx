import './globals.css'
import type { Metadata } from 'next'
import GoogleAnalytics from './components/GoogleAnalytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lovechatai.org'),
  title: 'AI Dating Chat Assistant - Expert Dating Advice for Shy Guys',
  description: 'Get personalized dating advice and conversation tips from our AI assistant. Perfect for shy guys looking to improve their dating life.',
  keywords: ['dating advice', 'AI chat', 'relationship tips', 'dating assistant', 'conversation tips', 'dating help'],
  openGraph: {
    title: 'AI Dating Chat Assistant',
    description: 'Get personalized dating advice and conversation tips from our AI assistant',
    url: 'https://www.lovechatai.org',
    siteName: 'AI Dating Chat Assistant',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code', // 需要替换为实际的验证码
  },
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
      </head>
      <body>{children}</body>
    </html>
  )
} 