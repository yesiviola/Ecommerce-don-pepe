"use client";
import { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import MediaFrame from "@/components/ui/MediaFrame/MediaFrame";
import { formatMoney, computeDiscount } from "@/lib/utils";
import type { Product, ProductImage } from "@/types/product";

type ProductWithFlags = Product & { freeShipping?: boolean };

export default function ProductCard({ p }: { p: ProductWithFlags }) {
  const { finalPrice, percent } = computeDiscount(p.price, p.discount ?? 0);
  const hasDiscount = percent > 0;

  const tone: "neutral" | "cool" | "warm" | "emerald" =
    p.category === "maquinas" ? "cool" :
    p.category === "hogar"    ? "warm" :
    p.category === "insumos"  ? "emerald" :
    "neutral";

  // Fallback si la ruta no existe
  const [imgSrc, setImgSrc] = useState<ProductImage | string>(p.images?.[0] ?? "/images/products/placeholder.svg");

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
      {/* Badges */}
      {hasDiscount && (
        <div className="absolute left-3 top-3 z-10 rounded-md bg-zinc-900 px-2 py-1 text-xs font-semibold text-white">
          -{percent}%
        </div>
      )}
      {p.freeShipping && (
        <div className="absolute left-3 top-10 z-10 rounded-md bg-emerald-600 px-2 py-1 text-xs font-semibold text-white">
          ENVÍO GRATIS
        </div>
      )}

      {/* Imagen con marco */}
      <Link href={`/product/${p.slug}`} className="block">
        <MediaFrame
          src={typeof imgSrc === "string" ? imgSrc : imgSrc.url}
          alt={p.name}
          ratio="square"
          tone={tone}
          className="h-56 w-full sm:h-64"
          onError={() => setImgSrc("/images/products/placeholder.svg")}
        />
      </Link>

      {/* Contenido */}
      <div className="flex flex-1 flex-col gap-3 px-5 pb-5">
        <div className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-zinc-400">
          {p.category}
        </div>

        <Link href={`/product/${p.slug}`} className="line-clamp-2 text-[15px] font-semibold text-zinc-800 hover:underline">
          {p.name}
        </Link>

        {p.description && (
          <p className="line-clamp-2 text-xs text-zinc-600">{p.description}</p>
        )}

        <div className="mt-1">
          {hasDiscount && (
            <div className="text-sm text-zinc-400 line-through">{formatMoney(p.price)}</div>
          )}
          <div className="text-xl font-extrabold tracking-tight">{formatMoney(finalPrice)}</div>
        </div>

        <div className="mt-auto flex items-center gap-2">
          <button
            className="flex-1 rounded-xl bg-indigo-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label={`Añadir ${p.name} al carrito`}
          >
            Añadir al pedido
          </button>
          <button
            className="grid size-10 place-content-center rounded-xl border text-zinc-600 hover:bg-zinc-50"
            aria-label="Agregar a favoritos"
          >
            <Heart size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}
