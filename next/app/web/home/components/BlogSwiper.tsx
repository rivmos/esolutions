"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { shortenText } from '@/app/lib/utils/string';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import type { Blog } from '@prisma/client'


const BlogSwiper = ({ data }: { data: Blog[] }) => {
    return (
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
                    slidesPerView: 4,
                },
            }}
        >
            {data?.map(
                (item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col shadow-lg p-5 my-8 rounded-2xl bg-white hover:shadow-xl transition-shadow duration-300'>
                                <div>
                                    <Image
                                        width={400}
                                        height={400}
                                        src={item.image as string}
                                        className='w-full h-52 object-cover rounded-t-2xl'
                                        alt={item.title}
                                    />
                                </div>
                                <div className='text-left py-4 space-y-3'>
                                    <h6 className='text-lg font-semibold h-20'>{item.title}</h6>
                                    <Link href={`/web/blogs/${item.id}`} className='hover:text-blue-600 text-sm underline-animation transition-colors duration-300'>
                                        <span className='border-2 p-2 rounded-lg hover:border-blue-600 transition-colors duration-300'>
                                            View
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                }
            )}
        </Swiper>
    )
}

export default BlogSwiper