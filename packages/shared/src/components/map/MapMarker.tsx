import React from 'react';
import { Marker as LeafletMarker } from 'react-leaflet';
import L from 'leaflet';

interface MapMarkerProps {
  position: [number, number];
}

const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const MapMarker: React.FC<MapMarkerProps> = ({ position }) => {
  return <LeafletMarker position={position} icon={defaultIcon} />;
};