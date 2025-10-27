import Image from 'next/image';
import Link from 'next/link';
import { getArticlesByIssue, getFeaturedArticle } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArticleCard } from '@/components/article-card';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { DownloadSection } from '@/components/download-section';

export default function Home() {
  const featuredArticle = getFeaturedArticle(1);
  const currentArticles = getArticlesByIssue(1).filter(
    (article) => article.id !== featuredArticle?.id
  );
  const aboutImage = PlaceHolderImages.find(p => p.id === 'cafe-culture') ?? PlaceHolderImages[0];

  if (!featuredArticle) {
    return (
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-bold">No articles found for this week.</h2>
        <p className="text-muted-foreground">Please check back later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative h-64 w-full md:h-auto">
            <Image
              src={featuredArticle.imageUrl}
              alt={featuredArticle.title}
              fill
              className="rounded-lg object-cover"
              data-ai-hint={featuredArticle.imageHint}
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 font-headline text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {featuredArticle.title}
            </h1>
            <p className="mb-6 text-lg text-muted-foreground">
              {featuredArticle.excerpt}
            </p>
            <div className="flex items-center gap-4">
              <Button asChild size="lg">
                <Link href={`/article/${featuredArticle.slug}`}>
                  Read More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 rounded-lg bg-card p-8 md:p-12">
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

      <section className="mb-16">
        <h2 className="mb-8 font-headline text-3xl font-bold">This Week's Stories</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      <section className="mb-16 rounded-lg bg-card p-8 md:p-12">
        <div className="mx-auto max-w-md">
          <DownloadSection />
        </div>
      </section>
    </div>
  );
}
