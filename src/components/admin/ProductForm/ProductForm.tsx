"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
name: z.string().min(3),
slug: z.string().min(3),
price: z.coerce.number().positive(),
discount: z.coerce.number().min(0).max(0.9).optional(),
category: z.string().min(2),
images: z.instanceof(FileList).refine((files) => files.length > 0, "File is required."),
description: z.string().min(10),
});


type FormData = z.infer<typeof schema>;


export default function ProductForm() {
const { register, handleSubmit, watch, formState: { isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });
const files = watch("images") as unknown as File[] | undefined;


const onSubmit: SubmitHandler<FormData> = async (data) => {
const form = new FormData();
Object.entries(data).forEach(([k, v]) => {
if (k === "images" && v instanceof FileList) Array.from(v).forEach((f) => form.append("images", f));
else form.append(k, String(v));
});
// TODO: POST /api/admin/products
};


return (
<form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
<input {...register("name")} placeholder="Nombre" className="w-full rounded-xl border px-3 py-2" />
<input {...register("slug")} placeholder="slug" className="w-full rounded-xl border px-3 py-2" />
<div className="grid grid-cols-2 gap-3">
<input type="number" step="0.01" {...register("price")} placeholder="Precio" className="rounded-xl border px-3 py-2" />
<input type="number" step="0.05" {...register("discount")} placeholder="Descuento (0..0.9)" className="rounded-xl border px-3 py-2" />
</div>
<input {...register("category")} placeholder="Categoría" className="w-full rounded-xl border px-3 py-2" />
<textarea {...register("description")} placeholder="Descripción" className="w-full rounded-xl border px-3 py-2" rows={4} />
<input type="file" multiple accept="image/*" {...register("images")} className="block" />
<div className="grid grid-cols-3 gap-2">
{files?.length ? Array.from(files).map((f, i) => (
// eslint-disable-next-line @next/next/no-img-element
<img key={i} src={URL.createObjectURL(f)} alt={f.name} className="aspect-square rounded-xl object-cover" />
)) : null}
</div>
<button disabled={isSubmitting} className="bg-brand rounded-xl px-4 py-2 text-white">Guardar</button>
</form>
);
}