import Footer from '../../components/footer/footer';
import HeaderUserBlock from '../../components/header-user-block/header-user-block';
import Logo from '../../components/logo/logo';
import FilmCards from '../../components/film-cards/film-cards';
import { useAppSelector } from '../../hooks';
import { filmSelector } from '../../store/selectors';
import { Film } from '../../types/films';
import { Link, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';


function FilmOverviewScreen():JSX.Element {
  const {id} = useParams();
  const films = useAppSelector(filmSelector);

  const film: Film | undefined = films.find((item) => item.id === Number(id));
  let filmSatisfaction: string;

  if (film && film.rating) {
    if (film.rating <= 3.5) {
      filmSatisfaction = 'Unwatchable';
    } else if (film.rating <= 5) {
      filmSatisfaction = 'Bad';
    } else if (film.rating <= 6.5) {
      filmSatisfaction = 'Normal';
    } else if (film.rating <= 8) {
      filmSatisfaction = 'Good';
    } else if (film.rating <= 10) {
      filmSatisfaction = 'Masterpiece';
    } else {
      filmSatisfaction = 'N/A';
    }
  } else {
    filmSatisfaction = 'N/A';
  }


  const backgroundColor = {
    backgroundColor: film?.backgroundColor,
  };

  return (
    <>
      <section className="film-card film-card--full" style={backgroundColor}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.backgroundImage} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <HeaderUserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`${AppRoute.Player}/${film!.id}`}>
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
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
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
                <div className="film-rating__score">{film?.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{filmSatisfaction}</span>
                  <span className="film-rating__count">{film?.scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{film?.description.info}</p>

                <p className="film-card__director"><strong>Director: {film?.director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {(film?.starring)?.join(', ')}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            <FilmCards films={films.slice(0, 4)}/>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default FilmOverviewScreen;
