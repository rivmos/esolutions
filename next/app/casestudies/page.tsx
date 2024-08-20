import React from 'react';
import Link from 'next/link';
import { shortenText } from '@/app/lib/utils/string';
import Image from 'next/image';
import prisma from '@/app/lib/prismadb'
import CustomButton from '@/app/ui/common/CustomButton';

export default async function Page() {

  const data = await prisma?.caseStudy.findMany()

  return (
    <div>
      <div className='max-w-[1700px] mx-auto py-12 md:py-16 lg:py-20 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {data?.map(
            (item, index) => {
              return (
                <div key={item.id} className='flex flex-col select-none bg-white rounded-md border-[1px] h-full py-12 mb-4'>
                  <h6 className='text-center font-bold pb-12 text-xl'>{item.title}</h6>
                  <div><Image width={550} height={300} src={item.image ?? '/img/data.png'} className='w-full h-[200px] md:h-[300PX] object-cover mb-4' alt={item.title as string} /></div>
                  <div className='overflow-y-auto max-w-md mx-auto text-base text-center mb-4 px-4 pt-6 text-[#111111]'>{shortenText(item?.description as string)}</div>
                  <div className='flex justify-center px-4'>
                    <CustomButton href={`/casestudies/${item?.slug}`} variant='card'>
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


