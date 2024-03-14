import './global.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { GoogleTagManager } from '@next/third-parties/google';
import { WebVitals } from '@/app/_components/web-vitals';
import Navbar from '@/components/layout/navbar';
import { ReactNode, Suspense } from 'react';
import { GeistSans } from 'geist/font/sans';



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>

      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <Navbar />
        <WebVitals />
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