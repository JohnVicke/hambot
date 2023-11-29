"use client";

import {
  Bar,
  BarChart as RechartBarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

interface BarChartProps<T> {
  data: Array<T>;
  columnKey: keyof T extends string ? keyof T : never;
  rowKey: keyof T extends string ? keyof T : never;
  height: number | string;
  width?: number | string;
  tickFormatter?: (value: number) => string;
}

// TODO: add correct colors

export function BarChart<T>({ width = "100%", ...props }: BarChartProps<T>) {
  const tickFormatter = props.tickFormatter ?? ((value: number) => `${value}`);
  return (
    <ResponsiveContainer width={width} height={props.height}>
      <RechartBarChart data={props.data}>
        <XAxis
          dataKey={props.rowKey}
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={tickFormatter}
        />
        <Bar
          dataKey={props.columnKey}
          className="fill-primary"
          radius={[4, 4, 0, 0]}
        />
      </RechartBarChart>
    </ResponsiveContainer>
  );
}
