import type { Category, Product } from '@/lib/types';

/**
 * TODO (Fase 2 — integración con proveedor de dropshipping real):
 * Este archivo es el único punto de acceso a los datos de producto que usan
 * los componentes y páginas. Para conectar un proveedor real, sustituye las
 * funciones de este módulo por llamadas a la API del proveedor (o a una capa
 * de datos propia) manteniendo la misma forma de `Product`, de modo que el
 * resto de la aplicación no tenga que cambiar.
 */

export const categories: Category[] = [
  {
    slug: 'alimentacion',
    name: 'Alimentación',
    description: 'Recetas naturales pensadas para el bienestar diario de tu mascota.',
  },
  {
    slug: 'higiene-y-cuidado',
    name: 'Higiene y cuidado',
    description: 'Rituales de cuidado con fórmulas suaves y herramientas de calidad.',
  },
  {
    slug: 'juguetes',
    name: 'Juguetes',
    description: 'Estimulación física y mental con materiales duraderos.',
  },
  {
    slug: 'accesorios-y-transporte',
    name: 'Accesorios y transporte',
    description: 'Piezas pensadas para el día a día y los desplazamientos.',
  },
];

function img(seed: string, n: number): string[] {
  return Array.from({ length: n }, (_, i) => `https://picsum.photos/seed/pawtopia-${seed}-${i}/1200/1200`);
}

