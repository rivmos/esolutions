"use client"

import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { shortenText } from '@/app/lib/utils/string';

const CaseStudies = () => {
    return (
        <div className='container mx-auto py-12 md:py-16 lg:py-20 px-4'>
            <h2 className="text-3xl font-bold mb-4 text-center tracking-tight sm:text-4xl">Case Studies</h2>
            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="h-auto"
                spaceBetween={24}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {[{id:1, title: 'Case Study Dummy', image: 'image-name.png', description: 'this is description'}, {id:1, title: 'Case Study Dummy', image: 'image-name.png', description: 'this is description'}]?.map(
                    (item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col bg-white border-2 h-full p-4 md:p-8'>
                                    <h6 className='text-center font-semibold mb-4'>{item.title}</h6>
                                    <div><img src={`base_url_will_go_here/uploads/casestudies/${item.image}`} className='w-full h-48 md:h-96 object-cover mb-4' alt={item.title} /></div>
                                    <div className='flex flex-col justify-between flex-1 text-center space-y-4'>
                                        <div className='overflow-y-auto max-h-24'>{shortenText(item?.description)}</div>
                                        <Link href={`/web/casestudy/${item?.id}`} className='underline text-blue-600 hover:text-blue-800'>
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    }
                )}
            </Swiper>
            <div className='flex justify-center mt-8'>
                <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition">
                    View Case Study
                </button>
            </div>
        </div>
    );
}

export default CaseStudies;
