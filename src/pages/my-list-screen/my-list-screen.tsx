import FilmCards from '../../components/film-cards/film-cards';
import Footer from '../../components/footer/footer';
import HeaderUserBlock from '../../components/header-user-block/header-user-block';
import Logo from '../../components/logo/logo';
import { useAppSelector } from '../../hooks';
import { filmsSelector, isFilmsLoadingSelector } from '../../store/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import { FilmsToRender } from '../../const';
import { useEffect, useState } from 'react';

function MyListScreen(): JSX.Element {
  const filmsArray = useAppSelector(filmsSelector);
  const isFilmsDataLoading = useAppSelector(isFilmsLoadingSelector);

  const getFavorites = () => {
    const favorites = filmsArray.filter((item) => item.isFavorite);
    return favorites;
  };

  const [favoritesCount, setFavoritesCount] = useState(getFavorites().length);

  useEffect(() => {
    setFavoritesCount(getFavorites().length);
  }, [filmsArray]);

  if (isFilmsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoritesCount}</span></h1>
        <HeaderUserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {favoritesCount === 0 && <h2 className="catalog__title">You have not added any films to your list yet</h2>}
          <FilmCards films={getFavorites()} currentFilmsCount={FilmsToRender.MAX_FILMS_COUNT}/>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;
