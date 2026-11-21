import React, { useMemo } from 'react';
import { ArrowUpRight, Film, Play } from 'lucide-react';
import { SITE_LINKS } from '../../config/siteLinks';
import { HERO_MEDIA } from '../data/siteContent';

interface DemoVideoSectionProps {
  onExternalAction: (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string,
    label: string,
    configKey: string,
  ) => void;
}

function getEmbedInfo(url: string):
  | { kind: 'empty' }
  | { kind: 'video'; src: string }
  | { kind: 'iframe'; src: string } {
  const trimmed = url.trim();
  if (!trimmed) return { kind: 'empty' };

  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(trimmed)) {
    return { kind: 'video', src: trimmed };
  }

  // Convert standard YouTube watch/share URLs into embed URLs cleanly
  const ytWatchMatch = trimmed.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/,
  );
  if (ytWatchMatch?.[1]) {
    return {
      kind: 'iframe',
      src: `https://www.youtube-nocookie.com/embed/${ytWatchMatch[1]}`,
    };
  }

  const vimeoMatch = trimmed.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch?.[1]) {
    return {
      kind: 'iframe',
      src: `https://player.vimeo.com/video/${vimeoMatch[1]}`,
    };
  }

  return { kind: 'iframe', src: trimmed };
}

export const DemoVideoSection: React.FC<DemoVideoSectionProps> = ({
  onExternalAction,
}) => {
  const embed = useMemo(
    () => getEmbedInfo(SITE_LINKS.demoVideoUrl),
    [],
  );

  return (
    <section
      id="demostracion"
      className="border-b border-white/[0.08] bg-[#0b0c0e] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-[#6fe681] tracking-wide">
              Demostración en video
            </p>
            <h2 className="mt-2.5 text-2xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Observa el flujo de trabajo de LOOPA en acción.
            </h2>
            <p className="mt-4 text-base text-[#a1a7b3] leading-relaxed">
              Un espacio dedicado para recorrer la interfaz, el cambio entre
              Modo Objeto y Modo Edición, y la manipulación directa en el visor
              3D.
            </p>
          </div>

          <a
            href={SITE_LINKS.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) =>
              onExternalAction(
                e,
                SITE_LINKS.demoUrl,
                'Prueba LOOPA demo gratis',
                'demoUrl',
              )
            }
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 bg-[#15171c] hover:bg-[#1c1f26] text-sm font-medium text-white transition-colors whitespace-nowrap shrink-0 self-start md:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ecd6e]"
          >
            <span>Abrir demo interactiva</span>
            <ArrowUpRight className="w-4 h-4 text-[#5ecd6e]" aria-hidden="true" />
          </a>
        </div>

        {/* Dedicated replaceable video showcase container */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-[#14161a] p-2 sm:p-3">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#111317] border border-white/[0.06]">
            {embed.kind === 'video' ? (
              <video
                src={embed.src}
                controls
                playsInline
                poster={HERO_MEDIA.mainImage}
                className="w-full h-full object-cover"
              >
                Tu navegador no admite la reproducción directa de video HTML5.
              </video>
            ) : embed.kind === 'iframe' ? (
              <iframe
                src={embed.src}
                title="Video de demostración de LOOPA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              /* Clean ready-to-replace video stage using authentic LOOPA screenshot backdrop */
              <div className="relative w-full h-full">
                <img
                  src="/assets/aistudio/IMG_7513_f9f359c6.png"
                  alt="Vista previa del entorno de trabajo de LOOPA con menú radial y herramientas de edición"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover opacity-45"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/70 to-[#0b0c0e]/40"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#16261a] border border-[#5ecd6e]/40 flex items-center justify-center text-[#6fe681] shadow-lg">
                    <Play className="w-7 h-7 fill-current translate-x-0.5" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-lg sm:text-2xl font-semibold text-white [text-wrap:balance]">
                    Espacio reservado para el video oficial de demostración
                  </h3>
                  <p className="mt-2.5 max-w-xl text-sm sm:text-base text-[#cbd0d8] leading-relaxed">
                    Este módulo admite un archivo de video (.mp4 / .webm) o un
                    enlace de YouTube o Vimeo configurando{' '}
                    <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-black/60 text-[#6fe681] border border-white/10">
                      demoVideoUrl
                    </code>{' '}
                    en{' '}
                    <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-black/60 text-[#e4e6eb] border border-white/10">
                      src/config/siteLinks.ts
                    </code>
                    .
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-[#9ca3af]">
                    <span className="inline-flex items-center gap-1.5">
                      <Film className="w-3.5 h-3.5 text-[#5ecd6e]" aria-hidden="true" />
                      <span>Formato 16:9 adaptable</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>Mientras tanto puedes probar la demo directamente</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
