import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { api } from "~/trpc/server";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export async function WinLossCard(props: { className?: string }) {
  const winLoss = await api.apiStats.winLoss.query();

  return (
    <Card className={props.className}>
      <CardHeader className="grid grid-cols-[1fr_80px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>@ham globetrotter stats</CardTitle>
          <CardDescription>
            Win / Loss ratio for the globetrotter challenge
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <DataTable data={winLoss} columns={columns} />
      </CardContent>
    </Card>
  );
}
