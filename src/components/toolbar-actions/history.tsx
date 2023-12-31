import { Button } from '@/components/ui/button';
import { Kbd } from '@/components/ui/kbd';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useToolbarStore } from '@/hooks/use-toolbar-store';
import { Redo, Undo } from 'lucide-react';

export function History() {
  const { undo, redo } = useToolbarStore((state) => state.history);

  return (
    <>
      {undo && (
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
      )}
      {redo && (
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
      )}
    </>
  );
}
