import { useState, useEffect } from 'react';
import { TelemetryData } from '../types/telemetry';

export const useTelemetry = (initialData: TelemetryData) => {
  const [telemetryData, setTelemetryData] = useState<TelemetryData>(initialData);

  // Mock telemetry updates - replace with real data source
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryData(prev => ({
        altitude: prev.altitude + (Math.random() - 0.5) * 10,
        speed: prev.speed + (Math.random() - 0.5) * 5,
        heading: (prev.heading + (Math.random() - 0.5) * 10 + 360) % 360,
        battery: Math.max(0, Math.min(100, prev.battery - Math.random() * 0.1))
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return telemetryData;
};