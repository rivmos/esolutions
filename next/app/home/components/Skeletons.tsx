import React from 'react'

const CardSkeleton = () => {
    return (
      <div className='flex flex-col bg-gray-200 border-2 border-gray-300 h-full p-4 md:p-8 animate-pulse'>
        <div className='h-6 bg-gray-300 rounded mb-4'></div>
        <div className='w-full h-48 md:h-96 bg-gray-300 rounded mb-4'></div>
        <div className='flex flex-col justify-between flex-1 text-center space-y-4'>
          <div className='h-24 bg-gray-300 rounded overflow-hidden'></div>
          <div className='h-6 bg-gray-300 rounded'></div>
        </div>
      </div>
    );
  };
  

export const CaseStudySkeleton = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    )
}

