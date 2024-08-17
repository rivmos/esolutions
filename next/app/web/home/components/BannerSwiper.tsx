"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { shortenText } from '@/app/lib/utils/string';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import type { BannerSlide } from '@prisma/client'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from '@/components/ui/moving-border';
import CustomButton from '@/app/ui/common/CustomButton';



const BannerSwiper = ({ data }: { data: BannerSlide[] }) => {
    return (
        <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={{
                dynamicBullets: true,
            }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: true
            }}
            modules={[Pagination, Autoplay]}
            className="h-auto"
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
                        <SwiperSlide key={index}>
                            <div className="relative">
                                {item.image && <Image
                                    priority={false}
                                    width={1920}
                                    height={850}
                                    src={item.image}
                                    alt={'Banner Image'}
                                    className={'w-full object-cover h-[400px] md:h-[550px] lg:h-[750px]'}
                                />}
                                <div className='absolute top-0 left-0 w-full h-full'>
                                    <Image
                                        priority={false}
                                        width={1350}
                                        height={850}
                                        src={'/img/banner/home-o.png'}
                                        alt={'Banner Overlay'}
                                        className='opacity-60 h-[400px] md:h-[600px] lg:h-[800px] w-full object-cover'
                                    />
                                </div>
                                <div className='absolute top-0 left-0 w-full h-full bg-[#000] opacity-50'></div>
                                <div className="absolute top-[55%] -translate-y-[50%] left-0 right-0 z-20 mx-auto container text-[#fff] px-4">
                                    {/* <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight text-center">
                                        {item.heading}
                                    </h2> */}
                                    <div className='max-w-5xl mx-auto'>
                                        <TextGenerateEffect words={item.heading} />
                                    </div>
                                    {item.subheading && <p className="mt-6 text-sm md:text-base lg:text-lg text-gray-300 mx-auto text-center w-full">
                                        {item.subheading}
                                    </p>}
                                    {item.ctaHref && (
                                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
                                            <CustomButton href={item.ctaHref} className=' border-white hover:text-blue-400 bg-transparent text-white'>
                                                    {item.ctaText}
                                            </CustomButton>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                }
            )}
        </Swiper>
    )
}

export default BannerSwiper