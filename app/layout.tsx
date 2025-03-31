import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Dating Chat Assistant - Expert Dating Advice for Shy Guys',
  description: 'Get personalized dating advice and conversation tips from our AI assistant. Perfect for shy guys looking to improve their dating life.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 