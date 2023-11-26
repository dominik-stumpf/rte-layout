import { DropdownMenuRadioGroupProps } from '@radix-ui/react-dropdown-menu';
import type { ToggleGroupMultipleProps } from '@radix-ui/react-toggle-group';
import { produce } from 'immer';
import { create } from 'zustand';

interface Button {
  onClick: () => void;
  disabled: boolean;
  shortcut?: string;
}

export type FormatType =
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strikethrough'
  | 'superscript'
  | 'subscript';

interface TextFormat
  extends Pick<
    ToggleGroupMultipleProps,
    'value' | 'disabled' | 'onValueChange' | 'defaultValue'
  > {
  value?: FormatType[];
  shortcut?: Partial<Record<FormatType, string>>;
}

export type AlignType = 'left' | 'right' | 'center' | 'justify';

interface TextAlignment
  extends Pick<DropdownMenuRadioGroupProps, 'value' | 'onValueChange'> {
  value?: AlignType;
}

export interface ToolbarState {
  history: {
    undo: Button;
    redo: Button;
  };
  textFormat: TextFormat;
  textAlignment: TextAlignment;
}

export const useToolbarStore = create<ToolbarState>()((set) => ({
  history: {
    undo: {
      // onClick: () => set(produce((state: State) => { state.history.undo.disabled = !state.history.undo.disabled })),
      onClick: () => {
        console.log('undo button');
      },
      disabled: false,
      shortcut: 'Ctrl+Z',
    },
    redo: {
      onClick: () => {
        console.log('redo button');
      },
      disabled: false,
      shortcut: 'Ctrl+Y',
    },
  },
  textFormat: {
    onValueChange: (value) => {
      console.log(value);
    },
    shortcut: {
      bold: 'Ctrl+B',
      italic: 'Ctrl+I',
      underline: 'Ctrl+U',
      strikethrough: 'Crtl+S',
    },
  },
  textAlignment: {
    onValueChange: (value) => {
      console.log(value);
      set(
        produce((state: ToolbarState) => {
          state.textAlignment.value = value as AlignType;
        }),
      ); // example implementation
    },
    value: 'left', // default value
  },
}));
