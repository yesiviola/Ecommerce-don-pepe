import Link from "next/link";

export default function CategoryNotFound() {
  return (
    <main className="container py-16">
      <div className="mx-auto max-w-md text-center">
        <h1 className="mb-2 text-2xl font-semibold">Categoría no encontrada</h1>
        <p className="mb-6 text-zinc-600">
          La categoría que buscás no existe o fue renombrada.
        </p>
        <Link href="/category/maquinas" className="text-indigo-700 hover:underline">
          Ver categorías
        </Link>
      </div>
    </main>
  );
}
