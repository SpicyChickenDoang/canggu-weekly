import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function NotFound() {
  const image = PlaceHolderImages.find(p => p.id === '404-image') ?? PlaceHolderImages[0];
  return (
    <div className="container mx-auto flex h-[calc(100vh-8rem)] items-center justify-center px-4 py-12 text-center">
      <div className="max-w-md">
        <div className="relative mx-auto mb-8 h-48 w-48">
            <Image 
                src={image.imageUrl} 
                alt="Lost surfboard" 
                layout="fill" 
                objectFit="contain" 
                className="rounded-full"
                data-ai-hint={image.imageHint}
            />
        </div>
        <h1 className="mb-4 font-headline text-4xl font-bold md:text-5xl">Page Not Found</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Looks like you've drifted into uncharted waters. The page you're looking for doesn't exist.
        </p>
        <Button asChild>
          <Link href="/">Return to Shore</Link>
        </Button>
      </div>
    </div>
  );
}
