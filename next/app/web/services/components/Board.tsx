import Image from 'next/image';
import React from 'react';

const Board = ({ title, description, image, imageAlt, cards }: { title: string, description: string[], image: string, imageAlt?: string, cards: { title: string, description: string }[] }) => {
    return (
        <div className="max-w-[1700px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50">
                <Image
                    width={850}
                    height={550}
                    src={image}
                    alt={imageAlt as string}
                    className={'w-full h-auto object-cover'}
                />
                <div className="p-8 sm:p-12 md:p-16 lg:p-20">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 capitalize">
                        {title}
                    </h2>
                    {
                        description.map(item =>
                            <div key={item} className="mb-4 last:mb-0">
                                <p className="text-sm md:text-base">
                                    {item}
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-16 pt-12 md:pt-16 lg:pt-20 pb-28 sm:pb-36 md:pb-48 lg:pb-64">
                {
                    cards.map(card => {
                        return (
                            <div key={card.title} className="border-l-[1px] border-gray-400 pl-4 md:pl-6">
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 h">{card.title}</h3>
                                <p className="text-sm md:text-base">
                                    {card.description}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Board;
