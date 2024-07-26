import React from 'react'
import Link from 'next/link';
import ServiceSwiper from './ServiceSwiper';
import prisma from '@/app/lib/prismadb'

const Services = async () => {

    const data = await prisma.service.findMany({
        where:{
            isActive: true
        }
    })

    return (
        <>
            <div className='py-12 md:py-16 lg:py-20 bg-zinc-100'>
                <h2 className="text-3xl font-bold mb-4 text-center tracking-tight sm:text-4xl">Our Services</h2>
                {/* <p className='text-center mt-2 text-base'>Discover from a curated collection of works by renowned Indian artists</p> */}
                <ServiceSwiper data={data}/>
                <div className='flex justify-center mt-8'>
                    <Link href="/web/services">
                        <button className='text-white bg-blue-600 rounded-md py-2 px-6'>
                            View Services
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Services
