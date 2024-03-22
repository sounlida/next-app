import './global.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { GoogleTagManager } from '@next/third-parties/google';
import { ReactNode, Suspense } from 'react';
import { GeistSans } from 'geist/font/sans';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Shop Dashboard',
    default: 'Shop Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://ebuykh.vercel.app'),
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="Canonical link preview URL"></meta>
      </head>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">

        <Suspense>
          <main>{children}</main>
        </Suspense>
        <SpeedInsights />
        <Analytics />
      </body>
      <GoogleTagManager gtmId="GTM-WKJGWQQ" />
    </html>
  );
}