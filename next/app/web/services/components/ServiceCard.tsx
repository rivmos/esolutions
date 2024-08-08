"use client"

import React from 'react';
import Image from 'next/image';
import type { Service } from '@prisma/client';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from 'next/link';
import { shortenText } from '@/app/lib/utils/string';

const ServiceCard = ({ data }: { data: Service }) => {
    return (
        <CardContainer className="inter-var">
            <CardBody className="relative bg-gray-50 h-[520px] group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={data.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt={data.name}
                    />
                </CardItem>
                <div className='text-left py-4 space-y-2'>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className='text-lg font-medium text-left'
                    >
                        {data.name}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className='text-xs text-left h-auto max-h-24 overflow-hidden'
                    >
                        {shortenText(data.description)}
                    </CardItem>
                </div>
                <div className='flex absolute justify-center bottom-8 left-0 w-full'>
                    <CardItem
                        translateZ="100"
                        as={Link}
                        href="/web/services"
                        className='border-[1px] w-32 p-2 rounded-xl text-center text-xs hover:shadow-lg hover:border-blue-400'
                    >
                        View
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    )
}

export default ServiceCard
