import React from 'react';

export interface TelemetryData {
  altitude: number;
  speed: number;
  heading: number;
  battery: number;
}

export const TelemetryBar: React.FC<{ data: TelemetryData }> = ({ data }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-black/50 text-white p-4 flex justify-around">
      <div>Altitude: {data.altitude}m</div>
      <div>Speed: {data.speed}km/h</div>
      <div>Heading: {data.heading}°</div>
      <div>Battery: {data.battery}%</div>
    </div>
  );
};