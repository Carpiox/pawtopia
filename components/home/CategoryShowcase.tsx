import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/data/products';

const CATEGORY_IMAGES: Record<string, string> = {
  alimentacion: 'https://picsum.photos/seed/pawtopia-cat-alimentacion/900/1100',
  'higiene-y-cuidado': 'https://picsum.photos/seed/pawtopia-cat-higiene/900/700',
  juguetes: 'https://picsum.photos/seed/pawtopia-cat-juguetes/900/700',
  'accesorios-y-transporte': 'https://picsum.photos/seed/pawtopia-cat-accesorios/900/1100',
};

export default function CategoryShowcase() {
  return (
    <section className="container-boutique py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="eyebrow">Categorías</p>
          <h2 className="mt-2 font-display text-3xl text-paper-50 md:text-4xl">
            Todo lo esencial, bien elegido
          </h2>
        </div>
        <Link href="/catalogo" className="focus-ring hidden text-sm text-brass-300 hover:text-brass-200 md:block">
          Ver todo el catálogo →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
        {categories.map((category, index) => (
          <Link
            key={category.slug}
            href={`/catalogo?categoria=${category.slug}`}
            className={`focus-ring group relative block overflow-hidden bg-forest-800 ${
              index === 0 || index === 3
                ? 'md:row-span-2 md:aspect-[3/4]'
                : 'aspect-[4/3] md:aspect-auto'
            }`}
          >
            <Image
              src={CATEGORY_IMAGES[category.slug]}
              alt={category.name}
              fill
              sizes="(min-width: 768px) 25vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-display text-xl text-paper-50">{category.name}</h3>
              <p className="mt-1 text-xs text-paper-100/70">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
