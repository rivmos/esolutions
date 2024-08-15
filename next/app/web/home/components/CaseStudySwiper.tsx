"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { shortenText } from '@/app/lib/utils/string';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import type { CaseStudy } from '@prisma/client'


const CaseStudySwiper = ({ data }: { data: CaseStudy[] }) => {
    return (
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
                    slidesPerView: 2,
                },
            }}
        >
            {data?.map(
                (item, index) => {
                    return (
                        <SwiperSlide key={index} className='my-4'>
                            <div className='flex flex-col select-none bg-white rounded-md border-[1px] h-full py-12 mb-4'>
                                <h6 className='text-center font-bold pb-12 text-xl'>{item.title}</h6>
                                <div><Image width={850} height={450} src={item.image ?? '/img/data.png'} className='w-full h-[250px] md:h-[450PX] object-cover mb-4' alt={item.title as string} /></div>
                                <div className='overflow-y-auto max-w-xl mx-auto text-base text-center mb-4 px-4 pt-6'>{shortenText(item?.description as string)}</div>
                                <div className='flex justify-center px-4 mb-6'>
                                    <Link href={`/web/casestudies/${item?.id}`} className='hover:text-blue-600 text-base underline-animation transition-colors duration-200'>
                                        <span className='border-b-[1px] border-gray-400 text-base p-2 hover:border-blue-700 hover:text-blue-700 transition-colors duration-500 text-gray-400'>
                                            Read More   
                                        </span>
                                    </Link>
                                </div>
                            </div>
{/* 
                            <div className='flex flex-col shadow-sm my-8 rounded-2xl bg-white hover:shadow-xl transition-shadow duration-300'>
                                <div>
                                    <Image
                                        width={400}
                                        height={400}
                                        src={item.image as string}
                                        className='w-full object-cover rounded-t-2xl'
                                        alt={item.title}
                                    />
                                </div>
                                <div className='text-left p-4 space-y-3'>
                                    <h6 className='text-lg font-semibold'>{item.title}</h6>
                                    <div className='overflow-y-auto mb-4'>{shortenText(item?.description as string)}</div>
                                    <div>
                                        <Link href={`/web/casestudies/${item.id}`} className='hover:text-blue-600 text-sm underline-animation transition-colors duration-300'>
                                            <span className='border-[1px] p-2 rounded-lg hover:border-blue-600 transition-colors duration-300'>
                                                Read More
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div> */}
                        </SwiperSlide>
                    );
                }
            )}
        </Swiper>
    )
}

export default CaseStudySwiper