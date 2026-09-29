'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartIndicator() {
  const { itemCount, isHydrated } = useCart();

  return (
    <Link
      href="/carrito"
      className="focus-ring group relative inline-flex items-center gap-2 rounded-full border border-paper-100/20 px-4 py-2 text-sm text-paper-100 transition-colors hover:border-brass-400 hover:text-brass-300"
      aria-label={`Carrito de la compra, ${itemCount} ${itemCount === 1 ? 'producto' : 'productos'}`}
    >
      <span className="font-body">Carrito</span>
      <span
        className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brass-500 px-1 text-xs font-semibold text-forest-950"
        aria-hidden="true"
      >
        {isHydrated ? itemCount : 0}
      </span>
    </Link>
  );
}
