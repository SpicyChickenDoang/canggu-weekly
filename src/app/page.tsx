import Image from 'next/image';
import Link from 'next/link';
import { getArticlesByIssue } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArticleCard } from '@/components/article-card';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { DownloadSection } from '@/components/download-section';
import { ContactForm } from '@/components/contact-form';

export default function Home() {
  const currentArticles = getArticlesByIssue(1);
  const aboutImage = PlaceHolderImages.find(p => p.id === 'cafe-culture') ?? PlaceHolderImages[0];
  const heroImage = PlaceHolderImages.find(p => p.id === 'surf-spots') ?? PlaceHolderImages[3];


  if (!currentArticles || currentArticles.length === 0) {
    return (
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-bold">No articles found for this week.</h2>
        <p className="text-muted-foreground">Please check back later.</p>
      </div>
    );
  }

  return (
    <>
      <section className="relative -mx-4 -mt-8">
        <div className="grid min-h-screen md:grid-cols-2">
            <div className="relative hidden md:block">
              <Image
                  src={heroImage.imageUrl}
                  alt="Canggu beach"
                  fill
                  className="object-cover"
                  data-ai-hint={heroImage.imageHint}
                  priority
              />
            </div>
            <div className="flex flex-col items-center justify-center p-8 text-center md:items-start md:p-16 md:text-left">
              <h1 className="mb-4 font-headline text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  Your Weekly Dose of Paradise
              </h1>
              <p className="mb-6 max-w-lg text-lg text-muted-foreground">
                  Welcome to Canggu Current, your premier digital guide to the vibrant heart of Bali. Discover the latest stories in local culture, surf, and food.
              </p>
              <div className="flex items-center gap-4">
                  <Button asChild size="lg">
                  <Link href="/archive">
                      Explore Issues <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  </Button>
              </div>
            </div>
        </div>
      </section>
      
      <div className="container mx-auto space-y-16 px-4 py-8">
        <section className="rounded-lg bg-card p-8 md:p-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col justify-center md:col-span-2">
              <h2 className="mb-4 font-headline text-3xl font-bold">About Canggu Current</h2>
              <p className="mb-4 text-muted-foreground">
                Welcome to your premier digital guide to the vibrant heart of Bali. We are a passionate team of writers, photographers, and surfers dedicated to bringing you the most authentic and up-to-date stories from Canggu and beyond.
              </p>
              <p className="mb-6 text-muted-foreground">
                Our mission is to capture the unique blend of modern tropical living, ancient culture, and bohemian spirit that makes this corner of the world so special.
              </p>
              <Button asChild variant="secondary">
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
            <div className="relative hidden h-64 w-full md:block">
              <Image
                src={aboutImage.imageUrl}
                alt="Canggu cafe"
                fill
                className="rounded-lg object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-8 font-headline text-3xl font-bold">This Week's Stories</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-5xl">
            <DownloadSection />
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-lg">
              <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
