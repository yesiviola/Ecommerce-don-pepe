"use client";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "@/components/carts/CartIcon/CartIcon";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="container flex items-center gap-3 py-2 sm:gap-4 sm:py-3">
        {/* Logo + marca */}
        <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3" aria-label="Ir al inicio">
          {/* Wrapper controla el tamaño; el Image usa fill */}
          <div className="relative size-10 sm:size-12 md:size-14 lg:size-16">
            <Image
              src="/don-pepe.png"
              alt="Don Pepe"
              fill
              priority
              sizes="(max-width:640px) 60px, (max-width:1024px) 60px, 64px"
              className="object-contain"
            />
          </div>
          <span className="text-sm font-semibold sm:text-base">Don Pepe</span>
        </Link>

        {/* Buscador */}
        <div className="mx-auto min-w-0 max-w-2xl flex-1">
          <SearchBar />
        </div>

        {/* Acciones */}
        <nav className="flex items-center gap-2 sm:gap-3">
          <Link
            aria-label="Favoritos"
            href="#"
            className="rounded p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            ❤
          </Link>
          <Link
            aria-label="Usuario"
            href="#"
            className="rounded p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            👤
          </Link>
          <CartIcon />
        </nav>
      </div>
      <Navigation />
    </header>
  );
}
