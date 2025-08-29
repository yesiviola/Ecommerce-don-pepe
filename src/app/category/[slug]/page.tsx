import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGrid from "@/components/products/ProductGrid/ProductGrid";
import { featured } from "@/data/featured";

// Slugs válidos (sin acentos, minúsculas) según tu ProductCategory
const CATS = {
  maquinas:      { label: "Máquinas",      key: "maquinas" },
  insumos:       { label: "Insumos",       key: "insumos" },
  repuestos:     { label: "Repuestos",     key: "repuestos" },
  embalajes:     { label: "Embalajes",     key: "embalajes" },
  construccion:  { label: "Construcción",  key: "construccion" },
  hogar:         { label: "Hogar",         key: "hogar" },
} as const;

// Alias: si alguien entra a /category/embalaje lo mapeamos a "embalajes"
function resolveCat(slug: string) {
  if (slug === "embalaje") return CATS.embalajes;
  return (CATS as any)[slug];
}

export function generateStaticParams() {
  // Pre-render de las categorías principales
  return Object.keys(CATS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cat = resolveCat(params.slug);
  if (!cat) return {};
  return {
    title: `${cat.label} | Don Pepe`,
    description: `Catálogo de ${cat.label} en Don Pepe.`,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = resolveCat(params.slug);
  if (!cat) notFound();

  // Fuente de datos: por ahora usamos featured.products
  // (cuando conectes el store / API, cambiamos esta línea).
  const products = (featured.products as any[]).filter(
    (p) => (p.category || "").toLowerCase() === cat.key
  );

  return (
    <main className="container py-8">
      {/* Migas de pan */}
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-zinc-500">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:underline">Inicio</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/category/maquinas" className="hover:underline">Categorías</Link>
          </li>
          <li>/</li>
          <li className="text-zinc-900 font-medium">{cat.label}</li>
        </ol>
      </nav>

      {/* Título + contador */}
      <header className="mb-6 flex items-end justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight">
          {cat.label}
        </h1>
        <span className="text-sm text-zinc-500">
          {products.length} producto{products.length === 1 ? "" : "s"}
        </span>
      </header>

      {/* Grid de productos / vacío */}
      {products.length > 0 ? (
        <ProductGrid products={products as any} />
      ) : (
        <div className="rounded-2xl border p-10 text-center">
          <p className="text-zinc-600">
            No encontramos productos en <strong>{cat.label}</strong> por ahora.
          </p>
          <div className="mt-4">
            <Link href="/" className="text-indigo-700 hover:underline">
              Ver destacados
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
