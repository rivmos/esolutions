import React from 'react';
import Link from 'next/link';
import { shortenText } from '@/app/lib/utils/string';
import Image from 'next/image';
import prisma from '@/app/lib/prismadb'
import CustomButton from '@/app/ui/common/CustomButton';
import dayjs from 'dayjs';

export default async function Page() {

  const data = await prisma?.insight.findMany()

  console.log(data)

  return (
    <div>
      <div className='max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {data?.map(
            (item, index) => {
              return (
                <div key={item.id} className='flex flex-col mb-10 mt-2 bg-white'>
                  <div>
                    <Image
                      width={400}
                      height={400}
                      src={item.image as string}
                      className='w-full h-52 object-cover'
                      alt={item.title}
                    />
                  </div>
                  <div className='text-center p-4 space-y-3'>
                    <div className='text-center'>{dayjs(item.createdAt).format('MMM DD, YYYY')}</div>
                    <h6 className='text-lg font-semibold h-16'>{item.title}</h6>
                  </div>
                  <div className='flex justify-center px-4'>
                    <CustomButton href={`/insights/${item.slug}`} variant='card'>
                      Read More
                    </CustomButton>
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


