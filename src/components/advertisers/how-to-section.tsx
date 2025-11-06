import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import TextType from '../TextType';

export function HowToSection() {
    const howToImage = PlaceHolderImages.find(p => p.id === 'archive-1') ?? PlaceHolderImages[10];

    return (
        <section className="overflow-hidden border-[3px] border-black mx-5 my-[10px] border-dashed">
            <div className="flex flex-col md:flex-row">
                <div className="relative min-h-[200px] md:hidden">
                    <Image
                        src={"/images/women-reading.webp"}
                        alt={howToImage.description}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col justify-center p-8 text-center md:p-12 md:text-left md:w-1/2">
                    <h2 className="font-headline text-3xl font-bold">
                        How To:
                    </h2>
                    <h3 className="mb-4 font-headline text-2xl font-bold">
                        Advertise & Grow with Canggu Weekly
                    </h3>
                    <p className="mx-auto max-w-2xl text-muted-foreground md:mx-0 text-justify">
                        Interested in reaching a dedicated audience of locals and tourists in the Canggu area? We offer a range of advertising options to suit your needs. From featured articles to banner ads, <span className='text-amber-500 font-bold'>we can help you connect with our readers</span>. For more information on our advertising packages and to discuss how we can work together, please get in touch with our sales team.
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start">
                        <Button asChild>
                            <Link href="#contact">Contact Sales</Link>
                        </Button>
                    </div>
                </div>
                <div className="relative min-h-screen hidden md:block md:w-1/2  ">
                    <Image
                        src={"/images/women-reading.webp"}
                        alt={howToImage.description}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
