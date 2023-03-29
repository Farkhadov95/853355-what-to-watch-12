import { Films } from '../../types/films';
import FilmCards from '../../components/film-cards/film-cards';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre, resetGenre } from '../../store/actions/action';

type FilmsCatalogScreenProps = {
    films: Films;
}

function FilmsCatalogScreen({films}: FilmsCatalogScreenProps):JSX.Element {

  const filmsByGenre = useAppSelector((state) => state.films);
  const selectedGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  // eslint-disable-next-line no-console
  console.log(selectedGenre);

  // const onGenreChange = () => {
  //   // eslint-disable-next-line no-console
  //   dispatch(changeGenre);
  // };

  return(
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link" onClick={() => dispatch(resetGenre)}>All genres</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link" onClick={() => dispatch(changeGenre)}>Comedies</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Crime</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Documentary</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Dramas</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Horror</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Kids & Family</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Romance</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Sci-Fi</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Thrillers</a>
        </li>
      </ul>

      <div className="catalog__films-list">
        <FilmCards films={filmsByGenre}/>
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default FilmsCatalogScreen;
