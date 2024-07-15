import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

export type BannerProps = {
    overlayImage?:string
    overlayImageAlt?:string
    bannerImage?:string
    bannerImageAlt?:string
    title?:string
    description?:string
    btnText?:string
    btnPath?:string
    isShort?:boolean
}

const Banner = ({overlayImage, overlayImageAlt, bannerImage, bannerImageAlt, title, description, btnText, btnPath, isShort} : BannerProps) => {
  return (
    <div className="relative">
      {bannerImage && <Image
        width={1920}
        height={850}
        src={bannerImage}
        alt={bannerImageAlt ?? 'Banner Image'}
        className={clsx('w-full object-cover', {'h-[400px] md:h-[600px] lg:h-[800px]' : !isShort}, {'h-[200px] md:h-[300px] lg:h-[400px]' : isShort})}
      />}
      <div className='absolute top-0 left-0 w-full h-full'>
       {overlayImage && <Image
          width={1350}
          height={850}
          src={overlayImage}
          alt={overlayImageAlt ?? 'Banner Overlay'}
          className='opacity-60 h-[400px] md:h-[600px] lg:h-[800px] w-full object-cover'
        />}
      </div>
      <div className='absolute top-0 left-0 w-full h-full bg-[#000] opacity-80'></div>
      <div className="absolute top-[50%] -translate-y-[50%] left-0 right-0 z-20 mx-auto container text-[#fff] px-4">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight text-center">
          {title}
        </h2>
        {description && <p className="mt-6 text-sm md:text-base lg:text-lg text-gray-300 mx-auto text-center w-full md:w-3/4 lg:w-1/2">
          {description}
        </p>}
        {btnPath && <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6">
          <Link href={btnPath}>
            <button className='text-[#fff] bg-primaryColor rounded-md p-3'>
              {btnText}
            </button>
          </Link>
        </div>}
      </div>
    </div>
  )
}

export default Banner
