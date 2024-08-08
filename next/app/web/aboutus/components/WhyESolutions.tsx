import Link from 'next/link';
import React from 'react';
import { GrStatusGood } from "react-icons/gr";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { Button } from '@/components/ui/moving-border';

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
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight">
            Why eSolutions is Crucial for Your Brand’s Growth?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-lg text-gray-700 space-y-4">
            <p className='px-4 text-center lg:p-0 md:text-left'>
              We offer you a tailored approach to effectively reach and resonate with your target audience. Our digital services serve as a critical bridge connecting brands with their audiences, making them indispensable for sustained growth. By utilizing social media advertising, search engine optimization, and targeted marketing, we can help brands tailor their messages across the demographics. Here are the top reasons why our customers prefer to choose us:
            </p>
          </div>
          {/* <div className="space-y-4 border-l-[1px] px-4 lg:px-16">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-0 md:p-1 rounded-full">
                <GrStatusGood />
              </div>
              <span className="font-medium">Highly Skilled and Experienced Team</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-0 md:p-1 rounded-full">
                <GrStatusGood />
              </div>
              <span className="font-medium">Quality Focused</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-0 md:p-1 rounded-full">
                <GrStatusGood />
              </div>
              <span className="font-medium">100% Customer Satisfaction</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-0 md:p-1 rounded-full">
                <GrStatusGood />
              </div>
              <span className="font-medium">Competitive Pricing</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-0 md:p-1 rounded-full">
                <GrStatusGood />
              </div>
              <span className="font-medium">Services Customized to the Needs of Our Clients</span>
            </div>
          </div> */}
          <div className="space-y-4 border-l-[1px] px-4 lg:px-16">
            <Loader loadingStates={items} loading={true} duration={2000} />
          </div>

        </div>
        <div className="text-center mt-12">
          <p className="text-gray-700 text-lg px-4 font-semibold md:font-bold my-8">
            If you have any questions or would like to know more about our services, don&apos;t hesitate to contact us.
          </p>
          <Link href="/web/contactus">
            <Button className="bg-white text-gray-800 rounded-md px-4 py-2 sm:px-6 sm:py-3 hover:bg-blue-600-dark transition-colors duration-300 hover:text-blue-400 border-blue-400">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyESolutions;
