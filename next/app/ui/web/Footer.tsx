import Newsletter from "@/app/home/components/Newsletter";
import Link from "next/link";
import { TiSocialPinterest, TiSocialInstagram, TiSocialLinkedin, TiSocialFacebook } from "react-icons/ti";

const socialLinks = [
    {
        title: 'Instagram',
        link: '',
        icon: <TiSocialInstagram className="font-semibold" size={20}/>
    },
    {
        title: 'Pinterest',
        link: '',
        icon: <TiSocialPinterest className="font-semibold" size={20}/>
    },
    {
        title: 'Facebook',
        link: '',
        icon: <TiSocialFacebook className="font-semibold" size={20}/>
    },
    {
        title: 'LinkedIn',
        link: '',
        icon: <TiSocialLinkedin className="font-semibold" size={20}/>
    },
]

const FooterEnd = () => {
    return (
        <div className='flex flex-col gap-4 justify-center py-6 md:py-8 bg-[#f5f5f5]'>
            <div className='flex justify-center gap-2'>
                {
                    socialLinks.map((social, index) => (
                        <a href={social.link} key={index} aria-label={social.title} className='p-1 md:p-2 rounded-full border-[1px] text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300'>
                            {social.icon}
                        </a>
                    ))
                }
            </div>
            <div className='text-center text-sm md:text-base text-gray-600'>
                Copyright &copy; 2024 eSolutions.  All Rights Reserved.   
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-[#111111] to-[#373737]">
                <div className="max-w-6xl mx-auto w-full py-8 px-6 lg:py-12 lg:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h2 className="mb-4 lg:mb-6 text-lg font-semibold text-white uppercase">Explore</h2>
                            <ul className="text-white space-y-2 lg:space-y-4">
                                <li>
                                    <Link href="/services/web-developement" className="hover:underline font-light text-sm lg:text-base">Web Development</Link>
                                </li>
                                <li>
                                    <Link href="/services/mobile-developement" className="hover:underline font-light text-sm lg:text-base">Mobile App Design & Development</Link>
                                </li>
                                <li>
                                    <Link href="/services/designing-services" className="hover:underline font-light text-sm lg:text-base">Designing Services</Link>
                                </li>
                                <li>
                                    <Link href="/services/video-services" className="hover:underline font-light text-sm lg:text-base">Video & Animation Services</Link>
                                </li>
                                <li>
                                    <Link href="/services/digital-marketing" className="hover:underline font-light text-sm lg:text-base">Digital Marketing & Analytics Services</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 lg:mb-6 text-lg font-semibold text-white uppercase">Quick Links</h2>
                            <ul className="text-white space-y-2 lg:space-y-4">
                                <li>
                                    <Link href="/aboutus" className="hover:underline font-light text-sm lg:text-base">About Us</Link>
                                </li>
                                <li>
                                    <Link href="/services" className="hover:underline font-light text-sm lg:text-base">Services</Link>
                                </li>
                                <li>
                                    <Link href="/casestudies" className="hover:underline font-light text-sm lg:text-base">Case Studies</Link>
                                </li>
                                <li>
                                    <Link href="/insights" className="hover:underline font-light text-sm lg:text-base">Insights</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 lg:mb-6 text-lg font-semibold text-white uppercase">Legal</h2>
                            <ul className="text-white space-y-2 lg:space-y-4">
                                <li>
                                    <Link href="/legal/privacy-and-policy" className="hover:underline font-light text-sm lg:text-base">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="/legal/disclaimer" className="hover:underline font-light text-sm lg:text-base">Disclaimer</Link>
                                </li>
                                <li>
                                    <Link href="/contactus" className="hover:underline font-light text-sm lg:text-base">Contact Us</Link>
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
