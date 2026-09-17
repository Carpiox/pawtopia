import Link from 'next/link';
import { formatPrice } from '@/lib/format';

interface OrderSummaryProps {
  subtotal: number;
  itemCount: number;
  ctaHref?: string;
  ctaLabel?: string;
  children?: React.ReactNode;
}

export default function OrderSummary({ subtotal, itemCount, ctaHref, ctaLabel, children }: OrderSummaryProps) {
  return (
    <aside className="bg-forest-900 p-6 sm:p-8">
      <h2 className="font-display text-xl text-paper-50">Resumen del pedido</h2>

      <dl className="mt-6 space-y-3 text-sm">
        <div className="flex justify-between text-paper-100/70">
          <dt>
            Subtotal ({itemCount} {itemCount === 1 ? 'artículo' : 'artículos'})
          </dt>
          <dd>{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between text-paper-100/70">
          <dt>Envío</dt>
          <dd>Calculado en el siguiente paso</dd>
        </div>
      </dl>

      <div className="mt-6 flex justify-between border-t border-paper-100/10 pt-6">
        <span className="font-display text-lg text-paper-50">Total</span>
        <span className="font-display text-lg text-brass-300">{formatPrice(subtotal)}</span>
      </div>

      {ctaHref && ctaLabel && (
        <Link
          href={ctaHref}
          className="focus-ring mt-8 flex w-full items-center justify-center bg-brass-500 py-4 text-sm font-semibold uppercase tracking-widest2 text-forest-950 transition-colors hover:bg-brass-400"
        >
          {ctaLabel}
        </Link>
      )}

      {children}
    </aside>
  );
}
