import React from 'react';
import { Beaker, Atom, Cpu, Zap, ShieldAlert } from 'lucide-react';
import { LAB_EXPERIMENTS } from '../data/platformData';

export const LoopaLabSection: React.FC = () => {
  return (
    <section id="lab" className="border-b border-white/[0.08] bg-[#070b09] py-16 sm:py-24 relative overflow-hidden">
      {/* Subtle lab green grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#5ecd6e05_1px,transparent_1px),linear-gradient(to_bottom,#5ecd6e05_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5ecd6e]/15 border border-[#5ecd6e]/30 text-[#6fe681] text-xs font-mono font-semibold mb-4">
              <Atom className="w-3.5 h-3.5 animate-spin" />
              Área experimental
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              LOOPA LAB
            </h2>
            <p className="mt-4 text-base text-[#a1a7b3] leading-relaxed">
              Un espacio de pruebas e investigación avanzada donde desarrollamos prototipos de alto rendimiento, motores de voxeles y algoritmos experimentales en WebAssembly y WebGL.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium">
            <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
            <span>Funcionalidades en fase de investigación sin garantía de disponibilidad final.</span>
          </div>
        </div>

        {/* Experiments grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {LAB_EXPERIMENTS.map((exp) => (
            <div
              key={exp.id}
              className="rounded-2xl border border-[#5ecd6e]/20 bg-[#0d1410] p-6 sm:p-8 flex flex-col justify-between hover:border-[#5ecd6e]/40 transition-colors shadow-[0_8px_30px_rgba(94,205,110,0.05)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded bg-[#5ecd6e]/10 text-[#6fe681] text-xs font-mono font-semibold">
                    {exp.techTag}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-amber-500/15 text-amber-300 text-xs font-medium">
                    {exp.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {exp.name}
                </h3>
                <p className="text-sm text-[#b4b9c4] leading-relaxed mb-6">
                  {exp.description}
                </p>

                <ul className="space-y-2 border-t border-white/[0.08] pt-4">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#9ca3af]">
                      <Zap className="w-3.5 h-3.5 text-[#5ecd6e] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#6fe681] font-mono">
                <span>Estado: En pruebas</span>
                <Cpu className="w-4 h-4 text-[#5ecd6e]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
