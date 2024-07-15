"use client"

import React from 'react';
// Import Swiper React components
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Link from 'next/link';
import dayjs from 'dayjs';

const Insights = () => {
    const insightsData = [
        { title: 'Title One', date: new Date(), category: 'Ecommerce', image: '1.png' },
        { title: 'Title Two', date: new Date(), category: 'Ecommerce', image: '2.png' },
        { title: 'Title Three', date: new Date(), category: 'Ecommerce', image: '3.png' }
    ];

    return (
        <div className='bg-white'>
            <div className='container mx-auto !py-16 md:!py-20 lg:!py-20'>
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
                            <div className='flex flex-col bg-white h-auto'>
                                <div><img src={`/img/services/${item.image}`} className='w-full py-8 h-96 object-cover' alt={item.title} /></div>
                                <label className='text-center'>{dayjs(item.date).format('MMMM D, YYYY')} - {item.category}</label>
                                <h6 className='text-center text-2xl my-2'>{item.title}</h6>
                                <div className='flex flex-col justify-between flex-1 text-center px-4 space-y-2 overflow-hidden'>
                                    <Link href={`/web/insights/${item.title}`} className='underline'>
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='flex justify-center mt-8'>
                    <Link href="/web/insights">
                        <button className="border !border-blue-600 !text-blue-600 py-2 px-4 rounded !hover:bg-blue-600 !hover:text-white transition mt-8">
                            View All Insights
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Insights;
