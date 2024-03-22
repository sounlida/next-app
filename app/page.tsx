
import { Lists } from '@/components/grid/lists';
import Link from 'next/link';
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Footer from '@/components/layout/footer';
import { Suspense } from 'react';
import { Carousel } from '@/components/carousel';



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
