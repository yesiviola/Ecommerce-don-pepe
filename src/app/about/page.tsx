// src/app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import TabletMock from "@/components/ui/DeviceFrames/TabletMock";

export default function AboutPage() {
  return (
    <main className="container py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Quiénes somos</h1>
        <p className="mt-2 text-zinc-600">
          Soluciones para carnicerías y gastronomía: máquinas, insumos y asesoría.
        </p>
      </header>

      <div className="grid items-start gap-8 md:grid-cols-2">
        {/* Texto */}
        <div className="prose prose-zinc max-w-none">
          <p>
            En <strong>Don Pepe</strong> nos especializamos en insumos cárnicos y equipamiento.
            Trabajamos para que tu negocio entregue <em>calidad consistente</em> en cada corte,
            envasado y servicio.
          </p>
          <p>
            Seleccionamos productos confiables, optimizamos la logística y acompañamos con soporte
            técnico. El objetivo es simple:
            <strong> que tus procesos sean ágiles, seguros y rentables.</strong>
          </p>
          <ul>
            <li>Stock curado de máquinas, cuchillería y consumibles.</li>
            <li>Asesoramiento para elegir y mantener tu equipo.</li>
            <li>Opciones mayoristas e integración a tu operación.</li>
          </ul>

          <div className="mt-6">
            <Link
              href="/wholesale"
              className="inline-flex items-center rounded-xl bg-indigo-700 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-800"
            >
              Consultar venta mayorista
            </Link>
          </div>
        </div>

        {/* Imágenes (tablet + foto sitio) */}
        <div className="grid gap-4">
          <TabletMock
            src="/images/sections/copiapage.png"
            alt="Vista de la tienda Don Pepe en dispositivo"
            landscape
            className="w-full"
          />
          <div className="relative h-56 overflow-hidden rounded-2xl border bg-white shadow-sm md:h-64">
            <Image
              src="/images/sections/donpesitio.png"
              alt="Instalaciones / marca Don Pepe"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
