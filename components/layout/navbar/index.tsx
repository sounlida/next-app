'use client'

import LogoSquare from '@/components/logo-square';
import { usePathname } from 'next/navigation'
import React from 'react'
import classnames from 'classnames'
import Link from 'next/link';

const { SITE_NAME } = process.env;

const Navbar = () => {

    const currentPath = usePathname();

    const links = [
        { label: 'Home', href: '/' },
        { label: 'Shop', href: '/shop' },
        { label: 'Cart', href: '/cart' },
        { label: 'About', href: '/about' },
    ]
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
                        {links
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
        </nav>
    )
}

export default Navbar