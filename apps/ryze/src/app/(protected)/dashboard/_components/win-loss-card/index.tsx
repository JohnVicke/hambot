import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";

export async function WinLossCard(props: { className?: string }) {
  const winLoss = await api.apiStats.winLoss.query();
  console.log({ winLoss });
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
        <div className="grid grid-cols-[8rem_1fr_80px] gap-4">
          <>
            <p className="text-left font-medium">Faction</p>
            <p className="text-left font-medium">Win / Loss</p>
            <p className="text-right font-medium">Games</p>
          </>
          <Separator className="col-span-full" />
          {winLoss.map((wl) => {
            const losses = wl.games - wl.wins;

            const winPercentage = Math.round(
              (wl.wins / (wl.wins + losses)) * 100,
            );

            const lossPercentage = Math.round(
              (losses / (wl.wins + losses)) * 100,
            );

            const winWidth = `${winPercentage}%`;
            const lossWidth = `${lossPercentage}%`;

            return (
              <>
                <p>{wl.name}</p>
                <div className={cn("relative rounded-md p-4")}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className={cn(
                            "absolute inset-y-0 right-0 rounded-md rounded-l-none bg-red-400",
                            winWidth === "0%" && "rounded-md",
                          )}
                          style={{ width: lossWidth }}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{losses} losses</p>
                        <p>Percentage: {lossPercentage}%</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className={cn(
                            "absolute inset-y-0 left-0 rounded-md rounded-r-none bg-green-400",
                            lossWidth === "0%" && "rounded-md",
                          )}
                          style={{ width: winWidth }}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{wl.wins} wins</p>
                        <p>Percentage: {winPercentage}%</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="text-right">{wl.games}</div>
              </>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
