"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { shortenText } from '@/app/lib/utils/string';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import type { Insight } from '@prisma/client'
import CustomButton from '@/app/ui/common/CustomButton';
import dayjs from 'dayjs';


const InsightsSwiper = ({ data }: { data: Insight[] }) => {
    return (
        <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="h-auto"
            spaceBetween={36}
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
            {data?.map(
                (item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col mb-10 mt-2 bg-white'>
                                <div>
                                    <Image
                                        width={350}
                                        height={250}
                                        src={item.image as string}
                                        className='w-full h-60 object-cover'
                                        alt={item.title}
                                    />
                                </div>
                                <div className='text-center py-4 px-8 space-y-3'>
                                    <div className='text-center text-sm text-gray-400'>{dayjs(item.createdAt).format('MMM DD, YYYY')}</div>
                                    <h6 className='text-lg font-semibold h-16'>{item.title}</h6>
                                    {/* <CustomButton href={`/web/Insights/${item.id}`} variant='card'>
                                        Read More
                                    </CustomButton> */}
                                </div>
                                <div className='flex justify-center px-4 mb-6'>
                                    <CustomButton href={`/web/insights/${item.slug}`} variant='card'>
                                        Read More
                                    </CustomButton>
                                </div>
                            </div>

                        </SwiperSlide>
                    );
                }
            )}
        </Swiper>
    )
}

export default InsightsSwiper