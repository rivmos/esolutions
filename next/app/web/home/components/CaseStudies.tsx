import React from 'react';
import Link from 'next/link';
import CaseStudySwiper from './CaseStudySwiper';
import prisma from '@/app/lib/prismadb'
import SectionTitle from './SectionTitle';
import { Button } from '@/components/ui/moving-border';
import CustomButton from '@/app/ui/common/CustomButton';


const CaseStudies = async () => {

    const data = await prisma.caseStudy.findMany()

    return (
        <div className='container mx-auto py-12 md:py-16 lg:py-20 px-4'>
            <SectionTitle title='Case Studies' />
            <CaseStudySwiper data={data} />
            <div className='flex justify-center mt-8'>
                <CustomButton href="/web/casestudies">
                    View More
                </CustomButton>
            </div>
        </div>
    );
}

export default CaseStudies;
