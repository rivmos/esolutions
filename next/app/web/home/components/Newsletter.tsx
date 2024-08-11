import React from 'react';
import NewsletterForm from './NewsletterForm';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';


const Newsletter = () => {
  return (
    <>
      <TypewriterEffectSmooth className='lg:-mt-4 text-sm font-semibold text-white uppercase' words={'Stay in touch'.split(' ').map(item => ({ text: item }))} />
      <div className='flex items-center gap-4'>
        <NewsletterForm />
      </div>
    </>
  );
};

export default Newsletter;
