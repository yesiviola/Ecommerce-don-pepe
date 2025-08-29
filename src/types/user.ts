export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  role: 'customer' | 'wholesaler' | 'admin';
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Customer extends User {
  addresses: Address[];
  defaultShippingAddress?: string;
  defaultBillingAddress?: string;
  wishlist: string[];
  orderHistory: string[];
}

export interface Wholesaler extends User {
  companyName: string;
  taxId: string;
  businessAddress: Address;
  businessPhone: string;
  businessType: string;
  categoryInterest: string[];
  monthlyVolume?: string;
}

export interface Address {
  id: string;
  type: 'shipping' | 'billing';
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
}