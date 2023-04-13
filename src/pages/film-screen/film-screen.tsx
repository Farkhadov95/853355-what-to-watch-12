import Footer from '../../components/footer/footer';
import HeaderUserBlock from '../../components/header-user-block/header-user-block';
import Logo from '../../components/logo/logo';
import FilmCards from '../../components/film-cards/film-cards';
import { useAppSelector } from '../../hooks';
import { filmSelector, isFilmsLoadingSelector } from '../../store/selectors';
import { Link, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { getFilmSatisfaction } from '../../utils/utils';
import LoadingScreen from '../loading-screen/loading-screen';


function FilmOverviewScreen():JSX.Element {
  const {id} = useParams();
  const { filmsData } = useAppSelector(filmSelector);
  const isFilmsDataLoading = useAppSelector(isFilmsLoadingSelector);

  if (isFilmsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  const film = filmsData.find((item) => item.id === Number(id));

  if (!film) {
    return <NotFoundScreen />;
  }

  const filmSatisfaction = getFilmSatisfaction(film.rating);

  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor: film.backgroundColor || '#970a0a'}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.backgroundImage} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <HeaderUserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`${AppRoute.Player}/${film.id}`}>
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 18 14" width="18" height="14">
                    <use xlinkHref="#in-list"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={`${AppRoute.Review}/${film.id}`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

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
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            <FilmCards films={filmsData.slice(0, 4)}/>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default FilmOverviewScreen;
