"use client"

import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import type { CaseStudy } from '@prisma/client'
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";



const TestimonialSwiper = ({ data }: { data: CaseStudy[] }) => {
    const swiper = useSwiper();

    return (
        <div className='relative'>
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
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 1,
                    },
                }}
            >
                {data?.map(
                    (item, index) => {
                        return (
                            <Swiper
                            key={item.id}
                                slidesPerView={1}
                                slidesPerGroup={1}
                                pagination={{
                                    dynamicBullets: true,
                                }}
                                modules={[Pagination]}
                                className="h-auto"
                                spaceBetween={24}
                            >
                                {data?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='flex flex-col rounded-lg p-8 relative max-w-4xl mx-auto'>
                                            <div className='flex gap-6'>
                                                <div className='border-l-[1px] border-primaryColor pl-4 text-4xl text-blue-600'>&quot;</div>
                                                <p className='text-sm md:text-base lg:text:lg text-left mb-4'>{item.description + ' ' + item.description + ' ' + item.description + ' ' + item.description}</p>
                                            </div>
                                            <div className='!text-right'>
                                                <p className='mt-8 uppercase text-blue-600'>- author</p>
                                                <p className='text-xs'>position</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        );
                    }
                )}
            </Swiper>
            <div>
                <div className="text-blue-500 absolute left-8 md:left-16 lg:left-20 bottom-4 md:top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => swiper.slidePrev()}>
                    <IoIosArrowRoundBack size={40} />
                </div>
                <div className="text-blue-500 absolute right-8 md:right-16 lg:right-20 bottom-4 md:top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => swiper.slideNext()}>
                    <IoIosArrowRoundForward size={40} />
                </div>
            </div>
        </div>

    )
}

export default TestimonialSwiper