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
                className="h-72 lg:h-80"
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
                                    <Image src="/img/icons/epos.svg" width={25} height={25} className='h-[12px] w-[12px] md:h-[25px] md:w-[25px]' alt='epostophe'/>
                                </div>
                                <p className='text-base md:text-base lg:text-[20px] !leading-normal font-normal mb-4 text-justify'>{item.message}</p>
                            </div>
                            <div className='!text-right flex flex-col mt-4'>
                                <div className='flex items-center gap-2 justify-end'>
                                    <hr className='w-6 z-[1000] h-[2px] bg-blue-500 opacity-100' />
                                    <p className='text-sm md:text-base lg:text-lg uppercase text-blue-700 font-medium flex items-center justify-end gap-2'>
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
                <div className="text-blue-500 absolute left-8 md:left-16 lg:left-20 bottom-0 xl:top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => swiper.slidePrev()}>
                    <Image src="/img/icons/arrow.svg" width={45} height={45} alt='epostophe' className='rotate-180'/>
                </div>
                <div className="text-blue-500 absolute right-8 md:right-16 lg:right-20 bottom-0 xl:top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => swiper.slideNext()}>
                    <Image src="/img/icons/arrow.svg" width={45} height={45} alt='epostophe'/>
                </div>
            </div>
        </div>

    )
}

export default TestimonialSwiper