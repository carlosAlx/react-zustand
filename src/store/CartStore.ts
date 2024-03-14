import { create } from "zustand";

type Item = {
  id: number;
  name: string;
  price: number;
};

type CartStore = {
  cart: Item[];
  addItemToCart: (item: Item) => void;
  remove: (id: number) => void;
  available: Item[]
};

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    available: [],
    addItemToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    remove: (id)=> set((state)=>({cart: state.cart.filter((item)=> item.id !== id)})),
  };
});
