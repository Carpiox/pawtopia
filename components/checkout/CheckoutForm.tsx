'use client';

import { useState, type FormEvent } from 'react';
import { useCart } from '@/context/CartContext';
import OrderSummary from '@/components/cart/OrderSummary';

export default function CheckoutForm() {
  const { items, subtotal, itemCount } = useCart();
  const [paymentNotice, setPaymentNotice] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    /**
     * TODO (Fase 3 — integración de pagos):
     * Este prototipo no procesa pagos reales. Aquí es donde se debe crear la
     * sesión de Stripe Checkout (o Payment Intent) enviando los datos de envío
     * y las líneas del pedido (`items`) a un endpoint del backend, y redirigir
     * al usuario al flujo de pago de Stripe.
     */
    setPaymentNotice(true);
  }

  if (items.length === 0) {
    return (
      <p className="py-16 text-center text-paper-100/60">
        Tu carrito está vacío. Añade productos antes de continuar con el checkout.
      </p>
    );
  }

  return (
    <div className="grid gap-10 md:grid-cols-3 md:gap-16">
      <form className="space-y-8 md:col-span-2" onSubmit={handleSubmit} noValidate>
        <fieldset className="space-y-4">
          <legend className="font-display text-xl text-paper-50">Datos de envío</legend>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nombre completo" name="nombre" autoComplete="name" required />
            <Field label="Correo electrónico" name="email" type="email" autoComplete="email" required />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" required />
            <Field label="Código postal" name="codigoPostal" autoComplete="postal-code" required />
          </div>

          <Field label="Dirección" name="direccion" autoComplete="street-address" required />

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Ciudad" name="ciudad" autoComplete="address-level2" required />
            <Field label="Provincia" name="provincia" autoComplete="address-level1" required />
          </div>

          <label className="block text-sm text-paper-100/70">
            País
            <select
              name="pais"
              defaultValue="España"
              autoComplete="country-name"
              className="focus-ring mt-2 block w-full border border-paper-100/20 bg-forest-950 px-4 py-3 text-paper-50"
            >
              <option value="España">España</option>
              <option value="Portugal">Portugal</option>
              <option value="Francia">Francia</option>
            </select>
          </label>

          <label className="block text-sm text-paper-100/70">
            Notas de entrega (opcional)
            <textarea
              name="notas"
              rows={3}
              className="focus-ring mt-2 block w-full border border-paper-100/20 bg-forest-950 px-4 py-3 text-paper-50"
            />
          </label>
        </fieldset>

        <div>
          <button
            type="submit"
            className="focus-ring w-full bg-brass-500 py-4 text-sm font-semibold uppercase tracking-widest2 text-forest-950 transition-colors hover:bg-brass-400 sm:w-auto sm:px-10"
          >
            Finalizar pedido
          </button>

          {paymentNotice && (
            <p
              role="status"
              className="mt-4 border border-brass-400/40 bg-brass-400/10 px-5 py-4 text-sm text-brass-200"
            >
              Pago con tarjeta próximamente (Stripe). Este prototipo no procesa pagos reales todavía.
            </p>
          )}
        </div>
      </form>

      <div>
        <OrderSummary subtotal={subtotal} itemCount={itemCount} />
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = 'text',
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm text-paper-100/70">
      {label}
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        required={required}
        className="focus-ring mt-2 block w-full border border-paper-100/20 bg-forest-950 px-4 py-3 text-paper-50"
      />
    </label>
  );
}
