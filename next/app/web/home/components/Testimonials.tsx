import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import TestimonialSwiper from './TestimonialSwiper';
import prisma from '@/app/lib/prismadb'

const Testimonials = async () => {
    const data = await prisma.caseStudy.findMany()
    return (
        <div className='py-4 md:py-16 lg:py-20 px-4 bg-gray-50 bg-testimonialOverlay bg-no-repeat bg-center'>
            <h2 className="text-3xl font-bold mb-4 text-center tracking-tight sm:text-4xl">What Our Clients Say About Us</h2>
                <TestimonialSwiper data={data}/>
        </div>
    );
}

export default Testimonials;
