"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type TileProps = {
  href: string;
  img: string;
  alt: string;
  label: string;  // “Conocé”, “Contacto”, etc.
  cta: string;    // “Quiénes somos”, “Mayoristas”
};

function Tile({ href, img, alt, label, cta }: TileProps) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      aria-label={cta}
    >
      <div className="relative h-[260px] sm:h-[320px] md:h-[360px]">
        <Image
          src={img}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 50vw"
          priority={false}
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        {/* marco sutil */}
        <div className="pointer-events-none absolute inset-3 rounded-2xl ring-1 ring-white/25" />
        {/* label arriba */}
        <div className="absolute left-5 top-5 text-lg font-semibold text-white drop-shadow">
          {label}
        </div>
        {/* CTA abajo */}
        <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-xl bg-indigo-800/90 px-4 py-2 text-white shadow-sm transition group-hover:bg-indigo-700">
          <span className="font-bold">{cta}</span>
          <ArrowUpRight size={16} />
        </span>
        {/* puntitos decorativos */}
        <div
          aria-hidden
          className="absolute right-5 top-5 size-16 opacity-60"
          style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "8px 8px",
          }}
        />
        <div
          aria-hidden
          className="absolute bottom-20 left-5 size-16 opacity-40"
          style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "8px 8px",
          }}
        />
      </div>
    </Link>
  );
}

export default function InfoSplit() {
  return (
    <section className="bg-zinc-50/60 py-10">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2">
          <Tile
            href="/about"
            img="/images/sections/donpesitio.png"
            alt="Fachada / marca Don Pepe"
            label="Conocé"
            cta="Quiénes somos"
          />
          <Tile
            href="/wholesale"
            img="/images/sections/mayoristas.webp"
            alt="Depósito / logística mayorista"
            label="Contacto"
            cta="Mayoristas"
          />
        </div>
      </div>
    </section>
  );
}
