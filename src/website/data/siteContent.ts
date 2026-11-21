export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  spanWide?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  context: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const HERO_MEDIA = {
  mainImage: '/assets/aistudio/IMG_7511_dc2053f1.png',
  mainAlt:
    'Interfaz real de LOOPA en Modo Objeto mostrando el visor 3D, manipulador de rotación, jerarquía de escena y panel de transformación.',
  logoHorizontal: '/brand/loopa-logo-horizontal.png',
  logoFull: '/brand/loopa-logo-full.png',
  logoDarkBg: '/assets/aistudio/EC7D4522-D830-4B56-A3CA-A8193A4CAA31_5708ebdc.png',
  symbol: '/brand/loopa-symbol-256.png',
};

export const FEATURES_LIST: FeatureItem[] = [
  {
    id: 'topology-edit',
    number: '01',
    title: 'Modos Objeto y Edición con topología real',
    description:
      'Alterna entre manipular objetos completos o editar directamente su geometría por vértices, aristas y caras dentro del visor 3D.',
    highlights: [
      'Extrusión, Inset, Bevel, Loop Cut, Merge y Fill',
      'Selección de loops, anillos, ruta más corta y edición proporcional',
      'Visualización de orientación de normales y modo Rayos X',
    ],
    image: '/assets/aistudio/IMG_7512_fdc4ea52.png',
    imageAlt:
      'LOOPA en Modo Edición mostrando un modelo 3D con vértices, aristas y caras editables visibles.',
    spanWide: true,
  },
  {
    id: 'gizmos-hierarchy',
    number: '02',
    title: 'Manipuladores 3D, jerarquía y escena',
    description:
      'Mueve, rota y escala con gizmos interactivos sobre los ejes X, Y, Z o de forma libre, acompañados de campos numéricos y panel de jerarquía.',
    highlights: [
      'Panel de escenas y colecciones con visibilidad y bloqueo',
      'Cámara en perspectiva u ortográfica con widget de ejes',
      'Modos de visualización sólido, wireframe, material y rayos X',
    ],
    image: '/assets/aistudio/IMG_7511_dc2053f1.png',
    imageAlt:
      'Visor 3D de LOOPA en Modo Objeto con gizmo de rotación, widget de ejes y panel de jerarquía.',
  },
  {
    id: 'radial-touch',
    number: '03',
    title: 'Menú radial flotante y control táctil',
    description:
      'Accede rápido a acciones frecuentes desde un menú radial personalizable pensado para trabajar con fluidez desde pantalla táctil o teclado.',
    highlights: [
      'Menú radial configurable por modo Objeto y Edición',
      'Modificadores en pantalla (Shift, Ctrl, Alt) y selección múltiple',
      'Historial de deshacer y rehacer integrado en el flujo',
    ],
    image: '/assets/aistudio/IMG_7513_f9f359c6.png',
    imageAlt:
      'Menú radial flotante abierto en LOOPA junto a la barra lateral de herramientas y una imagen de referencia.',
  },
  {
    id: 'io-modifiers',
    number: '04',
    title: 'Modificadores, referencias e intercambio OBJ / STL',
    description:
      'Trabaja con pila de modificadores no destructivos, materiales base, imágenes de referencia JPG o PNG y exportación estándar para tus proyectos.',
    highlights: [
      'Modificadores Mirror, Subdivision, Solidify y Bevel',
      'Importación de imágenes JPG y PNG como planos de referencia',
      'Importación y exportación en formatos OBJ y STL',
    ],
    image: '/assets/aistudio/IMG_7514_4b9b5fb3.png',
    imageAlt:
      'Menú Archivo de LOOPA mostrando opciones de importación y exportación OBJ, STL, JPG y PNG.',
  },
  {
    id: 'templates-storage',
    number: '05',
    title: 'Plantillas iniciales y proyectos locales',
    description:
      'Empieza una escena nueva desde una primitiva base o un espacio vacío y organiza tus modelos en carpetas directamente en tu navegador.',
    highlights: [
      'Plantillas iniciales: Cubo, Esfera, Plano y Proyecto vacío',
      'Primitivas adicionales como Cilindro, Cono, Toroide, Pirámide y Suzanne',
      'Guardado y respaldo local de proyectos en archivo',
    ],
    image: '/assets/aistudio/IMG_7510_dc027df6.png',
    imageAlt:
      'Diálogo Nuevo proyecto en LOOPA con selección de plantillas Cubo, Esfera, Plano y Proyecto vacío.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'character-topology',
    title: 'Personaje orgánico en malla editable',
    caption:
      'Modelo desarrollado en LOOPA en Modo Edición con topología continua de quads, vértices y aristas visibles.',
    context: 'Modo Edición · Topología de vértices y caras',
    image: '/assets/aistudio/IMG_7512_fdc4ea52.png',
    imageAlt:
      'Personaje 3D modelado en LOOPA mostrado en Modo Edición con malla de vértices y aristas.',
    featured: true,
  },
  {
    id: 'reference-stylus',
    title: 'Modelado sobre plano de referencia',
    caption:
      'Construcción de volumen 3D alineado a una imagen de referencia importada, asistida por el menú radial y el gizmo de rotación.',
    context: 'Imagen de referencia · Menú radial activo',
    image: '/assets/aistudio/IMG_7513_f9f359c6.png',
    imageAlt:
      'Objeto 3D modelado en LOOPA sobre un plano de referencia con menú radial y herramientas laterales.',
  },
  {
    id: 'export-workflow',
    title: 'Escena lista para exportar en OBJ o STL',
    caption:
      'Modelo en progreso dentro del espacio de trabajo con el menú Archivo abierto para exportar objeto seleccionado o escena completa.',
    context: 'Archivo · Importación y exportación',
    image: '/assets/aistudio/IMG_7514_4b9b5fb3.png',
    imageAlt:
      'Modelo 3D en LOOPA con el menú Archivo desplegado mostrando opciones OBJ, STL, JPG y PNG.',
  },
  {
    id: 'object-cube-scene',
    title: 'Escena base en Modo Objeto',
    caption:
      'Primitiva cúbica inicial con manipulador 3D de rotación, widget de ejes, jerarquía de escena y transformación numérica.',
    context: 'Modo Objeto · Visor WebGL',
    image: '/assets/aistudio/IMG_7511_dc2053f1.png',
    imageAlt:
      'Escena base de LOOPA con cubo seleccionado, manipulador 3D y panel de jerarquía y transformación.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what-is-loopa',
    question: '¿Qué es LOOPA?',
    answer:
      'LOOPA es una aplicación independiente de modelado 3D en desarrollo que se ejecuta directamente en el navegador. Permite crear y editar escenas 3D tanto en Modo Objeto como en Modo Edición sobre vértices, aristas y caras, con manipuladores 3D, modificadores, materiales y herramientas pensadas tanto para uso táctil como tradicional.',
  },
  {
    id: 'need-install',
    question: '¿Necesito instalar algún programa?',
    answer:
      'No. La demo pública de LOOPA funciona directamente desde el navegador web, sin descargas ni instaladores previos. Tus proyectos se guardan localmente en tu propio navegador y también puedes exportarlos o importarlos como archivo.',
  },
  {
    id: 'is-free',
    question: '¿Puedo utilizar LOOPA gratis?',
    answer:
      'Sí. En esta etapa puedes acceder de forma gratuita a la demo pública abierta para probar las herramientas disponibles, explorar el visor 3D y compartir tu opinión sobre la experiencia.',
  },
  {
    id: 'demo-limits',
    question: '¿Qué limitaciones tiene la demo?',
    answer:
      'LOOPA se encuentra actualmente en desarrollo activo, por lo que la demo pública reúne únicamente el conjunto actual de herramientas de modelado, modificadores, materiales base e importación/exportación OBJ y STL. Los proyectos se almacenan de forma local en el navegador (sin cuentas en la nube) y algunas funciones siguen evolucionando según las pruebas y comentarios de la comunidad.',
  },
  {
    id: 'send-feedback',
    question: '¿Cómo puedo enviar sugerencias?',
    answer:
      'Puedes compartir ideas, reportes de errores o mejoras desde el botón “Enviar comentarios” en la sección de comunidad de esta misma página, o escribirnos directamente al correo de contacto publicado en el sitio.',
  },
];
