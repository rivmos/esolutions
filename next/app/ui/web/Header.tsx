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
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React from 'react'

export default function Header() {

    const path = usePathname()

    const [isClose, setIsClose] = useState(true)

    const session = useSession()


    const LinkComponent = ({ href, linkText, className }: { href: string, linkText: string, className?: string }) => (
        <Link href={href} className={clsx(`hover:text-blue-600 ${className}`, { 'text-blue-600': path.includes(linkText.replace(/\s+/g, '').toLowerCase()) })} onClick={() => setIsClose(true)}>
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
                        <NavigationMenu className='z-50 block'>
                            <NavigationMenuList className='space-x-4'>
                                {session.data?.user?.email && <NavigationMenuItem>
                                    <Link href="/dashboard" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Dashboard
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>}
                                <NavigationMenuItem>
                                    <Link href="/web/aboutus" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            About Us
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                            <li className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                        href="/web/services"
                                                    >
                                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                                        <div className="mb-2 mt-4 text-lg font-medium">
                                                            Our Services
                                                        </div>
                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                            Discover our expertise in development, design, video, and digital marketing. Tailored solutions for your business.
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>

                                            </li>
                                            {components.map((component) => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                    href={component.href}
                                                >
                                                    {component.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                {/* <NavigationMenuItem>
                                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                            {components.map((component) => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                    href={component.href}
                                                >
                                                    {component.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem> */}
                                <NavigationMenuItem>
                                    <Link href="/web/casestudies" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Case Studies
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/web/blogs" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Blogs
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/web/contactus" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Contact Us
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
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
                                <LinkComponent href="/web/aboutus" linkText="About Us" />
                                <LinkComponent href="/web/services" linkText="Services" />
                                <LinkComponent href="/web/casestudies" linkText="Case Studies" />
                                {/* <LinkComponent href="/web/portfolio" linkText="Portfolio" /> */}
                                <LinkComponent href="/web/blogs" linkText="Blogs" />
                                <LinkComponent href="/web/contactus" className="hover:text-white text-blue-600 border-primaryColor border-[1px] p-2 rounded-md hover:bg-blue-600 transition-colors duration-300" linkText="Contact Us" />
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>
    )
}

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Web Development",
        href: "/web/services/webdev",
        description:
            "Build responsive and dynamic websites tailored to your business needs using the latest web technologies.",
    },
    {
        title: "Mobile App Design & Development",
        href: "/web/services/mobiledev",
        description:
            "Create seamless, user-friendly mobile applications for iOS and Android platforms, ensuring optimal performance and user experience.",
    },
    {
        title: "Designing Services",
        href: "/web/services/design",
        description:
            "Craft visually appealing and intuitive designs that resonate with your brand identity and engage your audience.",
    },
    {
        title: "Video & Animation Services",
        href: "/web/services/video",
        description:
            "Produce compelling video content and animations to effectively communicate your message and captivate your audience.",
    },
    {
        title: "Digital Marketing & Analytics Services",
        href: "/web/services/digitalmarketing",
        description:
            "Leverage data-driven digital marketing strategies to enhance your online presence and achieve measurable business growth.",
    },
]



const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
