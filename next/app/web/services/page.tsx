import React from 'react';
import Link from 'next/link';
import { shortenText } from '@/app/lib/utils/string';
import Image from 'next/image';
import Banner from '@/app/ui/web/Banner';
import prisma from '@/app/lib/prismadb'
import CustomButton from '@/app/ui/common/CustomButton';


export default async function Page() {

  const data = await prisma?.service.findMany({
    where: {
      isActive: true
    }
  })

  return (
    <>
      <Banner title='Services' isShort bannerImage='/img/banner/services-bg1.png' bannerImageAlt='Services Banner Image' />
      <div className='bg-gray-100'>
        <div className='container mx-auto py-12 md:py-16 lg:py-20 px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {data?.map(
              (item, index) => {
                return (
                  <div key={item.id} className='bg-white relative'>
                    <div className="w-full flex justify-center">
                      <Image
                        src={item.image}
                        height="300"
                        width="650"
                        className="h-[250px] object-cover"
                        alt={item.name}
                      />
                    </div>
                    <div className='flex flex-col items-center py-12'>
                      <div
                        className='text-xl lg:text-2xl font-bold mb-8 text-center h-12'
                      >
                        {item.name}
                      </div>
                      <div
                        className='text-sm lg:text-base max-w-sm mb-8 text-center px-2'
                      >
                        {shortenText(item.description)}
                      </div>
                      <div className='absolute left-[50%] -translate-x-[50%] bottom-6'>
                        <CustomButton href={item.href} variant='card'>
                          View
                        </CustomButton>
                      </div>
                    </div>
                  </div>
                )
              }
            )}
          </div>
        </div>
      </div>
    </>
  );

}


