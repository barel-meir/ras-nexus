import React from 'react';
import { TelemetryBar, MiniMap, VideoStream } from '@ras-nexus/shared';
import { useTelemetry } from '@ras-nexus/shared/src/hooks/useTelemetry';

function App() {
  const initialTelemetry = {
    altitude: 150,
    speed: 45,
    heading: 270,
    battery: 85
  };

  const telemetryData = useTelemetry(initialTelemetry);
  const defaultPosition: [number, number] = [32.0853, 34.7818];

  return (
    <div className="relative">
      <VideoStream streamUrl="https://example.com/stream" />
      <TelemetryBar data={telemetryData} />
      <MiniMap position={defaultPosition} />
    </div>
  );
}

export default App;