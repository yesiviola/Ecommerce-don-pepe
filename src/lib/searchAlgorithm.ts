import Fuse from "fuse.js";
import type { Product } from "@/types/product";


let fuse: Fuse<Product> | null = null;


export function buildIndex(products: Product[]) {
fuse = new Fuse(products, {
includeScore: true,
threshold: 0.35, // agresividad de coincidencia
keys: [
{ name: "name", weight: 0.5 },
{ name: "category", weight: 0.2 },
{ name: "tags", weight: 0.2 },
{ name: "cutType", weight: 0.1 },
],
});
}


export function search(query: string, limit = 10): Product[] {
if (!fuse || !query.trim()) return [];
return fuse.search(query).slice(0, limit).map((r) => r.item);
}