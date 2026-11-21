import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/siteContent';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section
      id="preguntas"
      className="border-b border-white/[0.08] bg-[#0b0c0e] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-medium text-[#6fe681] tracking-wide">
            Preguntas frecuentes
          </p>
          <h2 className="mt-2.5 text-2xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Respuestas claras sobre la demo de LOOPA.
          </h2>
        </div>

        <div className="mt-10 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;

            return (
              <div key={item.id}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenId((prev) => (prev === item.id ? null : item.id))
                    }
                    className="w-full py-5 flex items-center justify-between gap-4 text-left text-base sm:text-lg font-medium text-white hover:text-[#6fe681] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ecd6e] rounded-md"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#9ca3af] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#6fe681]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="pb-6 pr-8 text-sm sm:text-base text-[#b4b9c4] leading-relaxed"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
