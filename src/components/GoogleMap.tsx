'use client';

import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';

const libraries: ('places')[] = ['places'];

interface GoogleMapProps {
  lat: number;
  lng: number;
  address: string;
}

export default function GoogleMapComponent({ lat, lng, address }: GoogleMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  const center = useMemo(() => ({ lat, lng }), [lat, lng]);

  if (!isLoaded) {
    return (
      <div className="flex h-[500px] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="text-center">
          <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-red-900 border-t-transparent"></div>
          <p className="text-gray-700 font-medium">Cargando mapa...</p>
        </div>
      </div>
    );
  }

  if (!apiKey) {
    return (
      <div className="flex h-[500px] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="mx-auto max-w-md text-center px-4">
          <p className="text-gray-700 font-medium">
            Por favor, configura NEXT_PUBLIC_GOOGLE_MAPS_API_KEY en tu archivo .env.local
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <GoogleMap
        zoom={16}
        center={center}
        mapContainerClassName="w-full h-[500px] rounded-2xl shadow-xl"
        options={{
          disableDefaultUI: false,
          zoomControl: true,
          streetViewControl: true,
          mapTypeControl: false,
          fullscreenControl: true,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
          ],
        }}
      >
        <Marker position={center} title={address} />
      </GoogleMap>
    </div>
  );
}
