/**
 * Configuración centralizada de enlaces externos y recursos multimedia de la web oficial de LOOPA.
 *
 * Reemplaza los valores marcadores de posición cuando dispongas de las direcciones definitivas.
 * Todos los botones, enlaces de redes sociales, correo y reproductor de video de la web
 * leen directamente desde este archivo.
 */

export interface SiteLinksConfig {
  /** URL externa hacia la demo pública de LOOPA */
  demoUrl: string;
  /** URL externa del formulario de comentarios y sugerencias */
  feedbackUrl: string;
  /** URL de video de demostración (.mp4, .webm o enlace embebible de YouTube/Vimeo). Vacío = estado preparado para video. */
  demoVideoUrl: string;
  /** Correo de contacto oficial */
  contactEmail: string;
  /** Perfiles oficiales en redes sociales */
  social: {
    instagram: string;
    tiktok: string;
    youtube: string;
  };
}

export const SITE_LINKS: SiteLinksConfig = {
  demoUrl: 'https://forma3d-studio-1.ai.studio/',
  feedbackUrl: '#configurar-url-comentarios',
  demoVideoUrl: '',
  contactEmail: 'contacto@loopa-pendiente.example',
  social: {
    instagram: 'https://www.instagram.com/bryan1085smr?bqrl=ZzdueDIxeGp0OHhm&utm_source=qr',
    tiktok: '#configurar-tiktok',
    youtube: '#configurar-youtube',
  },
};

export function isPlaceholderLink(url: string): boolean {
  const trimmed = url.trim();
  if (!trimmed) return true;
  return (
    trimmed.startsWith('#configurar-') ||
    trimmed.includes('-pendiente.example') ||
    trimmed.includes('pendiente-loopa')
  );
}
