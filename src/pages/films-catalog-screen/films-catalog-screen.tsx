import { useState } from 'react';
import FilmCards from '../../components/film-cards/film-cards';
import GenreItem from '../../components/genre-item/genre-item';
import { DEFAULT_GENRE, FilmsToRender } from '../../const';
import { useAppSelector } from '../../hooks';
import { filmsSelector, genreSelector } from '../../store/selectors';

function FilmsCatalogScreen():JSX.Element {

  const filmsArray = useAppSelector(filmsSelector);
  const selectedGenre = useAppSelector(genreSelector);
  const [filmsCount, setFilmsCount] = useState(FilmsToRender.DEFAULT_FILMS_COUNT);

  const filmsToDisplay = () => {
    if (selectedGenre === DEFAULT_GENRE) {
      return filmsArray;
    }
    return filmsArray.filter((film) => film.genre === selectedGenre);
  };

  const incrementFilmsCount = () => {
    setFilmsCount(filmsCount + FilmsToRender.STEP_SHOW_MORE);
  };

  const availableGenres = [DEFAULT_GENRE, ...new Set(filmsArray.map((film) => film.genre))];

  return(
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {
          availableGenres.map((genre) =>
            <GenreItem key={genre} genre={genre} isActive={selectedGenre === genre} />)
        }
      </ul>

      <div className="catalog__films-list">
        <FilmCards films={filmsToDisplay()} currentFilmsCount={filmsCount}/>
      </div>

      {
        filmsCount < filmsToDisplay().length ?
          <div className="catalog__more">
            <button className="catalog__button" type="button" onClick={incrementFilmsCount}>Show more</button>
          </div> : ''
      }
    </section>
  );
}

export default FilmsCatalogScreen;
