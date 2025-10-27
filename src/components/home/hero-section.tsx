import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'surf-spots') ?? PlaceHolderImages[3];
    
    return (
        <section className="relative -mx-4 -mt-8">
            <div className="grid min-h-screen md:grid-cols-2">
                <div className="relative hidden md:block">
                    <Image
                        src={heroImage.imageUrl}
                        alt="Canggu beach"
                        fill
                        className="object-cover"
                        data-ai-hint={heroImage.imageHint}
                        priority
                    />
                </div>
                <div className="flex flex-col items-center justify-center p-8 text-center md:items-start md:p-16 md:text-left">
                    <h1 className="mb-4 font-headline text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        Your Weekly Dose of Paradise
                    </h1>
                    <p className="mb-6 max-w-lg text-lg text-muted-foreground">
                        Welcome to Canggu Weekly, your premier digital guide to the vibrant heart of Bali. Discover the latest stories in local culture, surf, and food.
                    </p>
                    <div className="flex items-center gap-4">
                        <Button asChild size="lg">
                        <Link href="/archive">
                            Explore Issues <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        </Button>
                    </div>
                </div>
            </div>
      </section>
    );
}
