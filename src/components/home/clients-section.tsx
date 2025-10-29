'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const clients = [
  { name: 'Hyatt', src: "/icons/hyatt.png", url: "https://www.hyatt.com/hyatt-regency/en-US/dpsbl-hyatt-regency-bali" },
  { name: 'Nest', src: "/icons/nest.jpg", url: "https://www.thenestbeachsidespa.com/" },
  { name: 'Rejuvenique', src: "/icons/rejuvenique.png", url: "https://www.rejuveniqueclinic.com/" },
  { name: 'Rejuvie Clinic', src: "/icons/rejuvieclinic.png", url: "https://rejuvieclinic.com/" },
  { name: 'altfnctrl', src: "/icons/afc-logo.jpg", url: "https://www.altfnctrl.com/" },
  { name: 'All 4 Diving', src: "/icons/all-4-diving.jpg", url: "https://www.all4divingindonesia.com/" },
  { name: 'Bali Bagus', src: "/icons/balibagus.jpg", url: "https://www.facebook.com/pages/Warung-Bali-Bagus/958701447498048" },
  { name: 'Bali Moves', src: "/icons/balimoves.jpg", url: "https://www.balimoves.com/" },
  { name: 'BH Finance', src: "/icons/bhfinan.jpg", url: "https://bhfinancialservices.com/" },
  { name: 'Clubhouse', src: "/icons/clubhouse.jpg", url: "https://clubhousebali.com/" },
  { name: 'Crystal Divers', src: "/icons/crystaldivers.gif", url: "https://www.crystal-divers.com/" },
  { name: 'Das Bistros', src: "/icons/das-bisto-logo.png", url: "https://dasbistrobymamas.com/" },
  { name: 'Good Massage', src: "/icons/goodmassage.gif", url: "https://www.spabaligoodmassage.com/" },
  { name: 'Genius Cafe', src: "/icons/geniuscafe.jpg", url: "https://geniuscafebali.com/" },
  { name: 'IVape', src: "/icons/ivape.jpg", url: "https://www.instagram.com/ivapeindo/" },
  { name: 'Jalapeno', src: "/icons/jalapeno.jpg", url: "https://www.jalapenobali.com" },
  { name: 'Maya', src: "/icons/maya.jpg", url: "https://mayaresorts.com/sanur" },
  { name: 'Prime Plaza', src: "/icons/primeplaza.jpg", url: "https://spph.pphotels.com/" },
  { name: 'Sanur Property Dev', src: "/icons/sanurpropertydev.jpg", url: "https://www.facebook.com/people/Sanur-Property-Developments/100063889780318/#" },
  { name: 'Siki', src: "/icons/siki.png", url: "https://siki-bali.com/en/" },
  { name: 'Stileworks', src: "/icons/stileworks.jpg", url: "https://www.stileworks.com/" },
  { name: 'Utama Spice', src: "/icons/utamaspice.gif", url: "https://utamaspicebali.com/" },
  { name: 'Yayasan Senyum', src: "/icons/yayasan-senyum.png", url: "https://www.senyumbali.org/" },
  { name: 'Clubhouse Condos', src: "/icons/clubhouse-condos.jpg", url: "" },
  { name: 'Jamu', src: "/icons/jamu.png", url: "" },
  { name: 'Manshed', src: "/icons/manshed.jpg", url: "" },
  { name: 'Prama', src: "/icons/prama.jpg", url: "" },
  { name: 'Pvb', src: "/icons/pvb.jpg", url: "" },
  { name: 'Suka Merta', src: "/icons/suka-merta.jpg", url: "" },
];

const ClientLogo = ({ name, src, url }: { name: string; src: string, url: string }) => (
  <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-card p-4 transition-colors hover:bg-muted">
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div className="text-center">
        <div className="text-3xl">
          <Image
            src={src}
            alt={name}
            width={150}
            height={60}
            className="mx-auto h-12 object-contain"
            loading="lazy"
          />
        </div>
        <p className="mt-2 text-xs font-semibold text-muted-foreground">{name}</p>
      </div>
    </Link>
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
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Our Happy Clients</DialogTitle>
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
