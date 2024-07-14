"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { shortenText } from '@/app/lib/utils/string';
import { fetchCaseStudies } from '@/app/services/casestudies';
import { CaseStudiesState } from '@/app/lib/@types/casestudy';

export default function Page() {
  const [data, setData] = useState<CaseStudiesState>([])

  useEffect(() => {
    fetchCaseStudies().then(res => setData(res.data))
  }, [])

  return (
    <div className='container mx-auto py-12 md:py-16 lg:py-20 px-4'>
      <h2 className="text-3xl font-bold mb-4 text-center tracking-tight sm:text-4xl">Case Studies</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {data?.map(
          (item, index) => {
            return (

              <div key={index} className='flex flex-col bg-white border-2 h-full p-4 md:p-8'>
                <h6 className='text-center font-semibold mb-4'>{item.title}</h6>
                <div><img className='w-full h-48 md:h-96 object-cover mb-4' alt={item.title} /></div>
                <div className='flex flex-col justify-between flex-1 text-center space-y-4'>
                  <div className='overflow-y-auto max-h-24'>{shortenText(item?.description)}</div>
                  <Link href={`/web/casestudy/${item?.id}`} className='underline text-blue-600 hover:text-blue-800'>
                    Read More
                  </Link>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );

}


