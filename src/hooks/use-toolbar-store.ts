import { produce } from 'immer';
import { create } from 'zustand';

interface GenericAction {
  disabled?: boolean;
  shortcut?: string;
}
interface Button extends GenericAction {
  onClick: () => void;
}

export type FormatType =
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strikethrough'
  | 'superscript'
  | 'subscript';

interface TextFormatToggle extends GenericAction {
  value: FormatType;
}

interface TextFormat {
  onValueChange?: (value: FormatType[]) => void;
  value?: FormatType[];
  toggles: TextFormatToggle[];
}

export type AlignType = 'left' | 'right' | 'center' | 'justify';

interface TextAlignment extends GenericAction {
  onValueChange: (value: AlignType) => void;
  value?: AlignType;
}

interface FillColor extends GenericAction {
  color: string;
  onChange: (color: string) => void;
}

export interface ToolbarState {
  history: {
    undo?: Button;
    redo?: Button;
  };
  textFormat: TextFormat;
  textAlignment: TextAlignment;
  textStyle: {
    fillBackground?: FillColor;
    fillForeground?: FillColor;
  };
}

export const useToolbarStore = create<ToolbarState>()((set) => ({
  history: {
    undo: {
      onClick: () => {
        console.log('undo button');
      },
      shortcut: 'Ctrl+Z',
    },
    redo: {
      onClick: () => {
        console.log('redo button');
      },
      shortcut: 'Ctrl+Y',
    },
  },
  textFormat: {
    onValueChange: (value) => {
      console.log(value);
    },
    toggles: [
      { value: 'bold', shortcut: 'Ctrl+B' },
      { value: 'italic', shortcut: 'Ctrl+I' },
      { value: 'underline', shortcut: 'Ctrl+U' },
      { value: 'strikethrough' },
      { value: 'superscript' },
      { value: 'subscript' },
    ],
  },
  textAlignment: {
    onValueChange: (value) => {
      console.log(value);
      set(
        produce((state: ToolbarState) => {
          state.textAlignment.value = value as AlignType;
        }),
      );
    },
    value: 'left', // default value
  },
  textStyle: {
    fillBackground: {
      shortcut: 'Ctrl+Shift+B',
      color: '#123456',
      onChange: (color: string) => {
        console.log(color);
        set(
          produce((state: ToolbarState) => {
            if (state.textStyle.fillBackground === undefined) {
              return;
            }
            state.textStyle.fillBackground.color = color;
          }),
        );
      },
    },
    fillForeground: {
      shortcut: 'Ctrl+Shift+F',
      color: '#654321',
      onChange: (color: string) => {
        console.log(color);
        set(
          produce((state: ToolbarState) => {
            if (state.textStyle.fillForeground === undefined) {
              return;
            }
            state.textStyle.fillForeground.color = color;
          }),
        );
      },
    },
  },
}));
