'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/lib/types';
import QuantitySelector from './QuantitySelector';

export default function AddToCartPanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [confirmation, setConfirmation] = useState(false);

  function handleAddToCart() {
    addItem(product, quantity);
    setConfirmation(true);
    window.setTimeout(() => setConfirmation(false), 2500);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <QuantitySelector quantity={quantity} onChange={setQuantity} max={product.stock} />
        <span className="text-sm text-paper-100/50">{product.stock} unidades disponibles</span>
      </div>

      <button
        type="button"
        onClick={handleAddToCart}
        className="focus-ring w-full bg-brass-500 py-4 text-sm font-semibold uppercase tracking-widest2 text-forest-950 transition-colors hover:bg-brass-400 sm:w-auto sm:px-10"
      >
        Añadir al carrito
      </button>

      <p role="status" aria-live="polite" className={`text-sm text-brass-300 transition-opacity ${confirmation ? 'opacity-100' : 'opacity-0'}`}>
        {product.name} añadido al carrito.
      </p>
    </div>
  );
}
