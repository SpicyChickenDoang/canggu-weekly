import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HowToSection() {
    const howToImage = PlaceHolderImages.find(p => p.id === 'archive-1') ?? PlaceHolderImages[10];

    return (
        <section className="overflow-hidden rounded-lg bg-card">
            <div className="grid md:grid-cols-2">
                <div className="relative hidden min-h-[300px] w-full md:block">
                    <Image
                    src={howToImage.imageUrl}
                    alt={howToImage.description}
                    fill
                    className="rounded-l-lg object-cover"
                    data-ai-hint={howToImage.imageHint}
                    />
                </div>
                <div className="flex flex-col justify-center p-8 text-center md:p-12 md:text-left">
                    <h2 className="mb-4 font-headline text-3xl font-bold">
                        How To: Get Your Advertising in The Canggu Weekly
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Interested in reaching a dedicated audience of locals and tourists in the Canggu area? We offer a range of advertising options to suit your needs. From featured articles to banner ads, we can help you connect with our readers. For more information on our advertising packages and to discuss how we can work together, please get in touch with our sales team.
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start">
                        <Button asChild>
                            <Link href="/contact">Contact Sales</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
