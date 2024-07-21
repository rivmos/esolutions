"use client"

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Logo from '../Logo'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { RiDashboardFill } from 'react-icons/ri'

export default function Header() {
    const path = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const session = useSession()
    
    const LinkComponent = ({ path, linkTxt } : {path:string, linkTxt:string}) => (
        <Link href={path} className="hover:text-primaryColor -mx-3 block rounded-lg px-3 py-2" onClick={() => setMobileMenuOpen(false)}>
            {linkTxt}
        </Link>
    )

    return (
        <div className='shadow-xl'>
            {/* {JSON.stringify(session)} */}
            <nav className="mx-auto flex container items-center justify-between px-4 h-20 md:h-32" aria-label="Global">
                <div className="flex items-center">
                    <Logo />
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-8 w-8 text-gray-700" aria-hidden="true" />
                    </button>
                </div>
                <div className='hidden lg:flex lg:items-center text-black gap-4'>
                    <div className="lg:flex items-center lg:gap-x-12">
                        {session && <Link href="/dashboard" className="flex items-center gap-2"><RiDashboardFill />{`Admin`}</Link>}
                        <Link href="aboutus" className="hover:text-primaryColor transition-colors duration-300">About Us</Link>
                        <Link href="services" className="hover:text-primaryColor transition-colors duration-300">Services</Link>
                        <Link href="casestudies" className="hover:text-primaryColor transition-colors duration-300">Case Studies</Link>
                        <Link href="portfolio" className="hover:text-primaryColor transition-colors duration-300">Portfolio</Link>
                        <Link href="insights" className="hover:text-primaryColor transition-colors duration-300">Insights</Link>
                        <Link href="contactus" className="hover:text-[#fff] text-primaryColor border-primaryColor border-[1px] p-2 rounded-md hover:bg-primaryColor transition-colors duration-300">Contact Us</Link>
                    </div>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden z-50 relative" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6 text-black" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {session && <div className='flex gap-2 items-center'><RiDashboardFill /> <LinkComponent path='/dashboard' linkTxt={`Admin`} /></div>}
                                <LinkComponent path='aboutus' linkTxt='About Us' />
                                <LinkComponent path='services' linkTxt='Services' />
                                <LinkComponent path='casestudies' linkTxt='Case Studies' />
                                <LinkComponent path='portfolio' linkTxt='Portfolio' />
                                <LinkComponent path='insights' linkTxt='Insights' />
                                <LinkComponent path='contactus' linkTxt='Contact Us' />
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>
    )
}
