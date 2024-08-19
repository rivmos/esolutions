import { Insight } from "@prisma/client";
import InsightForm from "../add/insights-form";
import prisma from '@/app/lib/prismadb'

export default async function Page({ params }: { params: { id: string } }) {

  const data = await prisma?.insight.findUnique({
    where: {
      id:params.id
    }
  })

  return (
    <div>
      <InsightForm data={data as Insight}/>
    </div>
  )
}