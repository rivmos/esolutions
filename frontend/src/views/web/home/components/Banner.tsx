import React, { useEffect } from 'react'
// Import Swiper React components
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Button } from '@/components/ui';
import { useAppSelector, useAppDispatch } from '@/store';
import useResponsive from '@/utils/hooks/useResponsive';
import { baseUrl } from '@/configs/app.config';

const Banner = () => {

  return (
    <div className="relative object-cover">
      <img src='/img/banner/bg.png' className='h-[800px] w-full object-cover z-0'/>
      <div className='absolute top-0 left-0 w-full'>
        <img src='/img/banner/overlay.png' className='opacity-60 h-[800px] w-full object-cover z-3 overflow-hidden'/>
      </div>
      {/* <div className="absolute top-0 left-0 right-0 z-[1] h-full w-full opacity-85 bg-black object-fit">
      </div> */}

      <div className='w-full bg-black h-full absolute top-0 left-0 opacity-80'></div>

      <div className="absolute top-[50%] -translate-y-[50%] left-0 right-0 z-[3] mx-auto container ">
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-center text-white sm:text-4xl">
          Innovative Digital Marketing Solution to Unlock Growth
        </h2>
        <p className="mt-6 text-base md:text-lg text-gray-300 w-1/2 mx-auto text-center">
          A modern growth marketing firm offering data-driven & result-oriented digital marketing services!
        </p>
        <div className="mt-10 flex flex-col mx-auto sm:flex-row lg:items-center justify-center gap-x-6">
          <Button
            variant='solid'
            className='text-white rounded-md !bg-blue-700'
          >
            Our Portfolio
          </Button>
          {/* <a href="#" className="flex items-center gap-2 text-sm font-semibold leading-6 text-white">
            Discover more <span aria-hidden="true">→</span>
          </a> */}
        </div>
      </div>

    </div>

  )
}

export default Banner