import { buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useToolbarStore } from '@/hooks/use-toolbar-store';
import { cn } from '@/lib/utils';
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  LucideIcon,
} from 'lucide-react';

interface TextAlignmentData {
  Icon: LucideIcon;
  value: string;
}

const textAlignmentData: TextAlignmentData[] = [
  { Icon: AlignLeft, value: 'left' },
  { Icon: AlignRight, value: 'right' },
  { Icon: AlignCenter, value: 'center' },
  { Icon: AlignJustify, value: 'justify' },
];

export function TextAlignment() {
  const textAlignment = useToolbarStore((state) => state.textAlignment);
  const ActiveIcon = textAlignmentData.find(
    ({ value }) => value === textAlignment.value,
  )?.Icon;

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger
            className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
          >
            {ActiveIcon ? <ActiveIcon /> : <AlignLeft />}
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>Align text</TooltipContent>
      </Tooltip>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup aria-label="Text alignment" {...textAlignment}>
          {textAlignmentData.map(({ Icon, value }) => (
            <DropdownMenuRadioItem
              key={value}
              value={value}
              className="space-x-2 capitalize"
            >
              <Icon />
              <span>{value}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
