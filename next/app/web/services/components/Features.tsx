import Image from 'next/image';
import React from 'react';

const Features = ({image, imageAlt, features} : {image:string, imageAlt: string, features: {title: string, description:string}[]}) => {
    return (
        <div className='bg-gray-50'>
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col items-center bg-gray-50 p-8">
                    <div className="w-full flex justify-center max-w-3xl">
                        <Image
                            width={1920}
                            height={850}
                            src={image}
                            alt={imageAlt}
                            className={'w-96 h-auto object-cover rounded-full -mt-24 md:-mt-40 lg:-mt-64'}
                        />
                    </div>
                    <div className="mt-8 text-center space-y-8">
                        {
                            features.map(feature => {
                                return(
                                    <>
                                        <h2 className="text-2xl font-bold mb-4 capitalize">{feature.title}</h2>
                                        <p className="text-base md:text-lg">
                                            {feature.description}
                                        </p>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
