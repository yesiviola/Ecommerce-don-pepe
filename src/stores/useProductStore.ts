import { create } from "zustand";
import type { Product } from "@/types/product";

type State = {
  products: Product[];
  setProducts: (list: Product[]) => void;
  addProduct: (p: Product) => void;
};

export const useProductStore = create<State>((set) => ({
  products: [],
  setProducts: (list) => set({ products: list }),
  addProduct: (p) =>
    set((s) => ({ products: [...s.products, p] })),
}));
