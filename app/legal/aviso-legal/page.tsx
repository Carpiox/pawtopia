import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Aviso legal',
  description: 'Aviso legal de Pawtopia (contenido de ejemplo).',
};

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal" updatedAt="17 de septiembre de 2026">
      <section>
        <h2 className="font-display text-xl text-paper-50">Datos identificativos</h2>
        <p>
          Pawtopia Demo, S.L. (nombre de ejemplo) — CIF B00000000 (de ejemplo) — domicilio en
          Calle Ejemplo 123, 28000 Madrid, España. Correo de contacto: hola@pawtopia.es (de ejemplo).
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-paper-50">Objeto</h2>
        <p>
          Este sitio web (pawtopia.es) es un prototipo de demostración y no constituye una tienda
          en funcionamiento. Ningún pedido realizado a través de este sitio será procesado ni
          facturado.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-paper-50">Propiedad intelectual</h2>
        <p>
          Los contenidos, marcas y diseños mostrados son de ejemplo y se utilizan únicamente con
          fines de demostración del prototipo.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-paper-50">Legislación aplicable</h2>
        <p>
          Este aviso legal se redactará conforme a la Ley 34/2002, de Servicios de la Sociedad de
          la Información y de Comercio Electrónico (LSSI-CE), cuando el proyecto pase a producción.
        </p>
      </section>
    </LegalPage>
  );
}
