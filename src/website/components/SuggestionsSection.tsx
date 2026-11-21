import React, { useState } from 'react';
import { ThumbsUp, PlusCircle, MessageSquare, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';
import { INITIAL_SUGGESTIONS, SuggestionItem } from '../data/platformData';

export const SuggestionsSection: React.FC = () => {
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>(INITIAL_SUGGESTIONS);
  const [votedIds, setVotedIds] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newCategory, setNewCategory] = useState<SuggestionItem['category']>('Herramientas');
  const [newAuthor, setNewAuthor] = useState('');
  const [successNotice, setSuccessNotice] = useState(false);

  const handleVote = (id: string) => {
    if (votedIds.includes(id)) return;
    setSuggestions(prev => prev.map(s => s.id === id ? { ...s, votes: s.votes + 1 } : s));
    setVotedIds(prev => [...prev, id]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDesc.trim() || !newAuthor.trim()) return;

    const newItem: SuggestionItem = {
      id: `sug-${Date.now()}`,
      title: newTitle.trim(),
      description: newDesc.trim(),
      category: newCategory,
      date: 'Hoy',
      author: newAuthor.trim(),
      status: 'En revisión',
      votes: 1
    };

    setSuggestions([newItem, ...suggestions]);
    setNewTitle('');
    setNewDesc('');
    setNewAuthor('');
    setIsModalOpen(false);
    setSuccessNotice(true);
    setTimeout(() => setSuccessNotice(false), 5000);
  };

  const getStatusBadge = (status: SuggestionItem['status']) => {
    switch (status) {
      case 'Implementado':
        return <span className="px-2.5 py-0.5 rounded bg-[#5ecd6e]/20 text-[#6fe681] text-xs font-semibold">Implementado</span>;
      case 'En desarrollo':
        return <span className="px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-400 text-xs font-semibold">En desarrollo</span>;
      case 'Aceptado':
        return <span className="px-2.5 py-0.5 rounded bg-purple-500/20 text-purple-400 text-xs font-semibold">Aceptado</span>;
      case 'En revisión':
        return <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-xs font-semibold">En revisión</span>;
    }
  };

  return (
    <section id="sugerencias" className="border-b border-white/[0.08] bg-[#0b0c0e] py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-[#6fe681] tracking-wide">
              Participa en el desarrollo de LOOPA
            </p>
            <h2 className="mt-2.5 text-2xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Centro de Sugerencias y Votación
            </h2>
            <p className="mt-4 text-base text-[#a1a7b3] leading-relaxed">
              Propón nuevas herramientas, reporta errores o vota por las propuestas de la comunidad que consideres prioritarias para el futuro de LOOPA.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#5ecd6e] hover:bg-[#7def8e] text-[#07140a] text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Enviar nueva propuesta</span>
          </button>
        </div>

        {successNotice && (
          <div className="mt-8 p-4 rounded-xl bg-[#5ecd6e]/15 border border-[#5ecd6e]/40 text-[#6fe681] text-sm flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>¡Propuesta enviada con éxito! Ha sido agregada al tablón y está pendiente de revisión por el equipo.</span>
          </div>
        )}

        {/* Suggestions List */}
        <div className="mt-10 space-y-4">
          {suggestions.map((sug) => {
            const hasVoted = votedIds.includes(sug.id);
            return (
              <div
                key={sug.id}
                className="rounded-2xl border border-white/10 bg-[#14161a] p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  {/* Vote button */}
                  <button
                    onClick={() => handleVote(sug.id)}
                    disabled={hasVoted}
                    className={`flex flex-col items-center justify-center min-w-[64px] px-3 py-3 rounded-xl border transition-colors ${
                      hasVoted
                        ? 'bg-[#5ecd6e]/20 border-[#5ecd6e] text-[#6fe681]'
                        : 'bg-[#1a1c23] border-white/15 text-white hover:border-[#5ecd6e]'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4 mb-1" />
                    <span className="text-xs font-mono font-bold">{sug.votes}</span>
                  </button>

                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="px-2.5 py-0.5 rounded bg-black/40 border border-white/10 text-[#9ca3af] text-xs font-mono">
                        {sug.category}
                      </span>
                      {getStatusBadge(sug.status)}
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {sug.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#b4b9c4] leading-relaxed">
                      {sug.description}
                    </p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-[#9ca3af]">
                      <span>Por <strong className="text-white">{sug.author}</strong></span>
                      <span>·</span>
                      <span>{sug.date}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2 text-xs text-[#9ca3af] bg-black/30 px-3 py-2 rounded-lg border border-white/5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#5ecd6e]" />
                  <span>Sugerencia comunitaria</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* New Suggestion Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-lg rounded-2xl border border-white/15 bg-[#14161a] p-6 sm:p-8 text-white shadow-2xl">
              <h3 className="text-xl font-bold mb-2">Nueva propuesta o sugerencia</h3>
              <p className="text-sm text-[#9ca3af] mb-6">
                Comparte tu idea para mejorar LOOPA. Las propuestas son revisadas periódicamente.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#b4b9c4] mb-1.5">Tu nombre o seudónimo</label>
                  <input
                    type="text"
                    required
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="Ej. Ana Modelador"
                    className="w-full rounded-xl bg-[#0b0c0e] border border-white/15 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#5ecd6e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#b4b9c4] mb-1.5">Título de la propuesta</label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Ej. Añadir soporte para pincel de inflado"
                    className="w-full rounded-xl bg-[#0b0c0e] border border-white/15 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#5ecd6e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#b4b9c4] mb-1.5">Categoría</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as SuggestionItem['category'])}
                    className="w-full rounded-xl bg-[#0b0c0e] border border-white/15 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#5ecd6e]"
                  >
                    <option value="Herramientas">Herramientas</option>
                    <option value="Rendimiento">Rendimiento</option>
                    <option value="Interfaz">Interfaz</option>
                    <option value="Exportación">Exportación</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#b4b9c4] mb-1.5">Descripción detallada</label>
                  <textarea
                    required
                    rows={4}
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    placeholder="Explica por qué esta función sería útil y cómo imaginas su funcionamiento..."
                    className="w-full rounded-xl bg-[#0b0c0e] border border-white/15 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#5ecd6e]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl border border-white/15 text-sm font-medium text-[#b4b9c4] hover:bg-white/5 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#5ecd6e] text-[#07140a] font-semibold text-sm hover:bg-[#7def8e] transition-colors"
                  >
                    Publicar propuesta
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
