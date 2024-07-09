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
import dayjs from 'dayjs';

const Insights = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllCaseStudies());
    }, [dispatch]);
    const allCaseStudies = useAppSelector(state => state.base.common.allCaseStudies);
    const { larger } = useResponsive();

    return (
        <div className='bg-white'>
            <div className='container mx-auto !py-16 md:!py-20 lg:!py-20'>
                <h2 className="text-3xl font-bold mb-4 text-center tracking-tight sm:text-4xl mb-12">Insights</h2>
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="h-auto"
                    spaceBetween={24}
                >
                    {[{title:'Title One', date: new Date(), catagory: 'Ecommerce', image:'1.png'}, {title:'Title One', date: new Date(), catagory: 'Ecommerce', image:'2.png'}, {title:'Title One', date: new Date(), catagory: 'Ecommerce', image:'3.png'}]?.map(
                        (item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='flex flex-col bg-white h-auto'> {/* Set a fixed height for the card */}
                                        <div><img src={`/img/services/${item.image}`} className='w-full py-8 h-96 object-cover' /></div>
                                        <label className='text-center'>{dayjs(item.date).toString()} {item.catagory}</label>
                                        <h6 className='text-center text-2xl my-2'>{item.title}</h6>
                                        <div className='flex flex-col justify-between flex-1 text-center px-4 space-y-2 overflow-hidden'>
                            
                                            <Link to={`/web/casestudy/${item?.title}`} className='underline'>
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
                    <Button className="border !border-blue-600 !text-blue-600 py-2 px-4 rounded !hover:bg-blue-600 !hover:text-white transition mt-8">View All Insights</Button>
                </div>
            </div>
        </div>
    );
}

export default Insights;
