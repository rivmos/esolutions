import { Testimonial } from "@prisma/client";
import TestimonialForm from "../add/testimonial-form";
import prisma from '@/app/lib/prismadb'

export default async function Page({ params }: { params: { id: string } }) {

  const data = await prisma?.testimonial.findUnique({
    where: {
      id:params.id
    }
  })

  return (
    <div>
      <TestimonialForm data={data as Testimonial}/>
    </div>
  )
}