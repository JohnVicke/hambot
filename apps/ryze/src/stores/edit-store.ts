import { create } from "zustand";

interface EditStore {
  editingCommands: boolean;
  actions: {
    toggleEditingCommands: () => void;
  };
}

const useEditStore = create<EditStore>()((set) => ({
  editingCommands: false,
  actions: {
    toggleEditingCommands: () =>
      set((state) => ({ editingCommands: !state.editingCommands })),
  },
}));

export const useEditingCommands = () =>
  useEditStore((state) => state.editingCommands);
export const useEditActions = () => useEditStore((state) => state.actions);
