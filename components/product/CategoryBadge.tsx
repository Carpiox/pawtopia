import { categories } from '@/data/products';
import type { CategorySlug } from '@/lib/types';

export default function CategoryBadge({ category }: { category: CategorySlug }) {
  const label = categories.find((c) => c.slug === category)?.name ?? category;

  return (
    <span className="eyebrow inline-flex items-center gap-2 before:h-[3px] before:w-3 before:bg-brass-400">
      {label}
    </span>
  );
}
