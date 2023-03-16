import { Films } from '../../types/films';
import FilmCard from '../../components/film-card/film-card';
import React from 'react';

type FilmsCatalogScreenProps = {
    films: Films;
}

function FilmsCatalogScreen({films}: FilmsCatalogScreenProps):JSX.Element {
  const [hoveredFilmId, setHoveredFilmId] = React.useState<number | null>(null);


  const handleMouseOver = (id: number) => {
    setHoveredFilmId(id);
  };

  const handleMouseOut = () => {
    setHoveredFilmId(null);
  };

  return(
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">All genres</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Comedies</a>
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
        {
          films.map((film) =>
            <FilmCard key={film.id} film={film} isHovered={hoveredFilmId === film.id} mouseOverHandler={handleMouseOver} mouseOutHandler={handleMouseOut}></FilmCard>
          )
        }
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default FilmsCatalogScreen;
