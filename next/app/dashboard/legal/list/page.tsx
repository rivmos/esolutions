import React from 'react'
import Table from './table'
import prisma from '@/app/lib/prismadb'
import StickyFooter from '@/app/ui/common/StickyFooter'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Page = async () => {

  const data = await prisma.legal.findMany()

  return (
    <>
      <div>
        <h1 className={`mb-4 text-xl md:text-2xl`}>
          Legal Documents
        </h1>
        <Table data={data} />
      </div>
      <StickyFooter className='flex justify-end'>
        <Link href="add">
          <Button>
            Add New
          </Button>
        </Link>
      </StickyFooter>
    </>
  )
}

export default Page