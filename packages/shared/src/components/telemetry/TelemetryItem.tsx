import React from 'react';

interface TelemetryItemProps {
  label: string;
  value: number;
  unit: string;
}

export const TelemetryItem: React.FC<TelemetryItemProps> = ({ label, value, unit }) => (
  <div className="flex flex-col items-center px-4">
    <span className="text-sm text-gray-300">{label}</span>
    <span className="text-lg font-semibold">
      {value.toFixed(1)}{unit}
    </span>
  </div>
);