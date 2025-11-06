import Image from "next/image";
import GoogleMaps from "../GoogleMaps";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function GMapsSection() {
    const gmapsImage = PlaceHolderImages.find(p => p.id === 'gmaps-image') ?? PlaceHolderImages[0];
  return (
    <section className="overflow-hidden border-[3px] border-black mx-5 my-[10px] border-dashed">
        <div className="flex flex-col md:flex-row md:min-h-[600px]">
            <div className="relative md:w-1/2 hidden md:block">
                <Image
                    src={"/images/6-min.webp"}
                    alt={gmapsImage.description}
                    fill
                    className="object-cover"
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col justify-center p-8 text-center md:w-1/2">
                <h2 className="mb-4 font-headline text-3xl font-bold">Our Distribution Network</h2>
                <p className="mb-12 max-w-2xl mx-auto text-muted-foreground">
                    Find our magazine at these fine locations across the island.
                </p>
                <GoogleMaps />
            </div>
            
        </div>
    </section>
  );
}
