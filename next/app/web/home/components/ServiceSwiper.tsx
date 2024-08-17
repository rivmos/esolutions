"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import type { Service } from '@prisma/client';
import CustomButton from '@/app/ui/common/CustomButton';

const ServiceSwiper = ({ data }: { data: Service[] }) => {
    return (
        <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="h-auto w-full"
            breakpoints={{
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 16
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 2,
                    spaceBetween: 24
                },

                // when window width is >= 1024px
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40
                }
            }}
        >
            {data.map((item, index) => {
                return (
                    <SwiperSlide key={index} className='w-[600px] h-[480px] mb-6 bg-white'>
                        <div className="w-full flex justify-center">
                            <Image
                                src={item.image}
                                height="300"
                                width="650"
                                className="h-[300px] w-[650px] object-cover"
                                alt={item.name}
                            />
                        </div>
                        <div className='flex flex-col items-center py-12'>
                            <div
                                className='text-xl lg:text-2xl font-bold mb-2'
                            >
                                {item.name}
                            </div>
                            <CustomButton href={item.href} variant='card'>
                                View
                            </CustomButton>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default ServiceSwiper;
