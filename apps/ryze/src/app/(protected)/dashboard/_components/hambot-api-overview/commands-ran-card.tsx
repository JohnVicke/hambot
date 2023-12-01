import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { api } from "~/trpc/server";
import { CommandsRanEdit } from "./commands-ran-edit";
import { RequestsBarChart } from "./requsts-bar-chart";

export async function CommandsRanCard(props: { className?: string }) {
  const initialRequests = await api.apiStats.overview.query();
  return (
    <Card className={props.className}>
      <CardHeader className="grid grid-cols-[1fr_80px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>@ham/annie commands</CardTitle>
          <CardDescription>
            Displays the number of times each command has been ran
          </CardDescription>
        </div>
        <CommandsRanEdit />
      </CardHeader>
      <CardContent>
        <RequestsBarChart initialData={initialRequests} />
      </CardContent>
    </Card>
  );
}
