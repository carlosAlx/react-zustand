import { create } from "zustand";
import { initialItems } from "./data";

type Item = {
  id: string;
  name: string;
  price: number;
  qt?: number;
};

type CartStore = {
  cart: Item[];
  addItemToCart: (item: Item) => void;
  remove: (item: Item) => void;
  available: Item[];
  totalPriceCart: number;
  totalItemCart: number;
};

export const useCartStore = create<CartStore>((set, get) => {
  return {
    cart: [],
    available: initialItems,
    totalItemCart: 0,
    totalPriceCart: 0,
    addItemToCart: (itemProduct) => {
      const cart = get().cart;
      const cartItem = cart.find((item) => item.id === itemProduct.id);
      let updatedCart: Item[];

      if (cartItem) {
        updatedCart = cart.map((item) =>
          item.id === itemProduct.id ? { ...item, qt: item.qt! + 1 } : item
        );
      } else {
        updatedCart = [...cart, { ...itemProduct, qt: 1 }];
      }
      set((state) => ({
        cart: updatedCart,
        totalItemCart: state.totalItemCart + 1,
        totalPriceCart: state.totalPriceCart + itemProduct.price,
      }));
    },
    remove: (itemProduct) => {
      const cart = get().cart;
      const cartItem = cart.find((item) => item.id === itemProduct.id && itemProduct.qt! > 1);
      let updatedCart: Item[];
      if (cartItem) {
        updatedCart = cart.map((item) =>
          item.id === itemProduct.id ? { ...item, qt: item.qt! - 1 } : item
        );
      } else {
        updatedCart = cart.filter((item) => item.id !== itemProduct.id);
      }
      set((state) => ({
        cart: updatedCart,
        totalPriceCart: state.totalPriceCart - itemProduct.price,
        totalItemCart: state.totalItemCart - 1,
      }));
    },
  };
});
