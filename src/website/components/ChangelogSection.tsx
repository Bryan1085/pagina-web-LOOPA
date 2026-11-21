import React from 'react';
import { Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { CHANGELOG_DATA } from '../data/platformData';

export const ChangelogSection: React.FC = () => {
  return (
    <section id="novedades" className="border-b border-white/[0.08] bg-[#0b0c0e] py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-medium text-[#6fe681] tracking-wide">
            Historial de versiones y mejoras
          </p>
          <h2 className="mt-2.5 text-2xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Novedades en LOOPA
          </h2>
          <p className="mt-4 text-base text-[#a1a7b3] leading-relaxed">
            Sigue de cerca la evolución del software, nuevas herramientas incorporadas, mejoras de rendimiento y correcciones de errores en cada actualización.
          </p>
        </div>

        <div className="mt-12 relative border-l border-white/15 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-12">
          {CHANGELOG_DATA.map((entry, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#15171c] border-2 border-[#5ecd6e] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#5ecd6e]" />
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#14161a] p-6 sm:p-8 hover:border-white/20 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5ecd6e]/15 border border-[#5ecd6e]/30 text-[#6fe681] text-xs font-mono font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      {entry.version}
                    </span>
                    <span className="text-xs font-medium text-[#9ca3af]">
                      {entry.date}
                    </span>
                  </div>

                  <span className={`px-2.5 py-0.5 rounded text-xs font-semibold ${
                    entry.badge === 'Lanzamiento' ? 'bg-[#5ecd6e]/20 text-[#6fe681]' :
                    entry.badge === 'Mejora' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'
                  }`}>
                    {entry.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  {entry.title}
                </h3>
                <p className="mt-2 text-sm text-[#cbd0d8] leading-relaxed">
                  {entry.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-white/[0.08] pt-4">
                  {entry.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#b4b9c4]">
                      <CheckCircle2 className="w-4 h-4 text-[#5ecd6e] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
