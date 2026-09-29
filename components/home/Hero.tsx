import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-paper-100/10">
      <div className="container-boutique grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="order-2 md:order-1">
          <p className="eyebrow">Selección curada · Perros y gatos</p>
          <h1 className="mt-4 max-w-lg font-display text-4xl leading-tight text-paper-50 md:text-5xl lg:text-6xl">
            El cuidado de tu mascota, con el mismo criterio que el tuyo propio
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-paper-100/70">
            En Pawtopia seleccionamos alimentación, higiene, juguetes y accesorios
            de calidad contrastada. Sin ruido, sin exceso: solo lo que tu perro o
            gato realmente necesita.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/catalogo"
              className="focus-ring inline-flex items-center bg-brass-500 px-8 py-4 text-sm font-semibold uppercase tracking-widest2 text-forest-950 transition-colors hover:bg-brass-400"
            >
              Explorar catálogo
            </Link>
            <Link
              href="/catalogo?categoria=alimentacion"
              className="focus-ring inline-flex items-center border border-paper-100/30 px-8 py-4 text-sm font-semibold uppercase tracking-widest2 text-paper-100 transition-colors hover:border-brass-400 hover:text-brass-300"
            >
              Ver alimentación
            </Link>
          </div>
        </div>

        <div className="relative order-1 aspect-[4/5] w-full overflow-hidden md:order-2">
          <Image
            src="https://picsum.photos/seed/pawtopia-hero/1200/1500"
            alt="Perro y gato descansando sobre un accesorio Pawtopia"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
