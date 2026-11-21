import React, { useCallback, useState } from 'react';
import { isPlaceholderLink } from '../config/siteLinks';
import { CommunitySection } from './components/CommunitySection';
import { DemoAccessSection } from './components/DemoAccessSection';
import { DemoVideoSection } from './components/DemoVideoSection';
import { FaqSection } from './components/FaqSection';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { HeroSection } from './components/HeroSection';
import { LearningSection } from './components/LearningSection';
import { RoadmapSection } from './components/RoadmapSection';
import { ChangelogSection } from './components/ChangelogSection';
import { SuggestionsSection } from './components/SuggestionsSection';
import { HelpCenterSection } from './components/HelpCenterSection';
import { LoopaProSection } from './components/LoopaProSection';
import { LoopaLabSection } from './components/LoopaLabSection';
import {
  ImageLightboxModal,
  LightboxImageState,
} from './components/ImageLightboxModal';
import {
  LinkNoticeModal,
  PendingLinkNotice,
} from './components/LinkNoticeModal';
import { Navbar } from './components/Navbar';

export const LoopaWebsite: React.FC = () => {
  const [lightboxItem, setLightboxItem] = useState<LightboxImageState | null>(
    null,
  );
  const [pendingNotice, setPendingNotice] = useState<PendingLinkNotice | null>(
    null,
  );

  const handleExternalAction = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement>,
      url: string,
      label: string,
      configKey: string,
      isEmail = false,
    ) => {
      if (isPlaceholderLink(url)) {
        e.preventDefault();
        setPendingNotice({
          label,
          configKey,
          isEmail,
          currentValue: url,
        });
      }
    },
    [],
  );

  const handleInspectImage = useCallback(
    (image: string, title: string, alt: string) => {
      setLightboxItem({ image, title, alt });
    },
    [],
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0c0e] text-[#e4e6eb] antialiased selection:bg-[#5ecd6e]/30 selection:text-white">
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#5ecd6e] focus:text-[#07140a] focus:font-semibold"
      >
        Ir al contenido principal
      </a>

      <Navbar onExternalAction={handleExternalAction} />

      <main id="contenido-principal" className="flex-1">
        <HeroSection
          onExternalAction={handleExternalAction}
          onInspectHeroImage={handleInspectImage}
        />

        <FeaturesSection onInspectImage={handleInspectImage} />

        <DemoVideoSection onExternalAction={handleExternalAction} />

        <LearningSection />

        <RoadmapSection />

        <ChangelogSection />

        <GallerySection onInspectImage={handleInspectImage} />

        <SuggestionsSection />

        <HelpCenterSection />

        <LoopaProSection />

        <LoopaLabSection />

        <DemoAccessSection onExternalAction={handleExternalAction} />

        <CommunitySection onExternalAction={handleExternalAction} />

        <FaqSection />
      </main>

      <Footer onExternalAction={handleExternalAction} />

      <ImageLightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />

      <LinkNoticeModal
        notice={pendingNotice}
        onClose={() => setPendingNotice(null)}
      />
    </div>
  );
};

export default LoopaWebsite;
