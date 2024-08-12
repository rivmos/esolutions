"use client"

import React from 'react';
import Image from 'next/image';
import type { Service } from '@prisma/client';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from 'next/link';
import { shortenText } from '@/app/lib/utils/string';

const ServiceCard = ({ data }: { data: Service }) => {
    return (
        // <CardContainer className="inter-var">
        //     <CardBody className="relative bg-gray-50 h-[520px] group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto rounded-xl p-6 border">
        //         <CardItem translateZ="100" className="w-full mt-4">
        //             <Image
        //                 src={data.image}
        //                 height="1000"
        //                 width="1000"
        //                 className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        //                 alt={data.name}
        //             />
        //         </CardItem>
        //         <div className='text-left py-4 space-y-2'>
        //             <CardItem
        //                 as="p"
        //                 translateZ="60"
        //                 className='text-lg font-medium text-left'
        //             >
        //                 {data.name}
        //             </CardItem>
        //             <CardItem
        //                 as="p"
        //                 translateZ="60"
        //                 className='text-sm text-left h-auto max-h-20 overflow-hidden'
        //             >
        //                 {shortenText(data.description)}
        //             </CardItem>
        //         </div>
        //         <div className='flex absolute justify-center bottom-8 left-0 w-full'>
        //             <CardItem
        //                 translateZ="100"
        //                 as={Link}
        //                 href={data.href}
        //                 className='border-[1px] w-32 p-2 rounded-xl text-center text-xs hover:shadow-lg hover:border-blue-400'
        //             >
        //                 View
        //             </CardItem>
        //         </div>
        //     </CardBody>
        // </CardContainer>
        <CardContainer>
            <CardBody className="bg-white flex-col space-y-4 py-4 md:py-12 text-center flex items-center shadow-sm relative group/card w-full rounded-sm transition-transform duration-300 hover:scale-105">
                <CardItem translateZ="100" className="mt-4 h-60 w-60 flex justify-center">
                    <Image
                        src={data.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-60 object-cover rounded-xl"
                        alt={data.name}
                    />
                </CardItem>
                <CardItem className='flex flex-col items-center px-4'>
                    <div className='text-left py-4 space-y-2'>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className='text-xl lg:text-2xl h-16 md:h-16 font-medium text-center'
                        >
                            {data.name}
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className='text-sm text-center h-auto max-h-20 overflow-hidden'
                        >
                            {shortenText(data.description)}
                        </CardItem>
                    </div>
                    <CardItem
                        translateZ="50"
                        as={Link}
                        href={data.href}
                        className='border-b-[1px] text-base text-center p-2 mt-4 hover:border-blue-600 hover:text-blue-600 underline-animation transition-colors duration-200'
                    >
                        View
                    </CardItem>
                </CardItem>
            </CardBody>
        </CardContainer>
    )
}

export default ServiceCard
