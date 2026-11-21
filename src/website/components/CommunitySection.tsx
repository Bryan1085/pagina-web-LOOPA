import React from 'react';
import { Mail, MessageSquarePlus } from 'lucide-react';
import { SITE_LINKS } from '../../config/siteLinks';

interface CommunitySectionProps {
  onExternalAction: (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string,
    label: string,
    configKey: string,
    isEmail?: boolean,
  ) => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({
  onExternalAction,
}) => {
  return (
    <section
      id="comunidad"
      className="border-b border-white/[0.08] bg-[#101215] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-medium text-[#6fe681] tracking-wide">
              Comunidad y desarrollo abierto
            </p>
            <h2 className="mt-2.5 text-2xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Forma parte de la evolución de LOOPA.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#b4b9c4] leading-relaxed">
              Estamos construyendo LOOPA y queremos escuchar a quienes utilizan
              nuestras herramientas. Tus comentarios nos ayudarán a mejorar la
              experiencia y decidir qué desarrollar próximamente.
            </p>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-white/[0.08] bg-[#16181d] p-6 sm:p-8 flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">
              Comparte tu experiencia con la demo
            </h3>
            <p className="text-sm text-[#a1a7b3] leading-relaxed">
              Cuéntanos qué modelaste, qué herramientas echaste en falta o
              cualquier detalle que hayas encontrado durante tus pruebas.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={SITE_LINKS.feedbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) =>
                  onExternalAction(
                    e,
                    SITE_LINKS.feedbackUrl,
                    'Formulario de comentarios',
                    'feedbackUrl',
                  )
                }
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#5ecd6e] hover:bg-[#7def8e] text-[#07140a] text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ecd6e]"
              >
                <MessageSquarePlus className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Enviar comentarios</span>
              </a>

              <a
                href={`mailto:${SITE_LINKS.contactEmail}`}
                onClick={(e) =>
                  onExternalAction(
                    e,
                    SITE_LINKS.contactEmail,
                    'Correo de contacto',
                    'contactEmail',
                    true,
                  )
                }
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-[#121418] hover:bg-[#1c1f26] text-sm font-medium text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ecd6e]"
              >
                <Mail className="w-4 h-4 text-[#9ca3af] shrink-0" aria-hidden="true" />
                <span>Escribir por correo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
