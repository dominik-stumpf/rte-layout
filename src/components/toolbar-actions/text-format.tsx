import { Kbd } from '@/components/ui/kbd';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  FormatType,
  ToolbarState,
  useToolbarStore,
} from '@/hooks/use-toolbar-store';
import {
  Bold,
  Italic,
  LucideIcon,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
} from 'lucide-react';

interface IconMap {
  value: FormatType;
  Icon: LucideIcon;
}

const iconMap: IconMap[] = [
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

  return (
    <ToggleGroup type="multiple" {...textFormat}>
      {textFormat.toggles.map((toggleData) => (
        <TextFormatToggle toggleData={toggleData} key={toggleData.value} />
      ))}
    </ToggleGroup>
  );
}

interface TextFormatProps {
  toggleData: ToolbarState['textFormat']['toggles'][0];
}

function TextFormatToggle({ toggleData }: TextFormatProps) {
  const { value, disabled, shortcut } = toggleData;
  const iconMapItem = iconMap.find((action) => action.value === value);

  if (!iconMapItem) {
    return;
  }

  const { Icon } = iconMapItem;

  return (
    <Tooltip key={value}>
      <TooltipTrigger tabIndex={-1} asChild>
        <span>
          <ToggleGroupItem
            aria-label={`Toggle ${value}`}
            value={value}
            disabled={disabled}
          >
            <Icon />
          </ToggleGroupItem>
        </span>
      </TooltipTrigger>
      <TooltipContent className="space-x-2">
        <span>Toggle {value}</span>
        {shortcut && <Kbd>{shortcut}</Kbd>}
      </TooltipContent>
    </Tooltip>
  );
}
