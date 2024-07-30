import React from 'react'
import Table from './table'
import prisma from '@/app/lib/prismadb'

const Page = async () => {

  const data = await prisma.subscriber.findMany()

  return (
    <>
      <div>
        <h1 className={`mb-4 text-xl md:text-2xl`}>
          Subscribers
        </h1>
        <Table data={data} />
      </div>
    </>
  )
}

export default Page