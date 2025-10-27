import Image from 'next/image';
import { getArticlesByIssue, getIssues } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { format } from 'date-fns';

export function HeroSection() {
  const currentIssue = getIssues()[0];
  const articles = getArticlesByIssue(currentIssue.id);
  const heroImage = PlaceHolderImages.find(p => p.id === 'issue-1-cover') ?? PlaceHolderImages[0];

  return (
    <section className="relative flex h-screen min-h-[700px] w-full items-center justify-center text-white">
      {/* Background Image */}
      <Image
        src={heroImage.imageUrl}
        alt="Canggu Weekly Cover"
        fill
        className="object-cover"
        data-ai-hint={heroImage.imageHint}
        priority
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Magazine Content */}
      <div className="relative z-10 grid h-full w-full max-w-6xl grid-cols-12 grid-rows-6 gap-4 p-8 md:p-12">
        {/* Masthead */}
        <div className="col-span-12 row-start-1 flex items-start justify-center">
          <h1 className="font-headline text-5xl font-extrabold uppercase tracking-widest md:text-7xl">
            Canggu Weekly
          </h1>
        </div>

        {/* Issue Details */}
        <div className="col-span-12 row-start-2 flex justify-between text-xs uppercase tracking-wider text-white/80 md:text-sm">
          <span>{currentIssue.title}</span>
          <span>{format(new Date(currentIssue.publicationDate), 'MMMM d, yyyy')}</span>
        </div>

        {/* Main Headline */}
        {articles[0] && (
          <div className="col-span-12 row-span-2 row-start-3 self-center md:col-span-7">
            <h2 className="font-headline text-3xl font-bold uppercase leading-tight md:text-5xl">
              {articles[0].title.replace("for Every Level", "")}
            </h2>
          </div>
        )}

        {/* Smaller Headlines */}
        <div className="col-span-12 row-span-2 row-start-5 self-end space-y-4 text-right md:col-span-5 md:col-start-8">
            {articles[1] && (
                <p className="font-headline text-lg font-semibold uppercase md:text-2xl">
                    {articles[1].title.replace("A Guide to Canggu's", "")}
                </p>
            )}
            {articles[2] && (
                <p className="font-headline text-base font-medium uppercase md:text-xl text-white/80">
                    Plus: {articles[2].title}
                </p>
            )}
        </div>
      </div>
    </section>
  );
}
