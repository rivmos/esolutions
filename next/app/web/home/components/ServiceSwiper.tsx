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
            className="h-auto w-full px-4 md:px-8 lg:px-16"
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
                    slidesPerView: 3,
                    spaceBetween: 40
                }
            }}
        >
            {data.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <CardContainer>
                            <CardBody className="bg-white flex-col space-y-4 py-4 md:py-12 text-center flex items-center shadow-sm relative group/card w-full rounded-sm transition-transform duration-300 hover:scale-105">
                                <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
                                    <Image
                                        src={item.image}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-60 object-cover rounded-xl"
                                        alt={item.name}
                                    />
                                </CardItem>
                                <CardItem className='flex flex-col items-center px-4'>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className='text-xl lg:text-2xl font-bold h-20'
                                    >
                                        {item.name}
                                    </CardItem>
                                    <CardItem
                                        translateZ="50"
                                        as={Link}
                                        href={item.href}
                                        className='border-b-[1px] text-base text-center p-2 mt-4 hover:border-blue-600 hover:text-blue-600 underline-animation transition-colors duration-200'
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
