import Image from 'next/image';
import React from 'react';

const SubFeatures = () => {
    return (
        <div className='bg-gray-50'>
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col items-center bg-gray-50 p-8">
                    <div className="w-full max-w-3xl">
                        <Image
                            width={1920}
                            height={850}
                            src={'/img/services/computers.png'}
                            alt={'Responsive Design Image'}
                            className={'w-full h-auto object-cover -mt-24 md:-mt-40 lg:-mt-64'}
                        />
                    </div>
                    <div className="mt-8 text-center">
                        <h2 className="text-2xl font-bold mb-4 capitalize">UX Web Design</h2>
                        <p className="text-base md:text-lg mb-6">
                            Put users at the heart of the website design by delivering user experience that will enhance satisfaction and interaction with your website.
                            We provide you with creative designs that are tested effectively for usability and accessibility.
                        </p>
                        <h2 className="text-2xl font-bold mb-4 capitalize">Responsive Web Designs</h2>
                        <p className="text-base md:text-lg">
                            Mobile phones are the most popular devices which users use to access the website. So obviously you would want the website to be responsive
                            and user friendly plus scalable to various screen sizes and browsers that are available. At eSolutions, our expert designers cater to all kinds
                            of responsive website requirements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubFeatures;
