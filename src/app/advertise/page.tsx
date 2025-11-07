
import { HeroSection } from '@/components/advertisers/hero-section';
import { AudienceStatsSection } from '@/components/advertisers/audience-stats-section';
// import { DataInsightsSection } from '@/components/advertisers/data-insights-section';
// import { SolutionsSection } from '@/components/advertisers/solutions-section';
import { CtaSection } from '@/components/advertisers/cta-section';
import GMapsSection from '@/components/home/GmapsSection';
import { ClientsSection } from '@/components/advertisers/clients-section';
import { HowToSection } from '@/components/advertisers/how-to-section';
import { MagazinePreviewSection } from '@/components/advertisers/magazine-preview-section';

export default function AdvertisersPage() {
  return (
    <div className="bg-background">
      <HeroSection />
      <HowToSection />
      <AudienceStatsSection />
      <MagazinePreviewSection />
      <ClientsSection />
      {/* <DataInsightsSection /> */}
      {/* <SolutionsSection /> */}
      <GMapsSection />
      <CtaSection />
    </div>
  );
}

    