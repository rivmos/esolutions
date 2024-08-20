"use client"
import * as React from 'react'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
import { Testimonial } from '@prisma/client'
import Link from 'next/link'
import { HiEye, HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'


const columnHelper = createColumnHelper<Testimonial>()
const columns = [
  columnHelper.accessor(row => row.name, {
    id: 'name',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Title</span>,
  }),
  columnHelper.accessor('position', {
    id: 'position', // Ensure this id is unique
    header: () => 'Description',
    cell: info => info.renderValue(),
  }),
  columnHelper.accessor('message', {
    id: 'actions', // Changed this id to be unique
    header: () => 'Actions',
    cell: ({ row }) => {

      const router = useRouter()
      const { toast } = useToast()

      async function onDelete() {
        try {
          const response = await axios.delete('/api/testimonial/delete', {
            data: { id: row.original.id }, // The data object contains the id to delete
          });

          if (response.status === 200) {
            // router.push('/dashboard/testimonials/list')
            toast({ description: "Testimonial Deleted Successfully", variant: 'success' })
            router.refresh()
          } else {
            console.error('Error:', response.data.message);
          }
        } catch (error) {
          console.error('Request failed:', error);
        }
      }

      return (
        <div className='flex items-center gap-2'>
          <span
            className={`cursor-pointer p-2`}
          >
            <Link href={`/dashboard/testimonials/${row.original.id}`}><HiOutlinePencil /></Link>
          </span>
          <span
            className={`cursor-pointer p-2 hover:text-gray-400`}

          >
            <Link href={`/testimonials/${row.original.id}`}><HiEye /></Link>

          </span>

          <Dialog>
            <DialogTrigger><HiOutlineTrash /> </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure to delete this testimonial?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
                <Button type="submit" onClick={onDelete}>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )
    },
  }),
]


function CaseStudyTable(props: { data: Testimonial[] }) {
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