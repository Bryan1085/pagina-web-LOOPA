import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SITE_LINKS } from '../../config/siteLinks';

interface DemoAccessSectionProps {
  onExternalAction: (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string,
    label: string,
    configKey: string,
  ) => void;
}

export const DemoAccessSection: React.FC<DemoAccessSectionProps> = ({
  onExternalAction,
}) => {
  return (
    <section
      id="demo"
      className="border-b border-white/[0.08] bg-[#0b0c0e] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#5ecd6e]/25 bg-gradient-to-b from-[#141916] to-[#121418] p-8 sm:p-12 lg:p-16 text-center">
          <p className="text-xs sm:text-sm font-medium text-[#6fe681] tracking-wide">
            Acceso abierto
          </p>

          <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
            LOOPA ya está disponible para probar.
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-[#cbd0d8] leading-relaxed">
            Esta es una demo pública abierta mientras seguimos desarrollando
            LOOPA. Queremos que explores el visor 3D, pruebes las herramientas
            de modelado y nos cuentes qué te funciona bien y qué podemos
            mejorar.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
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
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#5ecd6e] hover:bg-[#7def8e] text-[#07140a] text-base sm:text-lg font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ecd6e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121418]"
            >
              <span>Prueba LOOPA demo gratis</span>
              <ArrowUpRight className="w-5 h-5 shrink-0" aria-hidden="true" />
            </a>

            <span className="text-xs sm:text-sm text-[#9ca3af]">
              Acceso directo en el navegador · Sin registro ni instalación
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
