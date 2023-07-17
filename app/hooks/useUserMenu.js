"use client";

import { create } from "zustand";

const useUserMenu = create((set) => ({
  isMenuOpen: false,
  toggleMenu: (state) => set({ isMenuOpen: !state }),
}));

export default useUserMenu;
