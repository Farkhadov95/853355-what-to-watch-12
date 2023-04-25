import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import HeaderUserBlock from '../../components/header-user-block/header-user-block';
import Logo from '../../components/logo/logo';
import FilmCards from '../../components/film-cards/film-cards';
import { useAppSelector } from '../../hooks';
import { authorizationStatusSelector, isFilmsLoadingSelector, reviewsSelector, similarFilmsSelector } from '../../store/selectors';
import { AppRoute, AuthorizationStatus, MORE_LIKE_COUNT, TabNames } from '../../const';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import FilmReviews from '../../components/film-info/film-reviews';
import FilmOverview from '../../components/film-info/film-overview';
import FilmDetails from '../../components/film-info/film-details';
import classNames from 'classnames';
import { fetchFilmReviewsAction, fetchSimilarFilmsAction } from '../../store/actions/api-actions';
import { store } from '../../store';
import MyListButton from '../../components/mylist-button/mylist-button';


function FilmScreen():JSX.Element {
  const {id} = useParams();
  const authorizationStatus = useAppSelector(authorizationStatusSelector);
  const similarFilms = useAppSelector(similarFilmsSelector);
  const isFilmsDataLoading = useAppSelector(isFilmsLoadingSelector);
  const reviews = useAppSelector(reviewsSelector);

  useEffect(() => {
    async function fetchData() {
      store.dispatch(fetchFilmReviewsAction(Number(id)));
      await store.dispatch(fetchSimilarFilmsAction({id: Number(id)}));
    }
    fetchData();
  }, [id]);

  const [activeTab, setActiveTab] = useState('Overview');

  const handlerTabChange = (tabName: TabNames) => {
    setActiveTab(tabName);
  };

  if (isFilmsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  const film = similarFilms.find((item) => item.id === Number(id));

  if (!film) {
    return <NotFoundScreen />;
  }

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
                <button className="btn btn--play film-card__button" type="button">
                  <Link to={`${AppRoute.Player}/${film.id}`} title='player' style={{textDecoration: 'none' , color: '#eee5b5'}}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </Link>
                </button>
                <MyListButton id={film.id}/>
                {
                  authorizationStatus === AuthorizationStatus.Auth
                    ? <Link to={`${AppRoute.Review}/${film.id}`} className="btn film-card__button">Add review</Link>
                    : ''
                }
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
                  {
                    Object.values(TabNames).map((tabName) => (
                      <li key={tabName} className={classNames('film-nav__item', {'film-nav__item--active' : activeTab === tabName})}>
                        <Link to="#" className="film-nav__link" onClick={() => handlerTabChange(tabName)}>{tabName}</Link>
                      </li>
                    ))
                  }
                </ul>
              </nav>
              {activeTab === 'Overview' && <FilmOverview film={film} />}
              {activeTab === 'Details' && <FilmDetails film={film} />}
              {activeTab === 'Reviews' && <FilmReviews reviews={reviews} />}

            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            <FilmCards films={similarFilms} currentFilmsCount={MORE_LIKE_COUNT}/>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default FilmScreen;
