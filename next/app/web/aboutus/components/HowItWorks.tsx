
import React from 'react';
import { FaPhoneAlt, FaCalendarAlt, FaChartLine, FaClipboardCheck } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-12">How It Works?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border-[1px] py-16">
            <FaCalendarAlt size={28} className="text-blue-600 text-3xl md:text-4xl lg:text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Schedule Call</h3>
            <p className="text-gray-700 text-sm">
              Our experts start by taking a look at the big picture. What are your main business goals? What are you trying to accomplish and more?
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-[1px] py-16">
            <FaChartLine size={28} className="text-blue-600 text-3xl md:text-4xl lg:text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Create Customized Plan</h3>
            <p className="text-gray-700 text-sm">
              We then outline the messaging, advertising platforms, and media we think would be most effective to help you accomplish your goals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-[1px] py-16">
            <FaClipboardCheck size={28} className="text-blue-600 text-3xl md:text-4xl lg:text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Review Results</h3>
            <p className="text-gray-700 text-sm">
              After the plans are in motion, we provide easy to understand reports to help you see what you are getting for what you are spending.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
