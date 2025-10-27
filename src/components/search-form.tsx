'use client';

import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function SearchForm() {
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get('query') as string;
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex-1 md:grow-0">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        name="query"
        placeholder="Search articles..."
        className={cn("w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]",
          "text-foreground placeholder:text-muted-foreground bg-primary-foreground/10 border-primary-foreground/20 focus:bg-primary-foreground/20"
        )}
      />
    </form>
  );
}
