'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import type { Product } from '@/lib/types';
import { cartStore, type CartItem } from './cartStore';

export type { CartItem };

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  isHydrated: boolean;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

function noopSubscribe() {
  return () => {};
}

function getIsHydratedClientSnapshot() {
  return true;
}

function getIsHydratedServerSnapshot() {
  return false;
}

export function CartProvider({ children }: { children: ReactNode }) {
  // El carrito vive fuera de React (context/cartStore.ts) y se sincroniza con
  // localStorage a través de useSyncExternalStore, en vez de leerlo dentro de
  // un efecto y volcarlo con setState (lo que provocaría un renderizado en
  // cascada y no refleja cambios hechos desde otras pestañas).
  const items = useSyncExternalStore(cartStore.subscribe, cartStore.getSnapshot, cartStore.getServerSnapshot);

  // Verdadero solo tras la hidratación en el cliente, para no mostrar datos de
  // localStorage antes de que React haya conciliado el HTML renderizado en el servidor.
  const isHydrated = useSyncExternalStore(
    noopSubscribe,
    getIsHydratedClientSnapshot,
    getIsHydratedServerSnapshot
  );

  const addItem = useCallback((product: Product, quantity = 1) => cartStore.addItem(product, quantity), []);
  const removeItem = useCallback((productId: string) => cartStore.removeItem(productId), []);
  const updateQuantity = useCallback(
    (productId: string, quantity: number) => cartStore.updateQuantity(productId, quantity),
    []
  );
  const clearCart = useCallback(() => cartStore.clearCart(), []);

  const itemCount = useMemo(() => items.reduce((total, item) => total + item.quantity, 0), [items]);
  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({ items, addItem, removeItem, updateQuantity, clearCart, itemCount, subtotal, isHydrated }),
    [items, addItem, removeItem, updateQuantity, clearCart, itemCount, subtotal, isHydrated]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
}
