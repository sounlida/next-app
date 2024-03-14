
import { Lists } from '@/components/grid/lists';
import Link from 'next/link';
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { Suspense } from 'react';
export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};
export default function HomePage() {
  return (
    <>

      <Suspense>
        <Lists />
      </Suspense>
    </>
  );
}
