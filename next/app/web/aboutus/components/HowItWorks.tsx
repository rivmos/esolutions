
import { HoverEffect } from '@/components/ui/card-hover-effect';
import React from 'react';
import { FaPhoneAlt, FaCalendarAlt, FaChartLine, FaClipboardCheck } from 'react-icons/fa';

const data = [
  {
    title: "Schedule Call",
    description:
      "Our experts start by taking a look at the big picture. What are your main business goals? What are you trying to accomplish and more?",
    icon: "FaCalendarAlt",
    href:"tel:+91 78888 53170"
  },
  {
    title: "Create Customized Plan",
    description:
      "We then outline the messaging, advertising platforms, and media we think would be most effective to help you accomplish your goals.",
    icon: "FaChartLine",
    href:"/web/contactus"
  },
  {
    title: "Review Results",
    description:
      "After the plans are in motion, we provide easy to understand reports to help you see what you are getting for what you are spending.",
    icon: "FaClipboardCheck",
    href:"/web/casestudies"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-12">How It Works?</h2>
        
          <HoverEffect items={data} />
      </div>
    </section>
  );
};

export default HowItWorks;
