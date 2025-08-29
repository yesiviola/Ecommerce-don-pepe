"use client";
import { useSearch } from "@/hooks/useSearch";
import { useState } from "react";


export default function SearchBar() {
const { query, setQuery, suggestions, onSubmit } = useSearch();
const [focused, setFocused] = useState(false);


return (
<div className="relative">
<form onSubmit={onSubmit} role="search" aria-label="Buscar productos">
<input
value={query}
onChange={(e) => setQuery(e.target.value)}
onFocus={() => setFocused(true)}
onBlur={() => setTimeout(() => setFocused(false), 150)}
placeholder="Cortes, máquinas, insumos…"
className="focus:ring-brand w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2"
/>
</form>
{focused && suggestions.length > 0 && (
<ul className="shadow-soft absolute inset-x-0 z-10 mt-2 overflow-hidden rounded-xl border bg-white">
{suggestions.slice(0, 7).map((s) => (
<li key={s.id} className="cursor-pointer px-4 py-2 hover:bg-zinc-50">
{s.name}
</li>
))}
</ul>
)}
</div>
);
}