import type { Metadata } from 'next';
import CheckoutForm from '@/components/checkout/CheckoutForm';

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Completa tus datos de envío para finalizar el pedido en Pawtopia.',
};

export default function CheckoutPage() {
  return (
    <div className="container-boutique py-14">
      <header className="mb-10">
        <p className="eyebrow">Paso final</p>
        <h1 className="mt-2 font-display text-3xl text-paper-50 md:text-4xl">Checkout</h1>
      </header>
      <CheckoutForm />
    </div>
  );
}
