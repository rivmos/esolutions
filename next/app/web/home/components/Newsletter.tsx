import React from 'react';
import NewsletterForm from './NewsletterForm';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';


const Newsletter = () => {
  return (
    <div className='bg-gradient-to-r from-neutral-900 to-neutral-700'>
      <div className="bg-zinc-100 py-10 sm:py-16 md:py-20 lg:py-32">
        <TypewriterEffectSmooth words={'Subscribe to Newsletter'.split(' ').map(item => ({ text: item }))} />
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
