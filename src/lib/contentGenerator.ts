import type { Product } from "@/types/product";


export function generateSEO(p: Product) {
const keywords = [p.name, p.category, ...(p.tags ?? []), p.cutType].filter(Boolean).join(", ");
const metaDescription = `${p.name} – ${p.description.slice(0, 120)}… Envíos a todo el país. Cuotas y atención mayorista.`.slice(0, 150);
const shortDescription = `${p.name} de ${p.species ?? "calidad"}. ${p.attributes?.packaging ?? "Empaque seguro"}.`;
return { keywords, metaDescription, shortDescription };
}