export interface ChangelogItem {
  version: string;
  date: string;
  title: string;
  badge: 'Lanzamiento' | 'Mejora' | 'Corrección';
  description: string;
  items: string[];
}

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  category: 'Esculpido' | 'Modelado' | 'Retopología' | 'Optimización' | 'Gestión' | 'Importación/Exportación' | 'Precisión';
  status: 'Completado' | 'En desarrollo' | 'Planificado' | 'En investigación';
  progress?: number;
}

export interface TutorialItem {
  id: string;
  title: string;
  category: 'Primeros pasos' | 'Interfaz' | 'Modelado' | 'Esculpido' | 'Retopología' | 'Proyectos' | 'OBJ/STL';
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  duration: string;
  description: string;
  image: string;
  videoUrl?: string;
}

export interface SuggestionItem {
  id: string;
  title: string;
  description: string;
  category: 'Herramientas' | 'Rendimiento' | 'Interfaz' | 'Exportación' | 'Otro';
  date: string;
  author: string;
  status: 'En revisión' | 'Aceptado' | 'En desarrollo' | 'Implementado';
  votes: number;
}

export interface HelpArticle {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface LabExperiment {
  id: string;
  name: string;
  status: 'Prototipo' | 'Investigación' | 'Experimental';
  description: string;
  techTag: string;
  details: string[];
}

export const CHANGELOG_DATA: ChangelogItem[] = [
  {
    version: 'v0.9.5-beta',
    date: '15 de Noviembre, 2026',
    title: 'Soporte mejorado de OBJ/STL y Menú Radial Táctil',
    badge: 'Lanzamiento',
    description: 'Actualización mayor enfocada en la robustez de importación/exportación de mallas 3D y optimización de controles táctiles en navegadores móviles.',
    items: [
      'Incorporación de importación y exportación optimizada para archivos OBJ y STL.',
      'Mejora de la precisión en los gizmos de rotación y traslación 3D.',
      'Corrección de errores menores en la gestión de memoria WebGL al cargar múltiples texturas.'
    ]
  },
  {
    version: 'v0.9.0-beta',
    date: '02 de Noviembre, 2026',
    title: 'Modo Edición por vértices, aristas y caras',
    badge: 'Mejora',
    description: 'Implementación del Modo Edición completo para topología de quads y triángulos con herramientas de extrusión e inserción.',
    items: [
      'Lanzamiento oficial de herramientas Inset, Bevel, Loop Cut y Extrude.',
      'Panel de jerarquía de escena con colecciones y selección múltiple.',
      'Optimización del rendimiento de renderizado en escenas complejas.'
    ]
  },
  {
    version: 'v0.8.5-alpha',
    date: '18 de Octubre, 2026',
    title: 'Lanzamiento de la Demo Pública Web',
    badge: 'Lanzamiento',
    description: 'Primera versión pública de LOOPA en el navegador con soporte para primitivas base y visor WebGL interactivo.',
    items: [
      'Visualizador 3D acelerado por hardware en el navegador.',
      'Plantillas iniciales: Cubo, Esfera, Cilindro, Plano.',
      'Sistema de almacenamiento local en el navegador.'
    ]
  }
];

export const ROADMAP_DATA: RoadmapItem[] = [
  {
    id: 'rm-1',
    title: 'Visor WebGL y Manipuladores 3D',
    description: 'Gizmos interactivos de traslación, rotación y escala con soporte de ejes X, Y, Z.',
    category: 'Precisión',
    status: 'Completado',
    progress: 100
  },
  {
    id: 'rm-2',
    title: 'Modo Edición de Topología (Extrude, Bevel, Loop Cut)',
    description: 'Edición directa sobre vértices, aristas y caras con operaciones poligonales estándar.',
    category: 'Modelado',
    status: 'Completado',
    progress: 100
  },
  {
    id: 'rm-3',
    title: 'Importación y Exportación OBJ / STL',
    description: 'Soporte completo para cargar y descargar archivos 3D estándar para impresión y render.',
    category: 'Importación/Exportación',
    status: 'Completado',
    progress: 100
  },
  {
    id: 'rm-4',
    title: 'Pinceles de Esculpido Digital Multiresolución',
    description: 'Herramientas de esculpido orgánico (Clay, Smooth, Grab, Inflate) con subdivisión dinámica de malla.',
    category: 'Esculpido',
    status: 'En desarrollo',
    progress: 65
  },
  {
    id: 'rm-5',
    title: 'Herramienta de Retopología Manual y Automática',
    description: 'Creación de flujos de quads limpios sobre mallas de alta densidad para animación y optimización.',
    category: 'Retopología',
    status: 'En desarrollo',
    progress: 40
  },
  {
    id: 'rm-6',
    title: 'Modificadores No Destructivos (Mirror, Subdivision, Solidify)',
    description: 'Pila de modificadores aplicables en tiempo real sin alterar la geometría base.',
    category: 'Modelado',
    status: 'Planificado',
    progress: 20
  },
  {
    id: 'rm-7',
    title: 'Optimización y Decimation Automático de Mallas',
    description: 'Reducción inteligente de polígonos conservando la silueta para impresión 3D y juegos web.',
    category: 'Optimización',
    status: 'Planificado',
    progress: 10
  },
  {
    id: 'rm-8',
    title: 'Gestor de Proyectos Locales y Carpetas',
    description: 'Organización de escenas y activos en colecciones locales estructuradas.',
    category: 'Gestión',
    status: 'Planificado',
    progress: 30
  },
  {
    id: 'rm-9',
    title: 'Simulación de Tela y Dinámica de Partículas Web',
    description: 'Algoritmos físicos en WebAssembly para simulación de ropa y colisiones en tiempo real.',
    category: 'Esculpido',
    status: 'En investigación',
    progress: 15
  },
  {
    id: 'rm-10',
    title: 'Inteligencia Artificial de Generación UV y Texturizado',
    description: 'Despliegue UV automático asistido por redes neuronales locales en el navegador.',
    category: 'Optimización',
    status: 'En investigación',
    progress: 5
  }
];

export const TUTORIALS_DATA: TutorialItem[] = [
  {
    id: 'tut-1',
    title: 'Primeros pasos en la interfaz de LOOPA',
    category: 'Primeros pasos',
    level: 'Principiante',
    duration: '5 min',
    description: 'Aprende a moverte por el visor 3D, utilizar la órbita, el zoom y seleccionar tus primeros objetos en el espacio de trabajo.',
    image: '/assets/aistudio/IMG_7511_dc2053f1.png'
  },
  {
    id: 'tut-2',
    title: 'Dominando el Modo Objeto y la Transformación',
    category: 'Interfaz',
    level: 'Principiante',
    duration: '8 min',
    description: 'Utiliza los manipuladores de traslación, rotación y escala, y controla la jerarquía de escena y colecciones.',
    image: '/assets/aistudio/IMG_7511_dc2053f1.png'
  },
  {
    id: 'tut-3',
    title: 'Introducción al Modo Edición: Extrusión y Bevel',
    category: 'Modelado',
    level: 'Intermedio',
    duration: '12 min',
    description: 'Pasa del Modo Objeto al Modo Edición para modificar vértices, aristas y caras. Crea formas complejas usando Extrude e Inset.',
    image: '/assets/aistudio/IMG_7512_fdc4ea52.png'
  },
  {
    id: 'tut-4',
    title: 'Trabajando con imágenes de referencia y menús radiales',
    category: 'Modelado',
    level: 'Intermedio',
    duration: '10 min',
    description: 'Importa planos de referencia JPG o PNG y acelera tu flujo de modelado con el menú radial flotante.',
    image: '/assets/aistudio/IMG_7513_f9f359c6.png'
  },
  {
    id: 'tut-5',
    title: 'Cómo importar y exportar archivos OBJ y STL',
    category: 'OBJ/STL',
    level: 'Principiante',
    duration: '6 min',
    description: 'Guarda tus modelos para impresión 3D o expórtalos a otros programas de renderizado manteniendo la escala y las normales.',
    image: '/assets/aistudio/IMG_7514_4b9b5fb3.png'
  },
  {
    id: 'tut-6',
    title: 'Gestión de proyectos y almacenamiento local',
    category: 'Proyectos',
    level: 'Principiante',
    duration: '7 min',
    description: 'Conoce cómo LOOPA guarda tus escenas de forma segura en el almacenamiento de tu navegador sin perder tu progreso.',
    image: '/assets/aistudio/IMG_7510_dc027df6.png'
  }
];

export const INITIAL_SUGGESTIONS: SuggestionItem[] = [
  {
    id: 'sug-1',
    title: 'Añadir herramienta de simetría (Mirror) en tiempo real',
    description: 'Sería muy útil poder esculpir o modelar con simetría en el eje X para personajes y accesorios.',
    category: 'Herramientas',
    date: '14 Nov 2026',
    author: 'Carlos M.',
    status: 'En desarrollo',
    votes: 142
  },
  {
    id: 'sug-2',
    title: 'Soporte para atajos de teclado personalizables',
    description: 'Permitir reasignar los atajos de teclado para adaptarlos a usuarios acostumbrados a Blender o Maya.',
    category: 'Interfaz',
    date: '12 Nov 2026',
    author: 'Sofía R.',
    status: 'Aceptado',
    votes: 98
  },
  {
    id: 'sug-3',
    title: 'Exportación directa a formato GLTF / GLB con materiales',
    description: 'Incluir soporte para exportar modelos con materiales base y texturas en formato GLTF para web.',
    category: 'Exportación',
    date: '10 Nov 2026',
    author: 'Daniel K.',
    status: 'En revisión',
    votes: 85
  },
  {
    id: 'sug-4',
    title: 'Mejorar el rendimiento al trabajar con mallas de más de 100k polígonos',
    description: 'Optimizar el motor de render WebGL para mantener 60 FPS en escenas densas.',
    category: 'Rendimiento',
    date: '08 Nov 2026',
    author: 'Alejandro P.',
    status: 'Implementado',
    votes: 210
  }
];

export const HELP_ARTICLES: HelpArticle[] = [
  {
    id: 'h-1',
    category: 'General',
    question: '¿Qué es LOOPA?',
    answer: 'LOOPA es una aplicación web independiente de modelado y esculpido 3D en el navegador. Ofrece herramientas de topología, gizmos de transformación, modificadores y compatibilidad con OBJ/STL sin instalaciones.'
  },
  {
    id: 'h-2',
    category: 'Requisitos',
    question: '¿Qué necesito para utilizar LOOPA?',
    answer: 'Solo necesitas un navegador web moderno (Chrome, Firefox, Safari o Edge) con soporte WebGL habilitado. Funciona tanto en computadoras de escritorio como en tablets y dispositivos táctiles.'
  },
  {
    id: 'h-3',
    category: 'Versiones',
    question: '¿Qué diferencia existe entre Demo y Pro?',
    answer: 'La versión Demo es gratuita y accesible directamente desde el navegador para probar las herramientas básicas de modelado. LOOPA Pro (en desarrollo) incluirá aplicación instalable, gestión avanzada de carpetas, proyectos ilimitados y herramientas avanzadas de esculpido.'
  },
  {
    id: 'h-4',
    category: 'Archivos',
    question: '¿Qué formatos 3D son compatibles?',
    answer: 'LOOPA permite importar y exportar archivos en formato estándar OBJ y STL. También puedes cargar imágenes JPG y PNG como planos de referencia.'
  },
  {
    id: 'h-5',
    category: 'Proyectos',
    question: '¿Cómo guardar y respaldar mis proyectos?',
    answer: 'Tus proyectos se guardan automáticamente en el almacenamiento local de tu navegador. Además, puedes exportar tu escena como archivo de proyecto LOOPA o descargarla directamente como OBJ/STL.'
  },
  {
    id: 'h-6',
    category: 'Soporte',
    question: '¿Cómo reportar errores o problemas?',
    answer: 'Puedes utilizar el Centro de Sugerencias y Reportes de esta misma página o escribirnos directamente a nuestro correo de contacto oficial.'
  }
];

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: 'lab-1',
    name: 'Esculpido por Deformación Volumétrica (Voxel Sculpting)',
    status: 'Prototipo',
    description: 'Motor experimental de voxeles en WebAssembly para esculpir sin restricciones de topología ni estiramiento de malla.',
    techTag: 'Wasm + WebGL2',
    details: [
      'Sin restricciones de densidad poligonal inicial.',
      'Operaciones booleanas en tiempo real (unión, resta, intersección).',
      'Experimentación activa con rendimiento en dispositivos móviles.'
    ]
  },
  {
    id: 'lab-2',
    name: 'Iluminación Global en Tiempo Real por Raymarching',
    status: 'Investigación',
    description: 'Pruebas de sombreado avanzado y oclusión ambiental en tiempo real directamente en el visor WebGL.',
    techTag: 'GLSL Shaders',
    details: [
      'Sombras suaves de alta fidelidad sin coste excesivo de CPU.',
      'Reflexiones en pantalla para materiales metálicos y brillantes.',
      'Optimización de shaders para arquitecturas de bajo consumo.'
    ]
  },
  {
    id: 'lab-3',
    name: 'Colaboración en red P2P WebRTC para Escenas 3D',
    status: 'Experimental',
    description: 'Prototipo para conectar múltiples modeladores en una misma sesión 3D compartida sin servidores centrales.',
    techTag: 'WebRTC DataChannels',
    details: [
      'Sincronización de transformaciones de objetos en tiempo real.',
      'Privacidad total mediante cifrado de extremo a extremo.',
      'Pruebas de latencia en conexiones móviles y de banda ancha.'
    ]
  }
];

export const PRO_FEATURES = [
  {
    title: 'Aplicación de escritorio instalable',
    description: 'Versión nativa de alto rendimiento para Windows, macOS y Linux con acceso directo a hardware.'
  },
  {
    title: 'Gestión avanzada de carpetas y proyectos',
    description: 'Organiza tus activos, texturas y versiones de modelos en proyectos estructurados.'
  },
  {
    title: 'Importación y exportación OBJ, STL y GLTF',
    description: 'Soporte completo para formatos profesionales con preservación de materiales y UVs.'
  },
  {
    title: 'Herramientas avanzadas de esculpido y pinceles',
    description: 'Conjunto completo de brochas orgánicas con multiresolución y simetría avanzada.'
  },
  {
    title: 'Capacidad de trabajo sin conexión (Offline-first)',
    description: 'Trabaja con total libertad sin depender de la red y sincroniza tus proyectos cuando desees.'
  }
];
