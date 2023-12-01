"use client";

import { BarChart } from "~/components/ui/bar-chart";
import { api } from "~/trpc/react";
import { RouterOutputs } from "~/trpc/shared";

interface RequestsBarChartProps {
  initialData: RouterOutputs["apiStats"]["overview"];
}

export function RequestsBarChart(props: RequestsBarChartProps) {
  const query = api.apiStats.overview.useQuery(undefined, {
    initialData: props.initialData,
  });

  return (
    <BarChart
      width="100%"
      height={350}
      data={query.data}
      rowKey="command"
      columnKey="count"
    />
  );
}
