// data/mockProyectos.ts

export interface Proyecto {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  images?: string[]; // Propiedad opcional para la galería de cada proyecto
  date?: string;
  slug?: string;
}

export const mockProyectos: Proyecto[] = [
  {
    id: '1',
    title: 'Jornada de Formación Comunitaria en Tecnología',
    description:
      'Capacitación práctica orientada a jóvenes y emprendedores locales en el uso de herramientas digitales para fortalecer el comercio local y el acceso a oportunidades laborales.',
    category: 'Educación',
    thumbnail:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    ],
    date: '15 de Mayo, 2026',
    slug: 'jornada-formacion-tecnologia',
  },
  {
    id: '2',
    title: 'Recolección y Entrega de Suministros Médicos',
    description:
      'Iniciativa colaborativa coordinada para la dotación de insumos de primera necesidad y material de apoyo a centros de salud asistenciales de la zona.',
    category: 'Salud',
    thumbnail:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop',
    ],
    date: '20 de Junio, 2026',
    slug: 'recoleccion-suministros-medicos',
  },
  {
    id: '3',
    title: 'Recuperación de Espacios Públicos y Canchas',
    description:
      'Trabajo conjunto entre voluntarios y vecinos para la limpieza, pintura y acondicionamiento de áreas deportivas comunitarias para fomentar el deporte en la juventud.',
    category: 'Comunidad',
    thumbnail:
      'https://images.unsplash.com/photo-1517649763962-0c623266ecc0?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517649763962-0c623266ecc0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=800&auto=format&fit=crop',
    ],
    date: '10 de Julio, 2026',
    slug: 'recuperacion-espacios-publicos',
  },
  {
    id: '4',
    title: 'Taller de Liderazgo y Emprendimiento Joven',
    description:
      'Ciclo de conferencias y mesas de trabajo dirigidas a estudiantes universitarios y líderes de comités para potenciar el diseño de proyectos de impacto social.',
    category: 'Liderazgo',
    thumbnail:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=800&auto=format&fit=crop',
    ],
    date: '02 de Agosto, 2026',
    slug: 'taller-liderazgo-emprendimiento',
  },
  {
    id: '5',
    title: 'Campaña Ambiental y Reforestación Urbana',
    description:
      'Jornada ecológica enfocada en la siembra de árboles autóctonos y la concienciación sobre el manejo eficiente de residuos en zonas urbanas.',
    category: 'Ecología',
    thumbnail:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop',
    ],
    date: '18 de Agosto, 2026',
    slug: 'campana-ambiental-reforestacion',
  },
  {
    id: '6',
    title: 'Programa de Alimentación y Apoyo Infantil',
    description:
      'Despliegue logístico para la preparación y distribución de complementos nutricionales a niños y familias vulnerables en alianzas con comedores locales.',
    category: 'Nutrición',
    thumbnail:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop',
    ],
    date: '24 de Agosto, 2026',
    slug: 'programa-alimentacion-infantil',
  },
];