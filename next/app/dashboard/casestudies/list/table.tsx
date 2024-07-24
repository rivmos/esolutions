"use client"
import * as React from 'react'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { CaseStudy } from '@prisma/client'
import Link from 'next/link'

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const columnHelper = createColumnHelper<CaseStudy>()

const columns = [
  // columnHelper.accessor('id', {
  //   cell: info => info.getValue(),
  //   footer: info => info.column.id,
  // }),
  columnHelper.accessor(row => row.title, {
    id: 'title',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Title</span>,
  }),
  columnHelper.accessor('description', {
    header: () => 'Description',
    cell: info => info.renderValue(),
  }),
  columnHelper.accessor('description', {
    header: () => 'Description',
    cell: ({row}) => {
      return(
        <Link href={`/dashboard/casestudies/${row.original.id}`}>Edit</Link>
      )
    },
  }),
]

function Table(props : {data:CaseStudy[]}) {
  const [data, _setData] = React.useState(() => [...props.data])
  const rerender = React.useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button>
    </div>
  )
}

export default Table
