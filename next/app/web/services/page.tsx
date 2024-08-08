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
      <Banner title='Services' isShort bannerImage='/img/banner/laptop-bg.png' bannerImageAlt='Services Banner Image' />
      <div className='bg-zinc-50'>
        <div className='container mx-auto py-12 md:py-16 lg:py-20 px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {data?.map(
              (item, index) => <ServiceCard data={item}/>
            )}
          </div>
        </div>
      </div>
    </>
  );

}


