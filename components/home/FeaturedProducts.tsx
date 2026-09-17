import Link from 'next/link';
import { getFeaturedProducts } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="container-boutique py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="eyebrow">Selección Pawtopia</p>
          <h2 className="mt-2 font-display text-3xl text-paper-50 md:text-4xl">Productos destacados</h2>
        </div>
        <Link href="/catalogo" className="focus-ring hidden text-sm text-brass-300 hover:text-brass-200 md:block">
          Ver todo el catálogo →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
        {featured.map((product, index) => (
          <ProductCard key={product.id} product={product} priority={index < 2} />
        ))}
      </div>
    </section>
  );
}
