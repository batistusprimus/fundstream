'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Configuration - À REMPLACER avec vos IDs réels
const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID || 'G-XXXXXXXXXX';
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '000000000000000';

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Google Analytics 4 - Page View
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_path: pathname,
      });
    }

    // Meta Pixel - Page View
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
  }, [pathname]);

  return null;
}

// Google Analytics 4 Script
export function GA4Script() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Meta Pixel Script
export function MetaPixelScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `,
      }}
    />
  );
}

// Tracking events pour le formulaire
export const trackFormEvent = (eventName: string, data?: Record<string, any>) => {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  if ((window as any).gtag) {
    (window as any).gtag('event', eventName, data);
  }

  // Meta Pixel
  if ((window as any).fbq) {
    (window as any).fbq('trackCustom', eventName, data);
  }

  console.log('Tracking event:', eventName, data);
};

