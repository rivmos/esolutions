import Image from 'next/image';
import prisma from '@/app/lib/prismadb'
import Link from 'next/link';
import Insights from '../../home/components/Insights';
import slugify from 'slugify';

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await prisma?.insight.findFirst({
    where: {
      slug: params.slug
    }
  });

  return (
    <>
      <section className="py-16 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8">{data?.title}</h1>
          <div className="w-full flex justify-center my-8 md:my-12 lg:my-20">
            <Image
              src={data?.image ?? '/img/upload/upload-widget.png'}
              alt="Insight Image"
              className="rounded-lg"
              width={800}
              height={400}
            />
          </div>
          <div className="text-left space-y-4 sm:space-y-6 md:space-y-8">
            <div id='insight-content' className='text-left' dangerouslySetInnerHTML={{ __html: data?.content as TrustedHTML }} />
            <div className="text-center !mt-12">
              <Link href="/insights" className="bg-blue-600 text-white py-2 px-4 md:px-6 rounded-md transition hover:bg-blue-700 whitespace-nowrap">
                  Back to Insights
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className='bg-[#f5f5f5]'>
        <Insights title='Other Insights' slugToExclude={params.slug}/>
      </div>
    </>
  );
};

export default Page;
