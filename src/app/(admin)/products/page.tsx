import Link from "next/link";


export default function AdminProductsPage() {
return (
<div className="space-y-4">
<div className="flex justify-between">
<h2 className="text-xl font-semibold">Productos</h2>
<Link href="#" className="bg-brand rounded-xl px-4 py-2 text-white">Nuevo producto</Link>
</div>
{/* TODO: tabla de productos */}
</div>
);
}