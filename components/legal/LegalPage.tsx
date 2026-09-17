import type { ReactNode } from 'react';

/**
 * NOTA: El contenido de las páginas legales de este prototipo es de ejemplo
 * (Lorem-style) y no tiene validez legal. Antes de publicar la tienda, este
 * texto debe redactarlo un profesional (o el departamento legal
 * correspondiente) conforme a la normativa aplicable (LSSI-CE, RGPD, etc.).
 */

export default function LegalPage({ title, updatedAt, children }: { title: string; updatedAt: string; children: ReactNode }) {
  return (
    <div className="container-boutique max-w-3xl py-14">
      <p className="eyebrow">Información legal</p>
      <h1 className="mt-2 font-display text-3xl text-paper-50 md:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-paper-100/50">Última actualización: {updatedAt}</p>
      <div className="prose-legal mt-10 space-y-6 leading-relaxed text-paper-100/70">{children}</div>
    </div>
  );
}
