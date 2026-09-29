/**
 * TODO: Textos de ejemplo (placeholder).
 * Estas afirmaciones (plazos de envío, medios de pago, política de devoluciones)
 * deben sustituirse por la información real una vez definido el proveedor logístico
 * y la pasarela de pago definitivos.
 */
const TRUST_ITEMS = [
  {
    title: 'Envío rápido',
    description: 'Pedidos en 24–48h a toda España (placeholder).',
  },
  {
    title: 'Pago seguro',
    description: 'Próximamente, pago con tarjeta a través de Stripe (placeholder).',
  },
  {
    title: 'Devoluciones fáciles',
    description: '30 días para cambios y devoluciones (placeholder).',
  },
  {
    title: 'Atención cercana',
    description: 'Resolvemos tus dudas antes y después de la compra (placeholder).',
  },
];

export default function TrustBar() {
  return (
    <section className="hairline bg-forest-900">
      <div className="container-boutique grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
        {TRUST_ITEMS.map((item) => (
          <div key={item.title}>
            <h3 className="font-display text-lg text-paper-50">{item.title}</h3>
            <p className="mt-2 text-sm text-paper-100/60">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
