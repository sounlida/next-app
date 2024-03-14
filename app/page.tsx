
import Lists from '@/components/grid/lists';
import Link from 'next/link';
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, locals.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <main className='flex w-full min-h-screen flex-col items-center'>
      <Suspense>
        <Lists />
      </Suspense>
      <div className="flex w-full items-center justify-between h-40 px-20 bg-blue-200">
        <Link
          href="/login"
          className="flex rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </div>
    </main >
  );
}
