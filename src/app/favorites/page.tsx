'use client';

import { useFavorites } from '@/hooks/use-favorites';
import { getArticles } from '@/lib/data';
import { ArticleCard } from '@/components/article-card';
import { Heart } from 'lucide-react';

export default function FavoritesPage() {
  const { favorites, isLoaded } = useFavorites();
  const allArticles = getArticles();

  const favoriteArticles = allArticles.filter((article) => favorites.includes(article.id));

  if (!isLoaded) {
    return (
        <div className="container mx-auto px-4 py-12">
            <header className="mb-12 text-center">
                <h1 className="font-headline text-5xl font-bold">Favorite Articles</h1>
                <p className="mt-2 text-lg text-muted-foreground">Your personal collection of must-reads.</p>
            </header>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="space-y-4 rounded-lg border p-4">
                        <div className="h-48 animate-pulse rounded bg-muted"></div>
                        <div className="h-6 w-3/4 animate-pulse rounded bg-muted"></div>
                        <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
                        <div className="h-4 w-5/6 animate-pulse rounded bg-muted"></div>
                    </div>
                ))}
            </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-5xl font-bold">Favorite Articles</h1>
        <p className="mt-2 text-lg text-muted-foreground">Your personal collection of must-reads.</p>
      </header>

      {favoriteArticles.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {favoriteArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed py-24 text-center">
          <Heart className="mb-4 h-16 w-16 text-muted-foreground" />
          <h2 className="text-2xl font-bold">No Favorites Yet</h2>
          <p className="mt-2 text-muted-foreground">
            Click the heart icon on any article to save it here.
          </p>
        </div>
      )}
    </div>
  );
}
