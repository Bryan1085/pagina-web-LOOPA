import React, { useState } from 'react';
import { BookOpen, Clock, Award, PlayCircle, X } from 'lucide-react';
import { TUTORIALS_DATA, TutorialItem } from '../data/platformData';

type CategoryFilter = 'Todas' | 'Primeros pasos' | 'Interfaz' | 'Modelado' | 'Esculpido' | 'Retopología' | 'Proyectos' | 'OBJ/STL';

export const LearningSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Todas');
  const [activeTutorial, setActiveTutorial] = useState<TutorialItem | null>(null);

  const categories: CategoryFilter[] = ['Todas', 'Primeros pasos', 'Interfaz', 'Modelado', 'Esculpido', 'Retopología', 'Proyectos', 'OBJ/STL'];

  const filteredTutorials = selectedCategory === 'Todas'
    ? TUTORIALS_DATA
    : TUTORIALS_DATA.filter(t => t.category === selectedCategory);

  return (
    <section id="aprender" className="border-b border-white/[0.08] bg-[#0b0c0e] py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-[#6fe681] tracking-wide">
              Documentación y guías paso a paso
            </p>
            <h2 className="mt-2.5 text-2xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Centro de Aprendizaje
            </h2>
            <p className="mt-4 text-base text-[#a1a7b3] leading-relaxed">
              Domina las herramientas de LOOPA desde cero hasta un nivel profesional con nuestros tutoriales sobre topología, gizmos, esculpido e importación OBJ/STL.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#5ecd6e] text-[#07140a] font-semibold'
                    : 'bg-[#14161a] border border-white/10 text-[#b4b9c4] hover:bg-white/5 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tutorials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutorials.map((tut) => (
            <div
              key={tut.id}
              onClick={() => setActiveTutorial(tut)}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-[#14161a] overflow-hidden hover:border-white/25 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video w-full bg-[#111317] overflow-hidden">
                  <img
                    src={tut.image}
                    alt={tut.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14161a] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#0b0c0e]/80 backdrop-blur-md border border-white/15 text-[#6fe681] text-xs font-mono font-medium">
                      {tut.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0b0c0e]/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white group-hover:bg-[#5ecd6e] group-hover:text-[#07140a] transition-colors">
                    <PlayCircle className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-[#9ca3af] mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-[#5ecd6e]" />
                      {tut.level}
                    </span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#5ecd6e]" />
                      {tut.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#6fe681] transition-colors">
                    {tut.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#b4b9c4] line-clamp-2 leading-relaxed">
                    {tut.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex items-center gap-2 text-xs font-semibold text-[#6fe681]">
                <BookOpen className="w-4 h-4" />
                <span>Leer tutorial completo</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tutorial Reader Modal */}
        {activeTutorial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl rounded-2xl border border-white/15 bg-[#14161a] p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setActiveTutorial(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#9ca3af] hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#5ecd6e]/15 border border-[#5ecd6e]/30 text-[#6fe681] text-xs font-mono font-semibold">
                  {activeTutorial.category}
                </span>
                <span className="text-xs text-[#9ca3af]">
                  {activeTutorial.level} · {activeTutorial.duration} de lectura
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {activeTutorial.title}
              </h3>

              <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-6 border border-white/10">
                <img
                  src={activeTutorial.image}
                  alt={activeTutorial.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-base text-[#cbd0d8] leading-relaxed mb-6">
                {activeTutorial.description}
              </p>

              <div className="space-y-4 text-sm text-[#b4b9c4] border-t border-white/[0.08] pt-6">
                <h4 className="font-semibold text-white">Contenido del tutorial:</h4>
                <p>
                  En esta guía aprenderás paso a paso las mejores prácticas para dominar las herramientas de LOOPA en el navegador. Practica con los manipuladores 3D, experimenta con las opciones de topología y guarda tus avances localmente.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Configuración inicial del espacio de trabajo y visualizador WebGL.</li>
                  <li>Aplicación práctica de operaciones y flujos de trabajo recomendados.</li>
                  <li>Consejos de optimización para proyectos complejos y exportación OBJ/STL.</li>
                </ul>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setActiveTutorial(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#5ecd6e] text-[#07140a] font-semibold text-sm hover:bg-[#7def8e] transition-colors"
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
