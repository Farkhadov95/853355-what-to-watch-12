import { useEffect, useRef, useState } from 'react';
import { Film } from '../../types/films';

type playerProps = {
  film: Film;
  isActive: boolean;
};

function MiniPlayer({film, isActive}: playerProps) {
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

  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    if (isActive) {
      timeoutId = setTimeout(() => {
        setShowVideo(true);
      }, 1000);
    } else {
      setShowVideo(false);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isActive]);

  return (
    showVideo ?
      <video
        ref={videoRef}
        width="280"
        height="175"
        autoPlay
        muted
      >
        <source src={film.previewVideoLink} type="video/mp4" />
      </video>
      :
      <img src={film.previewImage} alt="name" width="280" height="175" />
  );
}

export default MiniPlayer;

