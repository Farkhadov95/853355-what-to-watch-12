import FilmCards from '../../components/film-cards/film-cards';
import GenreItem from '../../components/genre-item/genre-item';
import { DEFAULT_GENRE } from '../../const';
import { useAppSelector } from '../../hooks';
import { filmSelector, genreSelector } from '../../store/selectors';

function FilmsCatalogScreen():JSX.Element {

  const {filmsData} = useAppSelector(filmSelector);
  const selectedGenre = useAppSelector(genreSelector);

  const filmsToDisplay = () => {
    if (selectedGenre === DEFAULT_GENRE) {
      return filmsData;
    }
    return filmsData.filter((film) => film.genre === selectedGenre);
  };

  const availableGenres = [DEFAULT_GENRE, ...new Set(filmsData.map((film) => film.genre))];

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
        <FilmCards films={filmsToDisplay()}/>
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default FilmsCatalogScreen;
