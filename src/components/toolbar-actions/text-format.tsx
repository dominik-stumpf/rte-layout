import { Toggle } from '@/components/ui/toggle';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Bold,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
} from 'lucide-react';

const formatActions = [
  { value: 'bold', tooltip: 'Toggle bold', Icon: Bold, shortcut: 'Ctrl+B' },
  {
    value: 'italic',
    tooltip: 'Toggle italic',
    Icon: Italic,
    shortcut: 'Ctrl+I',
  },
  {
    value: 'underline',
    tooltip: 'Toggle underline',
    Icon: Underline,
    shortcut: 'Ctrl+U',
  },
  {
    value: 'strikethrough',
    tooltip: 'Toggle strikethrough',
    Icon: Strikethrough,
    shortcut: 'Ctrl+S',
  },
  { value: 'subscript', tooltip: 'Toggle subscript', Icon: Subscript },
  { value: 'superscript', tooltip: 'Toggle superscript', Icon: Superscript },
];

export function TextFormat() {
  return formatActions.map(({ value, tooltip, Icon, shortcut }) => (
    <Tooltip key={value}>
      <TooltipTrigger tabIndex={-1} asChild>
        <span>
          <Toggle aria-label={tooltip}>
            <Icon />
          </Toggle>
        </span>
      </TooltipTrigger>
      <TooltipContent className="space-x-2">
        <span>{tooltip}</span>
        {shortcut && <Kbd>{shortcut}</Kbd>}
      </TooltipContent>
    </Tooltip>
  ));
}

export function Kbd({ children }: { children: string }) {
  return (
    <kbd className="text-muted-foreground font-mono capitalize">{children}</kbd>
  );
}
