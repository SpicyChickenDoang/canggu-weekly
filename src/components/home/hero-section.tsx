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
      <Image
        src={"/images/cover.png"}
        alt="Canggu Weekly Cover"
        fill
        className="object-cover"
        data-ai-hint={heroImage.imageHint}
        priority
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col h-full w-full max-w-6xl gap-4 p-8 md:p-12">

        <div className="flex justify-center w-full">
          <Image
            src={"/images/logo-transparent.png"}
            width={1000}
            height={1000}
            alt="canggu weekly logo"
            className="w-4/5 h-auto"
          />
        </div>

        <div className="flex justify-between w-full uppercase tracking-wider text-white/80 mt-10">
          <span>Vol. 1: The Heart of Canggu</span>
          <span>{format(new Date(), 'MMMM d, yyyy')}</span>
        </div>

        <div className="flex flex-col md:flex-row w-full mt-[12rem]">
          {articles[0] && (
            <div className="w-full md:w-7/12 self-center">
              <h2 className="font-headline text-3xl font-bold uppercase leading-tight md:text-5xl">
                {articles[0].title.replace("for Every Level", "")}
              </h2>
            </div>
          )}

          <div className="w-full md:w-5/12 self-end space-y-4 text-right mt-8 md:mt-0 md:ml-auto">
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

      </div>
    </section>
  );
}
