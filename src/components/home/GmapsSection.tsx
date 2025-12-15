
'use client';

import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import GoogleMaps from '../GoogleMaps';

type Location = 'A' | 'B' | 'C' | 'D';

const locations: { value: Location; label: string }[] = [
  { value: 'A', label: 'Canggu & Berawa' },
  { value: 'B', label: 'Seminyak & Kuta' },
  { value: 'C', label: 'Ubud' },
  { value: 'D', label: 'Sanur' },
];

export default function LocationsSection() {
  const [selectedLocation, setSelectedLocation] = useState<Location>('A');

  return (
    <section id="locations" className="border-black mx-5 my-[10px] border-dashed border-[3px] bg-card md:py-24">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-center md:text-left mb-8">
              <h2 className="font-headline text-4xl font-bold">Our Distribution Network</h2>
              <p className="mt-2 text-muted-foreground">
                Select a region to see our magazine distribution points.
              </p>
            </div>

            <div className="max-w-md mx-auto md:mx-0">
              <Select onValueChange={(value: Location) => setSelectedLocation(value)} value={selectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc.value} value={loc.value}>
                      {loc.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border shadow-lg min-h-[500px]">
            <GoogleMaps locationId={selectedLocation} />
          </div>
        </div>
      </div>
    </section>
  );
}
