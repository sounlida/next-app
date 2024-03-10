'use client';
import '@/app/ui/global.css';
import { roboto } from '@/app/ui/fonts';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { GoogleTagManager } from '@next/third-parties/google';
import { WebVitals } from '@/app/_components/web-vitals';
import Navbar from '@/components/layout/navbar';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={`${roboto.className} antialiased`}>
        <Navbar />
        <WebVitals />
        {children}
        <SpeedInsights />
        <Analytics
          beforeSend={(event) => {
            if (localStorage.getItem('va-disable')) {
              return null;
            }
            return event;
          }}
        />
      </body>
      <GoogleTagManager gtmId="GTM-WKJGWQQ" />
    </html>
  );
}