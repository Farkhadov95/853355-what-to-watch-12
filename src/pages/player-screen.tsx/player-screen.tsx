import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute } from '../../store/actions/action';
import { getFilms } from '../../store/selectors';
import NotFoundScreen from '../not-found-screen/not-found-screen';

//TODO: Fix page refresh problem

function PlayerScreen(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const filmsData = useAppSelector(getFilms);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const film = filmsData.find((item) => item.id === Number(id));

  useEffect(() => {
    if (videoRef.current) {
      const handlePlay = () => {
        setIsPlaying(true);
      };
      const handlePause = () => {
        setIsPlaying(false);
      };

      const handleLoadedMetadata = () => {
        if (videoRef.current) {
          setDuration(videoRef.current.duration);
        }
      };

      const handleTimeUpdate = () => {
        if (videoRef.current) {
          setCurrentTime(videoRef.current?.currentTime);
          const videoCurrent = videoRef.current?.currentTime;
          const videoDuration = videoRef.current?.duration;
          if (videoCurrent && videoDuration) {
            setProgress((videoCurrent / videoDuration) * 100);
          }
        }
      };

      videoRef.current.addEventListener('play', handlePlay);
      videoRef.current.addEventListener('pause', handlePause);
      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);

      return () => {
        videoRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
        videoRef.current?.removeEventListener('play', handlePlay);
        videoRef.current?.removeEventListener('pause', handlePause);
        videoRef.current?.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [videoRef]);

  if (!film) {
    return <NotFoundScreen />;
  }


  const onExitButtonClick = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    dispatch(redirectToRoute(AppRoute.Root));
  };

  const onPlayButtonClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const onFullScreenButtonClick = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  function formatTime(seconds: number) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    if (h === 0) {
      return `- ${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    } else {
      return `- ${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
  }

  return (
    <div className="player">
      <video
        className="player__video"
        src={film.videoLink}
        poster="img/player-poster.jpg"
        ref={videoRef}
        autoPlay
      >
      </video>

      <button type="button" className="player__exit" onClick={onExitButtonClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{`${formatTime(duration - currentTime)}`}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlayButtonClick}>
            {
              isPlaying ?
                <>
                  <svg width="14px" height="21px" viewBox="0 0 14 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"></polygon>
                      <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"></polygon>
                    </g>
                  </svg>
                  <span>Play</span>
                </> :
                <>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Pause</span>
                </>
            }
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
