import React from 'react';
import Link from 'next/link';
import BlogSwiper from './BlogSwiper';
import prisma from '@/app/lib/prismadb'
import { Button } from '@/components/ui/moving-border';
import SectionTitle from './SectionTitle';
import CustomButton from '@/app/ui/common/CustomButton';

const Blogs = async () => {

    const data = await prisma.blog.findMany()

    return (
        <div className='container mx-auto py-12 md:py-16 lg:py-20 px-4'>
            {/* <h2 className="text-3xl font-bold mb-8 text-center tracking-tight sm:text-4xl">Blogs</h2> */}
            <SectionTitle title='Blogs' />
            <BlogSwiper data={data} />
            <div className='flex justify-center mt-8'>
                <CustomButton href="/web/blogs">
                    View More
                </CustomButton>
            </div>
        </div>
    );
}

export default Blogs;