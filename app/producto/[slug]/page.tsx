import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProducts, getProductBySlug, getProductsByCategory, categories } from '@/data/products';
import { formatPrice } from '@/lib/format';
import ProductGallery from '@/components/product/ProductGallery';
import AddToCartPanel from '@/components/product/AddToCartPanel';
import CategoryBadge from '@/components/product/CategoryBadge';
import ProductCard from '@/components/product/ProductCard';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata(props: ProductPageProps): Promise<Metadata> {
  const params = await props.params;
  const product = getProductBySlug(params.slug);

  if (!product) {
    return { title: 'Producto no encontrado' };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: product.images[0] ? [{ url: product.images[0] }] : undefined,
    },
  };
}

export default async function ProductPage(props: ProductPageProps) {
  const params = await props.params;
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const categoryName = categories.find((c) => c.slug === product.category)?.name ?? product.category;
  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images,
    sku: product.id,
    category: categoryName,
    offers: {
      '@type': 'Offer',
      url: `https://pawtopia.es/producto/${product.slug}`,
      priceCurrency: 'EUR',
      price: product.price,
      availability:
        product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    },
  };

  return (
    <div className="container-boutique py-14">
      {/* Datos estructurados schema.org para SEO. Los valores son de ejemplo. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Ruta de navegación" className="mb-8 text-sm text-paper-100/50">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="focus-ring hover:text-brass-300">
              Inicio
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={`/catalogo?categoria=${product.category}`} className="focus-ring hover:text-brass-300">
              {categoryName}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-paper-100/80">{product.name}</li>
        </ol>
      </nav>

      <article className="grid gap-10 md:grid-cols-2 md:gap-16">
        <ProductGallery images={product.images} name={product.name} />

        <div>
          <CategoryBadge category={product.category} />
          <h1 className="mt-3 font-display text-3xl text-paper-50 md:text-4xl">{product.name}</h1>
          <p className="mt-4 font-display text-2xl text-brass-300">{formatPrice(product.price)}</p>
          <p className="mt-6 max-w-prose leading-relaxed text-paper-100/70">{product.description}</p>

          <div className="mt-8">
            <AddToCartPanel product={product} />
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="mb-8 font-display text-2xl text-paper-50">También te puede interesar</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
