import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Envíos y devoluciones',
  description: 'Condiciones de envío y devolución de Pawtopia (contenido de ejemplo).',
};

export default function EnviosYDevolucionesPage() {
  return (
    <LegalPage title="Envíos y devoluciones" updatedAt="17 de septiembre de 2026">
      <section>
        <h2 className="font-display text-xl text-paper-50">Plazos de envío</h2>
        <p>
          Los pedidos realizados en Pawtopia se preparan en un plazo de 24 a 48 horas laborables
          y se entregan en un plazo estimado de 2 a 5 días laborables en la península. Este texto
          es un ejemplo y deberá ajustarse a los plazos reales del proveedor logístico.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-paper-50">Gastos de envío</h2>
        <p>
          El coste de envío se calculará en el paso de checkout en función del peso y destino
          del pedido. En este prototipo no se realiza ningún cálculo real.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-paper-50">Devoluciones</h2>
        <p>
          Dispones de 30 días naturales desde la recepción del pedido para solicitar una
          devolución, siempre que el producto se encuentre en su embalaje original y sin usar.
          Los gastos de devolución correrán a cargo del cliente salvo error o defecto de origen.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-paper-50">Cómo solicitar una devolución</h2>
        <p>
          Contacta con nuestro equipo de atención al cliente indicando el número de pedido y el
          motivo de la devolución. Te facilitaremos las instrucciones para gestionarla.
        </p>
      </section>
    </LegalPage>
  );
}
