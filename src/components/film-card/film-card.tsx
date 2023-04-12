import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/films';
import MiniPlayer from '../mini-player/mini-player';


type FilmCardProps = {
  film: Film;
  isActive: boolean;
  mouseOverHandler: (id: number) => void;
  mouseOutHandler: () => void;
}

function FilmCard({film, isActive = false, mouseOverHandler, mouseOutHandler}: FilmCardProps): JSX.Element {

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image"
        onMouseOver={() => mouseOverHandler(film.id)}
        onMouseOut={()=> mouseOutHandler()}
      >
        <MiniPlayer film={film} isActive={isActive}/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`${AppRoute.Film}/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
