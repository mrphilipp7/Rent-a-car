import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReservationData } from "@/types/ReservationData";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../lib/routes";
import { Link } from "react-router-dom";

const data: ReservationData[] = [
  {
    id: "m5gr84i9",
    reserveTime: 316,
    status: "success",
    email: "ken99@yahoo.comdfssdfsdsdfsdsdfsdsdfsdfsdf",
    car: "example",
  },
  {
    id: "3u1reuv4",
    reserveTime: 242,
    status: "success",
    email: "Abe45@gmail.com",
    car: "example",
  },
  {
    id: "derv1ws0",
    reserveTime: 837,
    status: "pending",
    email: "Monserrat44@gmail.com",
    car: "example",
  },
  {
    id: "5kma53ae",
    reserveTime: 874,
    status: "success",
    email: "Silas22@gmail.com",
    car: "example",
  },
  {
    id: "bhqecj4p",
    reserveTime: 721,
    status: "failed",
    email: "carmella@hotmail.com",
    car: "example",
  },
  {
    id: "m5gr84i9",
    reserveTime: 316,
    status: "success",
    email: "ken99@yahoo.com",
    car: "example",
  },
  {
    id: "3u1reuv4",
    reserveTime: 242,
    status: "success",
    email: "Abe45@gmail.com",
    car: "example",
  },
  {
    id: "derv1ws0",
    reserveTime: 837,
    status: "pending",
    email: "Monserrat44@gmail.com",
    car: "examplefdgsgdfs",
  },
  {
    id: "5kma53ae",
    reserveTime: 874,
    status: "success",
    email: "Silas22@gmail.com",
    car: "example",
  },
  {
    id: "bhqecj4p",
    reserveTime: 721,
    status: "failed",
    email: "carmella@hotmail.com",
    car: "example",
  },
  {
    id: "m5gr84i9",
    reserveTime: 316,
    status: "success",
    email: "ken99@yahoo.com",
    car: "example",
  },
  {
    id: "3u1reuv4",
    reserveTime: 242,
    status: "success",
    email: "Abe45@gmail.com",
    car: "example",
  },
  {
    id: "derv1ws0",
    reserveTime: 837,
    status: "pending",
    email: "Monserrat44@gmail.com",
    car: "examplefdgsgdfs",
  },
  {
    id: "5kma53ae",
    reserveTime: 874,
    status: "success",
    email: "Silas22@gmail.com",
    car: "example",
  },
  {
    id: "bhqecj4p",
    reserveTime: 721,
    status: "failed",
    email: "carmella@hotmail.com",
    car: "example",
  },
];

export const columns: ColumnDef<ReservationData>[] = [
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase mr-14">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "reserveTime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Reservation Time
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="mr-36 w-full  text-center">
        {row.getValue("reserveTime")}
      </div>
    ),
  },
  {
    accessorKey: "car",
    header: "Car",
    cell: ({ row }) => (
      <div className="capitalize mr-24">{row.getValue("car")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div
        className={`capitalize w-full text-center ${
          row.getValue("status") === "success" ? "text-green-500" : ""
        } ${row.getValue("status") === "failed" ? "text-red-500" : ""}`}
      >
        {row.getValue("status")}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const reservation = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <Link to={`${ROUTES.CUSTOMER_DETAILS_ID}${reservation.id}`}>
                View customer
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Reservation Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function ScheduleDataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-[1090px]">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search for email"
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-[650px] text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* ----- Table Footer ----- */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
