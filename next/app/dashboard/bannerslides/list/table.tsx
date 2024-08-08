"use client"
import * as React from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { BannerSlide } from '@prisma/client'
import Link from 'next/link'
import { HiEye, HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'



const columnHelper = createColumnHelper<BannerSlide>()
const columns = [
  columnHelper.accessor(row => row.heading, {
    id: 'title',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Title</span>,
  }),
  columnHelper.accessor('subheading', {
    id: 'subheading', // Ensure this id is unique
    header: () => 'Description',
    cell: info => info.renderValue(),
  }),
  columnHelper.accessor('ctaText', {
    id: 'ctas', // Changed this id to be unique
    header: () => 'Actions',
    cell: ({ row }) => {
      return (
        <div className='flex items-center gap-2'>
          <span
            className={`cursor-pointer p-2`}
          >
            <Link href={`/dashboard/bannerslides/${row.original.id}`}><HiOutlinePencil /></Link>
          </span>
          <span
            className="cursor-pointer p-2 hover:text-red-500"
            onClick={() => {}}
          >
            <HiOutlineTrash />
          </span>
        </div>
      )
    },
  }),
]


function BannerSlideTable(props: { data: BannerSlide[] }) {
  const [data, _setData] = React.useState(() => [...props.data])
  const rerender = React.useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-2">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="h-4" />
    </div>
  )
}

export default BannerSlideTable