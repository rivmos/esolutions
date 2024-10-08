import Image from 'next/image';
import prisma from '@/app/lib/prismadb'
import Link from 'next/link';
import CaseStudies from '../../home/components/CaseStudies';

const CaseStudy = async ({ params }: { params: { slug: string } }) => {
  const data = await prisma?.caseStudy.findFirst({
    where: {
      slug: params.slug
    }
  });

  return (
    <>
      {/* <Banner title={data?.title} isShort bannerImage='/img/banner/laptop-bg.png' bannerImageAlt='Case Studies Banner Image'/> */}
      <section className="pt-8 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">{data?.title}</h1>
          <Link href={data?.url as string} target='_blank'>({data?.url})</Link>
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

      <div className='bg-[#f5f5f5]'>
        <CaseStudies title='Other Case Studies' slugToExclude={data?.slug} />
      </div>
    </>
  );
};

export default CaseStudy;
