import { ReactNode } from "react";

export type ProductCategory = 
  | "maquinas" 
  | "cuchillos" 
  | "cuchillas" 
  | "embalajes" 
  | "insumos" 
  | "construccion" 
  | "hogar" 
  | "repuestos" 
  | "accesorios";

export type MachineType =
  | "picadora" 
  | "cortadora" 
  | "embutidora" 
  | "sierra" 
  | "mixer" 
  | "termoselladora" 
  | "balanza"
  | "otras";

export type KnifeType =
  | "despostar" 
  | "carnicero" 
  | "filetear" 
  | "trinchar" 
  | "hueso" 
  | "universal";

export type BladeType =
  | "carnicera" 
  | "picadora" 
  | "sierra" 
  | "afiladora" 
  | "especializada";

export type PackagingType =
  | "bolsas" 
  | "film" 
  | "papel" 
  | "bandejas" 
  | "cajas" 
  | "etiquetas";

export type SupplyType =
  | "limpieza" 
  | "seguridad" 
  | "mantenimiento" 
  | "uniforme" 
  | "consumibles";

export type ProductStatus = 
  | "disponible" 
  | "agotado" 
  | "reservado" 
  | "descontinuado";

export type PowerType = 
  | "monofasico" 
  | "trifasico" 
  | "manual" 
  | "neumatico";

export type MaterialType =
  | "acero-inoxidable"
  | "acero-carbono"
  | "plastico-alimenticio"
  | "madera"
  | "ceramica"
  | "policarbonato";

export interface ProductImage {
  url: string;
  alt: string;
  isPrimary: boolean;
}

export interface ProductAttribute {
  name: string;
  value: string;
  unit?: string;
}

export interface ProductSpecification {
  potencia?: string;
  voltaje?: string;
  dimensiones?: string;
  peso?: string;
  material?: MaterialType;
  capacidad?: string;
  alimentacion?: PowerType;
  cuchilla?: string;
  velocidad?: string;
  garantia?: string;
  origen?: string;
}

export interface ProductIncludedItem {
  name: string;
  quantity: number;
}

export interface Product {
  cutType: any;
  species: string;
  description: ReactNode;
  id: string;
  sku: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  cost: number;
  category: ProductCategory;
  subcategory?: string;
  
  // Específico para máquinas
  machineType?: MachineType;
  powerType?: PowerType;
  
  // Específico para cuchillos
  knifeType?: KnifeType;
  bladeLength?: string;
  bladeMaterial?: MaterialType;
  handleMaterial?: MaterialType;
  
  // Específico para cuchillas
  bladeType?: BladeType;
  diameter?: string;
  compatibility?: string[];
  
  // Específico para embalajes
  packagingType?: PackagingType;
  dimensions?: string;
  quantityPerPackage?: number;
  
  // Específico para insumos
  supplyType?: SupplyType;
  
  brand: string;
  model?: string;
  images: ProductImage[];
  stock: number;
  minOrderQuantity: number;
  status: ProductStatus;
  
  specifications: ProductSpecification;
  attributes: ProductAttribute[];
  includedItems?: ProductIncludedItem[];
  tags: string[];
  
  isFeatured: boolean;
  isBestSeller: boolean;
  isNew: boolean;
  
  weight: number;
  volume: number;
  
  createdAt: Date;
  updatedAt: Date;
  
  // Métodos de envío disponibles
  shippingMethods: string[];
  
  // Tiempo de entrega estimado
  estimatedDelivery: string;
  
  // Información de garantía
  warranty?: string;
}

export interface ProductVariant {
  id: string;
  productId: string;
  sku: string;
  name: string;
  price: number;
  originalPrice?: number;
  stock: number;
  attributes: ProductAttribute[];
  images: ProductImage[];
}

export interface ProductFilter {
  category?: ProductCategory;
  subcategory?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
  tags?: string[];
}

export interface PaginatedProducts {
  products: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Types para el carrito
export interface CartProduct extends Product {
  quantity: number;
  selectedVariant?: ProductVariant;
}

// Types para búsqueda
export interface SearchSuggestion {
  type: 'product' | 'category' | 'brand';
  id: string;
  name: string;
  slug?: string;
  image?: string;
}

// Types para categorías
export interface ProductCategoryDetail {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  parentCategory?: string;
  subcategories: string[];
  productCount: number;
}

// Types para marcas
export interface Brand {
  id: string;
  name: string;
  slug: string;
  description?: string;
  logo: string;
  productCount: number;
}