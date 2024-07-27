import React from 'react';
import Link from 'next/link';
import { shortenText } from '@/app/lib/utils/string';
import Image from 'next/image';
import Banner from '@/app/ui/web/Banner';

export default async function Page() {

  const data = await prisma?.service.findMany({
    where: {
      isActive: true
    }
  })

  return (
    <>
      <Banner title='Services' isShort bannerImage='/img/banner/laptop-bg.png' bannerImageAlt='Services Banner Image' />
      <div className='bg-zinc-50'>
        <div className='container mx-auto py-12 md:py-16 lg:py-20 px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {data?.map(
              (item, index) => {
                return (
                  <div key={item.id} className='flex flex-col shadow-sm p-4 my-8 rounded-xl bg-white'>
                    <div>
                      <Image width={400} height={400} src={item.image ?? '/img/upload-widget/upload.png'} className='w-full h-52 object-cover' alt={item.name} />
                    </div>
                    <div className='text-left py-4 space-y-2'>
                      <h6 className='text-lg font text-left'>{item.name}</h6>
                      <div className='overflow-y-auto text-sm max-h-20 mb-4'>{shortenText(item?.description as string)}</div>
                      <span className='border-[1px] text-sm cursor-pointer p-2 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-500'>
                        View
                      </span>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );

}


