'use client'

import Script from 'next/script'
import { useEffect } from 'react'

// 声明全局 gtag 函数类型
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('[GA Debug] Window object is available');
      if (GA_MEASUREMENT_ID) {
        console.log('[GA Debug] Measurement ID is:', GA_MEASUREMENT_ID);
      } else {
        console.error('[GA Debug] Measurement ID is missing!');
      }
    }
  }, [GA_MEASUREMENT_ID]);

  if (!GA_MEASUREMENT_ID) {
    console.warn('[GA Debug] Component received no Measurement ID');
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log('[GA Debug] Base script loaded');
          window.dataLayer = window.dataLayer || [];
          function gtag(...args: any[]) {
            console.log('[GA Debug] Tracking event:', args);
            window.dataLayer.push(arguments);
          }
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', GA_MEASUREMENT_ID, {
            debug_mode: true,
            page_path: window.location.pathname,
            cookie_domain: 'lovechatai.org',
            send_page_view: true
          });
          console.log('[GA Debug] Configuration complete');
        }}
        onError={(e) => {
          console.error('[GA Debug] Script failed to load:', e);
        }}
      />
    </>
  )
} 