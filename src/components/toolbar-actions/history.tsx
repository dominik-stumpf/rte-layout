import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Redo, Undo } from 'lucide-react';
import { useToolbarStore } from '../use-toolbar-store';

export function History() {
  const history = useToolbarStore((state) => state.history);

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            onClick={history.undo.onClick}
            disabled={history.undo.disabled}
          >
            <Undo />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Undo last action</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            onClick={history.redo.onClick}
            disabled={history.redo.disabled}
          >
            <Redo />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Undo last action</TooltipContent>
      </Tooltip>
    </>
  );
}
