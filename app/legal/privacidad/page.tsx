import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Política de privacidad de Pawtopia (contenido de ejemplo).',
};

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad" updatedAt="17 de septiembre de 2026">
      <section>
        <h2 className="font-display text-xl text-paper-50">Responsable del tratamiento</h2>
        <p>
          Pawtopia Demo, S.L. (nombre de ejemplo) es la responsable de los datos que pudieran
          recogerse a través de este sitio. Este prototipo no dispone de backend ni base de datos,
          por lo que actualmente no se almacena ningún dato personal.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-paper-50">Datos que se recogerían</h2>
        <p>
          En una versión en producción, el formulario de checkout recogería datos de envío
          (nombre, dirección, teléfono, correo electrónico) con la finalidad de gestionar el
          pedido. En este prototipo dichos datos no se envían ni almacenan en ningún servidor.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-paper-50">Derechos de las personas usuarias</h2>
        <p>
          Cuando la tienda esté operativa, las personas usuarias podrán ejercer sus derechos de
          acceso, rectificación, supresión, oposición, limitación y portabilidad conforme al
          Reglamento General de Protección de Datos (RGPD).
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-paper-50">Cookies y almacenamiento local</h2>
        <p>
          Este prototipo utiliza el almacenamiento local del navegador (localStorage) únicamente
          para recordar el contenido de tu carrito de compra entre visitas. No se emplean cookies
          de seguimiento ni de publicidad.
        </p>
      </section>
    </LegalPage>
  );
}
