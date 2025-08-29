"use client";
import Link from "next/link";
import { useCartStore } from "@/stores/useCartStore";


export default function CartIcon() {
const count = useCartStore((s) => s.items.reduce((acc, i) => acc + i.qty, 0));
return (
<Link href="/cart" className="relative rounded p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900">
🛒
{count > 0 && (
<span className="bg-brand absolute -right-1 -top-1 rounded-full px-1.5 text-xs text-white">
{count}
</span>
)}
</Link>
);
}