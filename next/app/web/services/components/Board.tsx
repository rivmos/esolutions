import Image from 'next/image';
import React from 'react';

const Board = ({title, description, image, imageAlt ,cards} : {title:string, description: string, image: string, imageAlt?: string, cards: {title: string, description:string}[]}) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50">
                <Image
                    width={850}
                    height={550}
                    src={image}
                    alt={imageAlt as string}
                    className={'w-full h-auto object-cover'}
                />
                <div className="p-4">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 capitalize">
                        {title}
                    </h2>
                    <p className="text-sm md:text-base">
                        {description}
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 md:pt-32 pb-24 md:pb-60">
                {
                    cards.map(card => {
                        return(
                            <div key={card.title} className="border-l-2 pl-4 md:pl-6">
                                <h3 className="text-lg md:text-2xl font-semibold mb-3">{card.title}</h3>
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
