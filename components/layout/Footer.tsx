import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="hairline mt-24 bg-forest-900">
      <div className="container-boutique grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="font-display text-2xl text-paper-50">Pawtopia</span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper-100/70">
            Una selección curada de alimentación, cuidado y accesorios para mascotas,
            pensada con el mismo criterio con el que cuidas cada detalle de tu casa.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest2 text-paper-50">
            Tienda
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-paper-100/70">
            <li>
              <Link href="/catalogo" className="focus-ring hover:text-brass-300">
                Catálogo completo
              </Link>
            </li>
            <li>
              <Link href="/carrito" className="focus-ring hover:text-brass-300">
                Carrito
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest2 text-paper-50">
            Información legal
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-paper-100/70">
            <li>
              <Link href="/legal/envios-y-devoluciones" className="focus-ring hover:text-brass-300">
                Envíos y devoluciones
              </Link>
            </li>
            <li>
              <Link href="/legal/aviso-legal" className="focus-ring hover:text-brass-300">
                Aviso legal
              </Link>
            </li>
            <li>
              <Link href="/legal/privacidad" className="focus-ring hover:text-brass-300">
                Privacidad
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hairline">
        <div className="container-boutique flex flex-col gap-2 py-6 text-xs text-paper-100/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Pawtopia. Prototipo de demostración — pawtopia.es</p>
          <p>Todos los productos y precios son de ejemplo.</p>
        </div>
      </div>
    </footer>
  );
}
