import { type ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
return twMerge(clsx(inputs));
}


export function formatMoney(value: number, currency: string = "ARS") {
return new Intl.NumberFormat("es-AR", { style: "currency", currency }).format(value);
}


export function computeDiscount(price: number, discount: number) {
const final = Math.round((price * (1 - discount)) * 100) / 100;
const percent = Math.round(discount * 100);
return { finalPrice: final, percent };
}