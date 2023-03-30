import classNames from 'classnames';
import FilmCards from '../../components/film-cards/film-cards';
import GenreItem from '../../components/genre-item/genre-item';
import { Genres } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setGenre } from '../../store/actions/action';

function FilmsCatalogScreen():JSX.Element {

  const films = useAppSelector((state) => state.films);
  const selectedGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  const filmsToDisplay = () => {
    if (selectedGenre === Genres.AllGenres) {
      return films;
    }
    return films.filter((film) => film.genre === selectedGenre);
  };

  const availableGenres = [...new Set(films.map((film) => film.genre))];

  // eslint-disable-next-line no-console
  console.log(selectedGenre);

  const onGenreChange = (chosenGenre: string) => {
    dispatch(setGenre(chosenGenre));
  };

  const allGenreClass = classNames('catalog__genres-item', {
    'catalog__genres-item--active': (selectedGenre === Genres.AllGenres)
  });


  return(
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        <li className={allGenreClass}>
          <a href="#" className="catalog__genres-link" onClick={() => onGenreChange(Genres.AllGenres)}>All genres</a>
        </li>
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
