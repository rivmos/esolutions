import React from 'react';
import NewsletterForm from './NewsletterForm';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';


const Newsletter = () => {
  return (
    <>
      {/* <TypewriterEffectSmooth className='lg:-mt-4 text-sm text-white uppercase' words={'Subscribe To Newsletter'.split(' ').map(item => ({ text: item }))} /> */}
      <div className='mb-4 lg:mb-4 font-semibold text-white uppercase text-lg'>Subscribe To Newsletter</div>
      <div className='flex items-center gap-4'>
        <NewsletterForm />
      </div>
    </>
  );
};

export default Newsletter;
