import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Button } from '@/components/ui';


const Services = () => {
    return (
        <>
            <div className='!py-16 md:!py-20 lg:!py-20 bg-neutral-200'>
                <h2 className="text-3xl font-bold mb-4 text-center tracking-tight sm:text-4xl mb-12">Our Services</h2>
                {/* <p className='text-center mt-2 text-base'>Discover from a curated collection of works by renowned Indian artists</p> */}
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="h-auto"
                    spaceBetween={24}
                >

                    {[{ serviceName: 'Web Developement', description: 'Description One', image: '1.png' }, { serviceName: 'Mobile App Design & Developement', description: 'Description Two', image: '2.png    ' }, { serviceName: 'Designing Services', description: 'Description One', image: '1.png' }, { serviceName: 'Video & Animation Services', description: 'Description Two', image: '2.png    ' }].map(
                        (item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='flex flex-col bg-white !p-0'>
                                        <div><img src={`/img/services/${item.image}`} className='w-full' /></div>
                                        <div className='text-center py-8 space-y-2'>
                                            <h6>{item.serviceName}</h6>
                                            <Button className="underline border-0">
                                                View
                                            </Button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    )}
                </Swiper>
                <div className='flex justify-center mt-8'>
                    <Button variant='solid' className='!bg-blue-700'>View All Artists</Button>
                </div>
            </div>
        </>
    )
}

export default Services