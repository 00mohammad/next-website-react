import { create } from "zustand";

const useAppStore = create((set) => ({
  isMenuOpen: false,

  toggleMenu: () =>
    set((state) => ({ isMenuOpen: !state.isMenuOpen })),

  closeMenu: () => set({ isMenuOpen: false }),
}));

export default useAppStore;
