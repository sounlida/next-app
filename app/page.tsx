
import { Lists } from '@/components/grid/lists';
import Footer from '@/components/layout/footer';
import { Suspense } from 'react';



export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};
export default async function Page() {
  return (
    <>
      <Lists />
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
