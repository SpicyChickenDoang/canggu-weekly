import { searchArticles } from '@/lib/data';
import { ArticleCard } from '@/components/article-card';
import { SearchX } from 'lucide-react';

interface SearchPageProps {
  searchParams: {
    q?: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || '';
  const articles = searchArticles(query);

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="font-headline text-5xl font-bold">Search Results</h1>
        {query && (
          <p className="mt-2 text-lg text-muted-foreground">
            Showing results for: <span className="font-semibold text-foreground">"{query}"</span>
          </p>
        )}
      </header>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed py-24 text-center">
          <SearchX className="mb-4 h-16 w-16 text-muted-foreground" />
          <h2 className="text-2xl font-bold">No Results Found</h2>
          <p className="mt-2 text-muted-foreground">
            We couldn't find any articles matching your search.
          </p>
        </div>
      )}
    </div>
  );
}
