import { create } from 'zustand'
import { produce } from 'immer';

export interface ToolbarState {
  history: {
    undo: {
      onClick: () => void,
      disabled: boolean,
    },
    redo: {
      onClick: () => void,
      disabled: boolean,
    }
  }
}

export const useToolbarStore = create<ToolbarState>()((set) => ({
  history: {
    undo: {
      // onClick: () => set(produce((state: State) => { state.history.undo.disabled = !state.history.undo.disabled })),
      onClick: () => { console.log('undo action') },
      disabled: false,
    },
    redo: {
      onClick: () => { console.log('redo action') },
      disabled: false,
    }
  }
}))
