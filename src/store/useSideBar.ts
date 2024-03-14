import { create } from "zustand";

type SidebarCart = {
  showCart: boolean;
  setShowCart: (showcart: boolean) => void;
};

export const useSideBar = create<SidebarCart>((set) => {
  return {
    showCart: false,
    setShowCart: (showCart) => set({ showCart: !showCart }),
  };
});
