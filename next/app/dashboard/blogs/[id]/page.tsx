import { Blog } from "@prisma/client";
import BlogForm from "../add/blog-form";
import prisma from '@/app/lib/prismadb'

export default async function Page({ params }: { params: { id: string } }) {

  const data = await prisma?.blog.findUnique({
    where: {
      id:params.id
    }
  })

  return (
    <div>
      <BlogForm data={data as Blog}/>
    </div>
  )
}