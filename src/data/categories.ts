export type CategoryItem = {
  slug: "maquinas" | "repuestos" | "embalajes" | "insumos" | "construccion" | "hogar";
  label: string;
  icon: string; // ruta en /public/images/categories/*.svg
};

export const categoryItems: CategoryItem[] = [
  { slug: "maquinas",     label: "Máquinas",     icon: "/images/categories/maquinas.svg" },
  { slug: "repuestos",    label: "Repuestos",    icon: "/images/categories/repuestos.svg" },
  { slug: "embalajes",    label: "Embalajes",    icon: "/images/categories/embalajes.svg" },
  { slug: "insumos",      label: "Insumos",      icon: "/images/categories/insumos.svg" },
  { slug: "construccion", label: "Construcción", icon: "/images/categories/construccion.svg" },
  { slug: "hogar",        label: "Hogar",        icon: "/images/categories/hogar.svg" },
];
