"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import type { Service } from '@prisma/client'

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
                                <Image width={400} height={400} src={`/img/upload/upload-widget.png`} className='w-full' alt={item.name} />
                            </div>
                            <div className='text-center py-4 space-y-2'>
                                <h6 className='text-lg font-medium'>{item.name}</h6>
                                <button className="underline border-0 text-blue-600">
                                    View
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default ServiceSwiper