"use client";
import { useState } from "react";
import { CreditCard, Wallet, Banknote, Landmark } from "lucide-react";
import { paymentMethods } from "@/data/payment-methods";

function Badge({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25">
      {icon}
      {children}
    </span>
  );
}

function BrandLogo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`grid h-6 w-14 place-content-center rounded bg-zinc-100 text-[10px] font-semibold text-zinc-500 ${className}`}>
        {alt}
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={`h-5 w-auto ${className}`} onError={() => setFailed(true)} loading="lazy" />;
}

export default function PaymentSection() {
  const cards = paymentMethods;

  return (
    <section className="container py-10">
      {/* Header con degradé y badges */}
      <div className="mb-5 overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-r from-sky-700 via-blue-700 to-indigo-700 p-5 text-white shadow-sm">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold leading-tight">Pagá como quieras</h2>
            <p className="text-sm text-white/80">Cuotas, efectivo y transferencia. Seguro y rápido.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge icon={<CreditCard size={14} />}>Hasta 12 cuotas</Badge>
            <Badge icon={<Wallet size={14} />}>Tarjetas de crédito</Badge>
            <Badge icon={<Banknote size={14} />}>Efectivo</Badge>
            <Badge icon={<Landmark size={14} />}>Transferencia</Badge>
          </div>
        </div>
      </div>

      {/* Carril horizontal: una sola fila con scroll */}
      <div className="no-scrollbar -mx-4 overflow-x-auto px-4">
        <div className="flex snap-x snap-mandatory gap-3 md:gap-4">
          {cards.map((p) => (
            <div
              key={p.name}
              className={[
                "group relative shrink-0 snap-start",
                "min-w-[220px] md:min-w-[260px] lg:min-w-[280px]",
                "rounded-2xl border bg-white px-4 py-3 shadow-sm transition",
                "hover:shadow-md hover:ring-1 hover:ring-zinc-200",
                p.highlight ? "border-indigo-200 ring-1 ring-indigo-200/60" : "",
              ].join(" ")}
            >
              <div className="mb-2 flex items-center gap-3">
                <BrandLogo src={p.icon} alt={p.name} />
                <div className="text-sm font-semibold">{p.name}</div>
              </div>
              {p.caption && <div className="text-xs text-zinc-500">{p.caption}</div>}

              {/* brillo decorativo */}
              <div className="pointer-events-none absolute -right-8 -top-8 size-24 rotate-45 bg-gradient-to-br from-zinc-50 to-white opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
