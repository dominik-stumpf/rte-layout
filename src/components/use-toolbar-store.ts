import { create } from 'zustand';

export interface ToolbarState {
  history: {
    undo: {
      onClick: () => void;
      disabled: boolean;
    };
    redo: {
      onClick: () => void;
      disabled: boolean;
    };
  };
}

export const useToolbarStore = create<ToolbarState>()((_set) => ({
  history: {
    undo: {
      // onClick: () => set(produce((state: State) => { state.history.undo.disabled = !state.history.undo.disabled })),
      onClick: () => {
        console.log('undo action');
      },
      disabled: false,
    },
    redo: {
      onClick: () => {
        console.log('redo action');
      },
      disabled: false,
    },
  },
}));
