"use client";

import { Pen } from "lucide-react";
import { useSession } from "next-auth/react";

import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { useEditActions } from "~/stores/edit-store";

export function CommandsRanEdit() {
  const { toggleEditingCommands } = useEditActions();
  const session = useSession();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            disabled={session?.data?.user.role !== "admin"}
            onClick={toggleEditingCommands}
            variant="secondary"
            className="inline-flex items-center space-x-1"
          >
            <Pen className="mr-2 h-4 w-4" />
            Edit
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Edit any discrepancies in the commands data.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
