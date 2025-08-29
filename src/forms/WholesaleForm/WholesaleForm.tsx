"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nombre: z.string().min(2, "Ingresá tu nombre"),
  apellido: z.string().optional(),
  email: z.string().email("Email inválido"),
  telefono: z.string().min(6, "Teléfono inválido"),
  categorias: z.array(z.string()).min(1, "Elegí al menos una categoría"),
  dedicacion: z.string().min(2, "Contanos a qué te dedicás"),
  comentario: z.string().optional(),
  terms: z.literal(true, { errorMap: () => ({ message: "Aceptá los Términos de Uso" }) }),
});

type FormData = z.infer<typeof schema>;

const CATS = ["Máquinas", "Insumos", "Repuestos", "Embalajes", "Construcción", "Hogar"];

export default function WholesaleForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } =
    useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { categorias: [] } });

  const onSubmit = async (data: FormData) => {
    console.log("Mayorista:", data);
    // TODO: integrar API / email
    alert("¡Gracias! Te contactaremos dentro de 24hs hábiles.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <p className="text-sm text-zinc-600">
        Completá el formulario y te contactaremos dentro de las próximas 24hs hábiles (06:30–04:00).
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium">Nombre *</label>
          <input className="mt-1 w-full rounded-xl border p-3" {...register("nombre")} />
          {errors.nombre && <p className="mt-1 text-xs text-red-600">{errors.nombre.message}</p>}
        </div>
        <div>
          <label className="text-sm font-medium">Apellido</label>
          <input className="mt-1 w-full rounded-xl border p-3" {...register("apellido")} />
        </div>
        <div>
          <label className="text-sm font-medium">E-mail *</label>
          <input type="email" className="mt-1 w-full rounded-xl border p-3" {...register("email")} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label className="text-sm font-medium">Teléfono *</label>
          <input className="mt-1 w-full rounded-xl border p-3" {...register("telefono")} />
          {errors.telefono && <p className="mt-1 text-xs text-red-600">{errors.telefono.message}</p>}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Categoría/s de interés *</label>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {CATS.map((c) => (
            <label key={c} className="flex items-center gap-2 rounded-xl border p-2">
              <input type="checkbox" value={c} {...register("categorias")} />
              <span className="text-sm">{c}</span>
            </label>
          ))}
        </div>
        {errors.categorias && <p className="mt-1 text-xs text-red-600">{errors.categorias.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">¿A qué te dedicás? *</label>
        <input className="mt-1 w-full rounded-xl border p-3" placeholder="Carnicería, restaurante, distribuidora…" {...register("dedicacion")} />
        {errors.dedicacion && <p className="mt-1 text-xs text-red-600">{errors.dedicacion.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Comentario</label>
        <textarea className="mt-1 w-full rounded-xl border p-3" rows={4} {...register("comentario")} />
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" {...register("terms")} /> Acepto los <a className="text-indigo-700 underline" href="#" onClick={(e)=>e.preventDefault()}>Términos de Uso</a> *
      </label>
      {errors.terms && <p className="mt-1 text-xs text-red-600">{errors.terms.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
      >
        {isSubmitting ? "Enviando…" : "Enviar"}
      </button>

      {isSubmitSuccessful && (
        <p className="text-sm text-emerald-600">Formulario enviado. ¡Gracias!</p>
      )}
    </form>
  );
}
