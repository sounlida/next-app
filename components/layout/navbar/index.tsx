'use client'

import Cart from '@/components/cart';
import OpenCart from '@/components/cart/open-cart';
import LogoSquare from '@/components/logo-square';
import headerNavLinks from '@/lib/data/headerNavLinks'
import Link from '../../Link'
import MobileNav from './MobileNav'
import ThemeSwitch from '../../ThemeSwitch'
import { usePathname } from 'next/navigation'
import React from 'react'
import classnames from 'classnames'
import Search from '@/components/layout/navbar/search';
import { Suspense } from 'react';


const { SITE_NAME } = process.env;

const Navbar = () => {
    const currentPath = usePathname()

    return (
        <nav
            className='relative flex items-center justify-between p-4 lg:px-6'
        >
            <div className="container mx-auto flex items-center justify-between space-x-4 leading-5 sm:space-x-6">
                <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
                    <LogoSquare />
                    <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                        {SITE_NAME}
                    </div>
                </Link>
                <ul className="flex items-center leading-5 sm:space-x-6">
                    <li
                        className='hidden font-medium text-gray-900 dark:text-gray-100 space-x-4 sm:block'
                    >
                        {headerNavLinks

                            .map(link =>
                                <Link
                                    key={link.title}
                                    className={classnames({
                                        'text-blue-900': link.href === currentPath,
                                        'text-zinc-900': link.href !== currentPath,
                                        'hover:text-blue-700 transition-color': true
                                    })}
                                    href={link.href}>{link.title}</Link>)}
                    </li>
                </ul>
                <div className="hidden justify-center md:flex md:w-1/3">
                    <Search />
                </div>
                <div className="flex justify-end md:w-1/3">
                    <Suspense fallback={<OpenCart />}>

                    </Suspense>
                </div>
                <MobileNav />
                <ThemeSwitch />

            </div>
        </nav>
    )
}

export default Navbar