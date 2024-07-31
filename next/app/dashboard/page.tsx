import Statistics from '../ui/dashboard/statistics';
import prisma from '@/app/lib/prismadb'

export default async function Page() {

  const casestudies = await prisma.caseStudy.count()
  const enquiries = await prisma.enquiry.count()
  const services = await prisma.service.count()
  const blogs = await prisma.blog.count()
  const testimonials = await prisma.testimonial.count()
  const subscribers = await prisma.subscriber.count()
  const tags = await prisma.tag.count()

  const data = [
    {name:'Case Studies', value: casestudies},
    {name:'Enquiries', value: enquiries},
    {name:'Services', value: services},
    {name:'Blogs', value: blogs},
    {name:'Testimonials', value: testimonials},
    {name:'Subscribers', value: subscribers},
    {name:'Tags', value: tags},
  ]

  return (
    <div>
      <h1 className={`mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <Statistics data={data} />
    </div>
  );
}