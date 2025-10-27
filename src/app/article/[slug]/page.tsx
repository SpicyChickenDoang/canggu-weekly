import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getArticleBySlug } from '@/lib/data';
import { FavoriteButton } from '@/components/favorite-button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article>
      <header className="relative h-96 w-full">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          priority
          className="object-cover"
          data-ai-hint={article.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </header>
      
      <div className="container relative -mt-24 mx-auto max-w-4xl px-4 pb-12">
        <div className="rounded-lg bg-card p-8 shadow-lg">
            <h1 className="mb-4 font-headline text-4xl font-bold leading-tight md:text-5xl">
            {article.title}
            </h1>

            <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.publicationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <Badge variant="outline">Issue #{article.issueNumber}</Badge>
            </div>
            
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />

            <div className="mt-8 flex items-center justify-end border-t pt-6">
                <div className='flex items-center gap-2'>
                    <span className='text-sm text-muted-foreground'>Add to favorites</span>
                    <FavoriteButton articleId={article.id} />
                </div>
            </div>
        </div>
      </div>
    </article>
  );
}
