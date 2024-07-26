import Statistics from '../ui/dashboard/statistics';
import prisma from '@/app/lib/prismadb'

export default async function Page() {

  const casestudies = await prisma.caseStudy.count()
  const enquiries = await prisma.enquiry.count()
  const services = await prisma.service.count()

  const data = [
    {name:'Case Studies', value: casestudies},
    {name:'Enquiries', value: enquiries},
    {name:'Services', value: services},
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