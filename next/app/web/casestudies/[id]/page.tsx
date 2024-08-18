import Image from 'next/image';
import prisma from '@/app/lib/prismadb'
import Link from 'next/link';
import Banner from "@/app/ui/web/Banner";
import CaseStudies from '../../home/components/CaseStudies';
import CustomButton from '@/app/ui/common/CustomButton';
import { shortenText } from '@/app/lib/utils/string';
import SectionTitle from '../../home/components/SectionTitle';

const CaseStudy = async ({ params }: { params: { id: string } }) => {
  const data = await prisma?.caseStudy.findUnique({
    where: {
      id: params.id
    }
  });

  const casestudies = await prisma?.caseStudy.findMany()

  return (  
    <>
      {/* <Banner title={data?.title} isShort bannerImage='/img/banner/laptop-bg.png' bannerImageAlt='Case Studies Banner Image'/> */}
      <section className="pt-8 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8">{data?.title}</h1>
          <div className="w-full flex justify-center my-8 md:my-12 lg:my-20">
            <Image
              src={data?.image ?? '/img/upload/upload-widget.png'}
              alt="Case Study Image"
              className="rounded-lg"
              width={800}
              height={400}
            />
          </div>
          <div className="text-left space-y-4 sm:space-y-6 md:space-y-8">
            <div id='blog-content' className='text-left' dangerouslySetInnerHTML={{ __html: data?.content as TrustedHTML }} />
            <div className="text-center !mt-12">
              <Link href="/web/casestudies" className="bg-blue-600 text-white py-2 px-4 md:px-6 rounded-md transition hover:bg-blue-700 whitespace-nowrap">
                  Back to Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className='max-w-[1700px] mx-auto py-12 md:py-16 lg:py-20 px-4'>
        <SectionTitle title={"Related Case Studies"} />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {casestudies?.map(
            (item, index) => {
              return (
                <div key={item.id} className='flex flex-col select-none bg-white rounded-md border-[1px] h-full py-12 mb-4'>
                  <h6 className='text-center font-bold pb-12 text-xl'>{item.title}</h6>
                  <div><Image width={550} height={300} src={item.image ?? '/img/data.png'} className='w-full h-[200px] md:h-[300PX] object-cover mb-4' alt={item.title as string} /></div>
                  <div className='overflow-y-auto max-w-md mx-auto text-base text-center mb-4 px-4 pt-6 text-[#111111]'>{shortenText(item?.description as string)}</div>
                  <div className='flex justify-center px-4'>
                    <CustomButton href={`/web/casestudies/${item?.id}`} variant='card'>
                        Read More
                    </CustomButton>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
