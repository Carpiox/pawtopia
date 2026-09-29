'use client';

import Link from 'next/link';
import { useState } from 'react';
import CartIndicator from './CartIndicator';

const NAV_LINKS = [
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/catalogo?categoria=alimentacion', label: 'Alimentación' },
  { href: '/catalogo?categoria=higiene-y-cuidado', label: 'Higiene y cuidado' },
  { href: '/catalogo?categoria=juguetes', label: 'Juguetes' },
  { href: '/catalogo?categoria=accesorios-y-transporte', label: 'Accesorios' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-paper-100/10 bg-forest-950/95 backdrop-blur">
      <div className="container-boutique flex h-20 items-center justify-between">
        <Link href="/" className="focus-ring flex flex-col leading-none">
          <span className="font-display text-2xl tracking-wide text-paper-50">Pawtopia</span>
          <span className="eyebrow mt-1">Boutique para mascotas</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring text-sm text-paper-100/80 transition-colors hover:text-brass-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <CartIndicator />
          </div>
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper-100/20 text-paper-100 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="menu-movil"
          className="border-t border-paper-100/10 bg-forest-950 md:hidden"
          aria-label="Navegación móvil"
        >
          <ul className="container-boutique flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="focus-ring block py-2 text-paper-100/80 hover:text-brass-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <CartIndicator />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
