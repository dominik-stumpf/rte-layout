import { Kbd } from '@/components/ui/kbd';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { FormatType, useToolbarStore } from '@/hooks/use-toolbar-store';
import {
  Bold,
  Italic,
  LucideIcon,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
} from 'lucide-react';

interface FormatActions {
  value: FormatType;
  Icon: LucideIcon;
  shortcut?: string;
}

const formatActions: FormatActions[] = [
  { value: 'bold', Icon: Bold },
  {
    value: 'italic',
    Icon: Italic,
  },
  {
    value: 'underline',
    Icon: Underline,
  },
  {
    value: 'strikethrough',
    Icon: Strikethrough,
  },
  { value: 'subscript', Icon: Subscript },
  { value: 'superscript', Icon: Superscript },
];

export function TextFormat() {
  const textFormat = useToolbarStore((state) => state.textFormat);
  const filledFormatActions = formatActions.map(({ value, ...rest }) => ({
    ...rest,
    value,
    shortcut: textFormat.shortcut?.[value],
  }));

  return (
    <ToggleGroup type="multiple" {...textFormat}>
      {filledFormatActions.map(({ value, Icon, shortcut }) => (
        <Tooltip key={value}>
          <TooltipTrigger tabIndex={-1} asChild>
            <span>
              <ToggleGroupItem aria-label={`Toggle ${value}`} value={value}>
                <Icon />
              </ToggleGroupItem>
            </span>
          </TooltipTrigger>
          <TooltipContent className="space-x-2">
            <span>Toggle {value}</span>
            {shortcut && <Kbd>{shortcut}</Kbd>}
          </TooltipContent>
        </Tooltip>
      ))}
    </ToggleGroup>
  );
}
