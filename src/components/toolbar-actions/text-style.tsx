import { buttonVariants } from '@/components/ui/button';
import { inputVariants } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useToolbarStore } from '@/hooks/use-toolbar-store';
import { cn } from '@/lib/utils';
import { Baseline, PaintBucket } from 'lucide-react';
import { HexAlphaColorPicker, HexColorInput } from 'react-colorful';

export function TextStyle() {
  const { fillBackground, fillForeground } = useToolbarStore(
    (state) => state.textStyle,
  );

  return (
    <>
      <Popover>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger
              className={buttonVariants({ variant: 'ghost', size: 'icon' })}
            >
              <PaintBucket />
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent>Fill background</TooltipContent>
        </Tooltip>
        <PopoverContent className="overflow-visible space-y-2 p-2 w-min">
          <HexColorInput
            prefixed
            alpha
            color={fillBackground.color}
            onChange={fillBackground.onChange}
            className={inputVariants({ className: 'font-mono uppercase' })}
          />
          <HexAlphaColorPicker
            color={fillBackground.color}
            onChange={fillBackground.onChange}
          />
        </PopoverContent>
      </Popover>

      <Popover>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger
              className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
            >
              <Baseline />
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent>Fill foreground</TooltipContent>
        </Tooltip>
        <PopoverContent className="overflow-visible space-y-2 p-2 w-min">
          <HexColorInput
            prefixed
            alpha
            color={fillForeground.color}
            onChange={fillForeground.onChange}
            className={inputVariants({ className: 'font-mono uppercase' })}
          />
          <HexAlphaColorPicker
            color={fillForeground.color}
            onChange={fillForeground.onChange}
          />
        </PopoverContent>
      </Popover>
    </>
  );
}
