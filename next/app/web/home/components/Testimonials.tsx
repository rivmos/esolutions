"use client"

import React, { useEffect, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { fetchCaseStudies } from '@/app/services/casestudies';
import { CaseStudiesState } from '@/app/lib/@types/casestudy';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const Testimonials = () => {
    const swiper = useSwiper();
    const [data, setData] = useState<CaseStudiesState>([])

    useEffect(() => {
        fetchCaseStudies().then(res => setData(res.data))
    }, [])

    return (
        <div className='py-4 md:py-16 lg:py-20 px-4 bg-gray-50 bg-testimonialOverlay bg-no-repeat bg-center'>
            <h2 className="text-3xl font-bold mb-4 text-center tracking-tight sm:text-4xl">What Our Clients Say About Us</h2>
            <div className='relative'>
                <Swiper
                    slidesPerView={1}
                    slidesPerGroup={1}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="h-auto"
                    spaceBetween={24}
                >
                    {data?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col rounded-lg p-8 relative max-w-4xl mx-auto'>
                                <div className='flex gap-6'>
                                    <div className='border-l-[1px] border-primaryColor pl-4 text-4xl text-primaryColor'>&quot;</div>
                                    <p className='text-sm md:text-base lg:text:lg text-left mb-4'>{item.description + ' ' + item.description + ' ' + item.description + ' ' + item.description}</p>
                                </div>
                                <div className='!text-right'>
                                    <p className='mt-8 uppercase text-primaryColor'>- author</p>
                                    <p className='text-xs'>position</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div>
                    <div className="text-blue-500 absolute left-8 md:left-16 lg:left-20 bottom-4 md:top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => swiper.slidePrev()}>
                        <IoIosArrowRoundBack size={40} />
                    </div>
                    <div className="text-blue-500 absolute right-8 md:right-16 lg:right-20 bottom-4 md:top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => swiper.slideNext()}>
                        <IoIosArrowRoundForward size={40} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
