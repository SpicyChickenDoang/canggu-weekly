
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

export function LocationsSection() {
  const [selectedLocation, setSelectedLocation] = useState<Location>('A');

  return (
    <section id="locations" className="border-black mx-5 my-[10px] border-dashed border-[3px] bg-card py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-bold">Our Distribution Network</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Find our magazine at these fine locations across the island. Select an area to see our distribution points.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
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

        <div className="rounded-lg overflow-hidden border shadow-lg">
            <GoogleMaps locationId={selectedLocation} />
        </div>
      </div>
    </section>
  );
}
