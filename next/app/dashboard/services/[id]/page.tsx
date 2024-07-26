import { Service } from "@prisma/client";
import CaseStudyForm from "../add/service-form";
import prisma from '@/app/lib/prismadb'

export default async function Page({ params }: { params: { id: string } }) {

  const data = await prisma?.service.findUnique({
    where: {
      id:params.id
    }
  })

  return (
    <div>
      <CaseStudyForm data={data as Service}/>
    </div>
  )
}