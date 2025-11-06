import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import TextType from '../TextType';

export function AboutSection() {
    const aboutImage = PlaceHolderImages.find(p => p.id === 'cafe-culture') ?? PlaceHolderImages[0];

    return (
        <section className="overflow-hidden border-[3px] border-black mx-5 my-[10px] border-dashed">
            <div className="flex flex-col md:flex-row md:min-h-[600px]">
                <div className="flex flex-col justify-center p-8 md:p-12 md:w-1/2">
                    <h2 className="mb-4 font-headline text-3xl font-bold">
                        <TextType
                            text={["About Canggu Weekly", "Your Essential Canggu Pulse", "Your Definitive Canggu Story!"]}
                            typingSpeed={50}
                            pauseDuration={1500}
                            showCursor={true}
                            startOnVisible={true}
                            cursorCharacter="|"
                        />
                    </h2>
                    <p className="mb-4 text-muted-foreground text-justify">
                        Welcome to your premier digital guide to the vibrant heart of Bali. We are a passionate team of writers, photographers, and surfers dedicated to bringing you the most authentic and up-to-date stories from Canggu and beyond.
                    </p>
                    <p className="mb-6 text-muted-foreground text-justify">
                        Our mission is to capture the unique blend of modern tropical living, ancient culture, and bohemian spirit that makes this corner of the world so special.
                    </p>
                    <Button asChild variant="secondary" className="self-start">
                        <Link href="/about">
                            Learn More About Us
                        </Link>
                    </Button>
                </div>

                <div className="relative md:w-1/2 hidden md:block">
                    <Image
                        src={"/images/img-5.webp"}
                        alt="Canggu cafe"
                        fill
                        className="object-cover"
                        loading='lazy'
                    />
                </div>
            </div>
        </section>
    );
}
