import React from 'react';
import Link from 'next/link';
import CaseStudySwiper from './CaseStudySwiper';
import prisma from '@/app/lib/prismadb'
import SectionTitle from './SectionTitle';
import { Button } from '@/components/ui/moving-border';


const CaseStudies = async () => {

    const data = await prisma.caseStudy.findMany()

    return (
        <div className='container mx-auto py-12 md:py-16 lg:py-20 px-4'>
            <SectionTitle title='Case Studies' />
            <CaseStudySwiper data={data} />
            <div className='flex justify-center mt-8'>
                <Link href="/web/casestudies">
                    <Button className="bg-white text-gray-800 rounded-md px-4 py-2 sm:px-6 sm:py-3 hover:bg-blue-600-dark transition-colors duration-300 hover:text-blue-400 border-blue-400"> 
                        View More
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default CaseStudies;
