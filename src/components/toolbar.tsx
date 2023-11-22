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
import { TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Tooltip } from '@radix-ui/react-tooltip';
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  ChevronDown,
  Code,
  Italic,
  Link,
  LucideIcon,
  Redo,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
  Undo,
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
  return (
    <div className="border border-b-2 px-4 py-1 flex gap-2 bg-card text-card-foreground overflow-auto">
      <HistoryActions />
      <Separator orientation="vertical" />
      <TextAlignment />
      <Separator orientation="vertical" />
      <TextFormatting />
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
            <DropdownMenuRadioItem value="classy">Classy</DropdownMenuRadioItem>
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
            <DropdownMenuRadioItem value="blockquote">
              Blockquote
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="heading 1">
              Heading 1
            </DropdownMenuRadioItem>
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
            <DropdownMenuRadioItem value="gif">gif</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="youtube video">
              youtube video
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function HistoryActions() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="ghost">
            <Undo />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Undo last action</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="ghost" disabled>
            <Redo />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Redo last action</TooltipContent>
      </Tooltip>
    </>
  );
}

export function TextAlignment() {
  const [position, setPosition] = React.useState(
    alignDropdownData.find((data) => data.defaultChecked)?.actionName,
  );

  return (
    <DropdownMenu>
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
  );
}

const formattingActionButtonGroup: GenericActionButtonGroupProps = {
  actionButtonProps: [
    { value: 'bold', tooltip: 'Toggle bold', Icon: Bold },
    { value: 'italic', tooltip: 'Toggle italic', Icon: Italic },
    { value: 'underline', tooltip: 'Toggle underline', Icon: Underline },
    {
      value: 'strikethrough',
      tooltip: 'Toggle strikethrough',
      Icon: Strikethrough,
    },
    { value: 'subscript', tooltip: 'Toggle subscript', Icon: Subscript },
    { value: 'superscript', tooltip: 'Toggle superscript', Icon: Superscript },
  ],
};

export function TextFormatting() {
  return (
    <>
      <ToggleGroup type="multiple">
        <GenericActionButtonGroup {...formattingActionButtonGroup} />
      </ToggleGroup>
      <GenericActionButton tooltip="Insert code block" Icon={Code} />
      <GenericActionButton tooltip="Insert link" Icon={Link} />
    </>
  );
}

interface GenericActionButtonProps {
  tooltip: string;
  Icon: LucideIcon;
}

export function GenericActionButton({
  tooltip,
  Icon,
}: GenericActionButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon" variant="ghost">
          <Icon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
}

interface GenericActionButtonGroupProps {
  actionButtonProps: ({ value: string } & GenericActionButtonProps)[];
}

export function GenericActionButtonGroup({
  actionButtonProps,
}: GenericActionButtonGroupProps) {
  return actionButtonProps.map(({ Icon, tooltip, value }) => {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <ToggleGroupItem value={value} aria-label={tooltip} key={value}>
            <Icon />
          </ToggleGroupItem>
        </TooltipTrigger>
        <TooltipContent>{tooltip}</TooltipContent>
      </Tooltip>
    );
  });
}
