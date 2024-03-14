import { create } from "zustand";
import { Product, createProduct } from "../data/dataFake";

type CartStore = {
  cart: Product[];
  addItemToCart: (item: Product) => void;
  remove: (item: Product) => void;
  available: Product[];
  totalPriceCart: number;
  totalItemCart: number;
};

export const useCartStore = create<CartStore>((set, get) => {
  const product = createProduct();
  return {
    cart: [],
    available: product,
    totalItemCart: 0,
    totalPriceCart: 0,
    addItemToCart: (itemProduct) => {
      const cart = get().cart;
      const cartItem = cart.find((item) => item.id === itemProduct.id);
      let updatedCart: Product[];

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
        totalPriceCart: state.totalPriceCart + +itemProduct.price,
      }));
    },
    remove: (itemProduct) => {
      const cart = get().cart;
      const cartItem = cart.find(
        (item) => item.id === itemProduct.id && itemProduct.qt! > 1
      );
      let updatedCart: Product[];
      if (cartItem) {
        updatedCart = cart.map((item) =>
          item.id === itemProduct.id ? { ...item, qt: item.qt! - 1 } : item
        );
      } else {
        updatedCart = cart.filter((item) => item.id !== itemProduct.id);
      }
      set((state) => ({
        cart: updatedCart,
        totalPriceCart: state.totalPriceCart - +itemProduct.price,
        totalItemCart: state.totalItemCart - 1,
      }));
    },
  };
});
