
'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const magazineImages = [
  PlaceHolderImages.find(p => p.id === 'magazine-preview-1'),
  PlaceHolderImages.find(p => p.id === 'magazine-preview-2'),
  PlaceHolderImages.find(p => p.id === 'magazine-preview-3'),
].filter(Boolean);


export function MagazinePreviewSection() {
  return (
    <section className="border-black mx-5 my-[10px] border-dashed border-[3px] bg-card py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-bold">A Glimpse Inside</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Visualize your brand featured in our clean, modern, and visually-appealing layouts.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {magazineImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="flex aspect-[4/3] items-center justify-center p-0">
                      <Image
                        src={image!.imageUrl}
                        alt={image!.description}
                        width={800}
                        height={600}
                        className="object-cover"
                        data-ai-hint={image!.imageHint}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='hidden md:inline-flex'/>
          <CarouselNext className='hidden md:inline-flex'/>
        </Carousel>
      </div>
    </section>
  );
}

    