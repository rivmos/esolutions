import React from 'react';
import Link from 'next/link';
import CaseStudySwiper from './CaseStudySwiper';
import prisma from '@/app/lib/prismadb'
import SectionTitle from './SectionTitle';
import { Button } from '@/components/ui/moving-border';
import CustomButton from '@/app/ui/common/CustomButton';


const CaseStudies = async ({title='Case Studies', slugToExclude} : {title:string, slugToExclude?: string}) => {

    const data = await prisma.caseStudy.findMany({
        where: {
            NOT: {
                slug: slugToExclude
            }
        }
    })

    return (
        <div className='max-w-[1700px] mx-auto py-16 lg:py-20 px-4'>
            <SectionTitle title={title} />
            <CaseStudySwiper data={data} />
            <div className='flex justify-center mt-8'>
                <CustomButton href="/casestudies" variant='bordered'>
                    View Case Studies
                </CustomButton>
            </div>
        </div>
    );
}

export default CaseStudies;
