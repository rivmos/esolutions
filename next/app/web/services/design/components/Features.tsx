import Image from 'next/image';
import React from 'react';

const Features = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50">
                <Image
                    width={850}
                    height={550}
                    src={'/img/services/design.png'}
                    alt={'Design Service Image'}
                    className={'w-full h-auto object-cover'}
                />
                <div className="p-4">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 capitalize">
                        State-of-the-art designs tailored to your business vision and requirements
                    </h2>
                    <p className="text-sm md:text-base">
                        We are a team of experienced designers focused on how the project looks, performs, and works to engage with the end-users.
                        Our experts plan and deliver exceptional designs, from bespoke web designs to graphics and videos. Through close collaboration,
                        our specialists work together to provide a comprehensive package of design services, allowing us to deliver consistent branding
                        and quality which means we can support you with all of your design needs under one roof.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 md:pt-32 pb-24 md:pb-60">
                <div className="border-l-2 pl-4 md:pl-6">
                    <h3 className="text-lg md:text-2xl font-semibold mb-3">Website Design Services</h3>
                    <p className="text-sm md:text-base">
                        We will provide you with an engaging, easy to navigate website that is focused towards your target audience.
                        The strong design, and a carefully planned user journey will help turn visitors into customers and would push them to take action.
                    </p>
                </div>
                <div className="border-l-2 pl-4 md:pl-6">
                    <h3 className="text-lg md:text-2xl font-semibold mb-3">Graphic Designs</h3>
                    <p className="text-sm md:text-base">
                        Our designers will work to produce high-quality designs that are based on the unique requirements of your business.
                        Giving you the ability to connect with your target audience through empowering and appealing designs.
                    </p>
                </div>
                <div className="border-l-2 pl-4 md:pl-6">
                    <h3 className="text-lg md:text-2xl font-semibold mb-3">Video & Photography</h3>
                    <p className="text-sm md:text-base">
                        We help you create compelling videos and photographs that drive growth for your business.
                        Connect with our experts to achieve more with your content by harnessing the power of video and photographs to create more impactful messaging.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;
