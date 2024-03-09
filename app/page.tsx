
import AcmeLogo from './ui/acme-logo';
import Lists from '@/components/products/lists';
import Link from 'next/link';
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className='flex w-full min-h-screen flex-col items-center'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <Header />
        <AcmeLogo />
      </div>
      <Lists />
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
