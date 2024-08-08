import React from 'react'
import Link from 'next/link';
import ServiceSwiper from './ServiceSwiper';
import prisma from '@/app/lib/prismadb'
import SectionTitle from './SectionTitle';
import { Button } from '@/components/ui/moving-border';

const Services = async () => {

    const data = await prisma.service.findMany({
        where: {
            isActive: true
        }
    })

    return (
        <>
            <div className='py-12 md:py-16 lg:py-20 bg-zinc-100'>
                <SectionTitle title='Our Services' />
                <ServiceSwiper data={data} />
                <div className='flex justify-center mt-8'>
                    <Link href="/web/services">
                        <Button className="bg-white text-gray-800 rounded-md px-4 py-2 sm:px-6 sm:py-3 hover:bg-blue-600-dark transition-colors duration-300 hover:text-blue-400 border-blue-400"> 
                            View More
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Services
