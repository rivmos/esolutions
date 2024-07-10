import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className="relative">
      <Image
        width={1920}
        height={850}
        src='/img/banner/bg.png'
        alt='Banner image showing people discussing IT solutions'
        className='h-[400px] md:h-[600px] lg:h-[800px] w-full object-cover'
      />
      <div className='absolute top-0 left-0 w-full h-full'>
        <Image
          width={1350}
          height={850}
          src='/img/banner/overlay.png'
          alt='Banner overlay image for effect'
          className='opacity-60 h-[400px] md:h-[600px] lg:h-[800px] w-full object-cover'
        />
      </div>
      <div className='absolute top-0 left-0 w-full h-full bg-[#000] opacity-80'></div>
      <div className="absolute top-[50%] -translate-y-[50%] left-0 right-0 z-20 mx-auto container text-[#fff] px-4">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight text-center">
          Innovative Digital Marketing Solution to Unlock Growth
        </h2>
        <p className="mt-6 text-sm md:text-base lg:text-lg text-gray-300 mx-auto text-center w-full md:w-3/4 lg:w-1/2">
          A modern growth marketing firm offering data-driven & result-oriented digital marketing services!
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6">
          <Link href="/portfolio">
            <button className='text-[#fff] bg-primaryColor rounded-md p-3'>
              Our Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
