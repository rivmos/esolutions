"use client"

import React, { useEffect, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { shortenText } from '@/app/lib/utils/string';
import { fetchCaseStudies } from '@/app/services/casestudies';
import { CaseStudiesState } from '@/app/lib/@types/casestudy';
import Image from 'next/image';

const CaseStudies = () => {

    const [data, setData] = useState<CaseStudiesState>([])

    useEffect(() => {
        fetchCaseStudies().then(res => setData(res.data))
    }, [])

    return (
        <div className='container mx-auto py-12 md:py-16 lg:py-20 px-4'>
            <h2 className="text-3xl font-bold mb-8 text-center tracking-tight sm:text-4xl">Case Studies</h2>
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
                                    <div><Image width={400} height={400} src={''} className='w-full h-48 md:h-96 object-cover mb-4' alt={item.title as string} /></div>
                                    <div className='flex flex-col justify-between flex-1 text-center space-y-4'>
                                        <div className='overflow-y-auto max-h-24'>{shortenText(item?.description)}</div>
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
            <div className='flex justify-center mt-8'>
                <Link href="/web/casestudies" className="border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition">
                    View Case Studies
                </Link>
            </div>
        </div>
    );
}

export default CaseStudies;
