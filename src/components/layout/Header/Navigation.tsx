import Link from "next/link";
const items = [
{ href: "/category/maquinas", label: "Máquinas" },
{ href: "/category/insumos", label: "Insumos" },
{ href: "/category/repuestos", label: "Repuestos" },
{ href: "/category/embalaje", label: "Embalaje" },
{ href: "/category/construccion", label: "Construcción" },
{ href: "/category/hogar", label: "Hogar" },
];
export default function Navigation() {
return (
<div className="border-t border-zinc-200 dark:border-zinc-800">
<div className="container">
<nav className="flex gap-6 overflow-x-auto py-2 text-sm">
{items.map((it) => (
<Link key={it.href} href={it.href} className="hover:text-brand py-2 font-medium">
{it.label}
</Link>
))}
</nav>
</div>
</div>
);
}