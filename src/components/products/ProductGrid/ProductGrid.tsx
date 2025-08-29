import ProductCard from "@/components/products/ProductCard/ProductCard";
import type { Product } from "@/types/product";

type ProductWithFlags = Product & { freeShipping?: boolean };

export default function ProductGrid({ products }: { products: ProductWithFlags[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  );
}
