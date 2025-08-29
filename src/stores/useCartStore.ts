import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { Product } from "@/types/product";


export type CartItem = { id: string; name: string; price: number; qty: number; image: string; slug: string };


type State = {
items: CartItem[];
add: (p: Product, qty?: number) => void;
remove: (id: string) => void;
clear: () => void;
};


export const useCartStore = create<State>()(
persist(
immer((set) => ({
items: [],
add: (p, qt = 1) => set((s) => {
const found = s.items.find((i) => i.id === p.id);
if (found) found.qty += qt; else s.items.push({ id: p.id, name: p.name, price: p.price, qty: qt, image: p.images[0].url, slug: p.slug });
}),
remove: (id) => set((s) => { s.items = s.items.filter((i) => i.id !== id); }),
clear: () => set({ items: [] }),
})),
{ name: "donpepe-cart" }
)
);