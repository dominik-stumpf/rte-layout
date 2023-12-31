import { buttonVariants } from '@/components/ui/button';
import { inputVariants } from '@/components/ui/input';
import { Kbd } from '@/components/ui/kbd';
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
import {
  Baseline,
  ClipboardCopy,
  ClipboardPaste,
  Eraser,
  PaintBucket,
} from 'lucide-react';
import { HexAlphaColorPicker, HexColorInput } from 'react-colorful';
import { GenericButton } from './generic-button';

export function TextStyle() {
  const {
    fillBackground,
    fillForeground,
    pasteFormatting,
    removeFormatting,
    copyFormatting,
  } = useToolbarStore((state) => state.textStyle);

  return (
    <>
      {fillBackground && (
        <Popover>
          <Tooltip>
            <TooltipTrigger asChild>
              <PopoverTrigger
                className={buttonVariants({ variant: 'ghost', size: 'icon' })}
                disabled={fillBackground.disabled}
              >
                <PaintBucket />
              </PopoverTrigger>
            </TooltipTrigger>
            <TooltipContent className={'space-x-2'}>
              <span>Fill background</span>
              {fillBackground.shortcut && <Kbd>{fillBackground.shortcut}</Kbd>}
            </TooltipContent>
          </Tooltip>
          <PopoverContent className="w-min space-y-2 overflow-visible p-2">
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
      )}

      {fillForeground && (
        <Popover>
          <Tooltip>
            <TooltipTrigger asChild>
              <PopoverTrigger
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' }),
                )}
                disabled={fillForeground.disabled}
              >
                <Baseline />
              </PopoverTrigger>
            </TooltipTrigger>
            <TooltipContent className={'space-x-2'}>
              <span>Fill foreground</span>
              {fillForeground.shortcut && <Kbd>{fillForeground.shortcut}</Kbd>}
            </TooltipContent>
          </Tooltip>
          <PopoverContent className="w-min space-y-2 overflow-visible p-2">
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
      )}

      <GenericButton
        button={copyFormatting}
        tooltip="Copy formatting"
        Icon={ClipboardCopy}
      />
      <GenericButton
        button={pasteFormatting}
        tooltip="Paste formatting"
        Icon={ClipboardPaste}
      />
      <GenericButton
        button={removeFormatting}
        tooltip="Remove formatting"
        Icon={Eraser}
      />
    </>
  );
}
