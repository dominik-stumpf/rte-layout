import type { ToggleGroupMultipleProps } from '@radix-ui/react-toggle-group';
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

export interface ToolbarState {
  history: {
    undo: Button;
    redo: Button;
  };
  textFormat: TextFormat;
}

export const useToolbarStore = create<ToolbarState>()((_set) => ({
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
}));
