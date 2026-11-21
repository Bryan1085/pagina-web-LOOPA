import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, ChevronDown } from 'lucide-react';
import { SITE_LINKS } from '../../config/siteLinks';
import { HERO_MEDIA } from '../data/siteContent';

interface NavbarProps {
  onExternalAction: (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string,
    label: string,
    configKey: string,
  ) => void;
}

const NAV_ITEMS = [
  { href: '#caracteristicas', label: 'Herramientas' },
  { href: '#galeria', label: 'Galería' },
  { href: '#aprender', label: 'Aprender' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#novedades', label: 'Novedades' },
  { href: '#sugerencias', label: 'Sugerencias' },
  { href: '#ayuda', label: 'Ayuda' },
  { href: '#pro', label: 'LOOPA Pro' },
  { href: '#lab', label: 'LAB' },
] as const;

export const Navbar: React.FC<NavbarProps> = ({ onExternalAction }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#0b0c0e]/90 backdrop-blur-md">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#inicio"
          className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ecd6e] rounded-md"
          aria-label="LOOPA inicio"
        >
          <img
            src={HERO_MEDIA.symbol}
            alt=""
            aria-hidden="true"
            className="w-7 h-7 object-contain shrink-0"
          />
          <span className="text-lg font-bold tracking-tight text-white">
            LOOPA
          </span>
        </a>

        {/* Zone 2: Navigation links */}
        <nav
          aria-label="Navegación principal"
          className="hidden xl:flex items-center gap-5 text-sm font-medium text-[#b4b9c4]"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 hover:text-white transition-colors underline-offset-4 hover:underline decoration-[#5ecd6e]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ecd6e] rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA + mobile drawer toggle */}
        <div className="flex items-center gap-3 shrink-0">
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
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#5ecd6e] hover:bg-[#7def8e] text-[#07140a] text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ecd6e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c0e]"
          >
            <span>Prueba LOOPA demo gratis</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="xl:hidden w-11 h-11 inline-flex items-center justify-center rounded-lg border border-white/10 text-[#e4e6eb] hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ecd6e]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Navegación móvil"
          className="xl:hidden border-t border-white/[0.08] bg-[#111317] px-4 py-4 grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[80vh] overflow-y-auto"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#d1d5db] hover:text-white hover:bg-white/5 transition-colors whitespace-nowrap text-center bg-black/20 border border-white/5"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
