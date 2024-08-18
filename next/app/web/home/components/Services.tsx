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
            <div className='pb-8 md:pb-12 lg:pb-16 pt-16 lg:pt-20 bg-[#f5f5f5]'>
                <SectionTitle title='Our Services' />
                <ServiceSwiper data={data} />
            </div>
        </>
    )
}

export default Services
