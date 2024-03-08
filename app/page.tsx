
import AcmeLogo from './ui/acme-logo';
import Lists from '@/components/products/lists';
import Link from 'next/link';
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className='flex w-full min-h-screen flex-col items-center justify-between p-5'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <Header />
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AcmeLogo />
          </a>
        </div>
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
