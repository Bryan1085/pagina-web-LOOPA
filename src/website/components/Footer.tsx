import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { isPlaceholderLink, SITE_LINKS } from '../../config/siteLinks';
import { HERO_MEDIA } from '../data/siteContent';

interface FooterProps {
  onExternalAction: (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string,
    label: string,
    configKey: string,
    isEmail?: boolean,
  ) => void;
}

export const Footer: React.FC<FooterProps> = ({ onExternalAction }) => {
  const emailHref = isPlaceholderLink(SITE_LINKS.contactEmail)
    ? '#configurar-correo'
    : `mailto:${SITE_LINKS.contactEmail}`;

  return (
    <footer className="bg-[#08090b] py-12 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/[0.08]">
          <div className="md:col-span-5">
            <a
              href="#inicio"
              className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ecd6e] rounded-md"
              aria-label="Volver arriba"
            >
              <img
                src={HERO_MEDIA.logoHorizontal}
                alt="LOOPA"
                referrerPolicy="no-referrer"
                className="h-9 w-auto object-contain"
              />
            </a>
            <p className="mt-4 max-w-sm text-sm text-[#9ca3af] leading-relaxed">
              Aplicación independiente de modelado 3D en desarrollo. Sitio
              oficial de presentación y acceso a la demo pública.
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-sm font-semibold text-white">Secciones</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-[#9ca3af]">
              <li>
                <a href="#caracteristicas" className="hover:text-white transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#demostracion" className="hover:text-white transition-colors">
                  Demostración
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#comunidad" className="hover:text-white transition-colors">
                  Comunidad
                </a>
              </li>
              <li>
                <a href="#preguntas" className="hover:text-white transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="text-sm font-semibold text-white">
              Contacto y redes
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-[#9ca3af]">
              <li>
                <a
                  href={emailHref}
                  onClick={(e) =>
                    onExternalAction(
                      e,
                      SITE_LINKS.contactEmail,
                      'Correo de contacto',
                      'contactEmail',
                      true,
                    )
                  }
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#5ecd6e] shrink-0" aria-hidden="true" />
                  <span>
                    {isPlaceholderLink(SITE_LINKS.contactEmail)
                      ? 'Correo de contacto (por configurar)'
                      : SITE_LINKS.contactEmail}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_LINKS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) =>
                    onExternalAction(
                      e,
                      SITE_LINKS.social.instagram,
                      'Instagram oficial de LOOPA',
                      'social.instagram',
                    )
                  }
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_LINKS.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) =>
                    onExternalAction(
                      e,
                      SITE_LINKS.social.tiktok,
                      'TikTok oficial de LOOPA',
                      'social.tiktok',
                    )
                  }
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>TikTok</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_LINKS.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) =>
                    onExternalAction(
                      e,
                      SITE_LINKS.social.youtube,
                      'YouTube oficial de LOOPA',
                      'social.youtube',
                    )
                  }
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#7a808c]">
          <p>© {new Date().getFullYear()} LOOPA. Software de modelado 3D.</p>
          <p>Sitio oficial de presentación · Demo pública abierta</p>
        </div>
      </div>
    </footer>
  );
};
