"use client";
import Link from "next/link";
import { useState } from "react";
import { categoryItems } from "@/data/categories";
import { Cog, Package, Wrench, Hammer, Utensils, Home } from "lucide-react";

function FallbackIcon({ slug }: { slug: string }) {
  const cls = "mx-auto h-24 w-24 md:h-28 md:w-28 text-indigo-900";
  switch (slug) {
    case "maquinas":     return <Cog className={cls} />;
    case "repuestos":    return <Wrench className={cls} />;
    case "embalajes":    return <Package className={cls} />;
    case "insumos":      return <Utensils className={cls} />;
    case "construccion": return <Hammer className={cls} />;
    default:             return <Home className={cls} />;
  }
}

function CategoryCard({ slug, label, icon }: { slug: string; label: string; icon: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <Link
      href={`/category/${slug}`}
      className={[
        "group relative flex flex-col items-center justify-center",
        "rounded-2xl border bg-white p-6 md:p-8 text-center shadow-sm",
        "transition hover:-translate-y-0.5 hover:shadow-md hover:ring-1 hover:ring-indigo-200",
      ].join(" ")}
      aria-label={`Ir a ${label}`}
    >
      {/* icono */}
      {!failed ? (
    
        <img
          src={icon}
          alt={label}
          className="mx-auto h-28 w-auto md:h-32"
          onError={() => setFailed(true)}
          loading="lazy"
        />
      ) : (
        <FallbackIcon slug={slug} />
      )}

      {/* título */}
      <div className="mt-4 text-xl font-extrabold tracking-wide text-indigo-900">
        {label}
      </div>

      {/* decor suave */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/[0.03]" />
      <div className="pointer-events-none absolute -right-16 -top-16 size-40 rotate-45 rounded-3xl bg-gradient-to-br from-zinc-50 to-white opacity-70" />
    </Link>
  );
}

export default function CategoryTiles() {
  // si querés solo 4 como en la captura, usa: categoryItems.slice(0, 4)
  const items = categoryItems.slice(0, 4);

  return (
    <section className="bg-zinc-50/60 py-10">
      <div className="container">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Explorá por categorías</h2>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {items.map((c) => (
            <CategoryCard key={c.slug} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
