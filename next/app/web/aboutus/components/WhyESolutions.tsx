import Link from 'next/link';
import React from 'react';
import { GrStatusGood } from "react-icons/gr";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import CustomButton from '@/app/ui/common/CustomButton';

const items = [
  { text: "Highly Skilled and Experienced Team" },
  { text: "Quality Focused" },
  { text: "100% Customer Satisfaction" },
  { text: "Competitive Pricing" },
  { text: "Services Customized to the Needs of Our Clients" }
];

const WhyESolutions = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Why eSolutions is Crucial for Your Brand’s Growth?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-base md:text-lg text-gray-700 space-y-4 px-4 lg:px-0 text-justify">
            <p>
              We offer you a tailored approach to effectively reach and resonate with your target audience. Our digital services serve as a critical bridge connecting brands with their audiences, making them indispensable for sustained growth. By utilizing social media advertising, search engine optimization, and targeted marketing, we can help brands tailor their messages across demographics. Here are the top reasons why our customers prefer to choose us:
            </p>
          </div>
          <div className="space-y-4 border-l-[1px] px-4 lg:px-16">
            <Loader loadingStates={items} loading={true} duration={2000} />
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-700 text-base md:text-lg lg:text-xl px-4 font-semibold md:font-bold my-8">
            If you have any questions or would like to know more about our services, don&apos;t hesitate to contact us.
          </p>
          <CustomButton href='/web/contactus'>
            Get In Touch
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default WhyESolutions;
