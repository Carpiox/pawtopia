import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-boutique flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-3 font-display text-4xl text-paper-50">Esta página no existe</h1>
      <p className="mt-4 max-w-md text-paper-100/60">
        Puede que el producto ya no esté disponible o que el enlace sea incorrecto.
      </p>
      <Link
        href="/catalogo"
        className="focus-ring mt-8 inline-flex bg-brass-500 px-8 py-4 text-sm font-semibold uppercase tracking-widest2 text-forest-950 transition-colors hover:bg-brass-400"
      >
        Volver al catálogo
      </Link>
    </div>
  );
}
