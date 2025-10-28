"use client";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Image from "next/image";
import { useState } from "react";

// Define the type for a branch
interface Branch {
  name: string;
  lat: number;
  lng: number;
  image: string;
  viewMap: string;
  rating: string;
}

const branches: Branch[] = [
  {
    name: "24/7 Bali Belly Home Doctor & Infusion Therapy. (Seminyak)",
    lat: -8.7085285,
    lng: 115.1720993,
    image: "/images/branch_seminyak.png",
    viewMap: "https://maps.app.goo.gl/pd6oaCqVY7T6Px5t6",
    rating: "4.9",
  },
  {
    name: "IV Drip Clinic - Mobile Home Service Bali (24/7) - Bali Belly - Immunity - Hangover. (Jimbaran)",
    lat: -8.8030159,
    lng: 115.1517049,
    image: "/images/branch_jimbaran.png",
    viewMap: "https://maps.app.goo.gl/5yUDkQhDydMX8mVg6",
    rating: "5.0",
  },
  {
    name: "24/7 Apotek Online Pharmacy - Med Delivery - Doctor & IV Drip Home Service. (Canggu)",
    lat: -8.6457827,
    lng: 115.1614056,
    image: "/images/branch_canggu.png",
    viewMap: "https://maps.app.goo.gl/c44xTQpzkbR3UJuN6",
    rating: "5.0",
  }
];

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = { lat: -8.6905, lng: 115.2122 };

export default function GoogleMaps() {
  const [selected, setSelected] = useState<Branch | null>(null);

  return (
    <div className="px-4 mb-10">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || ""}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
          {branches.map((branch, i) => (
            <Marker
              key={i}
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