import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import HeaderUserBlock from '../../components/header-user-block/header-user-block';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { setFilmStatusAction } from '../../store/actions/api-actions';
import { filmSelector, isFilmsLoadingSelector } from '../../store/selectors';
import FilmsCatalogScreen from '../films-catalog-screen/films-catalog-screen';
import LoadingScreen from '../loading-screen/loading-screen';


function MainScreen(): JSX.Element {
  const {filmsData} = useAppSelector(filmSelector);
  const isFilmsDataLoading = useAppSelector(isFilmsLoadingSelector);

  if (isFilmsDataLoading) {
    return (
      <LoadingScreen />
    );
  }
  const film = filmsData[0];
  const getFavoritesNumber = () => {
    const favorites = filmsData.filter((item) => item.isFavorite);
    return favorites.length;
  };

  const onStatusClick = () => {
    store.dispatch(setFilmStatusAction({id: Number(film.id), status: film.isFavorite ? 0 : 1}));
  };

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.backgroundImage} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo />
          <HeaderUserBlock />
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={film.posterImage} alt={film.posterImage} width="218" height="327" />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <Link to={`${AppRoute.Player}/${film.id}`} title='player' style={{textDecoration: 'none' , color: '#eee5b5'}}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </Link>
                </button>

                <button className="btn btn--list film-card__button" type="button" onClick={onStatusClick}>
                  {
                    film.isFavorite ?
                      <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5"/>
                      </svg> :
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>
                  }
                  <span>My list</span>
                  <span className="film-card__count">{getFavoritesNumber()}</span>
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <FilmsCatalogScreen />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default MainScreen;
