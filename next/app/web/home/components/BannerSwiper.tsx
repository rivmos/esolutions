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


const BannerSwiper = ({ data }: { data: BannerSlide[] }) => {
    return (
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
                                    className={'w-full object-cover h-[400px] md:h-[600px] lg:h-[800px]'}
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
                                <div className="absolute top-[50%] -translate-y-[50%] left-0 right-0 z-20 mx-auto container text-[#fff] px-4">
                                    {/* <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight text-center">
                                        {item.heading}
                                    </h2> */}
                                    <TextGenerateEffect words={item.heading} />
                                    {item.subheading && <p className="mt-6 text-sm md:text-base lg:text-lg text-gray-300 mx-auto text-center w-full md:w-3/4 lg:w-1/2">
                                        {item.subheading}
                                    </p>}
                                    {item.ctaHref && (
                                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
                                            <Link href={item.ctaHref}>
                                                <Button className="bg-transparent text-white rounded-md px-4 py-2 sm:px-6 sm:py-3 hover:bg-blue-600-dark transition-colors duration-300 border-white hover:text-blue-400">
                                                    {item.ctaText}
                                                </Button>
                                            </Link>
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