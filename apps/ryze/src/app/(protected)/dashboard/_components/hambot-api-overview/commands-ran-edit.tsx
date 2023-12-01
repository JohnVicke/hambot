import { Pen } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export function CommandsRanEdit() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            disabled
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
