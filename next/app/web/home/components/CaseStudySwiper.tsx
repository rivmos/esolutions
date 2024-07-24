"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { shortenText } from '@/app/lib/utils/string';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import type {CaseStudy} from '@prisma/client'


const CaseStudySwiper = ({data} : {data: CaseStudy[]}) => {
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
                <SwiperSlide key={index}>
                    <div className='flex flex-col bg-white border-2 h-full p-4 md:p-8'>
                        <h6 className='text-center font-semibold mb-4'>{item.title}</h6>
                        <div><Image width={400} height={400} src={'/img/data.png'} className='w-full h-48 md:h-96 object-cover mb-4' alt={item.title as string} /></div>
                        <div className='flex flex-col justify-between flex-1 text-center space-y-4'>
                            <div className='overflow-y-auto max-h-24'>{shortenText(item?.description as string)}</div>
                            <Link href={`/web/casestudies/${item?.id}`} className='underline text-blue-600 hover:text-blue-800'>
                                Read More
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            );
        }
    )}
</Swiper>
  )
}

export default CaseStudySwiper