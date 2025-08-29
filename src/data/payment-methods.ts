export type PaymentMethod = {
  name: string;
  icon: string;            // ruta en public/images/icons
  caption?: string;        // texto chico opcional
  type: "card" | "wallet" | "cash" | "bank";
  highlight?: boolean;
};

export const paymentMethods: PaymentMethod[] = [
  { name: "Visa",         icon: "/images/icons/visa.svg",         type: "card",   highlight: true },
  { name: "Mastercard",   icon: "/images/icons/mastercard.svg",   type: "card",   highlight: true },

  { name: "Mercado Pago", icon: "/images/icons/mercadopago.svg",  type: "wallet" },
 
  { name: "Efectivo",     icon: "/images/icons/efectivo.svg",     type: "cash",   caption: "En punto de pago" },
 
];
