import { getArticlesByIssue } from '@/lib/data';
import { Hero } from '@/components/home/hero';
import { AboutSection } from '@/components/home/about-section';
import { DownloadSection } from '@/components/home/download-section';
import { HowToSection } from '@/components/home/how-to-section';
import { StatsSection } from '@/components/home/StatsSection';
import { ContactSection } from '@/components/home/contact-section';
import { ClientsSection } from '@/components/home/clients-section';
import GMapsSection from '@/components/home/GmapsSection';

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
      <Hero />

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

      <ContactSection />

      <GMapsSection />
    </div>
  );
}
