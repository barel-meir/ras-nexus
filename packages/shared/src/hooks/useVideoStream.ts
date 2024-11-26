import { useState, useEffect } from 'react';

export const useVideoStream = (streamUrl: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const video = document.createElement('video');
    video.src = streamUrl;
    
    video.onloadeddata = () => setIsLoading(false);
    video.onerror = () => setError('Failed to load video stream');

    return () => {
      video.src = '';
    };
  }, [streamUrl]);

  return { isLoading, error };
};