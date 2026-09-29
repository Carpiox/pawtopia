import type { Product } from '@/lib/types';
import ProductCard from '@/components/product/ProductCard';

export default function CatalogGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="py-16 text-center text-paper-100/60">
        No hay productos que coincidan con esta selección todavía.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-14 py-12 md:grid-cols-6">
      {products.map((product, index) => {
        const isEditorial = index % 7 === 0;
        return (
          <div key={product.id} className={isEditorial ? 'col-span-2 md:col-span-3' : 'col-span-1 md:col-span-2'}>
            <ProductCard product={product} aspect={isEditorial ? 'square' : 'portrait'} />
          </div>
        );
      })}
    </div>
  );
}
