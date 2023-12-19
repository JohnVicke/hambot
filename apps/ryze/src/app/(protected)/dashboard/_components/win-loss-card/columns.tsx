"use client";

import type { ColumnDef } from "@tanstack/react-table";

import type { RouterOutputs } from "~/trpc/shared";

type WinLoss = RouterOutputs["apiStats"]["winLoss"];

export const columns = [
  {
    accessorKey: "name",
    header: "Faction",
  },
  {
    accessorKey: "games",
    header: "Games",
  },
  {
    accessorKey: "wins",
    header: "Wins",
  },
  {
    accessorKey: "losses",
    header: "Losses",
  },
  {
    accessorKey: "winPercentage",
    header: "Win %",
    cell: ({ row }) => {
      return <div>{row.getValue("winPercentage")} %</div>;
    },
  },
  {
    accessorKey: "lossPercentage",
    header: "Loss %",
    cell: ({ row }) => {
      return <div>{row.getValue("lossPercentage")} %</div>;
    },
  },
] satisfies ColumnDef<WinLoss>[];
