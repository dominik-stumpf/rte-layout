import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export function TextAlignment() {
  const [position, setPosition] = React.useState(
    alignDropdownData.find((data) => data.defaultChecked)?.actionName,
  );

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger
            className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
          >
            <AlignLeft />
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>Align text</TooltipContent>
      </Tooltip>
      <DropdownMenuContent>
        <DropdownMenuLabel>Text alignment</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={setPosition}
          aria-label="Text alignment"
        >
          {alignDropdownData.map((data) => (
            <CustomDropdownRadioItem dataItem={data} key={data.actionName} />
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const alignDropdownData = [
  { Icon: AlignLeft, actionName: 'left', defaultChecked: true },
  { Icon: AlignRight, actionName: 'right' },
  { Icon: AlignCenter, actionName: 'center' },
  { Icon: AlignJustify, actionName: 'justify' },
];

function CustomDropdownRadioItem({ dataItem }: { dataItem: (typeof alignDropdownData)[number] }) {
  return (
    <DropdownMenuRadioItem
      value={dataItem.actionName}
      className="space-x-2 capitalize"
    >
      <dataItem.Icon />
      <span>{dataItem.actionName}</span>
    </DropdownMenuRadioItem>
  );
}