export const products: Product[] = [
  // Alimentación
  {
    id: 'p01',
    slug: 'pienso-natural-perro-adulto',
    name: 'Pienso natural para perro adulto',
    category: 'alimentacion',
    price: 42.9,
    shortDescription: 'Receta de pollo fresco y arroz integral, sin cereales de relleno.',
    description:
      'Elaborado con pollo fresco como primer ingrediente y una selección de vegetales de temporada, este pienso está formulado para perros adultos de cualquier tamaño. Sin colorantes ni conservantes artificiales, aporta una nutrición completa y equilibrada para el día a día.',
    images: img('pienso-perro', 3),
    featured: true,
    stock: 24,
    species: ['perro'],
  },
  {
    id: 'p02',
    slug: 'pienso-gato-salmon-adulto',
    name: 'Pienso para gato adulto con salmón',
    category: 'alimentacion',
    price: 38.5,
    shortDescription: 'Salmón salvaje como fuente principal de proteína, rico en omega-3.',
    description:
      'Formulado a partir de salmón salvaje, este alimento favorece un pelaje brillante y una piel sana gracias a su aporte natural de ácidos grasos omega-3. Ideal para gatos adultos con necesidades nutricionales completas.',
    images: img('pienso-gato', 3),
    featured: true,
    stock: 30,
    species: ['gato'],
  },
  {
    id: 'p03',
    slug: 'pack-latas-humedas-gato',
    name: 'Pack de latas húmedas para gato',
    category: 'alimentacion',
    price: 24.0,
    shortDescription: 'Estuche de 12 latas con trozos de carne en salsa natural.',
    description:
      'Doce latas de alimento húmedo elaboradas con carne seleccionada y caldo natural, sin espesantes artificiales. Un complemento ideal para mantener una buena hidratación y variar la dieta de tu gato.',
    images: img('latas-gato', 2),
    stock: 40,
    species: ['gato'],
  },
  {
    id: 'p04',
    slug: 'snacks-adiestramiento-naturales',
    name: 'Snacks naturales para adiestramiento',
    category: 'alimentacion',
    price: 12.9,
    shortDescription: 'Premios de hígado deshidratado, ideales para el refuerzo positivo.',
    description:
      'Snacks de un solo ingrediente, hígado deshidratado lentamente para conservar su sabor y valor nutricional. Su tamaño reducido los hace perfectos para sesiones de adiestramiento y refuerzo positivo.',
    images: img('snacks', 2),
    stock: 55,
    species: ['perro', 'gato'],
  },

  // Higiene y cuidado
  {
    id: 'p05',
    slug: 'champu-avena-piel-sensible',
    name: 'Champú de avena para piel sensible',
    category: 'higiene-y-cuidado',
    price: 16.5,
    shortDescription: 'Fórmula suave con avena coloidal, sin sulfatos agresivos.',
    description:
      'Un champú de uso frecuente formulado con avena coloidal y aloe vera para calmar pieles sensibles o irritadas. Limpia en profundidad sin resecar, dejando el pelaje suave y con un aroma discreto.',
    images: img('champu', 3),
    featured: true,
    stock: 33,
    species: ['perro', 'gato'],
  },
  {
    id: 'p06',
    slug: 'cepillo-doble-cara-premium',
    name: 'Cepillo doble cara premium',
    category: 'higiene-y-cuidado',
    price: 21.0,
    shortDescription: 'Cerdas de púa y de goma en una sola herramienta de mango ergonómico.',
    description:
      'Diseñado con mango de madera y cerdas de doble densidad, este cepillo elimina el pelo suelto y desenreda sin tirar. Su empuñadura ergonómica facilita sesiones de cepillado prolongadas y cómodas.',
    images: img('cepillo', 2),
    stock: 18,
    species: ['perro', 'gato'],
  },
  {
    id: 'p07',
    slug: 'cortaunas-acero-inoxidable',
    name: 'Cortaúñas de acero inoxidable',
    category: 'higiene-y-cuidado',
    price: 14.9,
    shortDescription: 'Corte preciso con tope de seguridad y mango antideslizante.',
    description:
      'Fabricado en acero inoxidable de alta resistencia, incorpora un tope de seguridad para evitar cortes excesivos y un mango antideslizante que facilita el manejo incluso con una sola mano.',
    images: img('cortaunas', 2),
    stock: 27,
    species: ['perro', 'gato'],
  },
  {
    id: 'p08',
    slug: 'toallitas-limpieza-diaria',
    name: 'Toallitas de limpieza diaria',
    category: 'higiene-y-cuidado',
    price: 9.9,
    shortDescription: 'Pack de 80 unidades biodegradables, sin alcohol ni perfume.',
    description:
      'Ideales para la limpieza rápida de patas, orejas y zonas sensibles tras los paseos. Su tejido biodegradable y su fórmula sin alcohol respetan el equilibrio natural de la piel.',
    images: img('toallitas', 2),
    stock: 60,
    species: ['perro', 'gato'],
  },

  // Juguetes
  {
    id: 'p09',
    slug: 'mordedor-cuerda-algodon',
    name: 'Mordedor de cuerda de algodón',
    category: 'juguetes',
    price: 11.9,
    shortDescription: 'Trenzado resistente que ayuda a la limpieza dental durante el juego.',
    description:
      'Elaborado con algodón 100% natural trenzado a mano, este mordedor resiste el tira y afloja mientras ayuda a reducir la placa dental. Apto para perros de todos los tamaños.',
    images: img('mordedor', 2),
    stock: 45,
    species: ['perro'],
  },
  {
    id: 'p10',
    slug: 'pelota-interactiva-recompensas',
    name: 'Pelota interactiva con recompensas',
    category: 'juguetes',
    price: 18.5,
    shortDescription: 'Dispensa premios a medida que rueda, estimula el juego activo.',
    description:
      'Esta pelota libera pequeñas porciones de premio mientras se mueve, fomentando el ejercicio físico y la estimulación mental. Fabricada en caucho de calidad alimentaria, fácil de limpiar.',
    images: img('pelota', 3),
    featured: true,
    stock: 22,
    species: ['perro'],
  },
  {
    id: 'p11',
    slug: 'rascador-gato-sisal',
    name: 'Rascador de sisal de suelo',
    category: 'juguetes',
    price: 34.0,
    shortDescription: 'Estructura estable forrada en sisal natural con base de madera.',
    description:
      'Un rascador vertical forrado en sisal 100% natural, con base de madera maciza que garantiza estabilidad incluso en sesiones intensas. Ayuda a mantener las uñas cuidadas y a proteger el mobiliario.',
    images: img('rascador', 3),
    featured: true,
    stock: 15,
    species: ['gato'],
  },
  {
    id: 'p12',
    slug: 'juguete-inteligencia-comida',
    name: 'Juguete de inteligencia con comida',
    category: 'juguetes',
    price: 22.9,
    shortDescription: 'Circuito de niveles que ralentiza la comida y estimula el olfato.',
    description:
      'Un puzle alimentario con distintos niveles de dificultad que invita a tu mascota a trabajar por su comida, ralentizando la ingesta y aportando enriquecimiento mental diario.',
    images: img('inteligencia', 2),
    stock: 20,
    species: ['perro', 'gato'],
  },

  // Accesorios y transporte
  {
    id: 'p13',
    slug: 'correa-cuero-trenzada',
    name: 'Correa de cuero trenzada',
    category: 'accesorios-y-transporte',
    price: 39.0,
    shortDescription: 'Piel curtida al vegetal con herrajes de latón envejecido.',
    description:
      'Confeccionada en piel curtida al vegetal y trenzada a mano, esta correa combina resistencia y un acabado atemporal. Sus herrajes en latón envejecido añaden un punto de distinción.',
    images: img('correa', 3),
    featured: true,
    stock: 16,
    species: ['perro'],
  },
  {
    id: 'p14',
    slug: 'arnes-ajustable-acolchado',
    name: 'Arnés ajustable acolchado',
    category: 'accesorios-y-transporte',
    price: 32.5,
    shortDescription: 'Diseño en “H” con acolchado transpirable y cuatro puntos de ajuste',
    description:
      'Pensado para repartir la presión de forma uniforme, este arnés cuenta con un acolchado transpirable y cuatro puntos de ajuste para lograr un encaje preciso en cualquier complexión.',
    images: img('arnes', 2),
    stock: 19,
    species: ['perro'],
  },
  {
    id: 'p15',
    slug: 'transportin-rigido-viaje',
    name: 'Transportín rígido de viaje',
    category: 'accesorios-y-transporte',
    price: 58.0,
    compareAtPrice: 69.0,
    shortDescription: 'Estructura ventilada homologada para viajes en coche y avión.',
    description:
      'Fabricado en plástico rígido de alta resistencia, este transportín cuenta con rejillas de ventilación en todo el perímetro y cierres de seguridad homologados para viajes en coche y avión.',
    images: img('transportin', 3),
    stock: 12,
    species: ['perro', 'gato'],
  },
  {
    id: 'p16',
    slug: 'cama-ortopedica-memoria',
    name: 'Cama ortopédica de espuma viscoelástica',
    category: 'accesorios-y-transporte',
    price: 64.9,
    shortDescription: 'Espuma de memoria que reparte el peso y alivia las articulaciones.',
    description:
      'Con núcleo de espuma viscoelástica de alta densidad, esta cama se adapta a la forma del cuerpo y reduce la presión sobre las articulaciones. Funda exterior extraíble y lavable.',
    images: img('cama', 3),
    featured: true,
    stock: 10,
    species: ['perro', 'gato'],
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
