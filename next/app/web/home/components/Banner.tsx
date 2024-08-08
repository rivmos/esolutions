import React from 'react'
import BannerSwiper from './BannerSwiper'
import prisma from '@/app/lib/prismadb'


const Banner = async () => {

  const data = await prisma.bannerSlide.findMany()

  return (
    <div>
        <BannerSwiper data={data}/>
    </div>
  )
}

export default Banner