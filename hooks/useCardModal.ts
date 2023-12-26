import { create } from "zustand";

type CardModalStore = {
  id?: string;
  isOpen: boolean;
  open: (id: string) => void;
  close: () => void;
};

export const useCardModal = create<CardModalStore>((set) => ({
  id: undefined,
  isOpen: false,
  open: (id: string) => set({ isOpen: true, id }),
  close: () => set({ isOpen: false, id: undefined }),
}));
