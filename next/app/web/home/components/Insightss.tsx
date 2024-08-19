"use client"

import React from 'react';
// Import Swiper React components
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Link from 'next/link';
import dayjs from 'dayjs';
import Image from 'next/image';

const Insights = () => {
    const insightsData = [
        { title: 'Title One', date: new Date(), category: 'Ecommerce', image: '1.png' },
        { title: 'Title Two', date: new Date(), category: 'Ecommerce', image: '2.png' },
        { title: 'Title Three', date: new Date(), category: 'Ecommerce', image: '3.png' }
    ];

    return (
        <div className='bg-white'>
            <div className='container mx-auto !py-12 md:!py-20 lg:!py-20'>
                <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl mb-12">Insights</h2>
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
                        320: {
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
                    {insightsData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col bg-white h-auto p-4 sm:p-6 md:p-8 lg:p-10">
                                <div className="flex justify-center">
                                    <Image
                                        width={400}
                                        height={400}
                                        src={`/img/services/${item.image}`}
                                        className="w-full object-cover"
                                        alt={item.title}
                                    />
                                </div>
                                <label className="text-center mt-4 text-sm md:text-base">
                                    {dayjs(item.date).format('MMMM D, YYYY')} - {item.category}
                                </label>
                                <h6 className="text-center text-xl md:text-2xl lg:text-2xl my-2">
                                    {item.title}
                                </h6>
                                <div className="flex flex-col justify-between flex-1 text-center px-4 space-y-2 overflow-hidden">
                                    <Link href={`/web/insights/${item.title}`} className="underline text-sm ">
                                        Read More
                                    </Link>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-center mt-8">
                    <Link href="/web/insights">
                        <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition duration-300 mt-8 text-sm md:text-base lg:text-lg">
                            View All Insights
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Insights;
