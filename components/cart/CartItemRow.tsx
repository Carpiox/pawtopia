'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart, type CartItem } from '@/context/CartContext';
import { formatPrice } from '@/lib/format';
import QuantitySelector from '@/components/product/QuantitySelector';

export default function CartItemRow({ item }: { item: CartItem }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 border-b border-paper-100/10 py-6 sm:gap-6">
      <Link href={`/producto/${item.slug}`} className="focus-ring relative h-24 w-24 shrink-0 overflow-hidden bg-forest-800 sm:h-32 sm:w-32">
        <Image src={item.image} alt={item.name} fill sizes="128px" className="object-cover" />
      </Link>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex justify-between gap-4">
          <Link href={`/producto/${item.slug}`} className="focus-ring font-display text-lg text-paper-50 hover:text-brass-300">
            {item.name}
          </Link>
          <span className="whitespace-nowrap text-sm text-paper-100/70">{formatPrice(item.price)}</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <QuantitySelector
            quantity={item.quantity}
            onChange={(quantity) => updateQuantity(item.productId, quantity)}
          />
          <button
            type="button"
            onClick={() => removeItem(item.productId)}
            className="focus-ring text-xs uppercase tracking-widest2 text-paper-100/50 hover:text-brass-300"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
