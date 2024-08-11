"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import type { Service } from '@prisma/client';

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
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
            className="h-auto w-full px-4 md:px-8 lg:px-16 container"
            spaceBetween={16}
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
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            }}
        >
            {data.map((item, index) => {
                return (
                    <SwiperSlide key={index} className='py-0'>
                        <CardContainer className="inter-var mx-4 md:mx-0">
                            <CardBody className="bg-white shadow-sm relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black w-full h-auto rounded-xl p-4 md:p-6 lg:p-8 border transition-transform duration-300 hover:scale-105">
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <Image
                                        src={item.image}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt={item.name}
                                    />
                                </CardItem>
                                <CardItem className='text-left py-4 space-y-2'>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className='text-lg font-medium h-20 text-left'
                                    >
                                        {item.name}
                                    </CardItem>
                                    <CardItem
                                        translateZ="100"
                                        as={Link}
                                        href={item.href}
                                        className='border-[1px] p-2 rounded-lg hover:border-blue-600 hover:text-blue-600 text-sm underline-animation transition-colors duration-200'
                                    >
                                        View
                                    </CardItem>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default ServiceSwiper;
