
import { HeroSection } from '@/components/advertisers/hero-section';
import { AudienceStatsSection } from '@/components/advertisers/audience-stats-section';
import { DataInsightsSection } from '@/components/advertisers/data-insights-section';
import { SolutionsSection } from '@/components/advertisers/solutions-section';
import { TestimonialsSection } from '@/components/advertisers/testimonials-section';
import { CtaSection } from '@/components/advertisers/cta-section';

export default function AdvertisersPage() {
  return (
    <div className="bg-background">
      <HeroSection />
      <AudienceStatsSection />
      
      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24 space-y-24">
        <DataInsightsSection />
        <SolutionsSection />
        <TestimonialsSection />
        <CtaSection />
      </div>
    </div>
  );
}
