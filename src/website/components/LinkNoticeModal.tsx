import React, { useEffect } from 'react';
import { ExternalLink, Mail, X } from 'lucide-react';

export interface PendingLinkNotice {
  label: string;
  configKey: string;
  isEmail?: boolean;
  currentValue: string;
}

interface LinkNoticeModalProps {
  notice: PendingLinkNotice | null;
  onClose: () => void;
}

export const LinkNoticeModal: React.FC<LinkNoticeModalProps> = ({
  notice,
  onClose,
}) => {
  useEffect(() => {
    if (!notice) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [notice, onClose]);

  if (!notice) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="link-notice-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-[#16181c] border border-white/10 p-6 text-[#e4e6eb] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#16261a] border border-[#5ecd6e]/30 flex items-center justify-center text-[#5ecd6e] shrink-0">
              {notice.isEmail ? (
                <Mail className="w-5 h-5" />
              ) : (
                <ExternalLink className="w-5 h-5" />
              )}
            </div>
            <div>
              <h3
                id="link-notice-title"
                className="text-base font-semibold text-white"
              >
                {notice.label}
              </h3>
              <p className="text-xs text-[#9ca3af] mt-0.5">
                Enlace pendiente de configuración
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar aviso"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ecd6e]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="mt-4 text-sm text-[#cbd0d8] leading-relaxed">
          Este botón ya está preparado para dirigir a los visitantes a su
          destino definitivo. Para activarlo, actualiza la propiedad{' '}
          <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-black/50 text-[#6fe681] border border-white/10">
            {notice.configKey}
          </code>{' '}
          en el archivo de configuración{' '}
          <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-black/50 text-[#e4e6eb] border border-white/10">
            src/config/siteLinks.ts
          </code>
          .
        </p>

        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#5ecd6e] hover:bg-[#7def8e] text-[#07140a] text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ecd6e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#16181c]"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
