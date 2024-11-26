import React from 'react';
import { TelemetryData } from '../../types/telemetry';
import { TelemetryItem } from './TelemetryItem';

export const TelemetryBar: React.FC<{ data: TelemetryData }> = ({ data }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white p-4 flex justify-around">
      <TelemetryItem label="Altitude" value={data.altitude} unit="m" />
      <TelemetryItem label="Speed" value={data.speed} unit="km/h" />
      <TelemetryItem label="Heading" value={data.heading} unit="°" />
      <TelemetryItem label="Battery" value={data.battery} unit="%" />
    </div>
  );
};