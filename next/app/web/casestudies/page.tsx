import React from 'react';
import Link from 'next/link';
import { shortenText } from '@/app/lib/utils/string';
import Image from 'next/image';
import prisma from '@/app/lib/prismadb'
import Banner from '@/app/ui/web/Banner';

export default async function Page() {

  const data = await prisma?.caseStudy.findMany()

  return (
    <div className='bg-zinc-50'>
      <div className='container mx-auto py-12 md:py-16 lg:py-20 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {data?.map(
            (item, index) => {
              return (
                // <div key={item.id} className='flex flex-col select-none bg-white rounded-md border-[1px] h-full py-6'>
                //   <h6 className='text-left font-semibold px-4'>{item.title}</h6>
                //   <div className='overflow-y-auto mb-2 px-4'>{shortenText(item?.description as string)}</div>
                //   <div><Image width={400} height={400} src={item.image ?? '/img/data.png'} className='w-full h-48 md:h-96 object-cover mb-4' alt={item.title as string} /></div>
                //   <div className='flex justify-end px-4'>
                //     <Link href={`/web/casestudies/${item?.id}`} className='hover:text-blue-600 text-sm underline-animation transition-colors duration-200'>
                //       <span className='border-[1px] p-2 rounded-lg hover:border-blue-600 transition-colors duration-500'>
                //         Read More
                //       </span>
                //     </Link>
                //   </div>
                // </div>
                <div key={item.id} className='flex flex-col select-none bg-white rounded-md border-[1px] h-full py-10 mb-4'>
                  <h6 className='text-center font-semibold pb-10 text-lg'>{item.title}</h6>
                  <div><Image width={400} height={400} src={item.image ?? '/img/data.png'} className='w-full h-48 md:h-96 object-cover mb-4' alt={item.title as string} /></div>
                  <div className='overflow-y-auto text-base text-center mb-6 px-4 pt-6'>{shortenText(item?.description as string)}</div>
                  <div className='flex justify-center px-4 mb-6'>
                    <Link href={`/web/casestudies/${item?.id}`} className='hover:text-blue-600 text-base underline-animation transition-colors duration-200'>
                      <span className='border-b-[1px] p-2 hover:border-blue-600 transition-colors duration-500'>
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


