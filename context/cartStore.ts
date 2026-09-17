import type { Product } from '@/lib/types';

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

type Listener = () => void;

const STORAGE_KEY = 'pawtopia:cart';

let items: CartItem[] = [];
let hydrated = false;
const listeners = new Set<Listener>();

function emit() {
  for (const listener of listeners) listener();
}

function persist() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Si el almacenamiento falla (modo privado, cuota agotada) el carrito sigue funcionando en memoria.
  }
}

function ensureHydrated() {
  if (hydrated || typeof window === 'undefined') return;
  hydrated = true;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      items = JSON.parse(stored);
    }
  } catch {
    // localStorage no disponible o datos corruptos: se ignora y se parte de un carrito vacío.
  }
}

export const cartStore = {
  subscribe(listener: Listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },

  getSnapshot(): CartItem[] {
    ensureHydrated();
    return items;
  },

  getServerSnapshot(): CartItem[] {
    return items;
  },

  addItem(product: Product, quantity = 1) {
    ensureHydrated();
    const existing = items.find((item) => item.productId === product.id);
    items = existing
      ? items.map((item) =>
          item.productId === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      : [
          ...items,
          {
            productId: product.id,
            slug: product.slug,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity,
          },
        ];
    persist();
    emit();
  },

  removeItem(productId: string) {
    ensureHydrated();
    items = items.filter((item) => item.productId !== productId);
    persist();
    emit();
  },

  updateQuantity(productId: string, quantity: number) {
    ensureHydrated();
    items =
      quantity <= 0
        ? items.filter((item) => item.productId !== productId)
        : items.map((item) => (item.productId === productId ? { ...item, quantity } : item));
    persist();
    emit();
  },

  clearCart() {
    ensureHydrated();
    items = [];
    persist();
    emit();
  },
};
