'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import CartItemRow from './CartItemRow';
import OrderSummary from './OrderSummary';

export default function CartView() {
  const { items, subtotal, itemCount, isHydrated } = useCart();

  if (isHydrated && items.length === 0) {
    return (
      <div className="py-24 text-center">
        <h1 className="font-display text-3xl text-paper-50">Tu carrito está vacío</h1>
        <p className="mt-3 text-paper-100/60">Descubre nuestra selección y añade tus favoritos.</p>
        <Link
          href="/catalogo"
          className="focus-ring mt-8 inline-flex bg-brass-500 px-8 py-4 text-sm font-semibold uppercase tracking-widest2 text-forest-950 transition-colors hover:bg-brass-400"
        >
          Ir al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 md:grid-cols-3 md:gap-16">
      <div className="md:col-span-2">
        <h1 className="mb-6 font-display text-3xl text-paper-50">Tu carrito</h1>
        {items.map((item) => (
          <CartItemRow key={item.productId} item={item} />
        ))}
      </div>

      <div>
        <OrderSummary
          subtotal={subtotal}
          itemCount={itemCount}
          ctaHref="/checkout"
          ctaLabel="Ir a checkout"
        />
      </div>
    </div>
  );
}
