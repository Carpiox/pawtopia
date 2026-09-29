import type { Metadata } from 'next';
import CartView from '@/components/cart/CartView';

export const metadata: Metadata = {
  title: 'Carrito',
  description: 'Revisa los productos añadidos a tu carrito en Pawtopia antes de finalizar la compra.',
};

export default function CarritoPage() {
  return (
    <div className="container-boutique py-14">
      <CartView />
    </div>
  );
}
