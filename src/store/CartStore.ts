import { create } from "zustand";
import { initialItems } from "./data";

type Item = {
  id: string;
  name: string;
  price: number;
};

type CartStore = {
  cart: Item[];
  addItemToCart: (item: Item) => void;
  remove: (id: string) => void;
  available: Item[]
};

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    available: initialItems,
    addItemToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    remove: (id)=> set((state)=>({cart: state.cart.filter((item)=> item.id !== id)})),
  };
});
