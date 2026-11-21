import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export interface LightboxImageState {
  image: string;
  title: string;
  alt: string;
}

interface ImageLightboxModalProps {
  item: LightboxImageState | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  item,
  onClose,
}) => {
  useEffect(() => {
    if (!item) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl rounded-2xl bg-[#14161a] border border-white/15 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between gap-4">
          <h3 id="lightbox-title" className="text-sm sm:text-base font-semibold text-white truncate">
            {item.title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar vista ampliada"
            className="w-10 h-10 rounded-lg flex items-center justify-center text-[#9ca3af] hover:text-white hover:bg-white/10 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ecd6e]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-[#0b0c0e] p-2 sm:p-4 flex items-center justify-center">
          <img
            src={item.image}
            alt={item.alt}
            referrerPolicy="no-referrer"
            className="max-h-[78vh] w-auto max-w-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
