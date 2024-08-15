"use client"

import React from 'react';
import Image from 'next/image';
import type { Service } from '@prisma/client';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from 'next/link';
import { shortenText } from '@/app/lib/utils/string';

const ServiceCard = ({ data }: { data: Service }) => {
    return (
        <CardContainer >
            <CardBody className="bg-white flex-col space-y-4 !p-0 text-center flex items-center shadow-sm relative group/card !w-full rounded-sm transition-transform duration-300">
                <CardItem className="w-full flex justify-center">
                    <Image
                        src={data.image}
                        height="300"
                        width="600"
                        className="h-[150px] w-[400px] md:h-[300px] md:w-[600px] object-cover"
                        alt={data.name}
                    />
                </CardItem>
                <CardItem className='flex flex-col items-center py-4 lg:py-8'>
                    <div className='text-left space-y-4'>
                        <CardItem
                            as="p"
                            className='text-xl lg:text-2xl font-bold text-center'
                        >
                            {data.name}
                        </CardItem>
                        <CardItem
                            as="p"
                            className='text-sm text-center overflow-hidden max-w-xl mx-auto px-2'
                        >
                            {shortenText(data.description)}
                        </CardItem>
                    </div>
                    <CardItem
                        as={Link}
                        href={data.href}
                        className='border-b-[1px] border-gray-400 text-gray-400 text-base text-center p-2 mt-3 mb-4 hover:border-blue-600 hover:text-blue-600 underline-animation transition-colors duration-200'
                    >
                        View
                    </CardItem>
                </CardItem>
            </CardBody>
        </CardContainer >
    )
}

export default ServiceCard
