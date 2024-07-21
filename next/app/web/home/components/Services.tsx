"use client"
import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';

const Services = () => {
    return (
        <>
            <div className='py-12 md:py-16 lg:py-20 bg-neutral-200'>
                <h2 className="text-3xl font-bold mb-4 text-center tracking-tight sm:text-4xl">Our Services</h2>
                {/* <p className='text-center mt-2 text-base'>Discover from a curated collection of works by renowned Indian artists</p> */}
                <Swiper
                    slidesPerView={1}
                    slidesPerGroup={1}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="h-auto"
                    spaceBetween={24}
                    breakpoints = {{
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
                    {[
                        { serviceName: 'Web Development', description: 'Description One', image: '1.png' },
                        { serviceName: 'Mobile App Design & Development', description: 'Description Two', image: '2.png' },
                        { serviceName: 'Designing Services', description: 'Description One', image: '1.png' },
                        { serviceName: 'Video & Animation Services', description: 'Description Two', image: '2.png' }
                    ].map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col bg-white p-4 rounded-xl'>
                                    <div>
                                        <Image width={400} height={400} src={`/img/services/${item.image}`} className='w-full' alt={item.serviceName} />
                                    </div>
                                    <div className='text-center py-4 space-y-2'>
                                        <h6 className='text-lg font-medium'>{item.serviceName}</h6>
                                        <button className="underline border-0 text-blue-600">
                                            View
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className='flex justify-center mt-8'>
                    <Link href="/web/services">
                        <button className='text-white bg-primaryColor rounded-md py-2 px-6'>
                            View Services
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Services
