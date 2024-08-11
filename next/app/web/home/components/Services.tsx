import React from 'react'
import Link from 'next/link';
import ServiceSwiper from './ServiceSwiper';
import prisma from '@/app/lib/prismadb'
import SectionTitle from './SectionTitle';
import { Button } from '@/components/ui/moving-border';
import CustomButton from '@/app/ui/common/CustomButton';

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
                <div className='flex justify-center mt-4'>
                    <CustomButton href="/web/services">
                        View More
                    </CustomButton>
                </div>
            </div>
        </>
    )
}

export default Services
