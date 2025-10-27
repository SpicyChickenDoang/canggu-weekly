import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/lib/types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FavoriteButton } from './favorite-button';
import { ArrowUpRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <Link href={`/article/${article.slug}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            data-ai-hint={article.imageHint}
          />
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </CardTitle>
        <CardDescription>{article.publicationDate}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{article.excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" asChild>
          <Link href={`/article/${article.slug}`}>
            Read More <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <FavoriteButton articleId={article.id} />
      </CardFooter>
    </Card>
  );
}
