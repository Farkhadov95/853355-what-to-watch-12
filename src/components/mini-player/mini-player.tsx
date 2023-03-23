import { useEffect, useRef } from 'react';

type playerProps = {
  videoSrc: string;
  isActive: boolean;
};

function MiniPlayer({videoSrc, isActive}: playerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if(videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => {
      if(videoRef.current === null) {
        return;
      }
      videoRef.current.play();
    });

    return videoRef.current.removeEventListener('loadeddata', () => {
      if(videoRef.current === null) {
        return;
      }
      videoRef.current.play();
    });

  }, [isActive, videoRef]);

  return (
    <video ref={videoRef} width="280" height="175" autoPlay muted>
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}

export default MiniPlayer;
