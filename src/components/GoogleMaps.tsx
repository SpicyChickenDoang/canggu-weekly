
"use client";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Image from "next/image";
import { useState, useMemo } from "react";

// Define the type for a branch
interface Branch {
  name: string;
  lat: number;
  lng: number;
  image: string;
  viewMap: string;
  rating: string;
}

const allBranches: Record<string, Branch[]> = {
    A: [
      { name: "La Boheme Mansion (Pererenan)", lat: -8.6323707, lng: 115.1297222, image: "/images/logo-headline.png", viewMap: "https://maps.app.goo.gl/n8cFLjnH8ok1Z2ACA", rating: "4.9" },
      { name: "Crate Cafe", lat: -8.6593, lng: 115.1385, image: "/images/logo-headline.png", viewMap: "https://maps.app.goo.gl/n8cFLjnH8ok1Z2ACA", rating: "4.5" },
    ],
    B: [
        { name: "Sisterfields Cafe", lat: -8.6917, lng: 115.1558, image: "/images/logo-headline.png", viewMap: "https://maps.app.goo.gl/n8cFLjnH8ok1Z2ACA", rating: "4.6" },
        { name: "Waterbom Bali", lat: -8.7269, lng: 115.1691, image: "/images/logo-headline.png", viewMap: "https://maps.app.goo.gl/n8cFLjnH8ok1Z2ACA", rating: "4.7" },
    ],
    C: [
        { name: "Yoga Barn", lat: -8.5199, lng: 115.2649, image: "/images/logo-headline.png", viewMap: "https://maps.app.goo.gl/n8cFLjnH8ok1Z2ACA", rating: "4.8" },
        { name: "Ubud Monkey Forest", lat: -8.5193, lng: 115.2595, image: "/images/logo-headline.png", viewMap: "https://maps.app.goo.gl/n8cFLjnH8ok1Z2ACA", rating: "4.6" },
    ],
    D: [
        { name: "Genius Cafe", lat: -8.7184, lng: 115.2608, image: "/images/logo-headline.png", viewMap: "https://maps.app.goo.gl/n8cFLjnH8ok1Z2ACA", rating: "4.4" },
        { name: "Prama Sanur Beach", lat: -8.7101, lng: 115.2632, image: "/images/logo-headline.png", viewMap: "https://maps.app.goo.gl/n8cFLjnH8ok1Z2ACA", rating: "4.5" },
    ],
};

const locationCenters: Record<string, { lat: number; lng: number; }> = {
    A: { lat: -8.64, lng: 115.135 },
    B: { lat: -8.70, lng: 115.16 },
    C: { lat: -8.51, lng: 115.26 },
    D: { lat: -8.71, lng: 115.26 },
}

const containerStyle = {
  width: "100%",
  height: "500px",
};

interface GoogleMapsProps {
    locationId: string;
}

export default function GoogleMaps({ locationId }: GoogleMapsProps) {
  const [selected, setSelected] = useState<Branch | null>(null);

  const branches = useMemo(() => allBranches[locationId] || [], [locationId]);
  const center = useMemo(() => locationCenters[locationId] || { lat: -8.65, lng: 115.15 }, [locationId]);

  return (
    <div className="px-4 mb-10">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || ""}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13} key={locationId}>
          {branches.map((branch, i) => (
            <Marker
              key={`${locationId}-${i}`}
              position={{ lat: branch.lat, lng: branch.lng }}
              title={branch.name}
              onClick={() => setSelected(branch)}
            />
          ))}

          {selected && (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => setSelected(null)}
            >
              <div style={{ maxWidth: "200px" }}>
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-[90px] object-cover"
                />
                <div className="flex items-center gap-2 justify-between my-2">
                  <p className="text-left text-xs font-medium">
                    {selected.name}
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${selected.lat},${selected.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 bg-[#D3F7FF] rounded-full"
                  >
                    <Image
                      src="/images/direction_icon.png"
                      width={20}
                      height={20}
                      alt="direction icon"
                      className="w-5 h-5"
                    />
                  </a>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
