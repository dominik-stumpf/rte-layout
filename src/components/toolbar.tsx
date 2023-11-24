import { buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { History } from '@/components/toolbar-actions/history';
import { TextFormat } from '@/components/toolbar-actions/text-format';
import { TextAlignment } from '@/components/toolbar-actions/text-alignment';

export function Toolbar() {
  return (
    <div className="border border-b-2 px-4 py-1 flex gap-2 bg-card text-card-foreground overflow-auto">
      <History />
      <Separator orientation="vertical" />
      <TextFormat />
      <Separator orientation="vertical" />
      <TextAlignment />
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
