"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import type { Service } from '@prisma/client'

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
            className="h-auto container"
            spaceBetween={24}
            breakpoints={{
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            }}
        >
            {data.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <CardContainer className="inter-var">
                            <CardBody className="bg-white shadow-sm relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black  w-auto h-auto rounded-xl p-6 border  ">
                                {/* <CardItem>
                                    <Image width={400} height={400} src={item.image ?? '/img/upload-widget/upload.png'} className='w-full h-52 object-cover' alt={item.name} />
                                </CardItem> */}
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
                                    {/* <h6 className='text-lg font-medium h-20 text-left'>{item.name}</h6> */}
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className='text-lg font-medium h-20 text-left'
                                    >
                                        {item.name}
                                    </CardItem>
                                    {/* <Link href={`/web/services`} className='hover:text-blue-600 text-sm underline-animation transition-colors duration-200'>
                                        <span className='border-[1px] p-2 rounded-lg hover:border-blue-600 transition-colors duration-500'>
                                            View
                                        </span>
                                    </Link> */}
                                    <CardItem
                                        translateZ="100"
                                        as={Link}
                                        href="/web/services"
                                        className='border-[1px] p-2 rounded-lg hover:border-blue-600 hover:text-blue-600 text-sm underline-animation transition-colors duration-200'
                                    >
                                        View
                                    </CardItem>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                        {/* <div className='flex flex-col shadow-sm p-4 my-8 rounded-xl bg-white'>
                        </div> */}

                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default ServiceSwiper
