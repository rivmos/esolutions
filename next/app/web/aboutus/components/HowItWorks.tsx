
import { HoverEffect } from '@/components/ui/card-hover-effect';
import React from 'react';
import Image from 'next/image';

const data = [
  {
    title: "Schedule Call",
    description:
      "Our experts start by taking a look at the big picture. What are your main business goals? What are you trying to accomplish and more?",
    iconSrc: "call.svg",
    href: "tel:+91 78888 53170"
  },
  {
    title: "Create Customized Plan",
    description:
      "We then outline the messaging, advertising platforms, and media we think would be most effective to help you accomplish your goals.",
    iconSrc: "plan.svg",
    href: "/web/contactus"
  },
  {
    title: "Review Results",
    description:
      "After the plans are in motion, we provide easy to understand reports to help you see what you are getting for what you are spending.",
    iconSrc: "results.svg",
    href: "/web/casestudies"
  }
];

const HowItWorks = () => {
  return (
    <section className="pt-12 md:pt-16 lg:pt-20 pb-20 md:pb-28 lg:pb-36 px-4">
      <div className="max-w-[1700px] mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 md:mb-8 lg:mb-16">How It Works?</h2>
        {/* <HoverEffect items={data} /> */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {
            data.map(item => {
              return (
                <div className="bg-white rounded-sm shadow-md relative py-16 group block p-2 h-full w-full border-[2px] cursor-pointer hover:border-blue-300 hover:shadow-blue-300 hover:shadow-lg transition-all duration-300">
                  {/* <IconComponent size={28} className="text-blue-600 text-3xl md:text-4xl lg:text-5xl mx-auto mb-4" /> */}
                  <div className="flex justify-center mb-6">
                    <Image src={`/img/icons/${item.iconSrc}`} alt="icon" width={80} height={80} />
                  </div>
                  <div className="text-xl font-semibold text-gray-900 my-8">{item.title}</div>
                  <div className="text-gray-700 text-base max-w-md mx-auto">{item.description}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
