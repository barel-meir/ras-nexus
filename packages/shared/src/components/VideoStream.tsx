import React from 'react';

interface VideoStreamProps {
  streamUrl: string;
}

export const VideoStream: React.FC<VideoStreamProps> = ({ streamUrl }) => {
  return (
    <div className="w-full h-screen bg-black">
      <video
        className="w-full h-full object-contain"
        autoPlay
        playsInline
        muted
        src={streamUrl}
      />
    </div>
  );
};