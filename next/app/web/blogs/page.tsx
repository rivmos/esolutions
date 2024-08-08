import React from 'react';
import Link from 'next/link';
import { shortenText } from '@/app/lib/utils/string';
import Image from 'next/image';
import prisma from '@/app/lib/prismadb'

export default async function Page() {

  const data = await prisma?.blog.findMany()

  return (
    <div className='bg-zinc-50'>
      <div className='container mx-auto py-12 md:py-16 lg:py-20 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {data?.map(
            (item, index) => {
              return (
                <div className='flex flex-col shadow-lg p-5 my-8 rounded-2xl bg-white hover:shadow-xl transition-shadow duration-300'>
                  <div>
                    <Image
                      width={400}
                      height={400}
                      src={item.image as string}
                      className='w-full h-52 object-cover rounded-t-2xl'
                      alt={item.title}
                    />
                  </div>
                  <div className='text-left py-4 space-y-3'>
                    <h6 className='text-lg font-semibold h-20'>{item.title}</h6>
                    <Link href={`/web/blogs/${item.id}`} className='hover:text-blue-600 text-sm underline-animation transition-colors duration-300'>
                      <span className='border-2 p-2 rounded-lg hover:border-blue-600 transition-colors duration-300'>
                        Read More
                      </span>
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );

}


