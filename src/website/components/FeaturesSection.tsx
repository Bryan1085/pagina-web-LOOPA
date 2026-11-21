import React from 'react';
import { Maximize2 } from 'lucide-react';
import { FEATURES_LIST } from '../data/siteContent';

interface FeaturesSectionProps {
  onInspectImage: (image: string, title: string, alt: string) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  onInspectImage,
}) => {
  return (
    <section
      id="caracteristicas"
      className="border-b border-white/[0.08] bg-[#101215] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-medium text-[#6fe681] tracking-wide">
            Herramientas de la versión demo
          </p>
          <h2 className="mt-2.5 text-2xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Modelado 3D real, directo y pensado para crear sin fricción.
          </h2>
          <p className="mt-4 text-base text-[#a1a7b3] leading-relaxed">
            Cada tarjeta muestra herramientas y flujos implementados en la demo
            actual de LOOPA, ilustrados con capturas reales de la aplicación.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {FEATURES_LIST.map((feature) => (
            <article
              key={feature.id}
              className={`group rounded-2xl border border-white/[0.08] bg-[#16181d] overflow-hidden flex flex-col justify-between transition-colors hover:border-white/20 ${
                feature.spanWide ? 'lg:col-span-2 lg:grid lg:grid-cols-12' : ''
              }`}
            >
              <div
                className={`p-6 sm:p-8 flex flex-col justify-between ${
                  feature.spanWide ? 'lg:col-span-5' : ''
                }`}
              >
                <div>
                  <span className="font-mono text-xs font-medium text-[#6fe681] tabular-nums">
                    {feature.number}.
                  </span>
                  <h3 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-white [text-wrap:balance]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#a9b0bc] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-white/[0.07] pt-5 text-sm text-[#d1d5db]">
                  {feature.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 w-1.5 h-1.5 rounded-sm bg-[#5ecd6e] shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`relative bg-[#111317] border-t border-white/[0.07] ${
                  feature.spanWide
                    ? 'lg:col-span-7 lg:border-t-0 lg:border-l'
                    : ''
                }`}
              >
                <div className="relative aspect-[4/3] w-full h-full overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.015]"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      onInspectImage(
                        feature.image,
                        feature.title,
                        feature.imageAlt,
                      )
                    }
                    aria-label={`Ampliar imagen de ${feature.title}`}
                    className="absolute bottom-3 right-3 w-10 h-10 rounded-lg bg-[#0b0c0e]/80 hover:bg-[#0b0c0e] backdrop-blur-md border border-white/15 flex items-center justify-center text-[#e4e6eb] hover:text-[#6fe681] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ecd6e]"
                  >
                    <Maximize2 className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
