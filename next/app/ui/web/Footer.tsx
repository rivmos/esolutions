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
                    socialLinks.map((social, index) => (
                        <span key={index} className='p-1 rounded-xl border-[1px] text-blue-700 border-blue-700'>
                            {social.icon}
                        </span>
                    ))
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
                <div className="mx-auto container w-full py-8 px-6 lg:py-12 lg:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className='lg:col-span-2'>
                            <h2 className="mb-4 lg:mb-6 text-sm font-semibold text-white uppercase">Explore</h2>
                            <ul className="text-white">
                                <li className="mb-2 lg:mb-4">
                                    <Link href="/web/services/webdev" className="hover:underline font-light">Web Development</Link>
                                </li>
                                <li className="mb-2 lg:mb-4">
                                    <Link href="/web/mobiledev" className="hover:underline font-light">Mobile App Design & Development</Link>
                                </li>
                                <li className="mb-2 lg:mb-4">
                                    <Link href="/web/services/design" className="hover:underline font-light">Designing Services</Link>
                                </li>
                                <li className="mb-2 lg:mb-4">
                                    <Link href="/web/services/video" className="hover:underline font-light">Video & Animation Services</Link>
                                </li>
                                <li>
                                    <Link href="/web/services/digitalmarketing" className="hover:underline font-light">Digital Marketing & Analytics Services</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 lg:mb-6 text-sm font-semibold text-white uppercase">Quick Links</h2>
                            <ul className="text-white">
                                <li className="mb-2 lg:mb-4">
                                    <Link href="/web/aboutus" className="hover:underline font-light">About Us</Link>
                                </li>
                                <li className="mb-2 lg:mb-4">
                                    <Link href="/web/services" className="hover:underline font-light">Services</Link>
                                </li>
                                <li className="mb-2 lg:mb-4">
                                    <Link href="/web/casestudies" className="hover:underline font-light">Case Studies</Link>
                                </li>
                                <li>
                                    <Link href="/web/portfolio" className="hover:underline font-light">Portfolio</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 lg:mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
                            <ul className="text-white">
                                <li className="mb-2 lg:mb-4">
                                    <Link href="/privacy-policy" className="hover:underline font-light">Privacy Policy</Link>
                                </li>
                                <li className="mb-2 lg:mb-4">
                                    <Link href="/terms-conditions" className="hover:underline font-light">Terms & Conditions</Link>
                                </li>
                                <li className="mb-2 lg:mb-4">
                                    <Link href="/auth/signin" className="hover:underline font-light">Sign In</Link>
                                </li>
                                <li>
                                    <Link href="/contact-us" className="hover:underline font-light">Contact Us</Link>
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
