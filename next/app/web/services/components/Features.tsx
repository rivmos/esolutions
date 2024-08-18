import Image from 'next/image';
import React from 'react';
import CaseStudies from '../../home/components/CaseStudies';
import Services from '../../home/components/Services';

const Features = ({image, imageAlt, features} : {image:string, imageAlt: string, features: {title: string, description:string}[]}) => {
    return (
        <>
            <div className='bg-gray-50'>
                <div className="container mx-auto px-4 pb-20">
                    <div className="flex flex-col items-center bg-gray-50 p-8">
                        <div className="w-full flex justify-center max-w-3xl">
                            <Image
                                width={1920}
                                height={850}
                                src={'/img/services/computers.png'}
                                alt={imageAlt}
                                className={'w-[970px] h-auto object-cover rounded-full -mt-28 md:-mt-44 lg:-mt-56'}
                            />
                        </div>
                        <div className="mt-16 text-center ">
                            {
                                features.map((feature, index) => {
                                    return(
                                        <div key={feature.title} className='mb-16 last:mb-0'>
                                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 capitalize">{feature.title}</h2>
                                            <p className="text-base md:text-lg">
                                                {feature.description}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* <CaseStudies title="Related Case Studies"/> */}
            <Services title='Other Services'/>
        </>

    );
};

export default Features;
