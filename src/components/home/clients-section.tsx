'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const clients = [
  { name: 'Surf Shack', logo: '🏄' },
  { name: 'Bali Beans', logo: '☕' },
  { name: 'Sunset Villas', logo: '🌴' },
  { name: 'Yoga Haven', logo: '🧘' },
  { name: 'Island Eats', logo: '🍍' },
  { name: 'Scooter Rentals', logo: '🛵' },
  { name: 'Beachside Boutique', logo: '🛍️' },
  { name: 'Tropical Tours', logo: '🗺️' },
  { name: 'Finns Club', logo: '🌊' },
  { name: 'La Brisa', logo: '☀️' },
  { name: 'The Lawn', logo: '🍹' },
  { name: 'Deus Ex Machina', logo: '🏍️' },
];

const ClientLogo = ({ name, logo }: { name: string; logo: string }) => (
  <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-card p-4 transition-colors hover:bg-muted">
    <div className="text-center">
      <div className="text-3xl">{logo}</div>
      <p className="mt-2 text-xs font-semibold text-muted-foreground">{name}</p>
    </div>
  </div>
);

export function ClientsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 font-headline text-3xl font-bold">Our Happy Clients</h2>
        <p className="mb-12 max-w-2xl mx-auto text-muted-foreground">
          We are proud to partner with some of the best businesses in Canggu.
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
          {clients.slice(0, 4).map((client) => (
            <ClientLogo key={client.name} {...client} />
          ))}
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="mt-12">
              Show All Clients
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Our Valued Partners</DialogTitle>
            </DialogHeader>
            <div className="grid max-h-[60vh] grid-cols-2 gap-4 overflow-y-auto p-1 md:grid-cols-3 lg:grid-cols-4">
              {clients.map((client) => (
                <ClientLogo key={client.name} {...client} />
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
