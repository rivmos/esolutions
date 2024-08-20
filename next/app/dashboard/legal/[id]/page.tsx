import { Legal } from "@prisma/client";
import LegalForm from "../add/legal-form";
import prisma from '@/app/lib/prismadb'

export default async function Page({ params }: { params: { id: string } }) {

  const data = await prisma?.legal.findUnique({
    where: {
      id:params.id
    }
  })

  return (
    <div>
      <LegalForm data={data as Legal}/>
    </div>
  )
}