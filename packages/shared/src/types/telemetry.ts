export interface TelemetryData {
  altitude: number;
  speed: number;
  heading: number;
  battery: number;
}

export interface GeoPosition {
  latitude: number;
  longitude: number;
}

export type Coordinates = [number, number];