"use client";

import { useRealtime } from "~/app/(protected)/realtime-provider";
import { Button } from "~/components/ui/button";
import { useToast } from "~/components/ui/use-toast";

export function RefreshButton() {
  const { toast } = useToast();
  const { io, connected } = useRealtime();

  return (
    <Button
      onClick={() => {
        if (!connected) {
          return toast({
            title: "Not connected",
            description: "You are not connected to the server.",
            variant: "destructive",
          });
        }
        io.emit("ping");
        toast({
          title: "Refreshed commands",
          description: "The commands have been refreshed.",
        });
      }}
    >
      Refresh commands
    </Button>
  );
}
