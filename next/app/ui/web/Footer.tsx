import Newsletter from "@/app/web/home/components/Newsletter";
import Link from "next/link";
import { TiSocialPinterest, TiSocialInstagram, TiSocialLinkedin, TiSocialFacebook } from "react-icons/ti";

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
        <div className='flex flex-col gap-4 justify-center py-6 md:py-8 bg-zinc-100'>
            <div className='flex justify-center gap-4'>
                {
                    socialLinks.map((social, index) => (
                        <a href={social.link} key={index} aria-label={social.title} className='p-1 md:p-2 rounded-full border-[1px] text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white transition-colors duration-300'>
                            {social.icon}
                        </a>
                    ))
                }
            </div>
            <div className='text-center text-xs md:text-base text-gray-600'>
                &copy;2024 eSolutions. All Rights Reserved.
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-neutral-900 to-neutral-700">
                <div className="container mx-auto w-full py-8 px-6 lg:py-12 lg:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h2 className="mb-4 lg:mb-6 text-sm font-semibold text-white uppercase">Explore</h2>
                            <ul className="text-white space-y-2 lg:space-y-4">
                                <li>
                                    <Link href="/web/services/webdev" className="hover:underline font-light text-sm lg:text-base">Web Development</Link>
                                </li>
                                <li>
                                    <Link href="/web/services/mobiledev" className="hover:underline font-light text-sm lg:text-base">Mobile App Design & Development</Link>
                                </li>
                                <li>
                                    <Link href="/web/services/design" className="hover:underline font-light text-sm lg:text-base">Designing Services</Link>
                                </li>
                                <li>
                                    <Link href="/web/services/video" className="hover:underline font-light text-sm lg:text-base">Video & Animation Services</Link>
                                </li>
                                <li>
                                    <Link href="/web/services/digitalmarketing" className="hover:underline font-light text-sm lg:text-base">Digital Marketing & Analytics Services</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 lg:mb-6 text-sm font-semibold text-white uppercase">Quick Links</h2>
                            <ul className="text-white space-y-2 lg:space-y-4">
                                <li>
                                    <Link href="/web/aboutus" className="hover:underline font-light text-sm lg:text-base">About Us</Link>
                                </li>
                                <li>
                                    <Link href="/web/services" className="hover:underline font-light text-sm lg:text-base">Services</Link>
                                </li>
                                <li>
                                    <Link href="/web/casestudies" className="hover:underline font-light text-sm lg:text-base">Case Studies</Link>
                                </li>
                                <li>
                                    <Link href="/web/blogs" className="hover:underline font-light text-sm lg:text-base">Blogs</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 lg:mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
                            <ul className="text-white space-y-2 lg:space-y-4">
                                <li>
                                    <Link href="/privacy-policy" className="hover:underline font-light text-sm lg:text-base">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="/terms-conditions" className="hover:underline font-light text-sm lg:text-base">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link href="/web/contactus" className="hover:underline font-light text-sm lg:text-base">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Newsletter />
                        </div>
                    </div>
                </div>
            </div>
            <FooterEnd />
        </>
    );
}

export default Footer;
