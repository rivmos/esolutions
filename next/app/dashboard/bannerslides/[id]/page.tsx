import { BannerSlide } from "@prisma/client";
import BannerSlideForm from "../add/bannerslide-form";
import prisma from '@/app/lib/prismadb'

export default async function Page({ params }: { params: { id: string } }) {

  const data = await prisma?.bannerSlide.findUnique({
    where: {
      id:params.id
    }
  })

  return (
    <div>
      <BannerSlideForm data={data as BannerSlide}/>
    </div>
  )
}