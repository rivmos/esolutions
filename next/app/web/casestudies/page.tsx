import React from 'react';
import Link from 'next/link';
import { shortenText } from '@/app/lib/utils/string';
import Image from 'next/image';
import prisma from '@/app/lib/prismadb'

export default async function Page() {

  const data = await prisma?.caseStudy.findMany()

  return (
    <div className='bg-zinc-50'>
      <div className='container mx-auto py-12 md:py-16 lg:py-20 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {data?.map(
            (item, index) => {
              return (
                <div key={index} className='flex flex-col bg-white shadow-sm rounded-xl h-full p-4 md:p-8'>
                  <h6 className='text-center font-semibold mb-4'>{item.title}</h6>
                  <div><Image src={item.image ?? '/img/upload-widget/upload.png'} width={400} height={200} className='w-full object-cover mb-4 rounded-sm' alt={item.title as string} /></div>
                  <div className='flex flex-col justify-between flex-1 text-center space-y-4'>
                    <div className='overflow-y-auto max-h-24'>{shortenText(item?.description as string)}</div>
                    <Link href={`/web/casestudies/${item?.id}`} className='underline text-blue-600 hover:text-blue-800 text-sm'>
                      Read More
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


