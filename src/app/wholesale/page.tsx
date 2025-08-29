import Image from "next/image";
import WholesaleForm from "@/forms/WholesaleForm/WholesaleForm";

export default function WholesalePage() {
  return (
    <main className="container py-10">
      {/* Hero */}
      <div className="relative mb-8 overflow-hidden rounded-2xl border shadow-sm">
        <div className="relative h-56 sm:h-72 md:h-80">
          <Image
            src="/images/sections/mayoristas.webp"
            alt="Venta mayorista Don Pepe"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h1 className="absolute bottom-4 left-5 text-3xl font-bold text-white">Venta Mayorista</h1>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <section className="md:col-span-2">
          <WholesaleForm />
        </section>

        <aside className="rounded-2xl border p-5">
          <h2 className="mb-2 text-lg font-semibold">Contacto</h2>
          <div className="space-y-3 text-sm text-zinc-700">
            <div>
              <div className="font-semibold">Teléfonos</div>
              <div>+54 11 7168-0011</div>
              <div>+54  11 7168-0011 </div>
            </div>
            <div>
              <div className="font-semibold">Email</div>
              <div>donpepekm30.insumos@gmail.com</div>
            </div>
            <div>
              <div className="font-semibold">Horario</div>
              <div>Lunes a sabados • 06:30–04:00</div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
