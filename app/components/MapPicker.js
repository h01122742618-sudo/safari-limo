"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const center = { lat: 29.311, lng: 30.841 };

export default function MapPicker({ onSelect }) {
  const [pickup, setPickup] = useState(null);
  const [drop, setDrop] = useState(null);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "300px" }}
        center={center}
        zoom={10}
        onClick={(e) => {
          const point = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
          };

          if (!pickup) {
            setPickup(point);
            onSelect({ pickup: point });
          } else {
            setDrop(point);
            onSelect({ pickup, drop: point });
          }
        }}
      >
        {pickup && <Marker position={pickup} />}
        {drop && <Marker position={drop} />}
      </GoogleMap>
    </LoadScript>
  );
  }
