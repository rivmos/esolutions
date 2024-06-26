import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Button } from '@/components/ui';
import { useAppDispatch, useAppSelector } from '@/store';
import { Link } from 'react-router-dom';
import useResponsive from '@/utils/hooks/useResponsive';
import { baseUrl } from '@/configs/app.config';

const ShopByArtist = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        // dispatch(getAllArtists())
    }, [])
    // const artists = useAppSelector(state => state.base.common.allArtists)
    const { larger } = useResponsive()

    return (
        <>
            <div className='container mx-auto !py-16 md:!py-20 lg:!py-28'>
                <h2 className="text-3xl font-bold uppercase text-center tracking-tight text-gray-700 sm:text-4xl text-orange-900">Artists</h2>
                <p className='text-center mt-2 text-base'>Discover from a curated collection of works by renowned Indian artists</p>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    autoplay
                    slidesPerView={larger.sm === false ? 1 : larger.md === false ? 2 : 4}
                    onSwiper={(swiper) => { }}
                    className='my-4 md:my-8 lg:my-16 h-[300px]'
                >
                    {/* {
                        artists?.map((artist, index) => {
                            return (
                                <SwiperSlide key={artist.id} className='cursor-pointer'>
                                    <Link to={`/web/profile/${artist.id}`}>
                                        <div className="text-gray-700 flex flex-col items-center">
                                            <img src={`${baseUrl}/uploads/avatar/${artist?.avatar}`} alt=" random imgee" className="!w-52 !h-52 object-cover rounded-full shadow-md" />
                                            <div>
                                                <h4 className="mt-2 text-base capitalize text-center leading-tight text-gray-700 truncate">{artist.name}</h4>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    } */}
                </Swiper>
                <div className='flex justify-center'>
                    <Button variant='solid' className='bg-orange-900'>View All Artists</Button>
                </div>
            </div>
        </>
    )
}

export default ShopByArtist