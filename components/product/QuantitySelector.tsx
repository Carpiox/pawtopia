'use client';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export default function QuantitySelector({ quantity, onChange, min = 1, max = 99 }: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center border border-paper-100/20" role="group" aria-label="Selector de cantidad">
      <button
        type="button"
        className="focus-ring h-11 w-11 text-lg text-paper-100 transition-colors hover:text-brass-300 disabled:opacity-30"
        onClick={() => onChange(Math.max(min, quantity - 1))}
        disabled={quantity <= min}
        aria-label="Disminuir cantidad"
      >
        −
      </button>
      <span className="w-10 text-center text-base text-paper-50" aria-live="polite">
        {quantity}
      </span>
      <button
        type="button"
        className="focus-ring h-11 w-11 text-lg text-paper-100 transition-colors hover:text-brass-300 disabled:opacity-30"
        onClick={() => onChange(Math.min(max, quantity + 1))}
        disabled={quantity >= max}
        aria-label="Aumentar cantidad"
      >
        +
      </button>
    </div>
  );
}
