import React, { useState } from 'react';
import { Maximize2, UploadCloud, CheckCircle2, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/siteContent';

interface GalleryItemEnhanced {
  id: string;
  title: string;
  caption: string;
  context: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  category: 'Personajes' | 'Criaturas' | 'Esculturas' | 'Objetos' | 'Arte digital' | 'Modelos para impresión 3D';
  author: string;
  date: string;
}

const ENHANCED_GALLERY: GalleryItemEnhanced[] = [
  {
    id: 'character-topology',
    title: 'Personaje orgánico en malla editable',
    caption: 'Modelo desarrollado en LOOPA en Modo Edición con topología continua de quads, vértices y aristas visibles.',
    context: 'Modo Edición',
    image: '/assets/aistudio/IMG_7512_fdc4ea52.png',
    imageAlt: 'Personaje 3D modelado en LOOPA mostrado en Modo Edición con malla de vértices y aristas.',
    featured: true,
    category: 'Personajes',
    author: 'Equipo Loopa',
    date: 'Nov 2026'
  },
  {
    id: 'reference-stylus',
    title: 'Modelado sobre plano de referencia',
    caption: 'Construcción de volumen 3D alineado a una imagen de referencia importada, asistida por el menú radial y el gizmo de rotación.',
    context: 'Imagen de referencia',
    image: '/assets/aistudio/IMG_7513_f9f359c6.png',
    imageAlt: 'Objeto 3D modelado en LOOPA sobre un plano de referencia con menú radial y herramientas laterales.',
    category: 'Objetos',
    author: 'Carlos M.',
    date: 'Nov 2026'
  },
  {
    id: 'export-workflow',
    title: 'Escena lista para exportar en OBJ o STL',
    caption: 'Modelo en progreso dentro del espacio de trabajo con el menú Archivo abierto para exportar objeto seleccionado o escena completa.',
    context: 'Exportación STL',
    image: '/assets/aistudio/IMG_7514_4b9b5fb3.png',
    imageAlt: 'Modelo 3D en LOOPA con el menú Archivo desplegado mostrando opciones OBJ, STL, JPG y PNG.',
    category: 'Modelos para impresión 3D',
    author: 'Sofía R.',
    date: 'Oct 2026'
  },
  {
    id: 'object-cube-scene',
    title: 'Escena base en Modo Objeto',
    caption: 'Primitiva cúbica inicial con manipulador 3D de rotación, widget de ejes, jerarquía de escena y transformación numérica.',
    context: 'Modo Objeto',
    image: '/assets/aistudio/IMG_7511_dc2053f1.png',
    imageAlt: 'Escena base de LOOPA con cubo seleccionado, manipulador 3D y panel de jerarquía y transformación.',
    category: 'Esculturas',
    author: 'Daniel K.',
    date: 'Oct 2026'
  }
];

type CategoryFilter = 'Todas' | 'Personajes' | 'Criaturas' | 'Esculturas' | 'Objetos' | 'Arte digital' | 'Modelos para impresión 3D';

interface GallerySectionProps {
  onInspectImage: (image: string, title: string, alt: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onInspectImage }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Todas');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form state
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [cat, setCat] = useState<GalleryItemEnhanced['category']>('Personajes');
  const [desc, setDesc] = useState('');

  const categories: CategoryFilter[] = ['Todas', 'Personajes', 'Criaturas', 'Esculturas', 'Objetos', 'Arte digital', 'Modelos para impresión 3D'];

  const filteredItems = selectedCategory === 'Todas'
    ? ENHANCED_GALLERY
    : ENHANCED_GALLERY.filter(item => item.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitModalOpen(false);
    setTitle('');
    setAuthor('');
    setDesc('');
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section id="galeria" className="border-b border-white/[0.08] bg-[#101215] py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-[#6fe681] tracking-wide">
              Galería de modelos y escenas
            </p>
            <h2 className="mt-2.5 text-2xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Creaciones reales dentro de LOOPA.
            </h2>
            <p className="mt-4 text-base text-[#a1a7b3] leading-relaxed">
              Explora modelos construidos en la aplicación. Filtra por categoría o inspecciona la geometría en detalle.
            </p>
          </div>

          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#5ecd6e]/40 bg-[#16261a] hover:bg-[#1e3323] text-sm font-semibold text-[#6fe681] transition-colors whitespace-nowrap shrink-0"
          >
            <UploadCloud className="w-4 h-4" />
            <span>Enviar mi creación (Próximamente)</span>
          </button>
        </div>

        {submitSuccess && (
          <div className="mt-8 p-4 rounded-xl bg-[#5ecd6e]/15 border border-[#5ecd6e]/40 text-[#6fe681] text-sm flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>¡Creación enviada correctamente! Pronto estará disponible en la galería comunitaria tras la moderación.</span>
          </div>
        )}

        {/* Category filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                selectedCategory === c
                  ? 'bg-[#5ecd6e] text-[#07140a] font-semibold'
                  : 'bg-[#15171c] border border-white/10 text-[#b4b9c4] hover:bg-white/5 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <figure
              key={item.id}
              className={`group rounded-2xl border border-white/[0.08] bg-[#16181d] overflow-hidden flex flex-col transition-colors hover:border-white/20 ${
                item.featured ? 'md:col-span-2' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => onInspectImage(item.image, item.title, item.imageAlt)}
                className="relative w-full text-left overflow-hidden bg-[#111317] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#5ecd6e]"
                aria-label={`Inspeccionar ${item.title}`}
              >
                <div className={`relative w-full overflow-hidden ${item.featured ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.015]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-3 right-3 w-10 h-10 rounded-lg bg-[#0b0c0e]/85 border border-white/15 flex items-center justify-center text-white group-hover:text-[#6fe681] transition-colors">
                    <Maximize2 className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </button>

              <figcaption className="p-6 flex-1 flex flex-col justify-between gap-3">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded bg-black/40 border border-white/10 text-[#6fe681] text-xs font-mono">
                      {item.category}
                    </span>
                    <span className="text-xs text-[#9ca3af]">
                      Por <strong className="text-white">{item.author}</strong> · {item.date}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#a9b0bc] leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* User Submission Modal (Prepared with state and validation) */}
        {isSubmitModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-lg rounded-2xl border border-white/15 bg-[#14161a] p-6 sm:p-8 text-white shadow-2xl">
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="absolute top-4 right-4 text-[#9ca3af] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold mb-2">Enviar tu creación 3D</h3>
              <p className="text-sm text-[#9ca3af] mb-6">
                Estructura preparada para futuras entregas comunitarias con moderación previa antes de su publicación en la galería.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#b4b9c4] mb-1.5">Nombre del modelo</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ej. Criatura alienígena low-poly"
                    className="w-full rounded-xl bg-[#0b0c0e] border border-white/15 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#5ecd6e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#b4b9c4] mb-1.5">Autor</label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Tu nombre o seudónimo"
                    className="w-full rounded-xl bg-[#0b0c0e] border border-white/15 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#5ecd6e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#b4b9c4] mb-1.5">Categoría</label>
                  <select
                    value={cat}
                    onChange={(e) => setCat(e.target.value as GalleryItemEnhanced['category'])}
                    className="w-full rounded-xl bg-[#0b0c0e] border border-white/15 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#5ecd6e]"
                  >
                    <option value="Personajes">Personajes</option>
                    <option value="Criaturas">Criaturas</option>
                    <option value="Esculturas">Esculturas</option>
                    <option value="Objetos">Objetos</option>
                    <option value="Arte digital">Arte digital</option>
                    <option value="Modelos para impresión 3D">Modelos para impresión 3D</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#b4b9c4] mb-1.5">Descripción o detalles de la escena</label>
                  <textarea
                    required
                    rows={3}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Describe cómo creaste el modelo en LOOPA..."
                    className="w-full rounded-xl bg-[#0b0c0e] border border-white/15 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#5ecd6e]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsSubmitModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl border border-white/15 text-sm font-medium text-[#b4b9c4] hover:bg-white/5"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#5ecd6e] text-[#07140a] font-semibold text-sm hover:bg-[#7def8e]"
                  >
                    Enviar para revisión
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
