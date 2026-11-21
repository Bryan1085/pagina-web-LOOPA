import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle, LifeBuoy } from 'lucide-react';
import { HELP_ARTICLES } from '../data/platformData';

export const HelpCenterSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>('h-1');

  const filteredArticles = HELP_ARTICLES.filter(
    art =>
      art.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="ayuda" className="border-b border-white/[0.08] bg-[#0b0c0e] py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-medium text-[#6fe681] tracking-wide">
            Preguntas frecuentes y soporte
          </p>
          <h2 className="mt-2.5 text-2xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Centro de Ayuda
          </h2>
          <p className="mt-4 text-base text-[#a1a7b3] leading-relaxed">
            Resuelve tus dudas sobre compatibilidad de formatos, almacenamiento local, diferencias entre versiones y uso de la demo pública de LOOPA.
          </p>

          {/* Search bar */}
          <div className="mt-8 relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar pregunta o palabra clave (ej. OBJ, guardar, pro)..."
              className="w-full rounded-2xl bg-[#14161a] border border-white/15 pl-12 pr-4 py-3.5 text-sm text-white placeholder-[#7a808c] focus:outline-none focus:ring-2 focus:ring-[#5ecd6e]"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12 text-[#9ca3af]">
              No se encontraron artículos que coincidan con tu búsqueda.
            </div>
          ) : (
            filteredArticles.map((art) => {
              const isOpen = openId === art.id;
              return (
                <div
                  key={art.id}
                  className="rounded-2xl border border-white/10 bg-[#14161a] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : art.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded bg-black/40 border border-white/10 text-[#6fe681] text-xs font-mono">
                        {art.category}
                      </span>
                      <span className="text-base font-semibold text-white">
                        {art.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#9ca3af] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#5ecd6e]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#cbd0d8] leading-relaxed border-t border-white/[0.06] pt-4">
                      {art.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
