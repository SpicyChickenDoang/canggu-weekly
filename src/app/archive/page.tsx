import Image from 'next/image';
import Link from 'next/link';
import { getIssues } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ArchivePage() {
  const issues = getIssues();

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-5xl font-bold">Magazine Archive</h1>
        <p className="mt-2 text-lg text-muted-foreground">Browse through all our past issues.</p>
      </header>
      
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {issues.map((issue) => (
          <Card key={issue.id} className="overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            {/* The link is currently disabled as there's no per-issue page */}
            <div className="cursor-pointer">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={issue.coverImageUrl}
                  alt={issue.title}
                  fill
                  className="object-cover"
                  data-ai-hint={issue.coverImageHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-lg">{issue.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">{issue.publicationDate}</Badge>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
