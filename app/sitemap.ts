import type { MetadataRoute } from 'next';
import { getAllProducts } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pawtopia.es';

  const staticRoutes = [
    '',
    '/catalogo',
    '/carrito',
    '/checkout',
    '/legal/envios-y-devoluciones',
    '/legal/aviso-legal',
    '/legal/privacidad',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const productRoutes = getAllProducts().map((product) => ({
    url: `${baseUrl}/producto/${product.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes];
}
