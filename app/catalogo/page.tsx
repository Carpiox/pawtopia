import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getAllProducts, getCategoryBySlug } from '@/data/products';
import CatalogFilters from '@/components/catalog/CatalogFilters';
import CatalogGrid from '@/components/catalog/CatalogGrid';
import type { CategorySlug } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Catálogo',
  description:
    'Explora el catálogo completo de Pawtopia: alimentación, higiene y cuidado, juguetes y accesorios para perros y gatos.',
};

interface CatalogoPageProps {
  searchParams: { categoria?: string; orden?: string };
}

export default function CatalogoPage({ searchParams }: CatalogoPageProps) {
  const { categoria, orden } = searchParams;

  let products = getAllProducts();

  if (categoria) {
    products = products.filter((p) => p.category === (categoria as CategorySlug));
  }

  if (orden === 'precio-asc') {
    products = [...products].sort((a, b) => a.price - b.price);
  } else if (orden === 'precio-desc') {
    products = [...products].sort((a, b) => b.price - a.price);
  }

  const activeCategory = categoria ? getCategoryBySlug(categoria) : undefined;

  return (
    <div className="container-boutique py-14">
      <header className="mb-10">
        <p className="eyebrow">Catálogo</p>
        <h1 className="mt-2 font-display text-4xl text-paper-50">
          {activeCategory ? activeCategory.name : 'Todos los productos'}
        </h1>
        {activeCategory && (
          <p className="mt-3 max-w-xl text-paper-100/70">{activeCategory.description}</p>
        )}
      </header>

      <Suspense fallback={null}>
        <CatalogFilters />
      </Suspense>

      <CatalogGrid products={products} />
    </div>
  );
}
