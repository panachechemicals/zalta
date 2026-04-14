export type ProductCategory =
  | "guest-amenities"
  | "housekeeping-chemicals"
  | "housekeeping-tools"
  | "housekeeping-machines";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: ProductCategory;
  description: string;
  specs: ProductSpec[];
  imageUrl: string;
  relatedIds: string[];
}

export interface Category {
  id: ProductCategory;
  name: string;
  description: string;
  imageUrl: string;
  productCount: number;
}
