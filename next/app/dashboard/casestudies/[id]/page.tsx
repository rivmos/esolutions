import { CaseStudy } from "@prisma/client";
import CaseStudyForm from "../add/casestudy-form";
import prisma from '@/app/lib/prismadb'

export default async function Page({ params }: { params: { id: string } }) {

  const data = await prisma?.caseStudy.findUnique({
    where: {
      id:params.id
    }
  })

  console.log(data)

  return (
    <div>
      <CaseStudyForm data={data as CaseStudy}/>
    </div>
  )
}