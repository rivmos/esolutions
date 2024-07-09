import Link from "next/link";
import { TiSocialPinterest } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";

const socialLinks = [
    {
        title: 'Instagram',
        link: '',
        icon: <TiSocialInstagram />
    },
    {
        title: 'Pinterest',
        link: '',
        icon: <TiSocialPinterest />
    },
    {
        title: 'Facebook',
        link: '',
        icon: <TiSocialFacebook />
    },
    {
        title: 'LinkedIn',
        link: '',
        icon: <TiSocialLinkedin />
    },
]

const FooterEnd = () => {
    return (
        <div className='flex flex-col gap-2 justify-center py-8 bg-neutral-200'>
            <div className='flex justify-center gap-2'>
                {
                    socialLinks.map(social => <span className='p-1 rounded-xl border-[1px] text-blue-700 border-blue-700'>{social.icon}</span>)
                }
            </div>
            <div className='text-center'>
                &copy;2024 eSolutions.  All Rights Reserved.
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-neutral-900 to-neutral-700">
                <div className="mx-auto container w-full py-8 lg:py-12">
                    <div className="grid grid-cols-4">
                        <div className='col-span-2'>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Explore</h2>
                            <ul className="text-white">
                                <li className="mb-4">
                                    <Link href="/collections" className="hover:underline">Web Developement</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/artists" className="hover:underline">Mobile App Design & Developement</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/artists" className="hover:underline">Designing Services</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/exhibitions" className="hover:underline">Video & Animation Services</Link>
                                </li>
                                <li>
                                    <Link href="/events" className="hover:underline">Digital Marketing & Analytics Services</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-1'>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Quick Links</h2>
                            <ul className="text-white">
                                <li className="mb-4">
                                    <a href="https://instagram.com/kalai" className="hover:underline">About Us</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://facebook.com/kalai" className="hover:underline">Services</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://twitter.com/kalai" className="hover:underline">Case Studies</a>
                                </li>
                                <li>
                                    <a href="https://youtube.com/kalai" className="hover:underline">Portfolio</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-1'>
                            <h2 className="mb-10 text-sm font-semibold text-white uppercase"></h2>
                            <ul className="text-white">
                                <li className="mb-4">
                                    <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/terms-conditions" className="hover:underline">Terms & Conditions</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/sign-in" className="hover:underline">Sign In</Link>
                                </li>
                                <li>
                                    <Link href="/contact-us" className="hover:underline">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <FooterEnd />
        </>
    );
}

export default Footer;
