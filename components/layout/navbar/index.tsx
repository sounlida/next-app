'use client'

import LogoSquare from '@/components/logo-square';
import { usePathname } from 'next/navigation'
import { Suspense } from 'react';
import classnames from 'classnames'
import Link from 'next/link';
import Search from './search';
import MobileNav from './MobileNav';
import headerNavLinks from '@/lib/headerNavLinks'

const { SITE_NAME } = process.env;

const Navbar = () => {

    const currentPath = usePathname();


    return (
        <nav className="relative flex items-center justify-between p-4 lg:px-6">
            <div className="block flex-none md:hidden">
                <MobileNav />
            </div>
            <div className="flex w-full items-center">
                <div className="flex w-full md:w-1/3">
                    <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
                        <LogoSquare />
                        <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                            {SITE_NAME}
                        </div>
                    </Link>


                </div>

                <div className="hidden justify-center md:flex md:w-1/3">
                    <Search />
                </div>
                <div className="flex justify-end md:w-1/3">
                    <ul className="flex items-center leading-5 sm:space-x-6">
                        <li
                            className='hidden font-medium text-gray-900 dark:text-gray-100 space-x-4 sm:block'
                        >
                            {headerNavLinks
                                .map(link =>
                                    <Link
                                        key={link.href}
                                        className={classnames({
                                            'text-blue-900': link.href === currentPath,
                                            'text-zinc-900': link.href !== currentPath,
                                            'hover:text-blue-700 transition-color': true
                                        })}
                                        href={link.href}>{link.label}</Link>)}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar