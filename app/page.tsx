
import AcmeLogo from './ui/acme-logo';
import ProductLists from './ui/products/product-lists';
import Link from 'next/link';
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';


export default function Home() {
  return (
    <main className='flex w-full min-h-screen flex-col items-center justify-between p-5'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-3 pt-3 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>

          Buy what you want from&nbsp;
          <code className="font-mono font-bold">Our Shop</code>
        </p>
        <p className='relative flex flex-center flex-shrink-0'>
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            className="peer block w-500 rounded-md border border-gray-50 bg-gradient-to-b from-zinc-200 py-[9px] pl-10 text-sm outline-1 placeholder:text-gray-500"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </p>
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
      <ProductLists />
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
