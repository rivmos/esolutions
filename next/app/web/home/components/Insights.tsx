import React from 'react';
import Link from 'next/link';
import BlogSwiper from './InsightsSwiper';
import prisma from '@/app/lib/prismadb'
import { Button } from '@/components/ui/moving-border';
import SectionTitle from './SectionTitle';
import CustomButton from '@/app/ui/common/CustomButton';

const Blogs = async ({title, slugToExclude} : {title?:string, slugToExclude?: string}) => {

    const data = await prisma.insight.findMany({
        where: {
            NOT: {
                slug:slugToExclude
            }
        }
    })

    return (
        <div className='max-w-6xl mx-auto py-16 lg:py-20 px-4'>
            {/* <h2 className="text-3xl font-bold mb-8 text-center tracking-tight sm:text-4xl">Blogs</h2> */}
            <SectionTitle title={title ?? 'Insights'} />
            <BlogSwiper data={data} />
            {!title && <div className='flex justify-center mt-8'>
                <CustomButton href="/web/insights" variant='bordered'>
                    View All Insights
                </CustomButton>
            </div>}
        </div>
    );
}

export default Blogs;
