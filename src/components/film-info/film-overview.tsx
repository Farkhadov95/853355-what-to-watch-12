import { Film } from '../../types/films';
import { getFilmSatisfaction } from '../../utils/utils';

type FilmOverviewProps = {
    film: Film;
}

function FilmOverview({film}: FilmOverviewProps): JSX.Element {

  // eslint-disable-next-line no-console
  console.log(film);

  const filmSatisfaction = getFilmSatisfaction(film.rating);
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{filmSatisfaction}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description.info}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {(film.starring).join(', ')}</strong></p>
      </div>
    </>
  );
}

export default FilmOverview;
