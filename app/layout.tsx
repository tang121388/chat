import './globals.css'
import type { Metadata } from 'next'
import GoogleAnalytics from './components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'AI Dating Chat Assistant - Expert Dating Advice for Shy Guys',
  description: 'Get personalized dating advice and conversation tips from our AI assistant. Perfect for shy guys looking to improve their dating life.',
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
    <html lang="en">
      <head>
        {GA_MEASUREMENT_ID && <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />}
      </head>
      <body>{children}</body>
    </html>
  )
} 