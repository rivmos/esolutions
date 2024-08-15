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
                    <SwiperSlide key={index} className='w-[600px]'>
                        <CardContainer >
                            <CardBody className="bg-white flex-col space-y-4 !p-0 text-center flex items-center shadow-sm relative group/card !w-full rounded-sm transition-transform duration-300">
                                <CardItem className="w-full flex justify-center">
                                    <Image
                                        src={item.image}
                                        height="300"
                                        width="600"
                                        className="h-[300px] w-[600px] object-cover"
                                        alt={item.name}
                                    />
                                </CardItem>
                                <CardItem className='flex flex-col items-center py-8'>
                                    <CardItem
                                        as="p"
                                        className='text-xl lg:text-2xl font-bold'
                                    >
                                        {item.name}
                                    </CardItem>
                                    <CardItem
                                        as={Link}
                                        href={item.href}
                                        className='border-b-[1px] border-gray-400 text-gray-400 text-base text-center p-2 mt-3 mb-4 hover:border-blue-600 hover:text-blue-600 underline-animation transition-colors duration-200'
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
