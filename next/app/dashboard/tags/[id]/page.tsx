import { Tag } from "@prisma/client";
import TagForm from "../add/tag-form";
import prisma from '@/app/lib/prismadb'

export default async function Page({ params }: { params: { id: string } }) {

  const data = await prisma?.tag.findUnique({
    where: {
      id:params.id
    }
  })

  return (
    <div>
      <TagForm data={data as Tag}/>
    </div>
  )
}