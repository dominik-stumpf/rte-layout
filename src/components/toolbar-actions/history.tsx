import { Button } from '@/components/ui/button';
import { Kbd } from '@/components/ui/kbd';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Redo, Undo } from 'lucide-react';
import { useToolbarStore } from '../use-toolbar-store';

export function History() {
  const { undo, redo } = useToolbarStore((state) => state.history);

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            onClick={undo.onClick}
            disabled={undo.disabled}
          >
            <Undo />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="space-x-2">
          <span>Undo last action</span>
          {undo.shortcut && <Kbd>{undo.shortcut}</Kbd>}
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            onClick={redo.onClick}
            disabled={redo.disabled}
          >
            <Redo />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="space-x-2">
          <span>Redo last action</span>
          {redo.shortcut && <Kbd>{redo.shortcut}</Kbd>}
        </TooltipContent>
      </Tooltip>
    </>
  );
}
