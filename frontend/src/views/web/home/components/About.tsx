import React, { useEffect } from 'react'
// Import Swiper React components
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Button } from '@/components/ui';
import { getAllBanners, useAppSelector, useAppDispatch } from '@/store';
import useResponsive from '@/utils/hooks/useResponsive';
import { baseUrl } from '@/configs/app.config';

const About = () => {

  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(getAllBanners())
  // }, [])

  // const allBanners = useAppSelector(state => state.base.common.allBanners)

  // const { larger } = useResponsive()

  return (
    <div className="container mx-auto !py-36 px-6 text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">About Us</h2>
      <p className="text-lg md:text-xl mb-8">
        eSolutions story began with one mission– “to develop effective solutions and deliver creative strategies for businesses who want to grow their customer base and get more leads.”
      </p>
      <p className="text-sm md:text-base mb-8 w-3/4 mx-auto">
        As a dedicated digital marketing services company we stand at the forefront in marketing the business, paving the way for the public awareness, and revenue generation. Our services are focused on not only generating ROI but also building relations based on authenticity, honesty, trust and personal touch that the customers are looking for.
      </p>
      <Button className="border !border-blue-600 !text-blue-600 py-2 px-4 rounded !hover:bg-blue-600 !hover:text-white transition">Read More</Button>
    </div>
  )
}

export default About