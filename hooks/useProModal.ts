import { create } from "zustand";

type ProModalStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useProModal = create<ProModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
