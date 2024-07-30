import { Subscriber } from "@prisma/client";
import SubscriberForm from "../add/subscriber-form";
import prisma from '@/app/lib/prismadb'

export default async function Page({ params }: { params: { id: string } }) {

  const data = await prisma?.subscriber.findUnique({
    where: {
      id:params.id
    }
  })

  return (
    <div>
      <SubscriberForm data={data as Subscriber}/>
    </div>
  )
}