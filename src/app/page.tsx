import { getArticlesByIssue } from '@/lib/data';
import { HeroSection } from '@/components/home/hero-section';
import { AboutSection } from '@/components/home/about-section';
import { DownloadSection } from '@/components/home/download-section';
import { HowToSection } from '@/components/home/how-to-section';
import { StatsSection } from '@/components/home/StatsSection';
import { ContactSection } from '@/components/home/contact-section';
import GoogleMaps from '@/components/GoogleMaps';
import { ClientsSection } from '@/components/home/clients-section';

export default function Home() {
  const currentArticles = getArticlesByIssue(1);

  if (!currentArticles || currentArticles.length === 0) {
    return (
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-bold">No articles found for this week.</h2>
        <p className="text-muted-foreground">Please check back later.</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col'>
      <HeroSection />
      
      <AboutSection />

      {/* <section>
        <h2 className="mb-8 font-headline text-3xl font-bold">This Week's Stories</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section> */}

      <DownloadSection />
      
      <HowToSection />

      <StatsSection />

      <ClientsSection />

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-headline text-3xl font-bold">Our Distribution Network</h2>
          <p className="mb-12 max-w-2xl mx-auto text-muted-foreground">
            Find our magazine at these fine locations across the island.
          </p>
          <GoogleMaps />
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
