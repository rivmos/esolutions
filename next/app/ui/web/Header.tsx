"use client"

import { ReactNode, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Logo from '../Logo'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import clsx from 'clsx'
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Header() {

    const path = usePathname()

    const [isClose, setIsClose] = useState(true)

    const session = useSession()
    
    const LinkComponent = ({ href, linkText, className } : {href:string, linkText:string, className?:string}) => (
        <Link href={href} className={clsx(`hover:text-primaryColor ${className}`, {'text-primaryColor' : path.includes(linkText.replace(/\s+/g, '').toLowerCase())})} onClick={() => setIsClose(true)}>
            {linkText}
        </Link>
    )

    return (
        <div className='shadow-xl'>
            <nav className="mx-auto flex container items-center justify-between px-4 h-20 md:h-32" aria-label="Global">
                <div className="flex items-center">
                    <Logo />
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="block lg:hidden -m-2.5 items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setIsClose(false)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-8 w-8 text-gray-700" aria-hidden="true" />
                    </button>
                </div>
                <div id='target' className={clsx('transition-all duration-500 opacity-100 bg-white z-[999] w-full h-full lg:flex lg:h-32 lg:w-1/2 lg:right-0 lg:items-center text-black gap-4', {'fixed right-0 top-0': !isClose, 'lg:static': isClose, '-right-full opacity-0 lg:right-0 lg:opacity-100': isClose})}>
                    <div className="flex flex-col items-start gap-8 p-4 lg:flex-row lg:items-center lg:gap-x-12">
                        <button onClick={() => setIsClose(true)} className='block lg:hidden items-center mt-4'>
                            <IoIosCloseCircleOutline size={28} className='hover:cursor-pointer'/>
                        </button>
                        {session.status === 'authenticated' && <LinkComponent href="/dashboard" linkText="Dashboard" />}
                        <LinkComponent href="aboutus" linkText="About Us" />
                        <LinkComponent href="services" linkText="Services"/>
                        <LinkComponent href="casestudies" linkText="Case Studies"/>
                        <LinkComponent href="portfolio" linkText="Portfolio"/>
                        <LinkComponent href="insights" linkText="Insights"/>
                        <LinkComponent href="contactus" className="hover:text-[#fff] text-primaryColor border-primaryColor border-[1px] p-2 rounded-md hover:bg-primaryColor transition-colors duration-300" linkText="Contact Us"/>
                    </div>
                </div>
            </nav>
        </div>
    )
}
