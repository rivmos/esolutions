"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import type { Service } from '@prisma/client'
import Link from 'next/link';

const ServiceSwiper = ({ data }: { data: Service[] }) => {
    return (
        <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="h-auto container"
            spaceBetween={24}
            breakpoints={{
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            }}
        >
            {data.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className='flex flex-col shadow-sm p-4 my-8 rounded-xl bg-white'>
                            <div>
                                <Image width={400} height={400} src={item.image ?? '/img/upload-widget/upload.png'} className='w-full h-52 object-cover' alt={item.name} />
                            </div>
                            <div className='text-left py-4 space-y-2'>
                                <h6 className='text-lg font-medium h-20 text-left'>{item.name}</h6>
                                <Link href={`/web/services`} className='hover:text-blue-600 text-sm underline-animation transition-colors duration-200'>
                                    <span className='border-[1px] p-2 rounded-lg hover:border-blue-600 transition-colors duration-500'>
                                        View
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default ServiceSwiper