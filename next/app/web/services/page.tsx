import React from 'react';
import Link from 'next/link';
import { shortenText } from '@/app/lib/utils/string';
import Image from 'next/image';
import Banner from '@/app/ui/web/Banner';
import prisma from '@/app/lib/prismadb'
import ServiceCard from './components/ServiceCard';


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
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
            {data?.map(
              (item, index) => <ServiceCard key={item.id} data={item}/>
            )}
          </div>
        </div>
      </div>
    </>
  );

}


