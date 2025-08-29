export interface CartItem {
  id: string;
  productId: string;
  variantId?: string;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  sku: string;
  stock: number;
  maxQuantity?: number;
}

export interface Cart {
  id: string;
  items: CartItem[];
  total: number;
  subtotal: number;
  discount: number;
  itemCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartSummary {
  itemCount: number;
  total: number;
  subtotal: number;
  discount: number;
}