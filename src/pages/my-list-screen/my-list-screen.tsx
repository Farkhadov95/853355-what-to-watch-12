import FilmCards from '../../components/film-cards/film-cards';
import Footer from '../../components/footer/footer';
import HeaderUserBlock from '../../components/header-user-block/header-user-block';
import Logo from '../../components/logo/logo';
import { useAppSelector } from '../../hooks';
import { filmSelector } from '../../store/selectors';


function MyListScreen(): JSX.Element {
  const films = useAppSelector(filmSelector);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <HeaderUserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmCards films={films}/>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;
