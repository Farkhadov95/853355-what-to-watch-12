import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/films';
import MiniPlayer from '../mini-player/mini-player';


type FilmCardProps = {
  film: Film;
  isActive: boolean;
  mouseOverHandler: (id: number) => void;
  mouseOutHandler: () => void;
}

function FilmCard({film, isActive = false, mouseOverHandler, mouseOutHandler}: FilmCardProps): JSX.Element {
  const {name, imgSrc} = film;

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
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image"
        onMouseOver={() => mouseOverHandler(film.id)}
        onMouseOut={()=> mouseOutHandler()}
      >
        {
          showVideo ?
            <MiniPlayer film={film} isActive={isActive}/>
            : <img src={imgSrc} alt="name" width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link to='film' className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
