import Footer from '../../components/footer/footer';
import HeaderUserBlock from '../../components/header-user-block/header-user-block';
import Logo from '../../components/logo/logo';
import { Films } from '../../types/films';
import FilmsCatalogScreen from '../films-catalog-screen/films-catalog-screen';

type MainScreenProps = {
  mainFilm: string;
  mainGenre: string;
  mainYear: number;
  films: Films;
}

function MainScreen(props: MainScreenProps): JSX.Element {

  return (
    <div className="main-screen-container">
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <HeaderUserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{props.mainFilm}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.mainGenre}</span>
                <span className="film-card__year">{props.mainYear}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <FilmsCatalogScreen films={props.films} />
        <Footer />
      </div>
    </div>
  );
}

export default MainScreen;
