"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Trash2 } from "lucide-react";

import { BarChart } from "~/components/ui/bar-chart";
import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { useEditingCommands } from "~/stores/edit-store";
import { api } from "~/trpc/react";
import { RouterOutputs } from "~/trpc/shared";

interface RequestsBarChartProps {
  initialData: RouterOutputs["apiStats"]["overview"];
}

export function RequestsBarChart(props: RequestsBarChartProps) {
  const query = api.apiStats.overview.useQuery(undefined, {
    initialData: props.initialData,
  });

  const isEditing = useEditingCommands();

  return (
    <>
      <BarChart
        width="100%"
        height={350}
        data={query.data}
        rowKey="command"
        columnKey="count"
      />
      {isEditing && <DataTable data={query.data} columns={columns} />}
    </>
  );
}

interface CommandInfo {
  command: string;
  count: number;
  id: number;
}

export const columns: ColumnDef<CommandInfo>[] = [
  {
    accessorKey: "command",
    header: "Command",
  },
  {
    accessorKey: "count",
    header: "Count",
  },
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const { apiStats } = api.useUtils();
      const { mutate } = api.apiStats.removeCommand.useMutation({
        onSuccess: () => {
          void apiStats.overview.invalidate();
        },
      });
      return (
        <Button
          variant="destructive"
          className="inline-flex items-center gap-2"
          onClick={() => mutate({ id: row.original.id })}
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </Button>
      );
    },
  },
];

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
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
                          header.getContext(),
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
