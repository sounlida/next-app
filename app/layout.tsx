'use client';
import '@/app/ui/global.css';
import { roboto } from '@/app/ui/fonts';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { GoogleTagManager } from '@next/third-parties/google';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={`${roboto.className} antialiased`}>
        {children}
        <SpeedInsights />
        <Analytics mode={'production'} />;
      </body>
      <GoogleTagManager gtmId="GTM-WKJGWQQ" />
    </html>
  );
}