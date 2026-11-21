import React from 'react';
import { ArrowDownRight, ArrowUpRight, Maximize2 } from 'lucide-react';
import { SITE_LINKS } from '../../config/siteLinks';
import { HERO_MEDIA } from '../data/siteContent';

interface HeroSectionProps {
  onExternalAction: (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string,
    label: string,
    configKey: string,
  ) => void;
  onInspectHeroImage: (image: string, title: string, alt: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExternalAction,
  onInspectHeroImage,
}) => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-white/[0.08] bg-[#0b0c0e]"
    >
      {/* Subtle architectural radial glow behind the 3D viewport */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-[radial-gradient(ellipse_65%_45%_at_50%_18%,rgba(94,205,110,0.11),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-medium text-[#6fe681] tracking-wide mb-4">
            Software de modelado 3D en el navegador · Demo pública abierta
          </p>

          <h1 className="text-[clamp(2.25rem,4.5vw,3.85rem)] font-bold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
            El modelado 3D comienza aquí.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#b4b9c4] leading-relaxed max-w-2xl mx-auto [text-wrap:pretty]">
            Descubre una nueva experiencia de modelado 3D. Explora
            herramientas, crea objetos y desarrolla tus ideas directamente desde
            tu navegador.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#5ecd6e] hover:bg-[#7def8e] text-[#07140a] text-sm sm:text-base font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ecd6e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c0e]"
            >
              <span>Prueba LOOPA demo gratis</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>

            <a
              href="#caracteristicas"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-[#15171c] hover:bg-[#1c1f26] hover:border-white/25 text-white text-sm sm:text-base font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ecd6e]"
            >
              <span>Conocer LOOPA</span>
              <ArrowDownRight
                className="w-4 h-4 text-[#9ca3af] shrink-0"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Large Real Interface Showcase */}
        <div className="mt-12 sm:mt-16">
          <div className="relative rounded-2xl border border-white/10 bg-[#14161a] p-2 sm:p-3 shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
            <div className="relative overflow-hidden rounded-xl bg-[#18191c] border border-white/[0.06]">
              <img
                src={HERO_MEDIA.mainImage}
                alt={HERO_MEDIA.mainAlt}
                referrerPolicy="no-referrer"
                loading="eager"
                className="w-full h-auto block object-cover"
              />

              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
                <button
                  type="button"
                  onClick={() =>
                    onInspectHeroImage(
                      HERO_MEDIA.mainImage,
                      'Interfaz real de LOOPA',
                      HERO_MEDIA.mainAlt,
                    )
                  }
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0b0c0e]/85 hover:bg-[#0b0c0e] backdrop-blur-md border border-white/15 text-xs font-medium text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ecd6e]"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#5ecd6e]" aria-hidden="true" />
                  <span>Ampliar captura</span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[#9ca3af] px-1">
            <span>Captura real de la interfaz de LOOPA en funcionamiento</span>
            <span>Modo Objeto · Manipuladores 3D · Jerarquía y transformación</span>
          </div>
        </div>
      </div>
    </section>
  );
};
