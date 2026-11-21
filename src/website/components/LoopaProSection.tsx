import React, { useState } from 'react';
import { ShieldCheck, Check, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { PRO_FEATURES } from '../data/platformData';

export const LoopaProSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInterest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section id="pro" className="border-b border-white/[0.08] bg-[#0b0c0e] py-16 sm:py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[400px] bg-[radial-gradient(ellipse_60%_40%_at_50%_90%,rgba(94,205,110,0.08),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5ecd6e]/15 border border-[#5ecd6e]/30 text-[#6fe681] text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Futura versión completa
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
            LOOPA Pro
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#b4b9c4] leading-relaxed">
            Diseñado para modeladores exigentes y estudios profesionales. Una evolución con aplicación instalable de escritorio, proyectos ilimitados y herramientas avanzadas de esculpido.
          </p>
        </div>

        {/* Pro features grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRO_FEATURES.map((feat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-[#14161a] p-6 hover:border-white/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#5ecd6e]/15 border border-[#5ecd6e]/30 flex items-center justify-center text-[#6fe681] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
              <p className="text-sm text-[#b4b9c4] leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-[#14161a] overflow-hidden p-6 sm:p-10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Comparativa entre versiones
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs font-semibold text-[#9ca3af]">
                  <th className="py-4 px-4">Capacidad o Característica</th>
                  <th className="py-4 px-4 text-center text-[#6fe681]">LOOPA Demo (Actual)</th>
                  <th className="py-4 px-4 text-center text-white">LOOPA Pro (Próximamente)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-sm">
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Acceso desde navegador web</td>
                  <td className="py-4 px-4 text-center text-[#6fe681] font-bold">Sí (Gratis)</td>
                  <td className="py-4 px-4 text-center text-white">Sí</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Aplicación instalable de escritorio</td>
                  <td className="py-4 px-4 text-center text-[#7a808c]">—</td>
                  <td className="py-4 px-4 text-center text-[#6fe681] font-bold">Sí (Windows, Mac, Linux)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Importación y exportación OBJ / STL</td>
                  <td className="py-4 px-4 text-center text-[#6fe681]">Sí</td>
                  <td className="py-4 px-4 text-center text-[#6fe681]">Sí (Con GLTF / FBX)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Gestión avanzada de carpetas y proyectos</td>
                  <td className="py-4 px-4 text-center text-[#7a808c]">Básico local</td>
                  <td className="py-4 px-4 text-center text-[#6fe681] font-bold">Avanzado</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Herramientas de esculpido orgánico</td>
                  <td className="py-4 px-4 text-center text-[#7a808c]">En desarrollo</td>
                  <td className="py-4 px-4 text-center text-[#6fe681] font-bold">Completo (Multiresolución)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Interest Registration Form */}
        <div className="mt-16 max-w-xl mx-auto rounded-3xl border border-[#5ecd6e]/30 bg-gradient-to-b from-[#161e18] to-[#121418] p-8 text-center shadow-xl">
          <h3 className="text-xl font-bold text-white">
            ¿Quieres conocer LOOPA Pro en cuanto esté disponible?
          </h3>
          <p className="mt-2 text-sm text-[#cbd0d8]">
            Déjanos tu correo electrónico para recibir notificaciones exclusivas sobre el lanzamiento de la versión Pro.
          </p>

          {submitted ? (
            <div className="mt-6 p-4 rounded-xl bg-[#5ecd6e]/15 border border-[#5ecd6e]/40 text-[#6fe681] text-sm flex items-center justify-center gap-2 font-medium">
              <CheckCircle2 className="w-5 h-5" />
              <span>¡Gracias! Te avisaremos cuando LOOPA Pro esté listo.</span>
            </div>
          ) : (
            <form onSubmit={handleInterest} className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu.correo@ejemplo.com"
                className="flex-1 rounded-xl bg-[#0b0c0e] border border-white/20 px-4 py-3 text-sm text-white placeholder-[#7a808c] focus:outline-none focus:ring-2 focus:ring-[#5ecd6e]"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#5ecd6e] hover:bg-[#7def8e] text-[#07140a] text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                <span>Quiero conocer Pro</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
