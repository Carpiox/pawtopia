export type CategorySlug =
  | 'alimentacion'
  | 'higiene-y-cuidado'
  | 'juguetes'
  | 'accesorios-y-transporte';

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  compareAtPrice?: number;
  shortDescription: string;
  description: string;
  images: string[];
  featured?: boolean;
  stock: number;
  species: ('perro' | 'gato' | 'general')[];
}
