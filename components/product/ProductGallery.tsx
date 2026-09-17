'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden bg-forest-800">
        <Image
          src={images[activeIndex]}
          alt={`${name} — imagen ${activeIndex + 1} de ${images.length}`}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex gap-3" role="tablist" aria-label="Miniaturas del producto">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Ver imagen ${index + 1} de ${name}`}
              onClick={() => setActiveIndex(index)}
              className={`focus-ring relative h-20 w-20 overflow-hidden border transition-colors ${
                index === activeIndex ? 'border-brass-400' : 'border-paper-100/20'
              }`}
            >
              <Image src={image} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
