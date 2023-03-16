import React from 'react';
import FilmCard from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';
import HeaderUserBlock from '../../components/header-user-block/header-user-block';
import Logo from '../../components/logo/logo';
import { Films } from '../../types/films';

type MyListProps = {
  films: Films;
}

function MyListScreen({films}: MyListProps): JSX.Element {
  const [hoveredFilmId, setHoveredFilmId] = React.useState<number | null>(null);


  const handleMouseOver = (id: number) => {
    setHoveredFilmId(id);
  };

  const handleMouseOut = () => {
    setHoveredFilmId(null);
  };

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
          {
            films.map((film) => <FilmCard key={film.id} film={film} isHovered={hoveredFilmId === film.id} mouseOverHandler={handleMouseOver} mouseOutHandler={handleMouseOut}/>)
          }
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;
