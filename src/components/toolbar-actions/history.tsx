import { Redo, Undo } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function History() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="ghost">
            <Undo />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Undo last action</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="ghost" disabled>
            <Redo />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Redo last action</TooltipContent>
      </Tooltip>
    </>
  );
}
