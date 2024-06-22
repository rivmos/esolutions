import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Button } from '@/components/ui';
import { getAllArtists, useAppDispatch, useAppSelector } from '@/store';
import { Link } from 'react-router-dom';
import useResponsive from '@/utils/hooks/useResponsive';
import { baseUrl } from '@/configs/app.config';

const CaseStudies = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getAllArtists())
    }, [])
    const artists = useAppSelector(state => state.base.common.allArtists)
    const { larger } = useResponsive()

    return (
        <>
            <div className='container mx-auto !py-16 md:!py-20 lg:!py-20'>
                <h2 className="text-3xl font-bold mb-4 text-center tracking-tight sm:text-4xl mb-12">Case Studies</h2>
                {/* <p className='text-center mt-2 text-base'>Discover from a curated collection of works by renowned Indian artists</p> */}
                <Swiper
                    slidesPerView={2}
                    slidesPerGroup={1}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="h-auto"
                    spaceBetween={24}
                >

                    {[{ caseStudyTitle: 'Case Study 1', description: 'Description One Description One Description One Description One Description One Description One Description One Description One Description One Description One Description One Description One Description One Description One Description One Description One Description One Description One ', image: '1.png' }, { caseStudyTitle: 'Case Study 2', description: 'Description Two', image: '2.png    ' }, { caseStudyTitle: 'Case Study 3', description: 'Description One', image: '1.png' }, { caseStudyTitle: 'Case Study 4', description: 'Description Two', image: '2.png    ' }].map(
                        (item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='flex flex-col bg-white !py-16 border-2'>
                                        <h6  className='text-center'>{item.caseStudyTitle}</h6>
                                        <div><img src={`/img/services/${item.image}`} className='w-full py-8' /></div>
                                        <div className='text-center px-4 space-y-2'>
                                            <div>{item.description}</div>
                                            <Button className="underline border-0">
                                                Read More
                                            </Button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    )}
                </Swiper>
                <div className='flex justify-center mt-8'>
                <Button className="border !border-blue-600 !text-blue-600 py-2 px-4 rounded !hover:bg-blue-600 !hover:text-white transition">View Case Study</Button>
                </div>
            </div>
        </>
    )
}

export default CaseStudies