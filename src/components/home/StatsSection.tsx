import { Users, Newspaper, Smile, Coffee } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export function StatsSection() {
  const statsImage = PlaceHolderImages.find(p => p.id === 'yoga-studio') ?? PlaceHolderImages[8];
  return (
    <section className="overflow-hidden border-[3px] border-black mx-5 my-[10px] border-dashed">
      <div className="flex flex-col md:flex-row md:min-h-screen">
          <div className="relative md:w-1/2 hidden md:block">
              <Image
                  src={statsImage.imageUrl}
                  alt={statsImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={statsImage.imageHint}
              />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12 md:w-1/2">
              <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2">
                  <div className="p-6">
                      <Smile className="mx-auto mb-3 h-12 w-12 text-primary" />
                      <p className="text-3xl font-bold">300+</p>
                      <p className="text-muted-foreground">Happy Clients</p>
                  </div>
                  <div className="p-6">
                      <Users className="mx-auto mb-3 h-12 w-12 text-primary" />
                      <p className="text-3xl font-bold">729</p>
                      <p className="text-muted-foreground">Editions Published</p>
                  </div>
                  <div className="p-6">
                      <Newspaper className="mx-auto mb-3 h-12 w-12 text-primary" />
                      <p className="text-3xl font-bold">~37,000,000</p>
                      <p className="text-muted-foreground">Single Pages Printed</p>
                  </div>
                  <div className="p-6">
                      <Coffee className="mx-auto mb-3 h-12 w-12 text-primary" />
                      <p className="text-3xl font-bold">4,374</p>
                      <p className="text-muted-foreground">Cups of Coffee Sipped</p>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}
