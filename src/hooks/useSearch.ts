"use client";
import { useEffect, useMemo, useState } from "react";
import { search as run, buildIndex } from "@/lib/searchAlgorithm";
import { useProductStore } from "@/stores/useProductStore";


export function useSearch() {
const products = useProductStore((s) => s.products);
const [query, setQuery] = useState("");


useEffect(() => { buildIndex(products); }, [products]);


const suggestions = useMemo(() => (query.length >= 2 ? run(query, 7) : []), [query]);


function onSubmit(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault();
// TODO: navegar a /category o /search con query param
}
return { query, setQuery, suggestions, onSubmit };
}