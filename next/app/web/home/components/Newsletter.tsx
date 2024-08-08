import React from 'react';
import NewsletterForm from './NewsletterForm';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';


const Newsletter = () => {
  return (
    <div className='bg-gradient-to-r from-neutral-900 to-neutral-700'>
      <div className="bg-zinc-100 py-16 sm:py-24 lg:py-32">
        {/* <div className='text-center text-2xl sm:text-3xl lg:text-4xl mb-8 text-gray-900'>
          Subscribe to Newsletter */}
          <TypewriterEffectSmooth words={'Subscribe to Newsletter'.split(' ').map(item => ({text: item}))} />
        {/* </div> */}
        <div className="mx-auto container px-6 lg:px-8">
          <div className='flex items-center justify-center gap-4'>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
