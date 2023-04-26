import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import HeaderUserBlock from '../../components/header-user-block/header-user-block';
import Logo from '../../components/logo/logo';
import MyListButton from '../../components/mylist-button/mylist-button';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { filmsSelector, isFilmsLoadingSelector } from '../../store/selectors';
import FilmsCatalogScreen from '../films-catalog-screen/films-catalog-screen';
import LoadingScreen from '../loading-screen/loading-screen';

function MainScreen(): JSX.Element {
  const filmsArray = useAppSelector(filmsSelector);
  const isFilmsDataLoading = useAppSelector(isFilmsLoadingSelector);

  if (isFilmsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  const film = filmsArray[0];

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

                <MyListButton id={film.id}/>

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
