"use client";

import { Zap, ZapOff } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { cn } from "~/lib/utils";
import { useRealtime } from "../../realtime-provider";

export function WsConnectionStatus() {
  const { connected } = useRealtime();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative rounded-md border p-5">
            <Zap
              className={cn(
                "absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 animate-pulse text-green-400 transition-all",
                !connected && "rotate-90 scale-0",
              )}
            />
            <ZapOff
              className={cn(
                "absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 animate-pulse text-red-400 transition-all",
                connected && "rotate-90 scale-0",
              )}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Websocket server is {connected ? "connected" : "disconnected"} </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
