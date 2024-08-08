import React from 'react';
import Link from 'next/link';
import BlogSwiper from './BlogSwiper';
import prisma from '@/app/lib/prismadb'
import { Button } from '@/components/ui/moving-border';
import SectionTitle from './SectionTitle';

const Blogs = async () => {

    const data = await prisma.blog.findMany()

    return (
        <div className='container mx-auto py-12 md:py-16 lg:py-20 px-4'>
            {/* <h2 className="text-3xl font-bold mb-8 text-center tracking-tight sm:text-4xl">Blogs</h2> */}
            <SectionTitle title='Blogs' />
            <BlogSwiper data={data} />
            <div className='flex justify-center mt-8'>
                <Link href="/web/blogs">
                    <Button className="bg-white text-gray-800 rounded-md px-4 py-2 sm:px-6 sm:py-3 hover:bg-blue-600-dark transition-colors duration-300 hover:text-blue-400 border-blue-400">
                        View More
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Blogs;
