import React from 'react';
import Link from 'next/link';
import CaseStudySwiper from './CaseStudySwiper';
import prisma from '@/app/lib/prismadb'

const CaseStudies = async () => {

    const data = await prisma.caseStudy.findMany()

    return (
        <div className='container mx-auto py-12 md:py-16 lg:py-20 px-4'>
            <h2 className="text-3xl font-bold mb-8 text-center tracking-tight sm:text-4xl">Case Studies</h2>
            <CaseStudySwiper data={data}/>
            <div className='flex justify-center mt-8'>
                <Link href="/web/casestudies" className="border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition">
                    View Case Studies
                </Link>
            </div>
        </div>
    );
}

export default CaseStudies;
