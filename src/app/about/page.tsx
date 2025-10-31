import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const image = PlaceHolderImages.find(p => p.id === 'cafe-culture') ?? PlaceHolderImages[0];
  
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-5xl font-bold">About Canggu Weekly</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Your weekly dose of paradise.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative h-96 w-full">
          <Image
            src={"/images/img-5.webp"}
            alt="Canggu Weekly Team"
            fill
            className="rounded-lg object-cover"
            data-ai-hint={image.imageHint}
          />
        </div>
        <div className="flex flex-col justify-center space-y-6 text-lg">
          <p className='text-justify'>
            Welcome to <span className="font-headline font-semibold">Canggu Weekly</span>, your premier digital guide to the vibrant heart of Bali. We are a passionate team of writers, photographers, and surfers dedicated to bringing you the most authentic and up-to-date stories from Canggu and beyond.
          </p>
          <p className='text-justify'>
            Our mission is simple: to capture the unique blend of modern tropical living, ancient culture, and bohemian spirit that makes this corner of the world so special. From the best surf breaks and cafe hotspots to local artisan markets and serene yoga retreats, we dive deep into the experiences that define life in Canggu.
          </p>
          <p className='text-justify'>
            Join us each week as we explore, discover, and share the magic of this island paradise.
          </p>
        </div>
      </div>
    </div>
  );
}
