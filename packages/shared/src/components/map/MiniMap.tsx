import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { MapMarker } from './MapMarker';
import 'leaflet/dist/leaflet.css';

interface MiniMapProps {
  position: [number, number];
  zoom?: number;
}

export const MiniMap: React.FC<MiniMapProps> = ({ position, zoom = 13 }) => {
  return (
    <div className="fixed bottom-4 right-4 w-64 h-64 rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapMarker position={position} />
      </MapContainer>
    </div>
  );
};