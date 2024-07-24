"use client"

import { ReactNode, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Logo from '../Logo'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import clsx from 'clsx'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Dialog } from '@headlessui/react'

export default function Header() {

    const path = usePathname()

    const [isClose, setIsClose] = useState(true)

    const session = useSession()

    const LinkComponent = ({ href, linkText, className }: { href: string, linkText: string, className?: string }) => (
        <Link href={href} className={clsx(`hover:text-primaryColor ${className}`, { 'text-primaryColor': path.includes(linkText.replace(/\s+/g, '').toLowerCase()) })} onClick={() => setIsClose(true)}>
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
                <div id='target' className="hidden lg:block">
                    <div className="flex flex-row items-center gap-x-10">
                        <button onClick={() => setIsClose(true)} className='block lg:hidden items-center mt-4'>
                            <IoIosCloseCircleOutline size={28} className='hover:cursor-pointer' />
                        </button>
                        {session.data?.user?.email && <LinkComponent href="/dashboard" linkText="Dashboard" />}
                        <LinkComponent href="aboutus" linkText="About Us" />
                        <LinkComponent href="services" linkText="Services" />
                        <LinkComponent href="casestudies" linkText="Case Studies" />
                        <LinkComponent href="portfolio" linkText="Portfolio" />
                        <LinkComponent href="insights" linkText="Insights" />
                        <LinkComponent href="contactus" className="hover:text-[#fff] text-primaryColor border-primaryColor border-[1px] p-2 rounded-md hover:bg-primaryColor transition-colors duration-300" linkText="Contact Us" />
                    </div>
                </div>
            </nav>

            <Dialog as="div" open={!isClose} onClose={setIsClose} transition
        className="fixed inset-0 flex w-screen items-center justify-center z-50 bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0">
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setIsClose(true)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6 text-black" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6 flex flex-col items-start gap-8">
                                {session.data?.user?.email && <LinkComponent href="/dashboard" linkText="Dashboard" />}
                                <LinkComponent href="aboutus" linkText="About Us" />
                                <LinkComponent href="services" linkText="Services" />
                                <LinkComponent href="casestudies" linkText="Case Studies" />
                                <LinkComponent href="portfolio" linkText="Portfolio" />
                                <LinkComponent href="insights" linkText="Insights" />
                                <LinkComponent href="contactus" className="hover:text-[#fff] text-primaryColor border-primaryColor border-[1px] p-2 rounded-md hover:bg-primaryColor transition-colors duration-300" linkText="Contact Us" />

                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>
    )
}