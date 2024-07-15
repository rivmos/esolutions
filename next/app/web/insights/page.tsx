import Banner from "@/app/ui/web/Banner";
import Link from "next/link";
import dayjs from "dayjs";

const data = [
  { title: 'Title One', date: new Date(), category: 'Ecommerce', image: '1.png' },
  { title: 'Title Two', date: new Date(), category: 'Ecommerce', image: '2.png' },
  { title: 'Title Three', date: new Date(), category: 'Ecommerce', image: '3.png' }
];

export default function Page() {
  return (
    <div>
      <Banner title='Insights' isShort bannerImage='/img/banner/casestudies-bg.jpg' bannerImageAlt='Insights Banner Image' />
      <div className='container mx-auto py-12 md:py-16 lg:py-20 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {data?.map(
            (item, index) => {
              return (
                <div className='flex flex-col bg-white h-auto'>
                  <div><img src={`/img/services/${item.image}`} className='w-full py-8 h-96 object-cover' alt={item.title} /></div>
                  <label className='text-center'>{dayjs(item.date).format('MMMM D, YYYY')} - {item.category}</label>
                  <h6 className='text-center text-2xl my-2'>{item.title}</h6>
                  <div className='flex flex-col justify-between flex-1 text-center px-4 space-y-2 overflow-hidden'>
                    <Link href={`/web/insight/${item.title}`} className='underline'>
                      Read More
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
