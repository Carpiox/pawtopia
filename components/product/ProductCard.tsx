import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { formatPrice } from '@/lib/format';
import CategoryBadge from './CategoryBadge';

interface ProductCardProps {
  product: Product;
  aspect?: 'portrait' | 'square';
  priority?: boolean;
}

export default function ProductCard({ product, aspect = 'portrait', priority = false }: ProductCardProps) {
  return (
    <Link
      href={`/producto/${product.slug}`}
      className="focus-ring group block"
      aria-label={`Ver ${product.name}, ${formatPrice(product.price)}`}
    >
      <div
        className={`relative overflow-hidden bg-forest-800 ${
          aspect === 'portrait' ? 'aspect-[4/5]' : 'aspect-square'
        }`}
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {product.compareAtPrice && (
          <span className="absolute left-3 top-3 bg-brass-500 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-forest-950">
            Oferta
          </span>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <CategoryBadge category={product.category} />
        <h3 className="font-display text-lg text-paper-50 group-hover:text-brass-300">
          {product.name}
        </h3>
        <p className="text-sm text-paper-100/60">{product.shortDescription}</p>
        <div className="flex items-baseline gap-2 pt-1">
          <span className="font-body text-base text-brass-300">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-sm text-paper-100/40 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
