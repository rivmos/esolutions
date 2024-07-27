import { Service } from "@prisma/client";
import ServiceForm from "../add/service-form";
import prisma from '@/app/lib/prismadb'

export default async function Page({ params }: { params: { id: string } }) {

  const tags = await prisma?.tag.findMany()

  const data = await prisma?.service.findUnique({
    where: {
      id:params.id
    }
  })

  return (
    <div>
      <ServiceForm data={data as Service} tags={tags}/>
    </div>
  )
}