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
import { Enquiry } from '@prisma/client'
import Link from 'next/link'
import { HiEye, HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'



const columnHelper = createColumnHelper<Enquiry>()
const columns = [
  columnHelper.accessor(row => row.first, {
    id: 'name',
    cell: info => <i>{info.row.original.first + ' ' + info.row.original.last}</i>,
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor('email', {
    id: 'email', // Ensure this id is unique
    header: () => 'Email',
    cell: info => info.renderValue(),
  }),
  columnHelper.accessor('message', {
    id: 'actions', // Changed this id to be unique
    header: () => 'Actions',
    cell: ({ row }) => {
      return (
        <div className='flex items-center gap-2'>
          <span
            className={`cursor-pointer p-2 hover:text-gray-400`}
            
          >
            <Link href={`/dashboard/enquiries/${row.original.id}`}><HiEye /></Link>
            
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


function CaseStudyTable(props: { data: Enquiry[] }) {
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

export default CaseStudyTable