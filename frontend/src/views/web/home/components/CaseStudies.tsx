import React, { useEffect } from 'react';
// Import Swiper React components
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Button } from '@/components/ui';
import { getAllCaseStudies, useAppDispatch, useAppSelector } from '@/store';
import { Link } from 'react-router-dom';
import useResponsive from '@/utils/hooks/useResponsive';
import { baseUrl } from '@/configs/app.config';
import shortenText from '@/utils/shortenText';

const CaseStudies = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllCaseStudies());
    }, [dispatch]);
    const allCaseStudies = useAppSelector(state => state.base.common.allCaseStudies);
    const { larger } = useResponsive();

    return (
        <div className='container mx-auto !py-16 md:!py-20 lg:!py-20'>
            <h2 className="text-3xl font-bold mb-4 text-center tracking-tight sm:text-4xl mb-12">Case Studies</h2>
            <Swiper
                slidesPerView={2}
                slidesPerGroup={1}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="h-auto"
                spaceBetween={24}
            >
                {allCaseStudies?.map(
                    (item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col bg-white border-2 h-[650px] py-8'> {/* Set a fixed height for the card */}
                                    <h6 className='text-center'>{item.title}</h6>
                                    <div><img src={`${baseUrl}/uploads/casestudies/${item.image}`} className='w-full py-8 h-96 object-cover' /></div>
                                    <div className='flex flex-col justify-between flex-1 text-center px-4 space-y-2 overflow-hidden'>
                                        <div className='overflow-y-auto max-h-24'>{shortenText(item?.description)}</div> {/* Limit height for the description */}
                                        <Link to={`/web/casestudy/${item?.id}`} className='underline'>
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    }
                )}
            </Swiper>
            <div className='flex justify-center mt-8'>
                <Button className="border !border-blue-600 !text-blue-600 py-2 px-4 rounded !hover:bg-blue-600 !hover:text-white transition">View Case Study</Button>
            </div>
        </div>
    );
}

export default CaseStudies;
