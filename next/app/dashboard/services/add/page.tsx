import React from 'react'
import ServiceForm from './service-form'
import prisma from '@/app/lib/prismadb'

const Page = async () => {

  const tags = await prisma.tag.findMany()

  return (
    <div>
        <ServiceForm tags={tags}/>
    </div>
  )
}

export default Page