import React from 'react'
import Table from './table'
import prisma from '@/app/lib/prismadb'

const Page = async () => {

  const data = await prisma.caseStudy.findMany()

  return (
    <div className="p-2 block max-w-full overflow-x-scroll overflow-y-hidden">
      <Table data={data}/>
    </div>
  )
}

export default Page