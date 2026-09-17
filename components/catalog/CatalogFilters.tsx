'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { categories } from '@/data/products';

const SORT_OPTIONS = [
  { value: '', label: 'Recomendados' },
  { value: 'precio-asc', label: 'Precio: menor a mayor' },
  { value: 'precio-desc', label: 'Precio: mayor a menor' },
];

export default function CatalogFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('categoria') ?? '';
  const activeSort = searchParams.get('orden') ?? '';

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/catalogo${params.toString() ? `?${params.toString()}` : ''}`, { scroll: false });
  }

  return (
    <div className="flex flex-col gap-6 border-b border-paper-100/10 pb-8 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
        <button
          type="button"
          onClick={() => updateParam('categoria', '')}
          className={`focus-ring border px-4 py-2 text-xs uppercase tracking-widest2 transition-colors ${
            activeCategory === ''
              ? 'border-brass-400 text-brass-300'
              : 'border-paper-100/20 text-paper-100/60 hover:border-paper-100/40'
          }`}
          aria-pressed={activeCategory === ''}
        >
          Todas
        </button>
        {categories.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => updateParam('categoria', category.slug)}
            className={`focus-ring border px-4 py-2 text-xs uppercase tracking-widest2 transition-colors ${
              activeCategory === category.slug
                ? 'border-brass-400 text-brass-300'
                : 'border-paper-100/20 text-paper-100/60 hover:border-paper-100/40'
            }`}
            aria-pressed={activeCategory === category.slug}
          >
            {category.name}
          </button>
        ))}
      </div>

      <label className="flex items-center gap-3 text-sm text-paper-100/70">
        <span className="whitespace-nowrap">Ordenar por</span>
        <select
          value={activeSort}
          onChange={(event) => updateParam('orden', event.target.value)}
          className="focus-ring border border-paper-100/20 bg-forest-950 px-3 py-2 text-sm text-paper-100"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
