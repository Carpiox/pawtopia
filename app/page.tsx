import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import CategoryShowcase from '@/components/home/CategoryShowcase';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import TrustBar from '@/components/home/TrustBar';

export const metadata: Metadata = {
  title: 'Pawtopia — Boutique para mascotas',
  description:
    'Descubre Pawtopia: alimentación, higiene, juguetes y accesorios seleccionados para perros y gatos, con criterio boutique.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <FeaturedProducts />
      <TrustBar />
    </>
  );
}
