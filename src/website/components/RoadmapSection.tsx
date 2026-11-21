import React, { useState } from 'react';
import { Compass, CheckCircle, Clock, Lightbulb, Beaker } from 'lucide-react';
import { ROADMAP_DATA, RoadmapItem } from '../data/platformData';

type StatusFilter = 'Todos' | 'Completado' | 'En desarrollo' | 'Planificado' | 'En investigación';

export const RoadmapSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<StatusFilter>('Todos');

  const filteredItems = activeFilter === 'Todos' 
    ? ROADMAP_DATA 
    : ROADMAP_DATA.filter(item => item.status === activeFilter);

  const getStatusBadge = (status: RoadmapItem['status']) => {
    switch (status) {
      case 'Completado':
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#5ecd6e]/15 text-[#6fe681] text-xs font-medium"><CheckCircle className="w-3.5 h-3.5" /> Completado</span>;
      case 'En desarrollo':
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-400 text-xs font-medium"><Clock className="w-3.5 h-3.5" /> En desarrollo</span>;
      case 'Planificado':
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-400 text-xs font-medium"><Lightbulb className="w-3.5 h-3.5" /> Planificado</span>;
      case 'En investigación':
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-purple-500/15 text-purple-400 text-xs font-medium"><Beaker className="w-3.5 h-3.5" /> En investigación</span>;
    }
  };

  return (
    <section id="roadmap" className="border-b border-white/[0.08] bg-[#0b0c0e] py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-[#6fe681] tracking-wide">
              Visión y futuro del software
            </p>
            <h2 className="mt-2.5 text-2xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Roadmap de LOOPA
            </h2>
            <p className="mt-4 text-base text-[#a1a7b3] leading-relaxed">
              Conoce las funcionalidades en desarrollo, planificadas e investigadas para consolidar LOOPA como un referente en modelado y esculpido 3D en el navegador.
            </p>
          </div>

          {/* Status filters */}
          <div className="flex flex-wrap gap-2">
            {(['Todos', 'Completado', 'En desarrollo', 'Planificado', 'En investigación'] as StatusFilter[]).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-[#5ecd6e] text-[#07140a] font-semibold'
                    : 'bg-[#14161a] border border-white/10 text-[#b4b9c4] hover:bg-white/5 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Roadmap Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/10 bg-[#14161a] p-6 flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded bg-black/40 border border-white/10 text-[#9ca3af] text-xs font-mono">
                    {item.category}
                  </span>
                  {getStatusBadge(item.status)}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#b4b9c4] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.progress !== undefined && (
                <div className="mt-6 pt-4 border-t border-white/[0.08]">
                  <div className="flex justify-between items-center text-xs text-[#9ca3af] mb-1.5 font-medium">
                    <span>Progreso estimado</span>
                    <span className="font-mono text-white">{item.progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-black/50 overflow-hidden">
                    <div
                      className="h-full bg-[#5ecd6e] rounded-full transition-all duration-500"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
