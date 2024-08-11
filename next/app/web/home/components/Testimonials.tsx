import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import TestimonialSwiper from './TestimonialSwiper';
import prisma from '@/app/lib/prismadb'
import SectionTitle from './SectionTitle';

const Testimonials = async () => {
    const data = await prisma.testimonial.findMany()
    return (
        <div className='py-16 lg:py-20 px-4 bg-zinc-100 bg-testimonialOverlay bg-no-repeat bg-center'>
            <SectionTitle title='What Our Clients Say About Us'/>
                <TestimonialSwiper data={data}/>
        </div>
    );
}

export default Testimonials;
