import { Button, buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Separator } from '@/components/ui/separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  LucideIcon,
  Redo,
  Underline,
  Undo,
  Strikethrough,
  ChevronDown,
} from 'lucide-react';
import React from 'react';

interface DropdownDataItem {
  Icon: LucideIcon;
  actionName: string;
  defaultChecked?: boolean;
}

const alignDropdownData: DropdownDataItem[] = [
  { Icon: AlignLeft, actionName: 'left', defaultChecked: true },
  { Icon: AlignRight, actionName: 'right' },
  { Icon: AlignCenter, actionName: 'center' },
  { Icon: AlignJustify, actionName: 'justify' },
];

function CustomDropdownRadioItem({ dataItem }: { dataItem: DropdownDataItem }) {
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

export function Toolbar() {
  const [position, setPosition] = React.useState(
    alignDropdownData.find((data) => data.defaultChecked)?.actionName,
  );

  return (
    <div className="border border-b-2 px-4 py-1 flex gap-2 wrap bg-card text-card-foreground">
      <Button size="icon" variant="ghost">
        <Undo />
      </Button>
      <Button size="icon" variant="ghost">
        <Redo />
      </Button>

      <Separator orientation="vertical" />

      <DropdownMenu>
        {' '}
        <DropdownMenuTrigger
          className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
        >
          <AlignLeft />
        </DropdownMenuTrigger>
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

      <Separator orientation="vertical" />

      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <Strikethrough />
        </ToggleGroupItem>
      </ToggleGroup>

      <Separator orientation="vertical" />

      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn('space-x-2', buttonVariants({ variant: 'ghost' }))}
        >
          <span>Styles</span>
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup aria-label="Text style">
            <DropdownMenuRadioItem>Classy</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn('space-x-2', buttonVariants({ variant: 'ghost' }))}
        >
          <span>Paragraph</span>
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup aria-label="Text type">
            <DropdownMenuRadioItem>Blockquote</DropdownMenuRadioItem>
            <DropdownMenuRadioItem>Heading 1</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Separator orientation="vertical" />

      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn('space-x-2', buttonVariants({ variant: 'ghost' }))}
        >
          <span>Insert</span>
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup aria-label="Insert new element">
            <DropdownMenuRadioItem>gif</DropdownMenuRadioItem>
            <DropdownMenuRadioItem>equation</DropdownMenuRadioItem>
            <DropdownMenuRadioItem>youtube video</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
