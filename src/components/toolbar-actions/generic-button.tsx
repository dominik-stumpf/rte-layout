import { Button } from '@/components/ui/button';
import { Kbd } from '@/components/ui/kbd';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button as ButtonType } from '@/hooks/use-toolbar-store';
import { LucideIcon } from 'lucide-react';

export function GenericButton({
  button,
  tooltip,
  Icon,
}: { button?: ButtonType; tooltip: string; Icon: LucideIcon }) {
  if (!button) {
    return;
  }
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          onClick={button.onClick}
          disabled={button.disabled}
        >
          <Icon />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="space-x-2">
        <span>{tooltip}</span>
        {button.shortcut && <Kbd>{button.shortcut}</Kbd>}
      </TooltipContent>
    </Tooltip>
  );
}
