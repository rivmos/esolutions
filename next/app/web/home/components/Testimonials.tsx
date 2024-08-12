import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import TestimonialSwiper from './TestimonialSwiper';
import prisma from '@/app/lib/prismadb'
import SectionTitle from './SectionTitle';
import Image from 'next/image';

const Testimonials = async () => {
    const data = await prisma.testimonial.findMany()
    return (
        <div className='relative py-10 md:py-16 lg:py-20 px-4 bg-zinc-100 bg-testimonialOverlay bg-no-repeat bg-center'>
            <div className='absolute top-0 left-[50%] -translate-x-[50%] w-full h-full overflow-hidden lg:container flex justify-center'>
                <Image
                    priority={false}
                    width={1350}
                    height={850}
                    src="/img/banner/testimonials-o.png"
                    alt={'Testimonials Overlay'}
                    className='w-full object-cover'
                />
            </div>
            {/* <div className='absolute top-0 left-0 w-full h-full bg-[#000] opacity-80'></div> */}
            <SectionTitle title='What Our Clients Say About Us' />
            <TestimonialSwiper data={data} />
        </div>
    );
}

export default Testimonials;
