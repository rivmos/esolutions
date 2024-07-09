"use client"
import { useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Logo from '../Logo'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'


export default function Header() {
    const path = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const LinkComponent = ({path, linkTxt} : {path:string, linkTxt:string}) => <Link href={path} className="hover:text-primaryColor -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7" onClick={() => setMobileMenuOpen(false)}>{linkTxt}</Link>

    return (
        <header className={clsx("bg-backgroudPrimary text-white",  path != '/' && 'bg-transparent absolute z-10 w-full')}>
            <nav className="mx-auto flex container items-center justify-between p-6 lg:px-8" aria-label="Global">
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
                        <Bars3Icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </button>
                </div>
                <div className='hidden lg:flex flex-col gap-4'>
                    {/* Contact Info Section */}
                    <div className="flex justify-end text-lg font-light">
                        <span className='pr-4'><a href="tel:02026799352" className="flex items-center gap-2 hover:text-primaryColor rounded-lg px-3 py-2 text-base font-semibold leading-7"><img src="/img/icons/header_call.svg" alt="Mobile" />0208 679 9353</a></span>
                        <span className="border-l border-white pl-4">
                            <a href="mailto:info@hafsons.co.uk" className="flex items-center gap-2 hover:text-primaryColor rounded-lg px-3 py-2 text-base font-semibold leading-7"><img src="/img/icons/header_email.svg" alt="Email" />info@hafsons.co.uk</a>
                        </span>
                    </div>
                    <Popover.Group className="lg:flex lg:gap-x-12">
                        <Link href="/" className="hover:text-primaryColor text-base font-semibold leading-7">Home</Link>
                        <Link href="/team" className="hover:text-primaryColor text-base font-semibold leading-7">Our Team</Link>
                        <Link href="/about" className="hover:text-primaryColor text-base font-semibold leading-7">About</Link>
                        <Link href="/projects" className="hover:text-primaryColor text-base font-semibold leading-7">Our Projects</Link>
                        <Link href="/contact" className="hover:text-primaryColor text-base font-semibold leading-7">Contact</Link>
                        <Link href="/sales" className="hover:text-primaryColor text-base font-semibold leading-7">Sales</Link>
                        <Link href="/lettings" className="hover:text-primaryColor text-base font-semibold leading-7">Lettings</Link>
                    </Popover.Group>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
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
                                <LinkComponent path='/' linkTxt='Home' />
                                <LinkComponent path='/team' linkTxt='Team' />
                                <LinkComponent path='/about' linkTxt='About' />
                                <LinkComponent path='/projects' linkTxt='Our Projects' />
                                <LinkComponent path='/contact' linkTxt='Contact' />
                                <LinkComponent path='/sales' linkTxt='Sales' />
                                <LinkComponent path='/lettings' linkTxt='Lettings' />
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}



