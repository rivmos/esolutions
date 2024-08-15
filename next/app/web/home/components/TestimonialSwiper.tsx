"use client"

import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import type { Testimonial } from '@prisma/client'
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Image from 'next/image';



const TestimonialSwiper = ({ data }: { data: Testimonial[] }) => {
    const swiper = useSwiper();

    return (
        <div className='relative'>
            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true
                }}
                modules={[Pagination, Autoplay]}
                className="h-72"
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

                {data?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex flex-col rounded-lg relative max-w-4xl mx-auto'>
                            <div className='flex gap-2 md:gap-6'>
                                <div className='border-l-[1px] border-blue-600 pl-4 text-4xl text-blue-600'>
                                    {/* <svg className="w-4 h-4 text-blue-600 dark:text-gray-300 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                                    </svg> */}
                                    <Image src="/img/icons/epos.svg" width={25} height={25} alt='epostophe'/>
                                </div>
                                <p className='text-base md:text-base lg:text-lg mb-4 text-justify'>{item.message}</p>
                            </div>
                            <div className='!text-right flex flex-col mt-4'>
                                <div className='flex items-center gap-2 justify-end'>
                                    <hr className='w-4 z-[1000] h-[3px] bg-blue-500 opacity-100' />
                                    <p className='text-sm md:text-base uppercase text-blue-600 flex items-center justify-end gap-2'>
                                        {item.name}
                                    </p>
                                </div>
                                <p className='text-xs'>{item.position}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div>
                <div className="text-blue-500 absolute left-8 md:left-16 lg:left-20 bottom-4 xl:top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => swiper.slidePrev()}>
                    <Image src="/img/icons/arrow.svg" width={45} height={45} alt='epostophe' className='rotate-180'/>
                </div>
                <div className="text-blue-500 absolute right-8 md:right-16 lg:right-20 bottom-4 xl:top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => swiper.slideNext()}>
                    <Image src="/img/icons/arrow.svg" width={45} height={45} alt='epostophe'/>
                </div>
            </div>
        </div>

    )
}

export default TestimonialSwiper